import { useCallback, useEffect, useRef, useState } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import {
  phaseAt,
  type Answer,
  type Player,
  type Question,
  type Quiz,
  type Room,
} from "@/lib/quizclash";
import type { PlayerSession } from "@/lib/session";
import { getSyncedNow, getServerOffset, syncServerTime } from "@/lib/server-time";

export type ConnectionStatus = "connecting" | "connected" | "reconnecting" | "offline";

export type GameState = {
  loading: boolean;
  missing: boolean;
  /** The stored player session was rejected (e.g. removed from the room). */
  playerRejected: boolean;
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

// Players cannot read the game tables or receive realtime events, so they
// poll the room cursor quickly and the slower-changing lists less often.
const PLAYER_ROOM_POLL_MS = { lobby: 1500, active: 800 } as const;
const PLAYER_LISTS_POLL_MS = 2500;
// Hosts get realtime events; polling is only a safety net.
const HOST_POLL_MS = 3000;
const MAX_RECONNECTS = 10;

async function fetchRoom(code: string): Promise<Room | null> {
  const { data, error } = await supabase.rpc("get_room_by_code", { p_code: code.toUpperCase() });
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  return (row as unknown as Room | undefined) ?? null;
}

function isRejectedPlayerError(error: { message?: string } | null): boolean {
  return Boolean(error?.message?.includes("unknown player") || error?.message?.includes("forbidden"));
}

function withOptions(rows: Question[]): Question[] {
  return rows.map((q) => ({ ...q, options: (Array.isArray(q.options) ? q.options : []) as string[] }));
}

/**
 * Live room state with a synced server clock. Phase is derived, never pushed.
 *
 * Hosts read the room's tables directly (row-level security limits them to
 * their own rooms) and get realtime updates. Players go through RPCs that
 * check their session token, never see correct answers before the reveal,
 * and never see other players' choices.
 */
export function useRoomGame(code: string, player?: PlayerSession | null): GameState {
  const [room, setRoom] = useState<Room | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);
  const [playerRejected, setPlayerRejected] = useState(false);
  const [now, setNow] = useState(() => getSyncedNow());
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("connecting");

  const playerId = player?.playerId ?? null;
  const playerToken = player?.token ?? null;
  const isPlayer = Boolean(playerId && playerToken);

  const applyRoom = useCallback((next: Room) => {
    setRoom((prev) => (prev && JSON.stringify(prev) === JSON.stringify(next) ? prev : next));
  }, []);

  const loadLists = useCallback(
    async (roomId: string) => {
      if (isPlayer) {
        const args = { p_room_id: roomId, p_player_id: playerId!, p_token: playerToken! };
        const [p, a] = await Promise.all([
          supabase.rpc("room_players", args),
          supabase.rpc("room_answers", args),
        ]);
        if (isRejectedPlayerError(p.error) || isRejectedPlayerError(a.error)) {
          setPlayerRejected(true);
          return;
        }
        if (p.error) throw p.error;
        if (a.error) throw a.error;
        setPlayers((p.data ?? []) as unknown as Player[]);
        setAnswers((a.data ?? []) as unknown as Answer[]);
        return;
      }

      const [p, a] = await Promise.all([
        supabase.from("players").select("*").eq("room_id", roomId).order("joined_at"),
        supabase.from("answers").select("*").eq("room_id", roomId),
      ]);
      if (p.error) throw p.error;
      if (a.error) throw a.error;
      setPlayers((p.data ?? []) as unknown as Player[]);
      setAnswers((a.data ?? []) as unknown as Answer[]);
    },
    [isPlayer, playerId, playerToken],
  );

  const loadQuestions = useCallback(
    async (target: Room) => {
      if (!isPlayer) {
        const { data, error } = await supabase
          .from("questions")
          .select("*")
          .eq("quiz_id", target.quiz_id)
          .order("order_index");
        if (error) throw error;
        setQuestions(withOptions((data ?? []) as unknown as Question[]));
        return;
      }

      // Players: question text from room_questions, answers and explanations
      // only for questions the room has already revealed.
      const [q, r] = await Promise.all([
        supabase.rpc("room_questions", { p_room_id: target.id }),
        supabase.rpc("room_reveals", { p_room_id: target.id }),
      ]);
      if (q.error) throw q.error;
      if (r.error) throw r.error;
      const reveals = new Map((r.data ?? []).map((row) => [row.question_id, row]));
      setQuestions(
        withOptions(
          ((q.data ?? []) as unknown as Question[]).map((question) => {
            const reveal = reveals.get(question.id);
            return {
              ...question,
              correct_index: reveal?.correct_index ?? -1,
              explanation: reveal?.explanation ?? null,
            };
          }),
        ),
      );
    },
    [isPlayer],
  );

  const staticLoadedRef = useRef(false);

  /** `full` also reloads the quiz and questions (and with them, reveals). */
  const load = useCallback(async (full = true) => {
    try {
      const next = await fetchRoom(code);
      if (!next) {
        setMissing(true);
        return;
      }
      applyRoom(next);
      if (full || !staticLoadedRef.current) {
        const { data: quizRow } = await supabase
          .from("quizzes")
          .select("*")
          .eq("id", next.quiz_id)
          .maybeSingle();
        setQuiz((quizRow as unknown as Quiz | null) ?? null);
        await Promise.all([loadQuestions(next), loadLists(next.id)]);
        staticLoadedRef.current = true;
      } else {
        await loadLists(next.id);
      }
      setMissing(false);
      if (isPlayer) setConnectionStatus("connected");
    } catch (err) {
      console.error("Failed to load room:", err);
      if (isPlayer) setConnectionStatus("reconnecting");
    } finally {
      setLoading(false);
    }
  }, [code, applyRoom, loadQuestions, loadLists, isPlayer]);

  const loadRef = useRef(load);
  loadRef.current = load;
  const refresh = useCallback(() => load(true), [load]);

  useEffect(() => {
    void syncServerTime();
    void load();
  }, [load]);

  const roomId = room?.id ?? null;
  const roomStatus = room?.status;

  // Players: follow the room cursor.
  useEffect(() => {
    if (!isPlayer || !roomId || roomStatus === "ended") return;
    let inFlight = false;
    const tick = async () => {
      if (inFlight) return;
      inFlight = true;
      try {
        const next = await fetchRoom(code);
        if (next) applyRoom(next);
        setConnectionStatus("connected");
      } catch {
        setConnectionStatus("reconnecting");
      } finally {
        inFlight = false;
      }
    };
    const ms = roomStatus === "active" ? PLAYER_ROOM_POLL_MS.active : PLAYER_ROOM_POLL_MS.lobby;
    const id = window.setInterval(() => void tick(), ms);
    return () => window.clearInterval(id);
  }, [isPlayer, roomId, roomStatus, code, applyRoom]);

  // Players: refresh lists and reveals whenever the room moves on, plus a
  // slow poll for joins and other players' answers.
  const cursorKey = room ? `${room.status}:${room.cursor_index}:${room.cursor_phase}` : null;
  useEffect(() => {
    if (!isPlayer || !room) return;
    void loadLists(room.id).catch(() => setConnectionStatus("reconnecting"));
    if (room.cursor_phase !== "question" || room.status === "ended") {
      void loadQuestions(room).catch(() => setConnectionStatus("reconnecting"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlayer, cursorKey]);

  useEffect(() => {
    if (!isPlayer || !roomId || roomStatus === "ended") return;
    const id = window.setInterval(
      () => void loadLists(roomId).catch(() => setConnectionStatus("reconnecting")),
      PLAYER_LISTS_POLL_MS,
    );
    return () => window.clearInterval(id);
  }, [isPlayer, roomId, roomStatus, loadLists]);

  // Hosts: realtime, with a slow poll as a safety net.
  useEffect(() => {
    if (isPlayer || !roomId) return;
    let disposed = false;
    let channel: RealtimeChannel | null = null;
    let retryTimer: number | null = null;
    let retries = 0;

    const connect = () => {
      const current = supabase
        .channel(`room-${roomId}-${Date.now()}`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "players", filter: `room_id=eq.${roomId}` },
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
          { event: "*", schema: "public", table: "answers", filter: `room_id=eq.${roomId}` },
          (payload) => {
            if (payload.eventType === "DELETE") return;
            const next = payload.new as unknown as Answer;
            setAnswers((prev) => [...prev.filter((a) => a.id !== next.id), next]);
          },
        )
        .on(
          "postgres_changes",
          { event: "UPDATE", schema: "public", table: "rooms", filter: `id=eq.${roomId}` },
          (payload) => applyRoom(payload.new as unknown as Room),
        )
        .subscribe((status) => {
          // Ignore callbacks from channels we have already replaced.
          if (disposed || current !== channel) return;
          if (status === "SUBSCRIBED") {
            retries = 0;
            setConnectionStatus("connected");
            void syncServerTime();
            void loadRef.current(false);
            return;
          }
          if (status !== "CLOSED" && status !== "CHANNEL_ERROR" && status !== "TIMED_OUT") return;

          retries += 1;
          if (retries > MAX_RECONNECTS) {
            setConnectionStatus("offline");
            return;
          }
          setConnectionStatus("reconnecting");
          if (retryTimer !== null) return;
          retryTimer = window.setTimeout(
            () => {
              retryTimer = null;
              if (disposed) return;
              const stale = channel;
              channel = null;
              if (stale) void supabase.removeChannel(stale);
              connect();
            },
            Math.min(1000 * Math.pow(1.5, retries), 15000),
          );
        });
      channel = current;
    };

    setConnectionStatus("connecting");
    connect();
    const pollId = window.setInterval(() => void loadRef.current(false), HOST_POLL_MS);

    return () => {
      disposed = true;
      window.clearInterval(pollId);
      if (retryTimer !== null) window.clearTimeout(retryTimer);
      const stale = channel;
      channel = null;
      if (stale) void supabase.removeChannel(stale);
    };
  }, [isPlayer, roomId, applyRoom]);

  // Five updates per second keeps countdowns smooth without re-rendering the
  // whole screen every 100ms on low-powered phones.
  useEffect(() => {
    const id = window.setInterval(() => setNow(getSyncedNow()), 200);
    return () => window.clearInterval(id);
  }, []);

  // Catch up after the tab was hidden, the window refocused or the network
  // came back.
  useEffect(() => {
    const handleReactivate = () => {
      if (document.visibilityState !== "visible") return;
      void syncServerTime();
      void loadRef.current(false);
      setNow(getSyncedNow());
    };
    document.addEventListener("visibilitychange", handleReactivate);
    window.addEventListener("focus", handleReactivate);
    window.addEventListener("online", handleReactivate);
    return () => {
      document.removeEventListener("visibilitychange", handleReactivate);
      window.removeEventListener("focus", handleReactivate);
      window.removeEventListener("online", handleReactivate);
    };
  }, []);

  return {
    loading,
    missing,
    playerRejected,
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
