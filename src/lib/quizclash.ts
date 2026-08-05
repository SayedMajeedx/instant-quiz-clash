export type Quiz = {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
  is_public?: boolean;
  category?: string | null;
  language?: string | null;
};

export type QuestionType = "multi" | "boolean";

export type Question = {
  id: string;
  quiz_id: string;
  question_text: string;
  options: string[];
  correct_index: number;
  time_limit_seconds: number;
  order_index: number;
  image_url: string | null;
  question_type: QuestionType;
  explanation?: string | null;
  difficulty?: "easy" | "medium" | "hard" | string;
  subcategory?: string | null;
  tags?: string[];
  source?: string | null;
  external_id?: string | null;
  is_verified?: boolean;
  version?: number;
};

export type CursorPhase = "question" | "reveal" | "board";

export type Room = {
  id: string;
  code: string;
  quiz_id: string;
  status: "lobby" | "active" | "ended";
  started_at: string | null;
  team_count: number;
  advance_mode: "auto" | "manual";
  team_mode: "auto" | "manual";
  cursor_index: number;
  cursor_phase: CursorPhase;
  phase_started_at: string | null;
  reveal_ms?: number;
  board_ms?: number;
  is_paused?: boolean;
};


export type Player = {
  id: string;
  room_id: string;
  nickname: string;
  avatar_color: string;
  joined_at: string;
  team_index: number | null;
  used_double: boolean;
  used_fifty: boolean;
  fifty_question_id: string | null;
  fifty_hidden: number[] | null;
};

export type Answer = {
  id: string;
  room_id: string;
  question_id: string;
  player_id: string;
  choice_index: number;
  answered_at: string;
  is_correct: boolean;
  points_awarded: number;
  streak_bonus: number;
  powerup: string | null;
};

/** Inter-question segment durations (ms). Every screen derives phase from these. */
export const REVEAL_MS = 2500;
export const BOARD_MS = 4500;
export const MAX_POINTS = 1000;
export const MIN_POINTS = 300;

export const ANSWER_STYLES = [
  { shape: "triangle", label: "Triangle", bg: "bg-answer-1", shade: "bg-answer-1-shade", text: "text-answer-1" },
  { shape: "diamond", label: "Diamond", bg: "bg-answer-2", shade: "bg-answer-2-shade", text: "text-answer-2" },
  { shape: "circle", label: "Circle", bg: "bg-answer-3", shade: "bg-answer-3-shade", text: "text-answer-3" },
  { shape: "square", label: "Square", bg: "bg-answer-4", shade: "bg-answer-4-shade", text: "text-answer-4" },
] as const;

export const AVATAR_COLORS = [
  "#a855f7",
  "#ec4899",
  "#f59e0b",
  "#22c55e",
  "#3b82f6",
  "#ef4444",
  "#14b8a6",
  "#eab308",
];

export function randomCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i += 1) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}

export function pointsFor(timeLimitSeconds: number, msUsed: number): number {
  const limit = Math.max(1, timeLimitSeconds) * 1000;
  const ratio = Math.min(1, Math.max(0, msUsed / limit));
  return Math.round((MAX_POINTS - (MAX_POINTS - MIN_POINTS) * ratio) / 10) * 10;
}

export type Phase =
  | { kind: "lobby" }
  | { kind: "question"; index: number; msLeft: number; question: Question }
  | { kind: "reveal"; index: number; msLeft: number; question: Question }
  | { kind: "leaderboard"; index: number; msLeft: number; question: Question }
  | { kind: "ended" };

/** True/false questions only ever render two tiles. */
export function optionCount(question: Pick<Question, "question_type">): number {
  return question.question_type === "boolean" ? 2 : 4;
}

/**
 * The room carries an explicit cursor (`cursor_index` + `cursor_phase`) and the
 * wall-clock time that stage began. Countdowns are derived from that timestamp,
 * so refreshes and late joins land on the right screen, while the host can skip
 * ahead the moment everyone has answered — or hold a stage in manual mode.
 */
export function phaseAt(room: Room | null, questions: Question[], now: number): Phase {
  if (!room) return { kind: "lobby" };
  if (room.status === "ended") return { kind: "ended" };
  if (!room.started_at || questions.length === 0) return { kind: "lobby" };
  if (now < new Date(room.started_at).getTime()) return { kind: "lobby" };

  const index = Math.min(Math.max(0, room.cursor_index), questions.length - 1);
  const question = questions[index]!;

  const startedAt = new Date(room.started_at).getTime();
  const phaseStartedAt = room.phase_started_at ? new Date(room.phase_started_at).getTime() : startedAt;

  // If paused, freeze clock at phaseStartedAt timestamp so elapsed time stops advancing
  const effectiveNow = room.is_paused ? phaseStartedAt : now;
  const elapsed = Math.max(0, effectiveNow - phaseStartedAt);

  const revealMs = room.reveal_ms ?? REVEAL_MS;
  const boardMs = room.board_ms ?? BOARD_MS;

  if (room.cursor_phase === "reveal") {
    return { kind: "reveal", index, msLeft: Math.max(0, revealMs - elapsed), question };
  }
  if (room.cursor_phase === "board") {
    return { kind: "leaderboard", index, msLeft: Math.max(0, boardMs - elapsed), question };
  }
  const qMs = Math.max(1, question.time_limit_seconds) * 1000;
  return { kind: "question", index, msLeft: Math.max(0, qMs - elapsed), question };
}

export type Standing = {
  player: Player;
  total: number;
  rank: number;
  prevTotal: number;
  prevRank: number;
  lastPoints: number;
  streak: number;
  correct: number;
  answered: number;
};

export function standings(players: Player[], answers: Answer[], questions: Question[], upToIndex: number): Standing[] {
  const orderedIds = questions.slice(0, upToIndex + 1).map((q) => q.id);

  let prevStandingsMap: Record<string, { prevRank: number; prevTotal: number }> = {};
  if (upToIndex > 0) {
    const prevOrderedIds = questions.slice(0, upToIndex).map((q) => q.id);
    const prevRows = players.map((player) => {
      const mine = answers.filter((a) => a.player_id === player.id && prevOrderedIds.includes(a.question_id));
      const total = mine.reduce((sum, a) => sum + a.points_awarded, 0);
      return { id: player.id, nickname: player.nickname, total, rank: 0 };
    });
    prevRows.sort((a, b) => b.total - a.total || a.nickname.localeCompare(b.nickname));
    prevRows.forEach((r, i) => {
      prevStandingsMap[r.id] = { prevRank: i + 1, prevTotal: r.total };
    });
  }

  const rows = players.map((player) => {
    const mine = answers.filter((a) => a.player_id === player.id && orderedIds.includes(a.question_id));
    const total = mine.reduce((sum, a) => sum + a.points_awarded, 0);
    let streak = 0;
    for (let i = orderedIds.length - 1; i >= 0; i -= 1) {
      const a = mine.find((x) => x.question_id === orderedIds[i]);
      if (a?.is_correct) streak += 1;
      else break;
    }
    const last = mine.find((a) => a.question_id === orderedIds[orderedIds.length - 1]);
    const lastPoints = last?.points_awarded ?? 0;
    const prevInfo = prevStandingsMap[player.id];
    const prevTotal = prevInfo ? prevInfo.prevTotal : Math.max(0, total - lastPoints);

    return {
      player,
      total,
      streak,
      correct: mine.filter((a) => a.is_correct).length,
      answered: mine.length,
      lastPoints,
      rank: 0,
      prevTotal,
      prevRank: prevInfo ? prevInfo.prevRank : 0,
    };
  });
  rows.sort((a, b) => b.total - a.total || a.player.nickname.localeCompare(b.player.nickname));
  rows.forEach((r, i) => {
    r.rank = i + 1;
    if (r.prevRank === 0) {
      r.prevRank = r.rank;
    }
  });
  return rows;
}

export type TeamStanding = { teamIndex: number; total: number; members: number; rank: number };

/** Sums individual standings per team so the host screen can show a team race. */
export function teamStandings(rows: Standing[]): TeamStanding[] {
  const byTeam = new Map<number, TeamStanding>();
  for (const row of rows) {
    const idx = row.player.team_index;
    if (idx === null || idx === undefined) continue;
    const entry = byTeam.get(idx) ?? { teamIndex: idx, total: 0, members: 0, rank: 0 };
    entry.total += row.total;
    entry.members += 1;
    byTeam.set(idx, entry);
  }
  const teams = [...byTeam.values()].sort((a, b) => b.total - a.total || a.teamIndex - b.teamIndex);
  teams.forEach((teamRow, i) => {
    teamRow.rank = i + 1;
  });
  return teams;
}

export const TEAM_COLORS = ["#a855f7", "#f59e0b", "#22c55e", "#3b82f6"];
export const POWERUPS = ["double", "fifty"] as const;
export type PowerUp = (typeof POWERUPS)[number];
