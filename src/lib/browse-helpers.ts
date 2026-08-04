export type CategoryInfo = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export const CATEGORY_ICONS: Record<string, string> = {
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
