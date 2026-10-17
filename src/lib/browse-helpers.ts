import {
  BookOpen,
  Clapperboard,
  Car,
  Cpu,
  FlaskConical,
  Gamepad2,
  Globe2,
  Landmark,
  Lightbulb,
  Palette,
  PenLine,
  Puzzle,
  Rocket,
  ScrollText,
  Sigma,
  Swords,
  Trophy,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type CategoryInfo = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export const CATEGORY_ICONS: Record<string, string> = {
  "سلسلة مسابقات أهل البيت (ع)": "🕌",
  "أنمي": "⚔️",
  "ألعاب فيديو": "🎮",
  "تاريخ": "📜",
  "جغرافيا": "🌍",
  "علوم وطب": "🔬",
  "رياضة": "⚽",
  "ثقافة وفنون": "🎨",
  "لغة عربية وأدب": "✍️",
  "معلومات عامة": "💡",
  "إسلاميات": "🕌",
  "ألغاز ومنطق": "🧩",
  "أفلام ومسلسلات": "🎬",
  "تكنولوجيا": "💻",
  "رياضيات": "📐",
  "اختراعات واكتشافات": "💡",
  "ثقافات ومطابخ": "🍳",
  "معالم وعواصم": "🏛️",
  "فضاء": "🚀",
};

export function getCategoryIcon(catName: string): string {
  if (!catName) return "📚";
  for (const [key, icon] of Object.entries(CATEGORY_ICONS)) {
    if (catName.includes(key) || key.includes(catName)) return icon;
  }
  if (catName.includes("أنمي") || catName.includes("Anime")) return "⚔️";
  if (catName.includes("رياضة") || catName.includes("Sport")) return "⚽";
  if (catName.includes("دين") || catName.includes("إسلام")) return "🕌";
  if (catName.includes("تاريخ") || catName.includes("History")) return "📜";
  if (catName.includes("جغراف") || catName.includes("Geo")) return "🌍";
  if (catName.includes("علوم") || catName.includes("Science")) return "🔬";
  if (catName.includes("لغة") || catName.includes("عرب")) return "✍️";
  if (catName.includes("فيلم") || catName.includes("مسلسل") || catName.includes("Movie")) return "🎬";
  if (catName.includes("لعبة") || catName.includes("Game")) return "🎮";
  if (catName.includes("تقن") || catName.includes("Tech")) return "💻";
  return "💡";
}

/**
 * Clean redundant difficulty suffix from titles like "متنوع - خبير" -> "متنوع"
 * or "علوم القرآن والتفسير · خبير" -> "علوم القرآن والتفسير"
 */
export function cleanQuizTitle(title: string): string {
  if (!title) return "";
  return title
    .replace(/\s*[-·•]\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي|متنوع)\s*(\d+|\(\d+\))?/gi, (_, __, num) => {
      return num ? ` ${num}` : "";
    })
    .replace(/\s*[-·•]\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي|متنوع)/gi, "")
    .replace(/\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Standardize difficulty indicator for cards
 */
export function getDifficultyDetails(q: { difficulty?: string | null; quiz_difficulty?: string | null; title?: string }) {
  const rawDiff = (q.difficulty || q.quiz_difficulty || "").toLowerCase();
  const title = (q.title || "").toLowerCase();

  if (rawDiff === "easy" || rawDiff === "beginner" || rawDiff === "سهل" || rawDiff === "مبتدئ" || title.includes("سهل") || title.includes("مبتدئ")) {
    return {
      label: "سهل",
      icon: "🟢",
      badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
    };
  }

  if (rawDiff === "challenge" || rawDiff === "expert" || rawDiff === "hard" || rawDiff === "خبير" || rawDiff === "صعب" || title.includes("خبير") || title.includes("صعب")) {
    return {
      label: "صعب",
      icon: "🔴",
      badgeClass: "bg-rose-500/15 text-rose-400 border-rose-500/40",
    };
  }

  return {
    label: "متوسط",
    icon: "🟡",
    badgeClass: "bg-amber-500/15 text-amber-400 border-amber-500/40",
  };
}

/* ---------- Redesign: category marks and difficulty badges without emoji ---------- */


// Order matters: "رياضيات" (maths) must match before "رياض" (sports).
const CATEGORY_MARKS: Array<[string[], LucideIcon]> = [
  [["رياضيات", "Math"], Sigma],
  [["سيارات", "مركبات", "Car"], Car],
  [["أهل البيت", "إسلام", "دين", "قرآن"], BookOpen],
  [["أنمي", "Anime"], Swords],
  [["ألعاب فيديو", "Game"], Gamepad2],
  [["تاريخ", "History"], ScrollText],
  [["جغراف", "Geo"], Globe2],
  [["معالم", "عواصم"], Landmark],
  [["علوم", "طب", "Science"], FlaskConical],
  [["رياض", "Sport"], Trophy],
  [["فنون", "ثقافة وفن"], Palette],
  [["لغة", "أدب", "عرب"], PenLine],
  [["ألغاز", "منطق"], Puzzle],
  [["أفلام", "مسلسل", "Movie"], Clapperboard],
  [["تكنولوجيا", "تقن", "Tech"], Cpu],
  [["فضاء", "Space"], Rocket],
  [["مطابخ", "طبخ"], UtensilsCrossed],
];

const MARK_COLORS = [
  { bg: "bg-answer-2", fg: "text-white" },
  { bg: "bg-answer-4", fg: "text-white" },
  { bg: "bg-answer-1", fg: "text-white" },
  { bg: "bg-answer-3", fg: "text-on-sun" },
];

/** An icon and one of the four answer colours for a category, stable per name. */
export function getCategoryMark(catName: string): { Icon: LucideIcon; bg: string; fg: string } {
  const name = catName || "";
  const match = CATEGORY_MARKS.find(([keys]) => keys.some((key) => name.includes(key)));
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const color = MARK_COLORS[hash % MARK_COLORS.length]!;
  return { Icon: match ? match[1] : Lightbulb, ...color };
}

/** Flat difficulty badge: the dot carries the level, the label says it in words. */
export function getDifficultyStyle(q: { difficulty?: string | null; quiz_difficulty?: string | null; title?: string }) {
  const { label } = getDifficultyDetails(q);
  const dot = label === "سهل" ? "bg-answer-4" : label === "صعب" ? "bg-answer-1" : "bg-answer-3";
  return { label, dot };
}
