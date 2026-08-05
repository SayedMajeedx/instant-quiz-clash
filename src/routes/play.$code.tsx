import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownRing } from "@/components/quiz/CountdownRing";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
import { Podium } from "@/components/quiz/Podium";
import { QuestionImage } from "@/components/quiz/QuestionImage";
import { usePhase, useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { optionCount, standings, TEAM_COLORS } from "@/lib/quizclash";

import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { sounds } from "@/lib/audio";
import { clearStoredPlayer, storedPlayerId } from "@/lib/session";
import { ReconnectingBanner } from "@/components/quiz/ReconnectingBanner";
import { DebugPanel } from "@/components/quiz/DebugPanel";

import { useWakeLock } from "@/hooks/useWakeLock";

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
  const navigate = Route.useNavigate();

  // Keep player phone screen awake during active game session
  useWakeLock(true);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [sessionResolved, setSessionResolved] = useState(false);
  const [showLeaveModal, setShowLeaveConfirm] = useState(false);
  const [muted, setMuted] = useState(() => sounds.getMuted());

  function toggleMute() {
    const isNowMuted = sounds.toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      sounds.playTap();
    }
  }
  const state = useRoomGame(code, playerId);
  const { t } = useI18n();
  const phase = usePhase(state);
  const { room, quiz, questions, players, answers } = state;
  const [sending, setSending] = useState(false);
  const [armedDouble, setArmedDouble] = useState(false);
  const [optimisticChoice, setOptimisticChoice] = useState<number | null>(null);

  async function leaveGame() {
    if (playerId) {
      void supabase.from("players").delete().eq("id", playerId);
    }
    clearStoredPlayer(code);
    void navigate({ to: "/join" });
  }

  useEffect(() => {
    setPlayerId(storedPlayerId(code));
    setSessionResolved(true);
  }, [code]);

  const me = players.find((p) => p.id === playerId) ?? null;
  const phaseKind = phase.kind;
  const phaseIndex = phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard" ? phase.index : -1;
  const rows = useMemo(() => {
    const upTo = phaseIndex >= 0 ? phaseIndex : questions.length - 1;
    return standings(players, answers, questions, upTo);
  }, [players, answers, questions, phaseKind, phaseIndex]);
  const myRow = rows.find((r) => r.player.id === playerId) ?? null;

  const currentQuestion = phase.kind === "question" || phase.kind === "reveal" ? phase.question : null;
  const myAnswer = currentQuestion
    ? (answers.find((a) => a.question_id === currentQuestion.id && a.player_id === playerId) ?? null)
    : null;

  // Clear optimistic choice when moving to next question or when real myAnswer arrives
  useEffect(() => {
    setOptimisticChoice(null);
  }, [currentQuestion?.id, Boolean(myAnswer)]);

  // Correct answers are revealed by the server once a question's clock runs out.
  useEffect(() => {
    if (phase.kind === "reveal") void state.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase.kind, phase.kind === "reveal" ? phase.index : -1]);

  async function submit(choice: number) {
    if (phase.kind !== "question" || !room?.started_at || !playerId || myAnswer || sending || optimisticChoice !== null) return;
    
    // 0ms INSTANT OPTIMISTIC FEEDBACK
    setOptimisticChoice(choice);
    sounds.playTap();
    setSending(true);

    const question = phase.question;

    try {
      const { error } = await supabase.rpc("submit_answer", {
        p_player_id: playerId,
        p_question_id: question.id,
        p_choice: choice,
        ...(armedDouble ? { p_powerup: "double" } : {}),
      });
      if (!error) {
        setArmedDouble(false);
        void state.refresh();
      } else {
        setOptimisticChoice(null);
      }
    } catch {
      setOptimisticChoice(null);
    } finally {
      setSending(false);
    }
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
        <div className="animate-pop flex flex-col items-center">
          <PlayerAvatar player={me} size="xl" className="animate-float" />
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
          {questions[phase.index]?.explanation ? (
            <div className="mt-5 rounded-2xl border border-sun/40 bg-sun/10 p-3.5 text-start text-xs sm:text-sm text-sun shadow-sm animate-pop">
              <span className="font-bold">💡 هل تعلم؟ </span>
              {questions[phase.index]?.explanation}
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
            <div className="mt-8 rounded-2xl border border-border bg-surface-gradient p-4 text-start">
              <p className="text-sm text-muted-foreground text-center">{t("play.correctAnswer")}</p>
              <p className="mt-1 font-display text-xl text-center">{question.options[question.correct_index]}</p>
              {question.explanation ? (
                <div className="mt-3 border-t border-border/50 pt-3 text-sm text-sun animate-pop">
                  <span className="font-bold">💡 الشرح: </span>
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


  return (
    <main className="relative flex h-[100dvh] max-h-[100dvh] flex-col justify-between overflow-hidden px-3.5 pt-2.5 pb-12 sm:pb-14">
      <AnimatedBg />
      <header className="flex shrink-0 items-center justify-between">
        <span className="flex items-center gap-2 font-semibold">
          <PlayerAvatar player={me} size="sm" />
          {me.nickname}
        </span>
        <span className="flex items-center gap-3">
          {me.team_index !== null && me.team_index !== undefined ? (
            <span
              className="rounded-full px-3 py-1 text-xs font-bold text-background"
              style={{ backgroundColor: TEAM_COLORS[me.team_index % TEAM_COLORS.length] }}
            >
              {t("play.yourTeam", { n: me.team_index + 1 })}
            </span>
          ) : null}
          <span className="font-display tabular-nums">{t("play.points", { n: myRow?.total ?? 0 })}</span>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute sound" : "Mute sound"}
            title={muted ? "تفعيل الأصوات" : "كتم الأصوات"}
            className="press liquid-glass flex h-8 w-8 items-center justify-center rounded-full text-foreground shadow-md transition-all"
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <button
            type="button"
            onClick={() => setShowLeaveConfirm(true)}
            className="press liquid-glass rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive hover:bg-destructive/20"
          >
            🚪 {t("play.exitGame")}
          </button>
        </span>
      </header>

      {myAnswer || optimisticChoice !== null ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="animate-pop flex flex-col items-center">
            <div className="flex size-20 items-center justify-center rounded-3xl border border-lime/50 bg-lime/10 text-4xl shadow-glow animate-bounce">
              🔒
            </div>
            <h1 className="mt-4 font-display text-3xl text-gradient">{t("play.locked")}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{t("play.waitingOthers")}</p>
          </div>
          <div className="mt-8">
            <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={110} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex shrink-0 items-center justify-center py-1.5">
            <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={76} />
          </div>
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground shrink-0">
            {t("play.questionOf", { n: phase.index + 1, total: questions.length })}
          </p>
          {question.image_url ? (
            <QuestionImage
              path={question.image_url}
              className="mx-auto mt-2 max-h-[16vh] rounded-2xl border border-border object-contain shrink-0"
            />
          ) : null}
          {room.is_paused ? (
            <div className="mx-auto my-1 flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl border border-sun/50 bg-sun/20 px-3 py-1.5 text-xs font-bold text-sun shadow-lg backdrop-blur-md animate-pulse">
              <span>⏸️</span>
              <span>التوقف المؤقت من قِبل المضيف</span>
            </div>
          ) : null}
          <div dir="ltr" className={cn("my-2 grid flex-1 min-h-0 gap-2.5", isBoolean ? "grid-cols-1" : "grid-cols-2")}>
            {Array.from({ length: choices }, (_, i) => {
              const hidden = fiftyHidden.includes(i);
              return (
                <AnswerTile
                  key={i}
                  index={i}
                  size="player"
                  disabled={sending || hidden || optimisticChoice !== null || !!room.is_paused}
                  state={hidden ? "wrong" : optimisticChoice === i ? "chosen" : "idle"}
                  onClick={() => void submit(i)}
                >
                  {isBoolean ? (i === 0 ? t("play.true") : t("play.false")) : undefined}
                </AnswerTile>
              );
            })}
          </div>

          {/* Power-ups Section - High-Visibility Glowing Liquid Glass */}
          <div className="pb-1 pt-1 shrink-0">
            <div className="flex items-center justify-between px-1 mb-1.5">
              <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sun">
                <span className="size-2 rounded-full bg-sun animate-ping" />
                ✨ {t("play.powerups")}
              </span>
              {armedDouble && !me.used_double ? (
                <span className="rounded-full border border-sun bg-sun/20 px-2 py-0.5 text-[10px] font-extrabold text-sun animate-pulse">
                  ⚡ {t("play.doubleArmed")}
                </span>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Double Points Button */}
              <button
                type="button"
                disabled={me.used_double}
                onClick={() => setArmedDouble((v) => !v)}
                className={cn(
                  "press relative flex flex-col items-center justify-center gap-0.5 overflow-hidden rounded-2xl border p-2.5 transition-all shadow-lg",
                  armedDouble
                    ? "border-sun bg-gradient-to-b from-sun/30 via-sun/15 to-background text-sun ring-2 ring-sun/80 shadow-glow animate-pulse-hard"
                    : me.used_double
                    ? "border-border/40 bg-background/20 opacity-40 text-muted-foreground"
                    : "liquid-glass border-sun/60 bg-gradient-to-b from-sun/10 to-background text-foreground hover:border-sun hover:shadow-glow",
                )}
              >
                {/* Glossy Reflection */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="flex items-center gap-1 font-display text-sm font-extrabold sm:text-base">
                  <span className="text-lg">⚡</span>
                  <span>{me.used_double ? "تم الاستخدام" : "دبل نقاط"}</span>
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground">
                  {me.used_double ? "مستعملة" : "مضاعفة نقاط السؤال"}
                </span>
              </button>

              {/* 50:50 Button */}
              <button
                type="button"
                disabled={me.used_fifty || isBoolean}
                onClick={() => void useFifty()}
                title={isBoolean ? t("play.fiftyUnavailable") : undefined}
                className={cn(
                  "press relative flex flex-col items-center justify-center gap-0.5 overflow-hidden rounded-2xl border p-2.5 transition-all shadow-lg",
                  me.used_fifty
                    ? "border-border/40 bg-background/20 opacity-40 text-muted-foreground"
                    : isBoolean
                    ? "border-border/30 bg-background/20 opacity-30 text-muted-foreground"
                    : "liquid-glass border-electric/60 bg-gradient-to-b from-electric/10 to-background text-foreground hover:border-electric hover:shadow-glow",
                )}
              >
                {/* Glossy Reflection */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="flex items-center gap-1 font-display text-sm font-extrabold sm:text-base">
                  <span className="text-lg">🎯</span>
                  <span>{me.used_fifty ? "تم الاستخدام" : "حذف إجابتين"}</span>
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground">
                  {me.used_fifty ? "مستعملة" : "إزالة خيارين خاطئين"}
                </span>
              </button>
            </div>
          </div>
        </>
      )}

      {showLeaveModal ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-border bg-surface-gradient p-6 text-center shadow-xl animate-pop">
            <h2 className="font-display text-2xl">{t("play.exitGame")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("play.exitConfirm")}</p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowLeaveConfirm(false)}
                className="press flex-1 rounded-2xl border border-border bg-background/50 py-3 font-display text-lg"
              >
                {t("import.cancel")}
              </button>
              <button
                type="button"
                onClick={() => void leaveGame()}
                className="press flex-1 rounded-2xl bg-destructive py-3 font-display text-lg text-destructive-foreground shadow-chunky"
              >
                {t("play.exitGame")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {room?.is_paused ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 p-6 backdrop-blur-md animate-fade-in text-center">
          <div className="flex size-24 items-center justify-center rounded-3xl border border-sun/50 bg-sun/10 text-5xl shadow-glow animate-pulse">
            ⏸️
          </div>
          <h2 className="mt-6 font-display text-4xl text-gradient">اللعبة متوقفة مؤقتاً</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-xs">أوقف المضيف اللعبة لبرهة. سنستأنف فوراً بمجرد الضغط على استئناف...</p>
        </div>
      ) : null}

      <ReconnectingBanner status={state.connectionStatus} />
      <DebugPanel state={state} />
    </main>
  );
}
