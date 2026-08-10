import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  phaseAt,
  type Answer,
  type Player,
  type Question,
  type Quiz,
  type Room,
} from "@/lib/quizclash";
import { getSyncedNow, getServerOffset, syncServerTime } from "@/lib/server-time";
import { QUIZ_LIBRARY } from "@/lib/quiz-library";

export type ConnectionStatus = "connecting" | "connected" | "reconnecting" | "offline";

export type GameState = {
  loading: boolean;
  missing: boolean;
  room: Room | null;
  quiz: Quiz | null;
  questions: Question[];
  players: Player[];
  answers: Answer[];
  now: number;
  connectionStatus: ConnectionStatus;
  serverOffsetMs: number;
  refresh: () => Promise<void>;
};

/**
 * Live room state: one realtime channel + synced server clock. Phase is derived, never pushed.
 *
 * Optimizations & Resilience:
 * - Uses getSyncedNow() instead of local Date.now()
 * - Fetches static quiz/questions ONCE and polls only dynamic room/players/answers deltas
 * - Realtime connection status tracking with exponential backoff
 * - Immediately re-syncs server time and re-fetches room state on tab visibility/focus
 */
export function useRoomGame(code: string, playerId?: string | null): GameState {
  const [room, setRoom] = useState<Room | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);
  const [now, setNow] = useState(() => getSyncedNow());
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("connecting");

  const roomIdRef = useRef<string | null>(null);
  const quizRef = useRef<Quiz | null>(null);
  const questionsRef = useRef<Question[]>([]);
  const retryCountRef = useRef<number>(0);
  const reconnectTimerRef = useRef<number | null>(null);

  // Sync server time on initial hook mount
  useEffect(() => {
    void syncServerTime();
  }, []);

  const load = useCallback(
    async (forceFull = false) => {
      const upper = code.toUpperCase();
      const { data: roomRows } = await (supabase as any).rpc("get_room_by_code", {
        p_code: upper,
      });
      const roomRow = Array.isArray(roomRows) ? roomRows[0] : roomRows;

      if (!roomRow) {
        setMissing(true);
        setLoading(false);
        return;
      }
      const typedRoom = roomRow as unknown as Room;
      roomIdRef.current = typedRoom.id;
      setRoom(typedRoom);

      const needsFullLoad = forceFull || !quizRef.current || questionsRef.current.length === 0;

      if (needsFullLoad) {
        const [quizRes, ownerQuestionRes, playerRes, answerRes] = await Promise.all([
          supabase.from("quizzes").select("*").eq("id", typedRoom.quiz_id).maybeSingle(),
          supabase
            .from("questions")
            .select("*")
            .eq("quiz_id", typedRoom.quiz_id)
            .order("order_index"),
          supabase.from("players").select("*").eq("room_id", typedRoom.id).order("joined_at"),
          supabase.from("answers").select("*").eq("room_id", typedRoom.id),
        ]);

        let rows = (ownerQuestionRes.data ?? []) as unknown as Question[];
        const isOwner = rows.length > 0;
        if (!isOwner) {
          const { data: publicRows } = await supabase.rpc("room_questions", {
            p_room_id: typedRoom.id,
          });
          rows = ((publicRows ?? []) as unknown as Question[]).map((q) => ({
            ...q,
            correct_index: -1,
          }));
          const { data: reveals } = await supabase.rpc("room_reveals", { p_room_id: typedRoom.id });
          const map = new Map((reveals ?? []).map((r) => [r.question_id, r.correct_index]));
          rows = rows.map((q) => (map.has(q.id) ? { ...q, correct_index: map.get(q.id)! } : q));
        }

        let playerRows = (playerRes.data ?? []) as unknown as Player[];
        let answerRows = (answerRes.data ?? []) as unknown as Answer[];
        if (!isOwner && playerId) {
          const [p, a] = await Promise.all([
            supabase.rpc("room_players", { p_room_id: typedRoom.id, p_player_id: playerId }),
            supabase.rpc("room_answers", { p_room_id: typedRoom.id, p_player_id: playerId }),
          ]);
          playerRows = (p.data ?? []) as unknown as Player[];
          answerRows = (a.data ?? []) as unknown as Answer[];
        }

        const loadedQuiz = (quizRes.data as unknown as Quiz) ?? null;
        let loadedQuestions = rows.map((q) => ({
          ...q,
          options: q.options as unknown as string[],
        }));

        // Enrich questions with QUIZ_LIBRARY static data if explanation or other fields are missing
        const libMatch = QUIZ_LIBRARY.find(
          (lq) =>
            lq.id === typedRoom.quiz_id || (loadedQuiz?.title && lq.title === loadedQuiz.title),
        );
        if (libMatch && libMatch.questions.length > 0) {
          loadedQuestions = loadedQuestions.map((q, idx) => {
            const libQ =
              libMatch.questions[idx] ||
              libMatch.questions.find((item) => item.question_text === q.question_text);
            return {
              ...q,
              explanation: q.explanation || libQ?.explanation || null,
            };
          });
        }

        quizRef.current = loadedQuiz;
        questionsRef.current = loadedQuestions;

        setQuiz(loadedQuiz);
        setQuestions(loadedQuestions);
        setPlayers(playerRows);
        setAnswers(answerRows);
      } else {
        // Lightweight delta load: fetch only dynamic players and answers
        const isOwner = questionsRef.current.some((q) => q.correct_index !== -1);
        let playerRows: Player[] = [];
        let answerRows: Answer[] = [];

        if (isOwner) {
          const [playerRes, answerRes] = await Promise.all([
            supabase.from("players").select("*").eq("room_id", typedRoom.id).order("joined_at"),
            supabase.from("answers").select("*").eq("room_id", typedRoom.id),
          ]);
          playerRows = (playerRes.data ?? []) as unknown as Player[];
          answerRows = (answerRes.data ?? []) as unknown as Answer[];
        } else if (playerId) {
          const [p, a] = await Promise.all([
            supabase.rpc("room_players", { p_room_id: typedRoom.id, p_player_id: playerId }),
            supabase.rpc("room_answers", { p_room_id: typedRoom.id, p_player_id: playerId }),
          ]);
          playerRows = (p.data ?? []) as unknown as Player[];
          answerRows = (a.data ?? []) as unknown as Answer[];
        }

        setPlayers(playerRows);
        setAnswers(answerRows);
      }

      setMissing(false);
      setLoading(false);
    },
    [code, playerId],
  );

  useEffect(() => {
    void load(true);
  }, [load]);

  // General polling fallback for missed realtime events.
  useEffect(() => {
    const id = window.setInterval(() => void load(false), 2000);
    return () => window.clearInterval(id);
  }, [load]);

  // Anonymous players cannot rely on rooms-table Realtime after the security
  // hardening. While they are in the lobby, poll only the tiny room snapshot
  // frequently, then stop immediately once the host starts the game.
  useEffect(() => {
    if (!playerId || !room || room.status !== "lobby") return;
    let cancelled = false;
    let inFlight = false;

    const refreshLobbyRoom = async () => {
      if (inFlight) return;
      inFlight = true;
      try {
        const { data } = await (supabase as any).rpc("get_room_by_code", {
          p_code: code.toUpperCase(),
        });
        const nextRoom = Array.isArray(data) ? data[0] : data;
        if (!cancelled && nextRoom) setRoom(nextRoom as unknown as Room);
      } finally {
        inFlight = false;
      }
    };

    void refreshLobbyRoom();
    const id = window.setInterval(() => void refreshLobbyRoom(), 500);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [code, playerId, room?.id, room?.status]);

  // Ticker for smooth UI countdown rendering using getSyncedNow()
  useEffect(() => {
    const id = window.setInterval(() => setNow(getSyncedNow()), 100);
    return () => window.clearInterval(id);
  }, []);

  // Handle visibility changes and tab reactivation
  useEffect(() => {
    const handleReactivate = () => {
      if (document.visibilityState === "visible") {
        void syncServerTime();
        void load(false);
        setNow(getSyncedNow());
      }
    };

    document.addEventListener("visibilitychange", handleReactivate);
    window.addEventListener("focus", handleReactivate);
    window.addEventListener("online", handleReactivate);

    return () => {
      document.removeEventListener("visibilitychange", handleReactivate);
      window.removeEventListener("focus", handleReactivate);
      window.removeEventListener("online", handleReactivate);
    };
  }, [load]);

  // Realtime subscription setup with reconnect status and exponential backoff
  useEffect(() => {
    if (!room?.id) return;

    let isSubscribed = true;

    const setupChannel = () => {
      setConnectionStatus("connecting");

      const channel = supabase.channel(`room-${room.id}`);

      // Host monitors player joins and answers in real-time
      if (!playerId) {
        channel
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "players", filter: `room_id=eq.${room.id}` },
            (payload) => {
              setPlayers((prev) => {
                if (payload.eventType === "DELETE") {
                  return prev.filter((p) => p.id !== (payload.old as Player).id);
                }
                const next = payload.new as unknown as Player;
                const rest = prev.filter((p) => p.id !== next.id);
                return [...rest, next].sort((a, b) => a.joined_at.localeCompare(b.joined_at));
              });
            },
          )
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "answers", filter: `room_id=eq.${room.id}` },
            (payload) => {
              if (payload.eventType === "DELETE") return;
              const next = payload.new as unknown as Answer;
              setAnswers((prev) => [...prev.filter((a) => a.id !== next.id), next]);
            },
          );
      }

      channel
        .on(
          "postgres_changes",
          { event: "UPDATE", schema: "public", table: "rooms", filter: `id=eq.${room.id}` },
          (payload) => setRoom(payload.new as unknown as Room),
        )
        .subscribe((status) => {
          if (!isSubscribed) return;

          if (status === "SUBSCRIBED") {
            setConnectionStatus("connected");
            retryCountRef.current = 0;
            // Catch up on missed events and re-sync time upon reconnection
            void syncServerTime();
            void load(false);
          } else if (status === "CLOSED" || status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
            setConnectionStatus("reconnecting");
            retryCountRef.current += 1;

            if (retryCountRef.current > 10) {
              setConnectionStatus("offline");
            } else {
              const backoffMs = Math.min(1000 * Math.pow(1.5, retryCountRef.current), 15000);
              reconnectTimerRef.current = window.setTimeout(() => {
                if (isSubscribed) {
                  void supabase.removeChannel(channel);
                  setupChannel();
                }
              }, backoffMs);
            }
          }
        });

      return channel;
    };

    const currentChannel = setupChannel();

    return () => {
      isSubscribed = false;
      if (reconnectTimerRef.current) {
        window.clearTimeout(reconnectTimerRef.current);
      }
      void supabase.removeChannel(currentChannel);
    };
  }, [room?.id, playerId, load]);

  const refresh = useCallback(() => load(true), [load]);

  return {
    loading,
    missing,
    room,
    quiz,
    questions,
    players,
    answers,
    now,
    connectionStatus,
    serverOffsetMs: getServerOffset(),
    refresh,
  };
}

export function usePhase(state: GameState) {
  return phaseAt(state.room, state.questions, state.now);
}
