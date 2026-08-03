import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  phaseAt,
  type Answer,
  type Player,
  type Question,
  type Quiz,
  type Room,
} from "@/lib/quizclash";

export type GameState = {
  loading: boolean;
  missing: boolean;
  room: Room | null;
  quiz: Quiz | null;
  questions: Question[];
  players: Player[];
  answers: Answer[];
  now: number;
  refresh: () => Promise<void>;
};

/** Live room state: one realtime channel + a local clock. Phase is derived, never pushed. */
export function useRoomGame(code: string): GameState {
  const [room, setRoom] = useState<Room | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const roomIdRef = useRef<string | null>(null);

  const load = useCallback(async () => {
    const upper = code.toUpperCase();
    const { data: roomRow } = await supabase
      .from("rooms")
      .select("*")
      .eq("code", upper)
      .maybeSingle();

    if (!roomRow) {
      setMissing(true);
      setLoading(false);
      return;
    }
    const typedRoom = roomRow as unknown as Room;
    roomIdRef.current = typedRoom.id;
    setRoom(typedRoom);

    const [quizRes, questionRes, playerRes, answerRes] = await Promise.all([
      supabase.from("quizzes").select("*").eq("id", typedRoom.quiz_id).maybeSingle(),
      supabase.from("questions").select("*").eq("quiz_id", typedRoom.quiz_id).order("order_index"),
      supabase.from("players").select("*").eq("room_id", typedRoom.id).order("joined_at"),
      supabase.from("answers").select("*").eq("room_id", typedRoom.id),
    ]);

    setQuiz((quizRes.data as unknown as Quiz) ?? null);
    setQuestions(((questionRes.data ?? []) as unknown as Question[]).map((q) => ({ ...q, options: q.options as string[] })));
    setPlayers((playerRes.data ?? []) as unknown as Player[]);
    setAnswers((answerRes.data ?? []) as unknown as Answer[]);
    setMissing(false);
    setLoading(false);
  }, [code]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 100);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!room?.id) return;
    const channel = supabase
      .channel(`room-${room.id}`)
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
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "rooms", filter: `id=eq.${room.id}` },
        (payload) => setRoom(payload.new as unknown as Room),
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [room?.id]);

  return { loading, missing, room, quiz, questions, players, answers, now, refresh: load };
}

export function usePhase(state: GameState) {
  return useMemo(
    () => phaseAt(state.room?.started_at ?? null, state.questions, state.now, state.room?.status ?? "lobby"),
    [state.room?.started_at, state.room?.status, state.questions, state.now],
  );
}
