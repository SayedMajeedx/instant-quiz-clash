import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownRing } from "@/components/quiz/CountdownRing";
import { Podium } from "@/components/quiz/Podium";
import { usePhase, useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { standings, TEAM_COLORS } from "@/lib/quizclash";
import { cn } from "@/lib/utils";
import { storedPlayerId } from "@/lib/session";

export const Route = createFileRoute("/play/$code")({
  head: () => ({
    meta: [
      { title: "Play — QuizClash" },
      { name: "description", content: "Your QuizClash controller: tap the shape that matches the right answer, fast." },
      { property: "og:title", content: "Play — QuizClash" },
      { property: "og:description", content: "Answer fast to score up to 1000 points per question." },
    ],
  }),
  component: Play,
});

function Play() {
  const { code } = Route.useParams();
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [sessionResolved, setSessionResolved] = useState(false);
  const state = useRoomGame(code, playerId);
  const { t } = useI18n();
  const phase = usePhase(state);
  const { room, quiz, questions, players, answers } = state;
  const [sending, setSending] = useState(false);
  const [armedDouble, setArmedDouble] = useState(false);

  useEffect(() => {
    setPlayerId(storedPlayerId(code));
    setSessionResolved(true);
  }, [code]);

  const me = players.find((p) => p.id === playerId) ?? null;
  const rows = useMemo(() => {
    const upTo =
      phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard"
        ? phase.index
        : questions.length - 1;
    return standings(players, answers, questions, upTo);
  }, [players, answers, questions, phase]);
  const myRow = rows.find((r) => r.player.id === playerId) ?? null;

  const currentQuestion = phase.kind === "question" || phase.kind === "reveal" ? phase.question : null;
  const myAnswer = currentQuestion
    ? (answers.find((a) => a.question_id === currentQuestion.id && a.player_id === playerId) ?? null)
    : null;

  // Correct answers are revealed by the server once a question's clock runs out.
  useEffect(() => {
    if (phase.kind === "reveal") void state.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase.kind, phase.kind === "reveal" ? phase.index : -1]);

  async function submit(choice: number) {
    if (phase.kind !== "question" || !room?.started_at || !playerId || myAnswer || sending) return;
    setSending(true);
    const question = phase.question;

    // Grading happens server-side so scores can't be forged from the client.
    const { error } = await supabase.rpc("submit_answer", {
      p_player_id: playerId,
      p_question_id: question.id,
      p_choice: choice,
      ...(armedDouble ? { p_powerup: "double" } : {}),
    });
    if (!error) {
      setArmedDouble(false);
      await state.refresh();
    }
    setSending(false);
  }

  async function useFifty() {
    if (phase.kind !== "question" || !playerId || myAnswer || !me || me.used_fifty) return;
    const { error } = await supabase.rpc("use_fifty_fifty", {
      p_player_id: playerId,
      p_question_id: phase.question.id,
    });
    if (error) {
      toast.error(t("play.powerupFailed"));
      return;
    }
    await state.refresh();
  }


  if (!sessionResolved || state.loading) {
    return (
      <main className="grid min-h-screen place-items-center">
        <AnimatedBg />
        <p className="text-muted-foreground">{t("play.connecting")}</p>
      </main>
    );
  }

  if (state.missing || !room) {
    return (
      <main className="grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg />
        <div>
          <h1 className="font-display text-3xl">{t("play.notFound")}</h1>
          <Link to="/join" className="press mt-6 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky">
            {t("play.tryAnother")}
          </Link>
        </div>
      </main>
    );
  }

  if (!playerId || !me) {
    return (
      <main className="grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg />
        <div>
          <h1 className="font-display text-3xl">{t("play.notInGame")}</h1>
          <Link
            to="/join"
            search={{ code: room.code }}
            className="press mt-6 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky"
          >
            {t("play.joinRoom", { code: room.code })}
          </Link>
        </div>
      </main>
    );
  }

  if (phase.kind === "ended") {
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <Podium rows={rows} title={quiz?.title ?? "QuizClash"} highlightPlayerId={playerId} actions />
      </main>
    );
  }

  if (phase.kind === "lobby") {
    const startsIn = room.started_at ? Math.ceil((new Date(room.started_at).getTime() - state.now) / 1000) : null;
    return (
      <main className="relative grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg dense />
        <div className="animate-pop">
          <span
            className="mx-auto block size-24 animate-float rounded-full border-4 border-background shadow-glow"
            style={{ backgroundColor: me.avatar_color }}
          />
          <h1 className="mt-6 font-display text-4xl text-gradient">{t("play.youreIn")}</h1>
          <p className="mt-2 font-display text-2xl">{me.nickname}</p>
          <p className="mt-6 text-muted-foreground">
            {startsIn !== null && startsIn > 0 ? t("play.startingIn", { n: startsIn }) : t("play.waitingHost")}
          </p>
          <p className="mt-10 text-sm text-muted-foreground">{t("play.room", { code: room.code })}</p>
        </div>
      </main>
    );
  }

  if (phase.kind === "leaderboard") {
    return (
      <main className="relative grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg dense />
        <div className="w-full max-w-sm animate-pop rounded-3xl border border-border bg-surface-gradient p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">{t("play.yourRank")}</p>
          <p className="mt-2 font-display text-7xl text-gradient tabular-nums">#{myRow?.rank ?? "-"}</p>
          <p className="mt-2 font-display text-3xl tabular-nums">{t("play.points", { n: myRow?.total ?? 0 })}</p>
          {myRow && myRow.rank > 1 ? (
            <p className="mt-4 text-muted-foreground">
              {t("play.behind", {
                n: (rows[myRow.rank - 2]?.total ?? 0) - myRow.total,
                name: rows[myRow.rank - 2]?.player.nickname ?? "",
              })}
            </p>
          ) : (
            <p className="mt-4 text-sun">{t("play.lead")}</p>
          )}
          <p className="mt-8 text-sm text-muted-foreground">
            {room.advance_mode === "manual"
              ? t("play.waitingNext")
              : t("play.nextIn", { n: Math.ceil(phase.msLeft / 1000) })}
          </p>

        </div>
      </main>
    );
  }

  const question = phase.question;

  if (phase.kind === "reveal") {
    const correct = myAnswer?.is_correct;
    return (
      <main className="relative grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg dense />
        <div className="w-full max-w-sm animate-pop">
          <p className="font-display text-7xl">{correct ? "✅" : myAnswer ? "❌" : "⏰"}</p>
          <h1 className="mt-4 font-display text-4xl">
            {correct ? t("play.correct") : myAnswer ? t("play.incorrect") : t("play.tooSlow")}
          </h1>
          <p className="mt-3 font-display text-3xl text-sun tabular-nums">
            {t("play.gained", { n: myAnswer?.points_awarded ?? 0 })}
          </p>
          {myRow && myRow.streak > 1 ? (
            <p className="mt-2 font-display text-lg text-lime">{t("play.inARow", { n: myRow.streak })}</p>
          ) : null}
          {question.correct_index >= 0 ? (
            <div className="mt-8 rounded-2xl border border-border bg-surface-gradient p-4">
              <p className="text-sm text-muted-foreground">{t("play.correctAnswer")}</p>
              <p className="mt-1 font-display text-xl">{question.options[question.correct_index]}</p>
            </div>
          ) : null}

          <p className="mt-6 text-sm text-muted-foreground">{t("play.total", { n: myRow?.total ?? 0 })}</p>
        </div>
      </main>
    );
  }

  const totalMs = Math.max(1, question.time_limit_seconds) * 1000;
  const choices = optionCount(question);
  const isBoolean = question.question_type === "boolean";
  const fiftyHidden = me.fifty_question_id === question.id ? (me.fifty_hidden ?? []) : [];


  return (
    <main className="relative flex min-h-screen flex-col px-4 py-4">
      <AnimatedBg />
      <header className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-semibold">
          <span className="size-5 rounded-full" style={{ backgroundColor: me.avatar_color }} />
          {me.nickname}
        </span>
        <span className="flex items-center gap-2">
          {me.team_index !== null ? (
            <span
              className="rounded-full px-3 py-1 text-xs font-bold text-background"
              style={{ backgroundColor: TEAM_COLORS[me.team_index % TEAM_COLORS.length] }}
            >
              {t("play.yourTeam", { n: me.team_index + 1 })}
            </span>
          ) : null}
          <span className="font-display tabular-nums">{t("play.points", { n: myRow?.total ?? 0 })}</span>
        </span>
      </header>

      {myAnswer ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="animate-pop">
            <p className="font-display text-6xl">🔒</p>
            <h1 className="mt-4 font-display text-3xl text-gradient">{t("play.locked")}</h1>
            <p className="mt-2 text-muted-foreground">{t("play.waitingOthers")}</p>
          </div>
          <div className="mt-10">
            <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={110} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center py-3">
            <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={96} />
          </div>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {t("play.questionOf", { n: phase.index + 1, total: questions.length })}
          </p>
          {question.image_url ? (
            <QuestionImage
              path={question.image_url}
              className="mx-auto mt-3 max-h-[18vh] rounded-2xl border border-border object-contain"
            />
          ) : null}
          <div className={cn("mt-3 grid flex-1 gap-3 pb-2", isBoolean ? "grid-cols-1" : "grid-cols-2")}>
            {Array.from({ length: choices }, (_, i) => {
              const hidden = fiftyHidden.includes(i);
              return (
                <AnswerTile
                  key={i}
                  index={i}
                  size="player"
                  disabled={sending || hidden}
                  state={hidden ? "wrong" : "idle"}
                  onClick={() => void submit(i)}
                >
                  {isBoolean ? (i === 0 ? t("play.true") : t("play.false")) : undefined}
                </AnswerTile>
              );
            })}
          </div>


          <div className="pb-2">
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
              {t("play.powerups")}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                disabled={me.used_double}
                onClick={() => setArmedDouble((v) => !v)}
                className={cn(
                  "press flex-1 rounded-2xl border px-4 py-3 font-display text-lg disabled:opacity-40",
                  armedDouble ? "border-sun bg-sun/20 text-sun" : "border-border bg-surface-gradient",
                )}
              >
                {me.used_double ? t("play.doubleUsed") : `2× ${t("play.double")}`}
              </button>
              <button
                type="button"
                disabled={me.used_fifty}
                onClick={() => void useFifty()}
                className="press flex-1 rounded-2xl border border-border bg-surface-gradient px-4 py-3 font-display text-lg disabled:opacity-40"
              >
                {me.used_fifty ? t("play.fiftyUsed") : t("play.fifty")}
              </button>
            </div>
            {armedDouble && !me.used_double ? (
              <p className="mt-2 text-center text-sm font-semibold text-sun">{t("play.doubleArmed")}</p>
            ) : null}
          </div>
        </>
      )}
    </main>
  );
}
