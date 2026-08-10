import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { GameCountdown } from "@/components/quiz/GameCountdown";
import { AnswerTile } from "@/components/quiz/AnswerTile";
import { CountdownBar, CountdownRing } from "@/components/quiz/CountdownRing";
import { Leaderboard } from "@/components/quiz/Leaderboard";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { DisplayControls, ExitFullscreenButton } from "@/components/quiz/DisplayControls";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
import { Podium } from "@/components/quiz/Podium";
import { QuestionImage } from "@/components/quiz/QuestionImage";
import { useRoomGame } from "@/hooks/useRoomGame";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import {
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
import { getSyncedNow } from "@/lib/server-time";
import { cleanQuizTitle } from "@/lib/browse-helpers";
import { ReconnectingBanner } from "@/components/quiz/ReconnectingBanner";
import { DebugPanel } from "@/components/quiz/DebugPanel";
import { getBgmForQuiz, sounds } from "@/lib/audio";
import { cn } from "@/lib/utils";
import { buildCategoryBreakdown } from "@/lib/custom-quiz";

import { useWakeLock } from "@/hooks/useWakeLock";

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

  const [interQuestionSec, setInterQuestionSecState] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`quizclash_delay_${code}`);
      if (saved) return Number(saved) || 5;
    }
    return 5;
  });

  const setInterQuestionSec = useCallback(
    (sec: number) => {
      setInterQuestionSecState(sec);
      if (typeof window !== "undefined") {
        localStorage.setItem(`quizclash_delay_${code}`, String(sec));
      }
    },
    [code],
  );

  // Optimistic local state for 0ms instant UI responses
  const [localRoomPatch, setLocalRoomPatch] = useState<Partial<Room>>({});
  const [localPlayerTeams, setLocalPlayerTeams] = useState<Record<string, number | null>>({});

  const room = useMemo(() => {
    if (!state.room) return null;
    return { ...state.room, ...localRoomPatch };
  }, [state.room, localRoomPatch]);

  // Drop optimistic values as soon as the server snapshot confirms them. This
  // prevents the start timestamp/cursor from masking later realtime updates.
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
      const limit = rawPhase.kind === "reveal" ? 2500 : ms;
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
      .eq("id", room.id);

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
    const { data, error } = await supabase.rpc("start_room_v2", { p_room_id: room.id });
    if (error || !data) {
      console.error("Failed to start room:", error);
      return;
    }

    const startedRoom = data as unknown as Room;
    setLocalRoomPatch({
      status: startedRoom.status,
      cursor_index: startedRoom.cursor_index,
      cursor_phase: startedRoom.cursor_phase,
      started_at: startedRoom.started_at,
      phase_started_at: startedRoom.phase_started_at,
    });
    await state.refresh();
  }

  async function exitGame() {
    if (!room) return;
    await supabase
      .from("rooms")
      .update({ status: "ended" } as never)
      .eq("id", room.id);
    void navigate({ to: "/quizzes" });
  }

  // Guaranteed Room Advancement with direct UPDATE fallback to prevent room freezes
  const refresh = state.refresh;
  const isAdvancingRef = useRef(false);
  const advance = useCallback(
    async (fromIndex: number, fromPhase: CursorPhase) => {
      if (!roomId || isAdvancingRef.current) return;
      isAdvancingRef.current = true;
      try {
        const nowIso = new Date(getSyncedNow()).toISOString();
        let directPayload: Record<string, unknown> = {};

        if (fromPhase === "question") {
          directPayload = { cursor_phase: "reveal", phase_started_at: nowIso };
        } else if (fromPhase === "reveal") {
          if (fromIndex >= questions.length - 1) {
            directPayload = { status: "ended", phase_started_at: nowIso };
          } else {
            directPayload = { cursor_phase: "board", phase_started_at: nowIso };
          }
        } else if (fromPhase === "board") {
          if (fromIndex >= questions.length - 1) {
            directPayload = { status: "ended", phase_started_at: nowIso };
          } else {
            directPayload = {
              cursor_index: fromIndex + 1,
              cursor_phase: "question",
              phase_started_at: nowIso,
            };
          }
        }

        // 1. Try RPC first
        const { data: rpcRes, error: rpcErr } = await supabase.rpc("advance_room", {
          p_room_id: roomId,
          p_expect_index: fromIndex,
          p_expect_phase: fromPhase,
        });

        // 2. Fallback to direct DB update if RPC didn't advance or threw phase mismatch
        const rpcAdvanced =
          !rpcErr &&
          rpcRes &&
          (rpcRes.cursor_phase !== fromPhase ||
            rpcRes.cursor_index !== fromIndex ||
            rpcRes.status !== "active");

        if (!rpcAdvanced && Object.keys(directPayload).length > 0) {
          console.warn(
            "RPC advance_room mismatch fallback -> applying direct update",
            directPayload,
          );
          await supabase
            .from("rooms")
            .update(directPayload as never)
            .eq("id", roomId);
        }

        setLocalRoomPatch((prev) => ({ ...prev, ...directPayload }));
        await refresh();
      } catch (e) {
        console.error("Failed to advance room:", e);
      } finally {
        isAdvancingRef.current = false;
      }
    },
    [roomId, questions.length, refresh],
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
    await supabase.from("players").update({ team_index: next }).eq("id", pid);
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
        supabase
          .from("players")
          .update({ team_index: i % room.team_count })
          .eq("id", p.id),
      ),
    );
    await refresh();
  }

  if (state.loading) {
    return (
      <main className="relative grid min-h-screen place-items-center">
        <AnimatedBg />
        <p className="font-display text-2xl animate-pulse">{t("host.loadingRoom")}</p>
      </main>
    );
  }

  if (state.missing || !room) {
    return (
      <main className="relative grid min-h-screen place-items-center">
        <AnimatedBg />
        <div className="text-center">
          <h1 className="font-display text-4xl">{t("host.notFound")}</h1>
          <Link
            to="/host"
            className="press mt-6 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky"
          >
            {t("host.createNew")}
          </Link>
        </div>
      </main>
    );
  }

  if (phase.kind === "ended") {
    const categoryBreakdown = buildCategoryBreakdown(questions, answers);
    return (
      <main className="relative min-h-screen">
        <AnimatedBg dense />
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
      <main className="relative min-h-screen">
        <AnimatedBg dense />
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1.1fr_1fr]">
          <section>
            <div className="mb-4 flex items-center justify-end gap-2">
              <DisplayControls />
              <LanguageToggle />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sun">
              {cleanQuizTitle(quiz?.title || "")}
            </p>
            <h1 className="mt-3 font-display text-3xl md:text-4xl">{t("host.joinAt")}</h1>
            <p className="mt-1 break-all font-display text-xl text-muted-foreground">
              {joinUrl.replace(/^https?:\/\//, "")}
            </p>
            <div className="mt-6 rounded-3xl border border-border bg-surface-gradient p-6 text-center shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t("host.gameCode")}
              </p>
              <p className="mt-2 font-display text-6xl tracking-[0.15em] md:text-8xl text-gradient">
                {room.code}
              </p>
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

            {/* Progression Mode Control */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border/50 bg-background/30 p-3">
              <span className="text-xs sm:text-sm font-bold text-foreground">
                ⏱️ {t("host.pacing")}
              </span>
              <div className="flex items-center gap-1.5">
                {(["auto", "manual"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => void patchRoom({ advance_mode: mode })}
                    className={cn(
                      "press rounded-xl border px-3 py-1.5 text-xs font-bold transition-all",
                      room.advance_mode === mode
                        ? "border-primary bg-primary/20 text-primary ring-2 ring-primary/40 shadow-sm"
                        : "border-border text-muted-foreground hover:bg-background/80",
                    )}
                  >
                    {mode === "auto" ? t("host.pacingAuto") : t("host.pacingManual")}
                  </button>
                ))}
              </div>
            </div>

            {/* Inter-question screen delay timer setting */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border/50 bg-background/30 p-3">
              <span className="text-xs sm:text-sm font-bold text-foreground">
                ⏳ مدة شاشة النتيجة بين الأسئلة:
              </span>
              <div className="flex items-center gap-1.5">
                {[3, 5, 8, 12].map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => setInterQuestionSec(sec)}
                    className={cn(
                      "press rounded-xl border px-2.5 py-1.5 text-xs font-bold transition-all",
                      interQuestionSec === sec
                        ? "border-primary bg-primary/20 text-primary ring-2 ring-primary/40 shadow-sm"
                        : "border-border text-muted-foreground hover:bg-background/80",
                    )}
                  >
                    {sec}ث
                  </button>
                ))}
              </div>
            </div>

            {/* Game Mode / Team Count Control */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border/50 bg-background/30 p-3">
              <span className="text-xs sm:text-sm font-bold text-foreground">
                🎮 {t("host.teams")}:
              </span>
              <div className="flex items-center gap-1.5">
                {[0, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => void patchRoom({ team_count: n })}
                    className={cn(
                      "press rounded-xl border px-3 py-1.5 text-xs font-bold transition-all",
                      (room.team_count ?? 0) === n
                        ? "border-primary bg-primary/20 text-primary ring-2 ring-primary/40 shadow-sm"
                        : "border-border text-muted-foreground hover:bg-background/80",
                    )}
                  >
                    {n === 0 ? t("host.solo") : t("host.teamsN", { n })}
                  </button>
                ))}
              </div>
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
                        room.team_mode === mode
                          ? "border-primary text-foreground ring-2 ring-primary"
                          : "border-border",
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

            {room.team_count > 1 ? (
              <div className="mt-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background/50 to-fuchsia-500/10 p-4 shadow-lg">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg">✨ هوية الفرق</h3>
                    <p className="text-xs text-muted-foreground">خصص الاسم واللون الذي سيظهر للاعبين</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {Array.from({ length: room.team_count }, (_, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-background/45 p-3">
                      <div className="flex items-center gap-2">
                        <span className="size-4 shrink-0 rounded-full shadow-[0_0_14px_currentColor]" style={{ backgroundColor: roomTeamColor(room, index), color: roomTeamColor(room, index) }} />
                        <input
                          key={`${index}-${roomTeamName(room, index)}`}
                          defaultValue={roomTeamName(room, index)}
                          maxLength={18}
                          onBlur={(event) => updateTeamName(index, event.currentTarget.value)}
                          className="min-w-0 flex-1 rounded-xl border border-border/70 bg-background/70 px-3 py-2 font-bold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                          aria-label={`اسم الفريق ${index + 1}`}
                        />
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {TEAM_COLOR_PALETTE.map((color) => (
                          <button key={color} type="button" onClick={() => updateTeamColor(index, color)} aria-label={`اختيار اللون ${color}`} className={cn("size-7 rounded-full border-2 transition hover:scale-110", roomTeamColor(room, index) === color ? "border-white ring-2 ring-primary" : "border-transparent")} style={{ backgroundColor: color }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {players.length === 0 ? (
                <p className="text-muted-foreground">{t("host.waiting")}</p>
              ) : null}
              {players.map((p) => {
                const teamIdx = p.team_index ?? null;
                const badge =
                  teamIdx !== null ? (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-background"
                      style={{ backgroundColor: roomTeamColor(room, teamIdx) }}
                    >
                      {teamIdx + 1}
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
                    onClick={() => void cycleTeam(p.id, teamIdx)}
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

            <button
              type="button"
              disabled={players.length === 0 || startsIn !== null}
              onClick={() => void handleStartGame()}
              className="press mt-6 w-full rounded-3xl bg-gradient-hero px-6 py-4 font-display text-2xl text-primary-foreground shadow-chunky disabled:opacity-50"
            >
              {startsIn !== null ? t("host.startingIn", { n: startsIn }) : t("host.start")}
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
      <main className="relative min-h-screen px-5 py-8 pb-20">
        <AnimatedBg dense />
        <ReconnectingBanner status={state.connectionStatus} />
        <DebugPanel state={state} />

        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-border bg-surface-gradient px-4 py-1.5 font-display text-sm">
              {t("host.qOfN", { n: phase.index + 1, total: questions.length })}
            </span>
            <div className="flex items-center gap-2">
              <DisplayControls />
              <button
                type="button"
                onClick={() => setShowExitConfirm(true)}
                className="press rounded-full border border-destructive/40 bg-destructive/10 px-3.5 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/20"
              >
                🚪 {t("host.exitGame")}
              </button>
            </div>
          </div>

          <h1 className="mt-4 text-center font-display text-3xl md:text-5xl">
            {t("host.afterQuestion", { n: phase.index + 1 })}
          </h1>

          {/* Premium Animated Explanation Showcase Card — Displayed Exclusively Here between questions */}
          {explanation ? (
            <div className="mt-6 overflow-hidden rounded-3xl border border-sun/50 bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-primary/10 p-6 md:p-8 text-center shadow-glow backdrop-blur-xl animate-pop relative">
              <div className="absolute -right-12 -top-12 size-36 rounded-full bg-sun/10 blur-2xl pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 size-36 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-sun/40 bg-sun/20 px-4 py-1.5 text-xs sm:text-sm font-bold text-sun shadow-sm">
                <span className="animate-pulse text-base">💡</span>
                <span>هل تعلم؟ / توضيح الإجابة</span>
              </div>

              {currentQ?.question_text ? (
                <p className="mt-3 text-xs sm:text-sm font-medium text-muted-foreground line-clamp-1">
                  سؤال: «{currentQ.question_text}»
                </p>
              ) : null}

              <p className="mt-3 font-display text-lg sm:text-2xl md:text-3xl leading-relaxed text-foreground/95 tracking-wide">
                {explanation}
              </p>
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
                  <div
                    key={team.teamIndex}
                    className="flex items-center justify-between rounded-2xl border border-border bg-surface-gradient px-4 py-3"
                  >
                    <span className="flex items-center gap-3 font-display text-lg">
                      <span
                        className="size-4 rounded-full"
                        style={{
                          backgroundColor: roomTeamColor(room, team.teamIndex),
                        }}
                      />
                      {roomTeamName(room, team.teamIndex)}
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
          <ExitFullscreenButton />
        </div>
      </main>
    );
  }

  function getQuestionFontSize(text: string, hasImage: boolean): string {
    const len = text ? text.length : 0;
    if (hasImage) {
      if (len > 120) return "text-base sm:text-lg md:text-xl";
      if (len > 60) return "text-lg sm:text-xl md:text-2xl";
      return "text-xl sm:text-2xl md:text-3xl";
    }
    if (len > 140) return "text-lg sm:text-xl md:text-2xl";
    if (len > 80) return "text-xl sm:text-2xl md:text-3xl";
    if (len > 40) return "text-2xl sm:text-3xl md:text-4xl";
    return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";
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

  return (
    <main className="relative h-screen max-h-screen w-full overflow-hidden flex flex-col justify-between p-3 sm:p-4 md:p-5">
      <AnimatedBg />
      <header className="flex shrink-0 items-center justify-between gap-4">
        <span className="rounded-full border border-border bg-surface-gradient px-4 py-1.5 font-display text-sm">
          {t("host.qOfN", { n: phase.index + 1, total: questions.length })}
        </span>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-display text-base sm:text-lg text-muted-foreground">
            {t("host.code", { code: room.code })}
          </span>
          <DisplayControls />
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className="press rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive hover:bg-destructive/20"
          >
            🚪 {t("host.exitGame")}
          </button>
        </div>
      </header>


      <div className="my-auto min-h-0 flex-1 flex flex-col items-center justify-center text-center overflow-hidden py-1 sm:py-2">
        <div className="flex flex-col items-center justify-center gap-2 w-full max-w-5xl">
          {question.image_url ? (
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 w-full">
              <QuestionImage
                path={question.image_url}
                className="max-h-[18vh] max-w-[80vw] md:max-w-[30vw] rounded-2xl border border-border object-contain shrink-0"
              />
              <h1
                className={cn(
                  "font-display max-w-3xl leading-snug",
                  getQuestionFontSize(question.question_text, true),
                )}
              >
                {question.question_text || "…"}
              </h1>
            </div>
          ) : (
            <h1
              className={cn(
                "font-display max-w-5xl leading-snug px-2",
                getQuestionFontSize(question.question_text, false),
              )}
            >
              {question.question_text || "…"}
            </h1>
          )}
        </div>

        <div className="mt-2 sm:mt-3 flex w-full max-w-xl items-center justify-between gap-3 shrink-0 px-2">
          {revealing ? (
            <div className="flex-1 flex flex-col items-center">
              <p className="font-display text-xl sm:text-2xl text-lime">
                {t("host.correctAnswer")}
              </p>
              {fastestPlayer ? (
                <div className="mt-2 flex items-center gap-2 rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-500/20 to-fuchsia-500/20 px-3 py-1 text-xs font-bold text-amber-100 shadow-[0_0_20px_rgba(245,158,11,.2)] animate-pop">
                  <span>⚡ أسرع إجابة</span>
                  <PlayerAvatar player={fastestPlayer} size="sm" />
                  <span>{fastestPlayer.nickname}</span>
                </div>
              ) : null}
              {manual ? (
                <button
                  type="button"
                  onClick={() => void advance(phase.index, "reveal")}
                  className="press mt-2 rounded-2xl bg-gradient-hero px-5 py-2 font-display text-base sm:text-lg text-primary-foreground shadow-chunky"
                >
                  {isLast ? t("host.finish") : t("host.showScores")}
                </button>
              ) : null}
            </div>
          ) : (
            <>
              <CountdownRing msLeft={phase.msLeft} totalMs={totalMs} size={76} />
              <div className="flex-1">
                <p className="font-display text-lg sm:text-xl tabular-nums">
                  {everyoneAnswered
                    ? t("host.everyoneAnswered")
                    : t("host.answered", {
                        answered: questionAnswers.length,
                        total: players.length,
                      })}
                </p>
                <div className="mt-1.5">
                  <CountdownBar msLeft={phase.msLeft} totalMs={totalMs} />
                </div>
              </div>
              <button
                type="button"
                onClick={() => void advance(phase.index, "question")}
                className="press rounded-2xl border border-border bg-surface-gradient px-3.5 py-1.5 font-display text-sm"
              >
                {t("host.next")}
              </button>
            </>
          )}
        </div>
      </div>

      <div
        dir="ltr"
        className={cn(
          "shrink-0 w-full max-w-5xl mx-auto grid gap-2 sm:gap-3 pt-1 pb-2 sm:pb-3",
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

      {showExitModal ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-border bg-surface-gradient p-6 text-center shadow-xl animate-pop">
            <h2 className="font-display text-2xl">{t("host.exitGame")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("host.exitConfirm")}</p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => void exitGame()}
                className="press flex-1 rounded-2xl bg-destructive py-3 font-display text-destructive-foreground shadow-md"
              >
                {t("host.exitBtn")}
              </button>
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="press flex-1 rounded-2xl border border-border bg-background py-3 font-display"
              >
                {t("host.cancel")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
