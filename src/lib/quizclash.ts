export type Quiz = {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
};

export type Question = {
  id: string;
  quiz_id: string;
  question_text: string;
  options: string[];
  correct_index: number;
  time_limit_seconds: number;
  order_index: number;
};

export type Room = {
  id: string;
  code: string;
  quiz_id: string;
  status: "lobby" | "active" | "ended";
  started_at: string | null;
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
export const REVEAL_MS = 4500;
export const BOARD_MS = 5500;
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

/**
 * Pure function: the current phase is fully determined by the shared
 * `started_at` timestamp plus each question's duration. No client needs to
 * "advance" anything, so refreshes and late joins land on the right screen.
 */
export function phaseAt(
  startedAt: string | null,
  questions: Question[],
  now: number,
  status: Room["status"] = "active",
): Phase {
  if (status === "ended") return { kind: "ended" };
  if (!startedAt || questions.length === 0) return { kind: "lobby" };
  let cursor = now - new Date(startedAt).getTime();
  if (cursor < 0) return { kind: "lobby" };

  for (let i = 0; i < questions.length; i += 1) {
    const q = questions[i]!;
    const qMs = Math.max(1, q.time_limit_seconds) * 1000;
    if (cursor < qMs) return { kind: "question", index: i, msLeft: qMs - cursor, question: q };
    cursor -= qMs;
    if (cursor < REVEAL_MS) return { kind: "reveal", index: i, msLeft: REVEAL_MS - cursor, question: q };
    cursor -= REVEAL_MS;
    const isLast = i === questions.length - 1;
    if (!isLast) {
      if (cursor < BOARD_MS) return { kind: "leaderboard", index: i, msLeft: BOARD_MS - cursor, question: q };
      cursor -= BOARD_MS;
    }
  }
  return { kind: "ended" };
}

export function questionStartMs(startedAt: string, questions: Question[], index: number): number {
  let ms = new Date(startedAt).getTime();
  for (let i = 0; i < index; i += 1) {
    const q = questions[i]!;
    ms += Math.max(1, q.time_limit_seconds) * 1000 + REVEAL_MS + BOARD_MS;
  }
  return ms;
}

export type Standing = {
  player: Player;
  total: number;
  rank: number;
  lastPoints: number;
  streak: number;
  correct: number;
  answered: number;
};

export function standings(players: Player[], answers: Answer[], questions: Question[], upToIndex: number): Standing[] {
  const orderedIds = questions.slice(0, upToIndex + 1).map((q) => q.id);
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
    return {
      player,
      total,
      streak,
      correct: mine.filter((a) => a.is_correct).length,
      answered: mine.length,
      lastPoints: last?.points_awarded ?? 0,
      rank: 0,
    };
  });
  rows.sort((a, b) => b.total - a.total || a.player.nickname.localeCompare(b.player.nickname));
  rows.forEach((r, i) => {
    r.rank = i + 1;
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
