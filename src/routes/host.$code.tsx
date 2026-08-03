import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownBar, CountdownRing } from "@/components/quiz/CountdownRing";
import { Leaderboard } from "@/components/quiz/Leaderboard";
import { Podium } from "@/components/quiz/Podium";
import { usePhase, useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { standings } from "@/lib/quizclash";

export const Route = createFileRoute("/host/$code")({
  head: () => ({
    meta: [
      { title: "Host Display — QuizClash" },
      { name: "description", content: "The shared QuizClash game screen: live question, countdown and leaderboard." },
      { property: "og:title", content: "Host Display — QuizClash" },
      { property: "og:description", content: "Project this screen and let everyone play along from their phones." },
    ],
  }),
  component: HostRoom,
});

function HostRoom() {
  const { code } = Route.useParams();
  const state = useRoomGame(code);
  const phase = usePhase(state);
  const { room, quiz, questions, players, answers } = state;

  const joinUrl = typeof window !== "undefined" ? `${window.location.origin}/join?code=${code.toUpperCase()}` : "";

  // The host screen is the one that flips the room to "ended" so late refreshes
  // land on the podium. Gameplay itself never depends on this device.
  useEffect(() => {
    if (room && room.status === "active" && phase.kind === "ended") {
      void supabase.from("rooms").update({ status: "ended" }).eq("id", room.id);
    }
  }, [phase.kind, room]);

  const rows = useMemo(() => {
    const upTo = phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard" ? phase.index : questions.length - 1;
    return standings(players, answers, questions, upTo);
  }, [players, answers, questions, phase]);

  async function start() {
    if (!room) return;
    await supabase
      .from("rooms")
      .update({ status: "active", started_at: new Date(Date.now() + 3000).toISOString() })
      .eq("id", room.id);
    await state.refresh();
  }

  if (state.loading) {
    return (
      <main className="grid min-h-screen place-items-center">
        <AnimatedBg />
        <p className="text-muted-foreground">Loading room…</p>
      </main>
    );
  }

  if (state.missing || !room) {
    return (
      <main className="grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg />
        <div>
          <h1 className="font-display text-4xl">Room not found</h1>
          <Link to="/host" className="press mt-6 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky">
            Create a new room
          </Link>
        </div>
      </main>
    );
  }

  if (phase.kind === "ended") {
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <Podium rows={rows} title={quiz?.title ?? "QuizClash"} actions />
      </main>
    );
  }

  if (phase.kind === "lobby") {
    const startsIn = room.started_at ? Math.ceil((new Date(room.started_at).getTime() - state.now) / 1000) : null;
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1.1fr_1fr]">
          <section>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sun">{quiz?.title}</p>
            <h1 className="mt-3 font-display text-3xl md:text-4xl">Join at</h1>
            <p className="mt-1 break-all font-display text-xl text-muted-foreground">
              {joinUrl.replace(/^https?:\/\//, "")}
            </p>
            <div className="mt-6 rounded-3xl border border-border bg-surface-gradient p-6 text-center shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Game code</p>
              <p className="mt-2 font-display text-6xl tracking-[0.15em] md:text-8xl text-gradient">{room.code}</p>
            </div>
            {joinUrl ? (
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(joinUrl)}`}
                alt={`QR code to join QuizClash room ${room.code}`}
                width={240}
                height={240}
                className="mt-6 rounded-3xl border border-border bg-background p-2"
              />
            ) : null}
          </section>

          <section className="rounded-3xl border border-border bg-surface-gradient p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">Players</h2>
              <span className="rounded-full bg-primary px-4 py-1 font-display text-lg text-primary-foreground tabular-nums">
                {players.length}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {players.length === 0 ? (
                <p className="text-muted-foreground">Waiting for players to join…</p>
              ) : null}
              {players.map((p) => (
                <span
                  key={p.id}
                  className="flex animate-pop items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-2 font-semibold"
                >
                  <span className="size-4 rounded-full" style={{ backgroundColor: p.avatar_color }} />
                  {p.nickname}
                </span>
              ))}
            </div>
            {startsIn !== null && startsIn > 0 ? (
              <p className="mt-8 text-center font-display text-4xl text-sun">Starting in {startsIn}…</p>
            ) : (
              <button
                type="button"
                disabled={players.length === 0 || questions.length === 0}
                onClick={() => void start()}
                className="press mt-8 w-full rounded-3xl bg-gradient-hero px-6 py-5 font-display text-2xl text-primary-foreground shadow-chunky disabled:opacity-40"
              >
                Start game
              </button>
            )}
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Questions advance automatically — you can close this tab and the game keeps going.
            </p>
          </section>
        </div>
      </main>
    );
  }

  const question = phase.question;
  const totalMs = Math.max(1, question.time_limit_seconds) * 1000;
  const questionAnswers = answers.filter((a) => a.question_id === question.id);
  const counts = [0, 1, 2, 3].map((i) => questionAnswers.filter((a) => a.choice_index === i).length);

  if (phase.kind === "leaderboard") {
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-sun">Scoreboard</p>
          <h1 className="mt-2 text-center font-display text-4xl md:text-6xl">
            After question {phase.index + 1}
          </h1>
          <div className="mt-10">
            <Leaderboard rows={rows} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Next question in {Math.ceil(phase.msLeft / 1000)}s
          </p>
        </div>
      </main>
    );
  }

  const revealing = phase.kind === "reveal";

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-6">
        <header className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-border bg-surface-gradient px-4 py-2 font-display">
            Q{phase.index + 1} / {questions.length}
          </span>
          <span className="font-display text-lg text-muted-foreground">Code {room.code}</span>
        </header>

        <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="max-w-4xl font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
            {question.question_text || "…"}
          </h1>

          <div className="mt-8 flex w-full max-w-3xl items-center justify-between gap-6">
            {revealing ? (
              <p className="flex-1 font-display text-3xl text-lime">Correct answer!</p>
            ) : (
              <>
                <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={132} />
                <div className="flex-1">
                  <p className="font-display text-2xl tabular-nums">
                    {questionAnswers.length} of {players.length} answered
                  </p>
                  <div className="mt-3">
                    <CountdownBar msLeft={phase.msLeft} totalMs={totalMs} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-3 pb-6 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <AnswerTile
              key={i}
              index={i}
              disabled
              count={revealing ? counts[i] : undefined}
              state={revealing ? (i === question.correct_index ? "correct" : "wrong") : "idle"}
            >
              {question.options[i] ?? ""}
            </AnswerTile>
          ))}
        </div>
      </div>
    </main>
  );
}
