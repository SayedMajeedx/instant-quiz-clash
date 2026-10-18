import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GameCountdown } from "@/components/quiz/GameCountdown";
import { AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownBar } from "@/components/quiz/CountdownRing";
import { Leaderboard } from "@/components/quiz/Leaderboard";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { Logo } from "@/components/quiz/Logo";
import { DisplayControls, ExitFullscreenButton } from "@/components/quiz/DisplayControls";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
import { Podium } from "@/components/quiz/Podium";
import { QuestionImage } from "@/components/quiz/QuestionImage";
import { useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import {
  BOARD_MS,
  REVEAL_MS,
  optionCount,
  phaseAt,
  standings,
  teamStandings,
  TEAM_COLOR_PALETTE,
  fastestCorrectAnswer,
  roomTeamColor,
  roomTeamName,
  type CursorPhase,
  type Room,
} from "@/lib/quizclash";
import { cleanQuizTitle } from "@/lib/browse-helpers";
import { ReconnectingBanner } from "@/components/quiz/ReconnectingBanner";
import { DebugPanel } from "@/components/quiz/DebugPanel";
import { getBgmForQuiz, sounds } from "@/lib/audio";
import { cn } from "@/lib/utils";
import { buildCategoryBreakdown } from "@/lib/custom-quiz";

import { useWakeLock } from "@/hooks/useWakeLock";
import { timeoutSignal } from "@/lib/request-timeout";
import { Check, Lightbulb, LogOut, Shuffle, Zap } from "lucide-react";

export const Route = createFileRoute("/_authenticated/host/$code")({
  head: () => ({
    meta: [
      { title: "Host Display — QuizClash" },
      {
        name: "description",
        content: "The shared QuizClash game screen: live question, countdown and leaderboard.",
      },
      { property: "og:title", content: "Host Display — QuizClash" },
      {
        property: "og:description",
        content: "Project this screen and let everyone play along from their phones.",
      },
    ],
  }),
  component: HostRoom,
});

function HostRoom() {
  const { code } = Route.useParams();
  const state = useRoomGame(code);
  const { t } = useI18n();

  // Optimistic room settings (pacing, teams) so the lobby responds instantly.
  // Game progress (start, cursor) comes straight from the server's RPC results.
  const [localRoomPatch, setLocalRoomPatch] = useState<Partial<Room>>({});
  const [localPlayerTeams, setLocalPlayerTeams] = useState<Record<string, number | null>>({});

  const room = useMemo(() => {
    if (!state.room) return null;
    return { ...state.room, ...localRoomPatch };
  }, [state.room, localRoomPatch]);

  // Drop optimistic values as soon as the server snapshot confirms them.
  useEffect(() => {
    if (!state.room) return;
    setLocalRoomPatch((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const key of Object.keys(prev) as (keyof Room)[]) {
        if (JSON.stringify(state.room?.[key]) === JSON.stringify(prev[key])) {
          delete next[key];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [state.room]);

  // Scoreboard length lives on the room so players' phones count down the
  // same time. The local value keeps the host's own pacing if saving fails.
  const [delayOverride, setDelayOverride] = useState<number | null>(null);
  const interQuestionSec = delayOverride ?? Math.round((room?.board_ms ?? BOARD_MS) / 1000);
  const setInterQuestionSec = (sec: number) => {
    setDelayOverride(sec);
    void patchRoom({ board_ms: sec * 1000 });
  };

  const { quiz, questions, players: rawPlayers, answers } = state;
  const rawPhase = useMemo(
    () => phaseAt(room, questions, state.now),
    [room, questions, state.now],
  );

  const players = useMemo(() => {
    return rawPlayers.map((p) => {
      if (p.id in localPlayerTeams) {
        return { ...p, team_index: localPlayerTeams[p.id] ?? null };
      }
      return p;
    });
  }, [rawPlayers, localPlayerTeams]);

  const phase = useMemo(() => {
    if (!room) return rawPhase;
    const ms = interQuestionSec * 1000;
    if (rawPhase.kind === "reveal" || rawPhase.kind === "leaderboard") {
      const phaseStartedAt = new Date(room.phase_started_at ?? room.started_at ?? 0).getTime();
      const elapsed = Math.max(0, state.now - phaseStartedAt);
      const limit = rawPhase.kind === "reveal" ? REVEAL_MS : ms;
      return { ...rawPhase, msLeft: Math.max(0, limit - elapsed) };
    }
    return rawPhase;
  }, [rawPhase, interQuestionSec, room?.phase_started_at, room?.started_at, state.now]);

  // Prevent tablet / PC / phone screen from sleeping during live game
  useWakeLock(true);
  const archivedRef = useRef(false);
  const [showExitModal, setShowExitConfirm] = useState(false);
  const [assigning, setAssigning] = useState<string | null>(null);
  const navigate = Route.useNavigate();

  const joinUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/join?code=${code.toUpperCase()}`
      : "";

  const roomId = room?.id ?? null;

  async function patchRoom(patch: Partial<Room>) {
    if (!room) return;
    setLocalRoomPatch((prev) => ({ ...prev, ...patch }));
    const { error } = await supabase
      .from("rooms")
      .update(patch as never)
      .eq("id", room.id)
      .abortSignal(timeoutSignal());

    if (error) {
      setLocalRoomPatch((prev) => {
        const next = { ...prev };
        for (const key of Object.keys(patch) as (keyof Room)[]) delete next[key];
        return next;
      });
      console.error("Failed to update room:", error);
      return;
    }

    await state.refresh();
  }

  async function handleStartGame() {
    if (!room) return;
    const { data, error } = await supabase
      .rpc("start_room_v2", { p_room_id: room.id })
      .abortSignal(timeoutSignal());
    if (error || !data) {
      console.error("Failed to start room:", error);
      return;
    }
    state.acceptRoom(data as unknown as Room);
  }

  async function exitGame() {
    if (!room) return;
    // Ends the room and records the standings so far.
    archivedRef.current = true;
    const { error } = await supabase.rpc("archive_room", { p_room_id: room.id });
    if (error) console.error("Failed to end room:", error);
    void navigate({ to: "/quizzes" });
  }

  // advance_room is idempotent (it only moves from the expected stage), so
  // the auto-advance effect and the watchdog below can both call it safely.
  // The request times out so a dropped connection can't hold the lock and
  // stop every later advance.
  const refresh = state.refresh;
  const acceptRoom = state.acceptRoom;
  const isAdvancingRef = useRef(false);
  const advance = useCallback(
    async (fromIndex: number, fromPhase: CursorPhase) => {
      if (!roomId || isAdvancingRef.current) return;
      isAdvancingRef.current = true;
      try {
        const { data, error } = await supabase
          .rpc("advance_room", {
            p_room_id: roomId,
            p_expect_index: fromIndex,
            p_expect_phase: fromPhase,
          })
          .abortSignal(timeoutSignal());
        if (error) throw error;
        if (data) acceptRoom(data as unknown as Room);
      } catch (e) {
        console.error("Failed to advance room:", e);
      } finally {
        isAdvancingRef.current = false;
      }
    },
    [roomId, acceptRoom],
  );

  // Snapshot final standings once the room is over so they survive cleanup.
  useEffect(() => {
    if (!room || room.status !== "ended" || archivedRef.current) return;
    archivedRef.current = true;
    const archiveWithRetry = async (attempt = 1): Promise<void> => {
      const { error } = await supabase.rpc("archive_room", { p_room_id: room.id });
      if (!error) return;
      if (attempt < 4) {
        window.setTimeout(() => void archiveWithRetry(attempt + 1), attempt * 750);
        return;
      }
      archivedRef.current = false;
      console.error("Failed to record completed game after retries:", error);
    };
    void archiveWithRetry();
  }, [room]);

  // Play category-specific background music continuously during gameplay
  useEffect(() => {
    if (!quiz || room?.status === "ended") {
      sounds.stopBgm();
      return;
    }

    const bgmUrl = getBgmForQuiz(quiz);
    if (bgmUrl && (room?.status === "active" || room?.status === "lobby")) {
      sounds.playBgm(bgmUrl);
    } else {
      sounds.stopBgm();
    }
  }, [quiz?.id, room?.status]);

  // Stop BGM only when host screen unmounts completely
  useEffect(() => {
    return () => {
      sounds.stopBgm();
    };
  }, []);

  const questionAnswerCount =
    phase.kind === "question"
      ? new Set(answers.filter((a) => a.question_id === phase.question.id).map((a) => a.player_id))
          .size
      : 0;
  const everyoneAnswered =
    phase.kind === "question" && players.length > 0 && questionAnswerCount >= players.length;

  const timeUp =
    phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard"
      ? phase.msLeft <= 0
      : false;

  const phaseKind = phase.kind;
  const phaseIndex =
    phase.kind === "question" || phase.kind === "reveal" || phase.kind === "leaderboard"
      ? phase.index
      : -1;
  const advanceMode = room?.advance_mode;
  const roomStatus = room?.status;

  const advanceTimerRef = useRef<number | null>(null);

  // Auto pacing: the question clock always ends the question (early when everyone
  // has answered); reveal and scoreboard only roll on when the host chose "auto".
  useEffect(() => {
    if (!roomStatus || roomStatus !== "active") return;
    if (phaseKind !== "question" && phaseKind !== "reveal" && phaseKind !== "leaderboard") return;
    const auto = advanceMode !== "manual";
    const shouldAdvance = phaseKind === "question" ? everyoneAnswered || timeUp : auto && timeUp;

    if (!shouldAdvance) {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = null;
      }
      return;
    }

    const from: CursorPhase =
      phaseKind === "question" ? "question" : phaseKind === "reveal" ? "reveal" : "board";
    const delay = phaseKind === "question" && everyoneAnswered && !timeUp ? 700 : 0;

    if (delay === 0) {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = null;
      }
      void advance(phaseIndex, from);
    } else if (advanceTimerRef.current === null) {
      advanceTimerRef.current = window.setTimeout(() => {
        advanceTimerRef.current = null;
        void advance(phaseIndex, from);
      }, delay);
    }
  }, [roomStatus, advanceMode, phaseKind, phaseIndex, timeUp, everyoneAnswered, advance]);

  // Fail-safe watchdog: Check every 1s during active game. If timeUp or everyoneAnswered is true,
  // ensure advance() is retried until the room state successfully moves forward.
  useEffect(() => {
    if (!roomStatus || roomStatus !== "active") return;
    if (phaseKind !== "question" && phaseKind !== "reveal" && phaseKind !== "leaderboard") return;
    const auto = advanceMode !== "manual";
    const shouldAdvance = phaseKind === "question" ? everyoneAnswered || timeUp : auto && timeUp;

    if (!shouldAdvance) return;

    const from: CursorPhase =
      phaseKind === "question" ? "question" : phaseKind === "reveal" ? "reveal" : "board";

    const watchdogId = window.setInterval(() => {
      if (!isAdvancingRef.current) {
        void advance(phaseIndex, from);
      }
    }, 1000);

    return () => window.clearInterval(watchdogId);
  }, [roomStatus, advanceMode, phaseKind, phaseIndex, timeUp, everyoneAnswered, advance]);

  const rows = useMemo(() => {
    const upTo =
      phaseKind === "question" || phaseKind === "reveal" || phaseKind === "leaderboard"
        ? phaseIndex
        : questions.length - 1;
    return standings(players, answers, questions, upTo);
  }, [players, answers, questions, phaseKind, phaseIndex]);

  const teams = useMemo(() => teamStandings(rows), [rows]);

  function updateTeamName(index: number, value: string) {
    if (!room) return;
    const names = Array.from({ length: 4 }, (_, i) => roomTeamName(room, i));
    names[index] = value.trim() || roomTeamName({ team_names: null }, index);
    void patchRoom({ team_names: names });
  }

  function updateTeamColor(index: number, color: string) {
    if (!room) return;
    const colors = Array.from({ length: 4 }, (_, i) => roomTeamColor(room, i));
    colors[index] = color;
    void patchRoom({ team_colors: colors });
  }

  async function cycleTeam(pid: string, current: number | null) {
    if (!room || room.team_count <= 1) return;
    setAssigning(pid);
    const next = current === null ? 0 : (current + 1) % room.team_count;
    setLocalPlayerTeams((prev) => ({ ...prev, [pid]: next }));
    await supabase.rpc("set_player_team", { p_player_id: pid, p_team_index: next });
    await refresh();
    setAssigning(null);
  }

  async function shuffleTeams() {
    if (!room || room.team_count <= 1 || players.length === 0) return;
    const list = [...players].sort(() => Math.random() - 0.5);
    const newTeamMap: Record<string, number> = {};
    list.forEach((p, i) => {
      newTeamMap[p.id] = i % room.team_count;
    });
    setLocalPlayerTeams(newTeamMap);

    await Promise.all(
      list.map((p, i) =>
        supabase.rpc("set_player_team", { p_player_id: p.id, p_team_index: i % room.team_count }),
      ),
    );
    await refresh();
  }

  const exitDialog = showExitModal ? (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5">
      <div role="dialog" aria-modal="true" className="w-full max-w-sm animate-pop rounded-3xl bg-card p-6 text-center">
        <h2 className="font-display text-2xl">{t("host.exitGame")}</h2>
        <p className="mt-2 text-muted-foreground">{t("host.exitConfirm")}</p>
        <div className="mt-6 flex gap-3">
          <button type="button" onClick={() => setShowExitConfirm(false)} className="ledge ledge-panel flex-1">
            <span className="ledge-face h-12 font-display text-lg">{t("host.cancel")}</span>
          </button>
          <button type="button" onClick={() => void exitGame()} className="ledge ledge-red flex-1">
            <span className="ledge-face h-12 font-display text-lg">{t("host.exitBtn")}</span>
          </button>
        </div>
      </div>
    </div>
  ) : null;

  const exitButton = (
    <button
      type="button"
      onClick={() => setShowExitConfirm(true)}
      aria-label={t("host.exitGame")}
      className="press grid size-10 place-items-center rounded-full bg-secondary text-muted-foreground"
    >
      <LogOut className="size-5 rtl:-scale-x-100" />
    </button>
  );

  if (state.loading) {
    return (
      <main className="grid min-h-screen place-items-center">
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <span className="size-10 animate-spin rounded-full border-4 border-secondary border-t-sun" aria-hidden />
          <p className="font-display text-2xl">{t("host.loadingRoom")}</p>
        </div>
      </main>
    );
  }

  if (state.missing || !room) {
    return (
      <main className="grid min-h-screen place-items-center px-5 text-center">
        <div className="w-full max-w-sm rounded-3xl bg-card p-8">
          <h1 className="font-display text-3xl">{t("host.notFound")}</h1>
          <Link to="/host" className="ledge ledge-blue mt-6 w-full">
            <span className="ledge-face h-14 font-display text-xl">{t("host.createNew")}</span>
          </Link>
        </div>
      </main>
    );
  }

  if (phase.kind === "ended") {
    const categoryBreakdown = buildCategoryBreakdown(questions, answers);
    return (
      <main className="min-h-screen">
        <Podium
          rows={rows}
          title={cleanQuizTitle(quiz?.title ?? "QuizClash")}
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

  if (phase.kind === "lobby") {
    const startsIn =
      room.started_at && new Date(room.started_at).getTime() > state.now
        ? Math.ceil((new Date(room.started_at).getTime() - state.now) / 1000)
        : null;
    const manualTeams = room.team_count > 1 && room.team_mode === "manual";
    return (
      <main className="min-h-screen">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1fr_1.15fr] lg:py-10">
          {/* Join panel: the room code is the hero, readable from across the room. */}
          <section className="flex flex-col rounded-3xl bg-card p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3">
              <Logo />
              <span className="flex items-center gap-2">
                <DisplayControls />
                <LanguageToggle />
              </span>
            </div>
            <p className="mt-8 font-semibold text-muted-foreground">{cleanQuizTitle(quiz?.title || "")}</p>
            <h1 className="mt-1 font-display text-3xl lg:text-4xl">{t("host.joinOnPhone")}</h1>
            <p className="mt-1 break-all font-display text-xl text-sun" dir="ltr">
              {joinUrl.replace(/^https?:\/\//, "").replace(/\?code=.*$/, "")}
            </p>
            <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl bg-background p-6 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-start">
                <p className="font-semibold text-muted-foreground">{t("host.gameCode")}</p>
                <p className="mt-1 font-display text-7xl leading-none tracking-[0.12em] lg:text-8xl" dir="ltr">
                  {room.code}
                </p>
              </div>
              {joinUrl ? (
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(joinUrl)}`}
                  alt={t("host.qrAlt", { code: room.code })}
                  width={176}
                  height={176}
                  className="size-44 shrink-0 rounded-2xl bg-white p-1"
                />
              ) : null}
            </div>
          </section>

          {/* Players, settings, start */}
          <section className="flex flex-col gap-5 rounded-3xl bg-card p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">{t("host.players")}</h2>
              <span className="min-w-12 rounded-full bg-sun px-4 py-1 text-center font-display text-xl text-on-sun tabular-nums">
                {players.length}
              </span>
            </div>

            <div className="flex min-h-24 flex-wrap content-start gap-2">
              {players.length === 0 ? <p className="text-muted-foreground">{t("host.waiting")}</p> : null}
              {players.map((p) => {
                const teamIdx = p.team_index ?? null;
                const badge =
                  teamIdx !== null ? (
                    <span className="size-3 rounded-full" style={{ backgroundColor: roomTeamColor(room, teamIdx) }} />
                  ) : manualTeams ? (
                    <span className="text-xs text-muted-foreground">{t("host.unassigned")}</span>
                  ) : null;
                const inner = (
                  <>
                    <PlayerAvatar player={p} size="sm" />
                    <span>{p.nickname}</span>
                    {badge}
                  </>
                );
                return manualTeams ? (
                  <button
                    key={p.id}
                    type="button"
                    disabled={assigning === p.id}
                    onClick={() => void cycleTeam(p.id, teamIdx)}
                    className="press flex animate-pop items-center gap-2 rounded-full bg-secondary py-1.5 ps-1.5 pe-4 font-semibold disabled:opacity-50"
                  >
                    {inner}
                  </button>
                ) : (
                  <span key={p.id} className="flex animate-pop items-center gap-2 rounded-full bg-secondary py-1.5 ps-1.5 pe-4 font-semibold">
                    {inner}
                  </span>
                );
              })}
            </div>

            <div className="rounded-2xl bg-background p-4">
              <h3 className="font-display text-lg">{t("host.settings")}</h3>
              <div className="mt-3 grid gap-3">
                <Segmented
                  label={t("host.pacing")}
                  value={room.advance_mode}
                  options={[
                    { value: "auto", label: t("host.pacingAuto") },
                    { value: "manual", label: t("host.pacingManual") },
                  ]}
                  onChange={(mode) => void patchRoom({ advance_mode: mode })}
                />
                <Segmented
                  label={t("host.revealDelay")}
                  value={interQuestionSec}
                  options={[3, 5, 8, 12].map((sec) => ({ value: sec, label: t("host.seconds", { n: sec }) }))}
                  onChange={setInterQuestionSec}
                />
                <Segmented
                  label={t("host.teams")}
                  value={room.team_count ?? 0}
                  options={[0, 2, 3, 4].map((n) => ({ value: n, label: n === 0 ? t("host.solo") : t("host.teamsN", { n }) }))}
                  onChange={(n) => void patchRoom({ team_count: n })}
                />
                {room.team_count > 1 ? (
                  <>
                    <Segmented
                      label=""
                      value={room.team_mode}
                      options={[
                        { value: "auto", label: t("host.teamAuto") },
                        { value: "manual", label: t("host.teamManual") },
                      ]}
                      onChange={(mode) => void patchRoom({ team_mode: mode })}
                    />
                    <p className="text-sm text-muted-foreground">
                      {manualTeams ? t("host.teamManualNote") : t("host.teamAutoNote")}
                    </p>
                    {manualTeams && players.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => void shuffleTeams()}
                        className="press flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold"
                      >
                        <Shuffle className="size-4" aria-hidden />
                        {t("host.shuffleTeams")}
                      </button>
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>

            {room.team_count > 1 ? (
              <div className="rounded-2xl bg-background p-4">
                <h3 className="font-display text-lg">{t("host.teamIdentity")}</h3>
                <p className="text-sm text-muted-foreground">{t("host.teamIdentityHint")}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {Array.from({ length: room.team_count }, (_, index) => (
                    <div key={index} className="rounded-xl bg-card p-3">
                      <div className="flex items-center gap-2">
                        <span className="size-4 shrink-0 rounded-full" style={{ backgroundColor: roomTeamColor(room, index) }} />
                        <input
                          key={`${index}-${roomTeamName(room, index)}`}
                          defaultValue={roomTeamName(room, index)}
                          maxLength={18}
                          onBlur={(event) => updateTeamName(index, event.currentTarget.value)}
                          className="min-w-0 flex-1 rounded-lg border-2 border-border bg-background px-3 py-1.5 font-semibold outline-none transition-colors duration-150 focus:border-sun"
                          aria-label={t("host.teamNameLabel", { n: index + 1 })}
                        />
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {TEAM_COLOR_PALETTE.map((color) => (
                          <button
                            key={color}
                            type="button"
                            onClick={() => updateTeamColor(index, color)}
                            aria-label={t("host.pickColor", { color })}
                            aria-pressed={roomTeamColor(room, index) === color}
                            className={cn(
                              "press size-7 rounded-full border-2",
                              roomTeamColor(room, index) === color ? "border-white" : "border-transparent",
                            )}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <button
              type="button"
              disabled={players.length === 0 || startsIn !== null}
              onClick={() => void handleStartGame()}
              className="ledge ledge-green mt-auto w-full disabled:opacity-50"
            >
              <span className="ledge-face h-16 font-display text-2xl">
                {startsIn !== null ? t("host.startingIn", { n: startsIn }) : t("host.start")}
              </span>
            </button>
          </section>
        </div>
      </main>
    );
  }

  if (phase.kind === "leaderboard") {
    const manual = room.advance_mode === "manual";
    const currentQ = questions[phase.index];
    const explanation = currentQ?.explanation;
    return (
      <main className="min-h-screen px-5 py-6 pb-20">
        <ReconnectingBanner status={state.connectionStatus} />
        <DebugPanel state={state} />

        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-secondary px-4 py-1.5 font-semibold">
              {t("host.qOfN", { n: phase.index + 1, total: questions.length })}
            </span>
            <div className="flex items-center gap-2">
              <DisplayControls />
              {exitButton}
            </div>
          </div>

          <h1 className="mt-6 text-center font-display text-4xl md:text-5xl">
            {t("host.afterQuestion", { n: phase.index + 1 })}
          </h1>

          {explanation ? (
            <div className="mt-6 animate-pop rounded-3xl bg-card p-6 text-center md:p-8">
              <p className="mx-auto flex w-fit items-center gap-2 font-semibold text-sun">
                <Lightbulb className="size-5" aria-hidden />
                {t("play.didYouKnow")}
              </p>
              {currentQ?.question_text ? (
                <p className="mt-2 line-clamp-1 text-sm text-muted-foreground">{currentQ.question_text}</p>
              ) : null}
              <p className="mt-3 font-display text-xl leading-relaxed sm:text-2xl md:text-3xl">{explanation}</p>
            </div>
          ) : null}

          <div className="mt-8">
            <Leaderboard rows={rows} />
          </div>
          {teams.length > 1 ? (
            <div className="mt-10">
              <h2 className="mb-3 text-center font-display text-2xl">{t("board.teamScores")}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {teams.map((team) => (
                  <div key={team.teamIndex} className="flex items-center justify-between rounded-2xl bg-card px-4 py-3">
                    <span className="flex items-center gap-3 font-display text-lg">
                      <span className="size-4 rounded-full" style={{ backgroundColor: roomTeamColor(room, team.teamIndex) }} />
                      {roomTeamName(room, team.teamIndex)}
                    </span>
                    <span className="font-display text-2xl tabular-nums">
                      {team.total} <small className="text-sm text-muted-foreground">{t("host.average")}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {manual ? (
            <div className="mt-8 flex justify-center">
              <button type="button" onClick={() => void advance(phase.index, "board")} className="ledge ledge-blue">
                <span className="ledge-face h-16 px-10 font-display text-2xl">{t("host.nextQuestion")}</span>
              </button>
            </div>
          ) : (
            <p className="mt-8 text-center text-muted-foreground">
              {t("host.nextIn", { n: Math.ceil(phase.msLeft / 1000) })}
            </p>
          )}
          <ExitFullscreenButton />
        </div>
        {exitDialog}
      </main>
    );
  }

  function getQuestionFontSize(text: string, hasImage: boolean): string {
    const len = text ? text.length : 0;
    if (hasImage) {
      if (len > 120) return "text-lg sm:text-xl md:text-2xl";
      if (len > 60) return "text-xl sm:text-2xl md:text-3xl";
      return "text-2xl sm:text-3xl md:text-4xl";
    }
    if (len > 140) return "text-xl sm:text-2xl md:text-3xl";
    if (len > 80) return "text-2xl sm:text-3xl md:text-4xl";
    if (len > 40) return "text-3xl sm:text-4xl md:text-5xl";
    return "text-3xl sm:text-4xl md:text-5xl lg:text-6xl";
  }

  const question = phase.question;
  if (!question) return null;
  const questionAnswers = answers.filter((a) => a.question_id === question.id);
  const choices = optionCount(question);
  const isLast = phase.index === questions.length - 1;
  const manual = room.advance_mode === "manual";
  const totalMs = (question.time_limit_seconds || 30) * 1000;

  const counts = [0, 0, 0, 0];
  for (const a of questionAnswers) {
    if (a.choice_index >= 0 && a.choice_index < choices) {
      counts[a.choice_index] = (counts[a.choice_index] ?? 0) + 1;
    }
  }

  const revealing = phase.kind === "reveal";
  const fastestAnswer = revealing ? fastestCorrectAnswer(answers, question.id) : null;
  const fastestPlayer = fastestAnswer
    ? players.find((player) => player.id === fastestAnswer.player_id) ?? null
    : null;
  const secondsLeft = Math.max(0, Math.ceil(phase.msLeft / 1000));

  return (
    <main className="flex h-screen max-h-screen w-full flex-col gap-3 overflow-hidden p-3 sm:p-5">
      <header className="flex shrink-0 items-center justify-between gap-4">
        <span className="rounded-full bg-secondary px-4 py-1.5 font-semibold">
          {t("host.qOfN", { n: phase.index + 1, total: questions.length })}
        </span>
        <span className="font-semibold text-muted-foreground tabular-nums">
          {revealing
            ? null
            : everyoneAnswered
              ? t("host.everyoneAnswered")
              : t("host.answered", { answered: questionAnswers.length, total: players.length })}
        </span>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="rounded-full bg-secondary px-4 py-1.5 font-display text-lg tracking-wider" dir="ltr">
            {room.code}
          </span>
          <DisplayControls />
          {exitButton}
        </div>
      </header>

      {revealing ? (
        <div className="h-3 shrink-0" />
      ) : (
        <div className="flex shrink-0 items-center gap-4">
          <CountdownBar msLeft={phase.msLeft} totalMs={totalMs} withTick className="h-4" />
          <span
            className={cn(
              "w-14 shrink-0 text-center font-display text-3xl tabular-nums",
              secondsLeft <= 5 && "text-destructive",
            )}
          >
            {secondsLeft}
          </span>
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 text-center">
        {question.image_url ? (
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <QuestionImage
              path={question.image_url}
              className="max-h-[24vh] max-w-[80vw] shrink-0 rounded-2xl object-contain md:max-w-[34vw]"
            />
            <h1 className={cn("max-w-3xl font-display leading-snug", getQuestionFontSize(question.question_text, true))}>
              {question.question_text || "…"}
            </h1>
          </div>
        ) : (
          <h1 className={cn("max-w-6xl px-2 font-display leading-snug", getQuestionFontSize(question.question_text, false))}>
            {question.question_text || "…"}
          </h1>
        )}

        {revealing ? (
          <div className="flex animate-pop flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-2 rounded-full bg-answer-4 px-4 py-2 font-display text-xl text-white">
              <Check className="size-5" strokeWidth={3} aria-hidden />
              {t("host.correctAnswer")}
            </span>
            {fastestPlayer ? (
              <span className="flex items-center gap-2 rounded-full bg-sun py-1 ps-1 pe-4 font-display text-lg text-on-sun">
                <PlayerAvatar player={fastestPlayer} size="sm" />
                <Zap className="size-4" aria-hidden />
                {t("host.fastest")}: {fastestPlayer.nickname}
              </span>
            ) : null}
            {manual ? (
              <button type="button" onClick={() => void advance(phase.index, "reveal")} className="ledge ledge-blue">
                <span className="ledge-face h-12 px-6 font-display text-lg">
                  {isLast ? t("host.finish") : t("host.showScores")}
                </span>
              </button>
            ) : null}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => void advance(phase.index, "question")}
            className="press rounded-full bg-secondary px-5 py-2 font-semibold text-muted-foreground"
          >
            {t("host.next")}
          </button>
        )}
      </div>

      <div
        className={cn(
          "mx-auto grid w-full max-w-6xl shrink-0 gap-3 pb-1",
          question.question_type === "boolean" ? "grid-cols-1" : "grid-cols-2",
        )}
      >
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

      {exitDialog}
    </main>
  );
}

/** A compact choice row: one label, a few mutually exclusive options. */
function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {label ? <span className="font-semibold">{label}</span> : null}
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={label || undefined}>
        {options.map((option) => (
          <button
            key={String(option.value)}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "press rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors duration-150",
              value === option.value ? "bg-sun text-on-sun" : "bg-secondary text-foreground",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
