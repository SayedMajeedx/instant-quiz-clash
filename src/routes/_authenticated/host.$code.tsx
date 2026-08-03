import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownBar, CountdownRing } from "@/components/quiz/CountdownRing";
import { Leaderboard } from "@/components/quiz/Leaderboard";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
import { Podium } from "@/components/quiz/Podium";
import { QuestionImage } from "@/components/quiz/QuestionImage";
import { usePhase, useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { optionCount, standings, teamStandings, TEAM_COLORS, type CursorPhase } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/host/$code")({
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
  const { t } = useI18n();
  const phase = usePhase(state);
  const { room, quiz, questions, players, answers } = state;
  const archivedRef = useRef(false);
  const [showExitModal, setShowExitConfirm] = useState(false);
  const navigate = Route.useNavigate();

  const joinUrl = typeof window !== "undefined" ? `${window.location.origin}/join?code=${code.toUpperCase()}` : "";

  const roomId = room?.id ?? null;
  const cursorIndex = room?.cursor_index ?? 0;
  const cursorPhase = room?.cursor_phase ?? "question";

  async function exitGame() {
    if (!room) return;
    await supabase.from("rooms").update({ status: "ended" } as never).eq("id", room.id);
    void navigate({ to: "/quizzes" });
  }

  // Every stage transition is written by this screen. `advance_room` is guarded
  // on the stage it is leaving, so a second host tab can never double-advance.
  const refresh = state.refresh;
  const isAdvancingRef = useRef(false);
  const advance = useCallback(
    async (fromIndex: number, fromPhase: CursorPhase) => {
      if (!roomId || isAdvancingRef.current) return;
      isAdvancingRef.current = true;
      try {
        await supabase.rpc("advance_room", {
          p_room_id: roomId,
          p_expect_index: fromIndex,
          p_expect_phase: fromPhase,
        });
        await refresh();
      } catch (e) {
        console.error("Failed to advance room:", e);
      } finally {
        isAdvancingRef.current = false;
      }
    },
    [roomId, refresh],
  );

  // Snapshot final standings once the room is over so they survive cleanup.
  useEffect(() => {
    if (!room || room.status !== "ended" || archivedRef.current) return;
    archivedRef.current = true;
    void supabase.rpc("archive_room", { p_room_id: room.id });
  }, [room]);

  const questionAnswerCount =
    phase.kind === "question" ? answers.filter((a) => a.question_id === phase.question.id).length : 0;
  const everyoneAnswered =
    phase.kind === "question" && players.length > 0 && questionAnswerCount >= players.length;

  const timeUp =
    phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard"
      ? phase.msLeft <= 0
      : false;

  const phaseKind = phase.kind;
  const phaseIndex =
    phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard" ? phase.index : -1;
  const advanceMode = room?.advance_mode;
  const roomStatus = room?.status;

  // Auto pacing: the question clock always ends the question (early when everyone
  // has answered); reveal and scoreboard only roll on when the host chose "auto".
  useEffect(() => {
    if (!roomStatus || roomStatus !== "active") return;
    if (phaseKind !== "question" && phaseKind !== "reveal" && phaseKind !== "leaderboard") return;
    const auto = advanceMode !== "manual";
    const shouldAdvance = phaseKind === "question" ? everyoneAnswered || timeUp : auto && timeUp;
    if (!shouldAdvance) return;
    const from: CursorPhase = phaseKind === "question" ? "question" : phaseKind === "reveal" ? "reveal" : "board";
    const delay = phaseKind === "question" && everyoneAnswered && !timeUp ? 700 : 0;
    const timer = window.setTimeout(() => void advance(phaseIndex, from), delay);
    return () => window.clearTimeout(timer);
  }, [roomStatus, advanceMode, phaseKind, phaseIndex, timeUp, everyoneAnswered, advance]);

  const rows = useMemo(() => {
    const upTo =
      phaseKind === "question" || phaseKind === "reveal" || phaseKind === "leaderboard"
        ? phaseIndex
        : questions.length - 1;
    return standings(players, answers, questions, upTo);
  }, [players, answers, questions, phaseKind, phaseIndex]);

  const teams = useMemo(() => teamStandings(rows), [rows]);

  async function patchRoom(patch: Record<string, unknown>) {
    if (!room) return;
    await supabase.from("rooms").update(patch as never).eq("id", room.id);
    await state.refresh();
  }

  async function cycleTeam(playerId: string, current: number | null) {
    if (!room || room.team_count < 2) return;
    const next = current === null ? 0 : current + 1 >= room.team_count ? null : current + 1;
    setAssigning(playerId);
    await supabase.rpc("set_player_team", { p_player_id: playerId, p_team_index: next as unknown as number });
    await state.refresh();
    setAssigning(null);
  }

  async function shuffleTeams() {
    if (!room || room.team_count < 2) return;
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    await Promise.all(
      shuffled.map((p, i) =>
        supabase.rpc("set_player_team", { p_player_id: p.id, p_team_index: i % room.team_count }),
      ),
    );
    await state.refresh();
  }

  async function start() {
    if (!room) return;
    const startsAt = new Date(Date.now() + 3000).toISOString();
    await supabase
      .from("rooms")
      .update({
        status: "active",
        started_at: startsAt,
        cursor_index: 0,
        cursor_phase: "question",
        phase_started_at: startsAt,
      } as never)
      .eq("id", room.id);
    await state.refresh();
  }

  if (state.loading) {
    return (
      <main className="grid min-h-screen place-items-center">
        <AnimatedBg />
        <p className="text-muted-foreground">{t("host.loading")}</p>
      </main>
    );
  }

  if (state.missing || !room) {
    return (
      <main className="grid min-h-screen place-items-center px-5 text-center">
        <AnimatedBg />
        <div>
          <h1 className="font-display text-4xl">{t("host.notFound")}</h1>
          <Link to="/host" className="press mt-6 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky">
            {t("host.createNew")}
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
    const manualTeams = room.team_count > 1 && room.team_mode === "manual";
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1.1fr_1fr]">
          <section>
            <div className="mb-4 flex justify-end">
              <LanguageToggle />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sun">{quiz?.title}</p>
            <h1 className="mt-3 font-display text-3xl md:text-4xl">{t("host.joinAt")}</h1>
            <p className="mt-1 break-all font-display text-xl text-muted-foreground">
              {joinUrl.replace(/^https?:\/\//, "")}
            </p>
            <div className="mt-6 rounded-3xl border border-border bg-surface-gradient p-6 text-center shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">{t("host.gameCode")}</p>
              <p className="mt-2 font-display text-6xl tracking-[0.15em] md:text-8xl text-gradient">{room.code}</p>
            </div>
            {joinUrl ? (
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(joinUrl)}`}
                alt={t("host.qrAlt", { code: room.code })}
                width={240}
                height={240}
                className="mt-6 rounded-3xl border border-border bg-background p-2"
              />
            ) : null}
          </section>

          <section className="rounded-3xl border border-border bg-surface-gradient p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">{t("host.players")}</h2>
              <span className="rounded-full bg-primary px-4 py-1 font-display text-lg text-primary-foreground tabular-nums">
                {players.length}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground">{t("host.pacing")}</span>
              {(["auto", "manual"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => void patchRoom({ advance_mode: mode })}
                  className={cn(
                    "press rounded-full border px-4 py-1.5 text-sm font-semibold",
                    room.advance_mode === mode ? "border-primary text-foreground ring-2 ring-primary" : "border-border",
                  )}
                >
                  {mode === "auto" ? t("host.pacingAuto") : t("host.pacingManual")}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {room.advance_mode === "manual" ? t("host.pacingManualNote") : t("host.pacingAutoNote")} {t("host.skipNote")}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground">{t("host.teamMode")}</span>
              {[0, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => void patchRoom({ team_count: n })}
                  className={cn(
                    "press rounded-full border px-4 py-1.5 text-sm font-semibold",
                    (room.team_count ?? 0) === n ? "border-primary text-foreground ring-2 ring-primary" : "border-border",
                  )}
                >
                  {n === 0 ? t("host.solo") : t("host.teamsN", { n })}
                </button>
              ))}
            </div>

            {room.team_count > 1 ? (
              <>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {(["auto", "manual"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => void patchRoom({ team_mode: mode })}
                      className={cn(
                        "press rounded-full border px-4 py-1.5 text-sm font-semibold",
                        room.team_mode === mode ? "border-primary text-foreground ring-2 ring-primary" : "border-border",
                      )}
                    >
                      {mode === "auto" ? t("host.teamAuto") : t("host.teamManual")}
                    </button>
                  ))}
                  {manualTeams && players.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => void shuffleTeams()}
                      className="press rounded-full border border-border px-4 py-1.5 text-sm font-semibold"
                    >
                      🎲 {t("host.shuffleTeams")}
                    </button>
                  ) : null}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {manualTeams ? t("host.teamManualNote") : t("host.teamAutoNote")}
                </p>
              </>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {players.length === 0 ? <p className="text-muted-foreground">{t("host.waiting")}</p> : null}
              {players.map((p) => {
                const badge =
                  p.team_index !== null ? (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-background"
                      style={{ backgroundColor: TEAM_COLORS[p.team_index % TEAM_COLORS.length] }}
                    >
                      {p.team_index + 1}
                    </span>
                  ) : manualTeams ? (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                      {t("host.unassigned")}
                    </span>
                  ) : null;
                const inner = (
                  <>
                    <PlayerAvatar player={p} size="sm" />
                    {p.nickname}
                    {badge}
                  </>
                );
                return manualTeams ? (
                  <button
                    key={p.id}
                    type="button"
                    disabled={assigning === p.id}
                    onClick={() => void cycleTeam(p.id, p.team_index)}
                    className="press flex animate-pop items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-2 font-semibold disabled:opacity-50"
                  >
                    {inner}
                  </button>
                ) : (
                  <span
                    key={p.id}
                    className="flex animate-pop items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-2 font-semibold"
                  >
                    {inner}
                  </span>
                );
              })}
            </div>

            {startsIn !== null && startsIn > 0 && room.status === "active" ? (
              <p className="mt-8 text-center font-display text-4xl text-sun">{t("host.startingIn", { n: startsIn })}</p>
            ) : (
              <button
                type="button"
                disabled={players.length === 0 || questions.length === 0}
                onClick={() => void start()}
                className="press mt-8 w-full rounded-3xl bg-gradient-hero px-6 py-5 font-display text-2xl text-primary-foreground shadow-chunky disabled:opacity-40"
              >
                {t("host.start")}
              </button>
            )}
            <p className="mt-3 text-center text-xs text-muted-foreground">{t("host.hostTabNote")}</p>
          </section>
        </div>
      </main>
    );
  }

  const question = phase.question;
  const choices = optionCount(question);
  const totalMs = Math.max(1, question.time_limit_seconds) * 1000;
  const questionAnswers = answers.filter((a) => a.question_id === question.id);
  const counts = Array.from({ length: choices }, (_, i) => questionAnswers.filter((a) => a.choice_index === i).length);
  const manual = room.advance_mode === "manual";
  const isLast = phase.index >= questions.length - 1;

  if (phase.kind === "leaderboard") {
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-sun">{t("host.scoreboard")}</p>
          <h1 className="mt-2 text-center font-display text-4xl md:text-6xl">
            {t("host.afterQuestion", { n: phase.index + 1 })}
          </h1>
          <div className="mt-10">
            <Leaderboard rows={rows} />
          </div>
          {teams.length > 1 ? (
            <div className="mt-10">
              <h2 className="mb-3 text-center font-display text-2xl">{t("board.teamScores")}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {teams.map((team) => (
                  <div
                    key={team.teamIndex}
                    className="flex items-center justify-between rounded-2xl border border-border bg-surface-gradient px-4 py-3"
                  >
                    <span className="flex items-center gap-3 font-display text-lg">
                      <span
                        className="size-4 rounded-full"
                        style={{ backgroundColor: TEAM_COLORS[team.teamIndex % TEAM_COLORS.length] }}
                      />
                      {t("team.name", { n: team.teamIndex + 1 })}
                    </span>
                    <span className="font-display text-2xl tabular-nums">{team.total}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {manual ? (
            <button
              type="button"
              onClick={() => void advance(phase.index, "board")}
              className="press mx-auto mt-8 block rounded-3xl bg-gradient-hero px-8 py-4 font-display text-2xl text-primary-foreground shadow-chunky"
            >
              {t("host.nextQuestion")}
            </button>
          ) : (
            <p className="mt-8 text-center text-muted-foreground">
              {t("host.nextIn", { n: Math.ceil(phase.msLeft / 1000) })}
            </p>
          )}
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
            {t("host.qOfN", { n: phase.index + 1, total: questions.length })}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-display text-lg text-muted-foreground">{t("host.code", { code: room.code })}</span>
            <button
              type="button"
              onClick={() => setShowExitConfirm(true)}
              className="press rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/20"
            >
              🚪 {t("host.exitGame")}
            </button>
          </div>
        </header>

        <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="max-w-4xl font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
            {question.question_text || "…"}
          </h1>

          <QuestionImage
            path={question.image_url}
            className="mt-6 max-h-[30vh] rounded-3xl border border-border object-contain"
          />

          <div className="mt-8 flex w-full max-w-3xl items-center justify-between gap-6">
            {revealing ? (
              <>
                <p className="flex-1 font-display text-3xl text-lime">{t("host.correctAnswer")}</p>
                {manual ? (
                  <button
                    type="button"
                    onClick={() => void advance(phase.index, "reveal")}
                    className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-xl text-primary-foreground shadow-chunky"
                  >
                    {isLast ? t("host.finish") : t("host.showScores")}
                  </button>
                ) : null}
              </>
            ) : (
              <>
                <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={132} />
                <div className="flex-1">
                  <p className="font-display text-2xl tabular-nums">
                    {everyoneAnswered
                      ? t("host.everyoneAnswered")
                      : t("host.answered", { answered: questionAnswers.length, total: players.length })}
                  </p>
                  <div className="mt-3">
                    <CountdownBar msLeft={phase.msLeft} totalMs={totalMs} />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => void advance(phase.index, "question")}
                  className="press rounded-2xl border border-border bg-surface-gradient px-5 py-3 font-display text-lg"
                >
                  {t("host.next")}
                </button>
              </>
            )}
          </div>
        </div>

        <div dir="ltr" className={cn("mt-8 grid gap-3 pb-6", choices > 2 ? "grid-cols-2" : "grid-cols-2")}>
          {Array.from({ length: choices }, (_, i) => (
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

      {showExitModal ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-border bg-surface-gradient p-6 text-center shadow-xl animate-pop">
            <h2 className="font-display text-2xl">{t("host.exitGame")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("host.exitConfirm")}</p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="press flex-1 rounded-2xl border border-border bg-background/50 py-3 font-display text-lg"
              >
                {t("import.cancel")}
              </button>
              <button
                type="button"
                onClick={() => void exitGame()}
                className="press flex-1 rounded-2xl bg-destructive py-3 font-display text-lg text-destructive-foreground shadow-chunky"
              >
                {t("host.exitGame")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
