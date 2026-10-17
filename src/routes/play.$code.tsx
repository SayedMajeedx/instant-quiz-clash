import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { GameCountdown } from "@/components/quiz/GameCountdown";
import { AnswerShape, AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownBar } from "@/components/quiz/CountdownRing";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
import { Podium } from "@/components/quiz/Podium";
import { QuestionImage } from "@/components/quiz/QuestionImage";
import { usePhase, useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { fastestCorrectAnswer, optionCount, roomTeamColor, roomTeamName, standings, teamStandings } from "@/lib/quizclash";
import { buildCategoryBreakdown } from "@/lib/custom-quiz";

import { Check, Clock, Lightbulb, LogOut, Pause, Target, Volume2, VolumeX, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { sounds } from "@/lib/audio";
import { clearStoredPlayer, storedPlayerSession, type PlayerSession } from "@/lib/session";
import { ReconnectingBanner } from "@/components/quiz/ReconnectingBanner";
import { DebugPanel } from "@/components/quiz/DebugPanel";

import { useWakeLock } from "@/hooks/useWakeLock";

export const Route = createFileRoute("/play/$code")({
  head: () => ({
    meta: [
      { title: "Play — QuizClash" },
      {
        name: "description",
        content: "Your QuizClash controller: tap the shape that matches the right answer, fast.",
      },
      { property: "og:title", content: "Play — QuizClash" },
      {
        property: "og:description",
        content: "Answer fast to score up to 1000 points per question.",
      },
    ],
  }),
  component: Play,
});

function Play() {
  const { code } = Route.useParams();
  const navigate = Route.useNavigate();

  // Keep player phone screen awake during active game session
  useWakeLock(true);
  const [session, setSession] = useState<PlayerSession | null>(() => storedPlayerSession(code));
  const [sessionResolved, setSessionResolved] = useState(() => Boolean(storedPlayerSession(code)));
  const playerId = session?.playerId ?? null;
  const [showLeaveModal, setShowLeaveConfirm] = useState(false);
  const [muted, setMuted] = useState(() => sounds.getMuted());

  function toggleMute() {
    const isNowMuted = sounds.toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      sounds.playTap();
    }
  }
  const state = useRoomGame(code, session);
  const { t } = useI18n();
  const phase = usePhase(state);
  const { room, quiz, questions, players, answers } = state;
  const [sending, setSending] = useState(false);
  const [armedDouble, setArmedDouble] = useState(false);
  const [optimisticChoice, setOptimisticChoice] = useState<number | null>(null);

  async function leaveGame() {
    if (session) {
      void supabase.rpc("leave_room", { p_player_id: session.playerId, p_token: session.token });
    }
    clearStoredPlayer(code);
    void navigate({ to: "/join" });
  }

  useEffect(() => {
    setSession(storedPlayerSession(code));
    setSessionResolved(true);
  }, [code]);

  // The room no longer accepts this session (kicked, or it predates player
  // tokens): forget it so the player can rejoin.
  useEffect(() => {
    if (state.playerRejected) clearStoredPlayer(code);
  }, [state.playerRejected, code]);

  const me = players.find((p) => p.id === playerId) ?? null;
  const phaseKind = phase.kind;
  const phaseIndex =
    phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard"
      ? phase.index
      : -1;
  const rows = useMemo(() => {
    const upTo = phaseIndex >= 0 ? phaseIndex : questions.length - 1;
    return standings(players, answers, questions, upTo);
  }, [players, answers, questions, phaseKind, phaseIndex]);
  const myRow = rows.find((r) => r.player.id === playerId) ?? null;
  const teams = useMemo(() => teamStandings(rows), [rows]);

  const currentQuestion =
    phase.kind === "question" || phase.kind === "reveal" ? phase.question : null;
  const myAnswer = currentQuestion
    ? (answers.find((a) => a.question_id === currentQuestion.id && a.player_id === playerId) ??
      null)
    : null;

  // Clear optimistic choice when moving to next question or when real myAnswer arrives
  useEffect(() => {
    setOptimisticChoice(null);
  }, [currentQuestion?.id, Boolean(myAnswer)]);

  async function submit(choice: number) {
    if (
      phase.kind !== "question" ||
      !room?.started_at ||
      !session ||
      myAnswer ||
      sending ||
      optimisticChoice !== null
    )
      return;

    // 0ms INSTANT OPTIMISTIC FEEDBACK
    setOptimisticChoice(choice);
    setSending(true);

    const question = phase.question;

    try {
      const { error } = await supabase.rpc("submit_answer", {
        p_player_id: session.playerId,
        p_token: session.token,
        p_question_id: question.id,
        p_choice: choice,
        ...(armedDouble ? { p_powerup: "double" } : {}),
      });
      if (!error) {
        setArmedDouble(false);
        void state.refresh();
      } else {
        void state.refresh();
        setOptimisticChoice(null);
      }
    } catch {
      void state.refresh();
      setOptimisticChoice(null);
    } finally {
      setSending(false);
    }
  }

  async function activateFifty() {
    if (phase.kind !== "question" || !session || myAnswer || !me || me.used_fifty) return;
    const { error } = await supabase.rpc("use_fifty_fifty", {
      p_player_id: session.playerId,
      p_token: session.token,
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
      <main className="grid min-h-[100dvh] place-items-center px-5">
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <span className="size-8 animate-spin rounded-full border-4 border-secondary border-t-sun" aria-hidden />
          <p>{t("play.connecting")}</p>
        </div>
      </main>
    );
  }

  if (state.missing || !room) {
    return (
      <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
        <div className="w-full max-w-sm rounded-3xl bg-card p-8">
          <h1 className="font-display text-3xl">{t("play.notFound")}</h1>
          <Link to="/join" className="ledge ledge-yellow mt-6 w-full">
            <span className="ledge-face h-14 font-display text-xl">{t("play.tryAnother")}</span>
          </Link>
        </div>
      </main>
    );
  }

  if (!playerId || !me || state.playerRejected) {
    return (
      <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
        <div className="w-full max-w-sm rounded-3xl bg-card p-8">
          <h1 className="font-display text-3xl">{t("play.notInGame")}</h1>
          <Link to="/join" search={{ code: room.code }} className="ledge ledge-yellow mt-6 w-full">
            <span className="ledge-face h-14 font-display text-xl">
              {t("play.joinRoom", { code: room.code })}
            </span>
          </Link>
        </div>
      </main>
    );
  }

  if (phase.kind === "ended") {
    const categoryBreakdown = buildCategoryBreakdown(questions, answers, playerId);
    return (
      <main className="min-h-[100dvh]">
        <Podium
          rows={rows}
          title={quiz?.title ?? "QuizClash"}
          highlightPlayerId={playerId}
          actions
          categoryBreakdown={categoryBreakdown}
          teamRows={teams}
          teamNames={Array.from({ length: 4 }, (_, i) => roomTeamName(room, i))}
          teamColors={Array.from({ length: 4 }, (_, i) => roomTeamColor(room, i))}
        />
      </main>
    );
  }

  if (phase.kind === "countdown") {
    return <GameCountdown msLeft={phase.msLeft} />;
  }

  const teamChip =
    me.team_index !== null && me.team_index !== undefined ? (
      <span
        className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-semibold"
      >
        <span className="size-2.5 rounded-full" style={{ backgroundColor: roomTeamColor(room, me.team_index) }} />
        {roomTeamName(room, me.team_index)}
      </span>
    ) : null;

  if (phase.kind === "lobby") {
    const startsIn = room.started_at
      ? Math.ceil((new Date(room.started_at).getTime() - state.now) / 1000)
      : null;
    return (
      <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
        <div className="flex w-full max-w-sm animate-pop flex-col items-center">
          <PlayerAvatar player={me} size="xl" />
          <h1 className="mt-6 font-display text-4xl">{t("play.youreIn")}</h1>
          <p className="mt-1 font-display text-2xl text-sun">{me.nickname}</p>
          {teamChip ? <div className="mt-4">{teamChip}</div> : null}
          <div className="mt-8 w-full rounded-2xl bg-card px-5 py-4 text-muted-foreground">
            {startsIn !== null && startsIn > 0
              ? t("play.startingIn", { n: startsIn })
              : t("play.waitingHost")}
          </div>
          <p className="mt-6 text-sm text-muted-foreground" dir="ltr">
            {t("play.room", { code: room.code })}
          </p>
        </div>
      </main>
    );
  }

  if (phase.kind === "leaderboard") {
    const ahead = myRow && myRow.rank > 1 ? rows[myRow.rank - 2] : null;
    return (
      <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
        <div className="w-full max-w-sm animate-pop rounded-3xl bg-card p-8">
          <p className="font-semibold text-muted-foreground">{t("play.yourRank")}</p>
          <p className="mt-1 font-display text-8xl leading-none text-sun tabular-nums">
            {myRow?.rank ?? "-"}
          </p>
          <p className="mt-3 font-display text-3xl tabular-nums">
            {t("play.points", { n: myRow?.total ?? 0 })}
          </p>
          <p className="mt-3 text-muted-foreground">
            {ahead && myRow
              ? t("play.behind", { n: ahead.total - myRow.total, name: ahead.player.nickname })
              : t("play.lead")}
          </p>
          {questions[phase.index]?.explanation ? (
            <div className="mt-6 rounded-2xl bg-secondary p-4 text-start text-sm">
              <p className="flex items-center gap-2 font-semibold text-sun">
                <Lightbulb className="size-4" aria-hidden />
                {t("play.didYouKnow")}
              </p>
              <p className="mt-1.5 leading-relaxed">{questions[phase.index]?.explanation}</p>
            </div>
          ) : null}
          <p className="mt-6 text-sm text-muted-foreground">
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
    const fastest = fastestCorrectAnswer(answers, question.id);
    const isFastest = fastest?.player_id === playerId;
    const verdict = correct ? "correct" : myAnswer ? "wrong" : "slow";
    const VerdictIcon = verdict === "correct" ? Check : verdict === "wrong" ? X : Clock;
    return (
      <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
        <div className="w-full max-w-sm animate-pop">
          <span
            className={cn(
              "mx-auto grid size-24 place-items-center rounded-full text-white",
              verdict === "correct" ? "bg-answer-4" : verdict === "wrong" ? "bg-answer-1" : "bg-secondary",
            )}
          >
            <VerdictIcon className="size-12" strokeWidth={3} aria-hidden />
          </span>
          <h1 className="mt-5 font-display text-4xl">
            {verdict === "correct" ? t("play.correct") : verdict === "wrong" ? t("play.incorrect") : t("play.tooSlow")}
          </h1>
          <p className="mt-2 font-display text-3xl text-sun tabular-nums">
            {t("play.gained", { n: myAnswer?.points_awarded ?? 0 })}
          </p>
          {isFastest ? (
            <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 font-display text-lg text-on-sun">
              <Zap className="size-5" aria-hidden />
              {t("play.fastest")}
            </p>
          ) : null}
          {myRow && myRow.streak > 1 ? (
            <p className="mt-3 font-display text-lg text-lime">{t("play.inARow", { n: myRow.streak })}</p>
          ) : null}
          {question.correct_index >= 0 ? (
            <div className="mt-8 rounded-2xl bg-card p-4 text-start">
              <p className="text-sm text-muted-foreground">{t("play.correctAnswer")}</p>
              <p className="mt-2 flex items-center gap-3 font-display text-xl">
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-lg"
                  style={{ backgroundColor: `var(--answer-${question.correct_index + 1})` }}
                >
                  <AnswerShape index={question.correct_index} className="size-4" />
                </span>
                {question.options[question.correct_index]}
              </p>
              {question.explanation ? (
                <div className="mt-3 border-t border-border pt-3 text-sm leading-relaxed">
                  <span className="font-semibold text-sun">{t("play.explanation")}: </span>
                  {question.explanation}
                </div>
              ) : null}
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
  const lockedChoice = myAnswer?.choice_index ?? optimisticChoice;
  const secondsLeft = Math.max(0, Math.ceil(phase.msLeft / 1000));

  return (
    <main className="flex h-[100dvh] max-h-[100dvh] flex-col gap-3 overflow-hidden px-4 pt-3 pb-4">
      <header className="flex shrink-0 items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 font-semibold">
          <PlayerAvatar player={me} size="sm" />
          <span className="truncate">{me.nickname}</span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          {teamChip}
          <span className="font-display text-xl tabular-nums">{(myRow?.total ?? 0).toLocaleString()}</span>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? t("play.unmute") : t("play.mute")}
            className="press grid size-10 place-items-center rounded-full bg-secondary"
          >
            {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
          </button>
          <button
            type="button"
            onClick={() => setShowLeaveConfirm(true)}
            aria-label={t("play.exitGame")}
            className="press grid size-10 place-items-center rounded-full bg-secondary text-muted-foreground"
          >
            <LogOut className="size-5 rtl:-scale-x-100" />
          </button>
        </span>
      </header>

      <div className="shrink-0">
        <div className="mb-2 flex items-center justify-between text-sm font-semibold text-muted-foreground">
          <span>{t("play.questionOf", { n: phase.index + 1, total: questions.length })}</span>
          <span className={cn("tabular-nums", secondsLeft <= 5 && "text-destructive")}>
            {t("play.secondsLeft", { n: secondsLeft })}
          </span>
        </div>
        <CountdownBar msLeft={phase.msLeft} totalMs={totalMs} withTick />
      </div>

      {lockedChoice !== null && lockedChoice !== undefined ? (
        <div className="flex flex-1 animate-pop flex-col items-center justify-center text-center">
          <span
            className="grid size-28 place-items-center rounded-[28px]"
            style={{ backgroundColor: `var(--answer-${lockedChoice + 1})` }}
          >
            <AnswerShape index={lockedChoice} className="size-14" />
          </span>
          <h1 className="mt-6 font-display text-3xl">{t("play.locked")}</h1>
          <p className="mt-2 text-muted-foreground">{t("play.waitingOthers")}</p>
        </div>
      ) : (
        <>
          {question.image_url ? (
            <QuestionImage
              path={question.image_url}
              className="mx-auto max-h-[16vh] shrink-0 rounded-2xl object-contain"
            />
          ) : null}
          <div
            dir="ltr"
            className={cn("grid min-h-0 flex-1 gap-3", isBoolean ? "grid-cols-1" : "grid-cols-2")}
          >
            {Array.from({ length: choices }, (_, i) => {
              const hidden = fiftyHidden.includes(i);
              return (
                <AnswerTile
                  key={i}
                  index={i}
                  size="player"
                  disabled={sending || hidden || optimisticChoice !== null}
                  state={hidden ? "wrong" : optimisticChoice === i ? "chosen" : "idle"}
                  onClick={() => void submit(i)}
                >
                  {isBoolean ? (i === 0 ? t("play.true") : t("play.false")) : undefined}
                </AnswerTile>
              );
            })}
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-3">
            <button
              type="button"
              disabled={me.used_double}
              onClick={() => setArmedDouble((v) => !v)}
              aria-pressed={armedDouble}
              data-pressed={armedDouble || undefined}
              className={cn("ledge ledge-panel w-full disabled:opacity-40", armedDouble && "ledge-yellow")}
            >
              <span className="ledge-face flex-col gap-0 px-3 py-2.5">
                <span className="flex items-center gap-1.5 font-display text-base">
                  <Zap className="size-4" aria-hidden />
                  {t("play.double")}
                </span>
                <span className="text-xs opacity-80">
                  {me.used_double ? t("play.powerupUsed") : armedDouble ? t("play.doubleArmed") : t("play.doubleHint")}
                </span>
              </span>
            </button>
            <button
              type="button"
              disabled={me.used_fifty || isBoolean}
              onClick={() => void activateFifty()}
              title={isBoolean ? t("play.fiftyUnavailable") : undefined}
              className="ledge ledge-panel w-full disabled:opacity-40"
            >
              <span className="ledge-face flex-col gap-0 px-3 py-2.5">
                <span className="flex items-center gap-1.5 font-display text-base">
                  <Target className="size-4" aria-hidden />
                  {t("play.fifty")}
                </span>
                <span className="text-xs opacity-80">
                  {me.used_fifty ? t("play.powerupUsed") : t("play.fiftyHint")}
                </span>
              </span>
            </button>
          </div>
        </>
      )}

      {showLeaveModal ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5">
          <div role="dialog" aria-modal="true" className="w-full max-w-sm animate-pop rounded-3xl bg-card p-6 text-center">
            <h2 className="font-display text-2xl">{t("play.exitGame")}</h2>
            <p className="mt-2 text-muted-foreground">{t("play.exitConfirm")}</p>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={() => setShowLeaveConfirm(false)} className="ledge ledge-panel flex-1">
                <span className="ledge-face h-12 font-display text-lg">{t("import.cancel")}</span>
              </button>
              <button type="button" onClick={() => void leaveGame()} className="ledge ledge-red flex-1">
                <span className="ledge-face h-12 font-display text-lg">{t("play.exitGame")}</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {room?.is_paused ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 p-6 text-center">
          <span className="grid size-20 place-items-center rounded-full bg-secondary">
            <Pause className="size-9" aria-hidden />
          </span>
          <h2 className="mt-6 font-display text-3xl">{t("play.paused")}</h2>
          <p className="mt-2 max-w-xs text-muted-foreground">{t("play.pausedBody")}</p>
        </div>
      ) : null}

      <ReconnectingBanner status={state.connectionStatus} />
      <DebugPanel state={state} />
    </main>
  );
}
