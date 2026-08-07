import { supabase } from "@/integrations/supabase/client";
import { QUIZ_LIBRARY, type LibraryQuiz } from "@/lib/quiz-library";

export type AdminQuizItem = {
  id: string;
  title: string;
  category: string;
  subcategory?: string | null;
  language: string;
  quiz_difficulty: string;
  is_public: boolean;
  created_at: string;
  question_count: number;
  user_id?: string;
  questions?: any[];
  source: "db" | "library";
};

export type AdminCategoryItem = {
  id: string;
  name: string;
  slug: string;
  quiz_count: number;
  subcategories?: { id: string; name: string; slug: string; quiz_count: number }[];
};

/**
 * Fetch ALL quizzes across both Supabase Database AND the static QUIZ_LIBRARY
 */
export async function getAllAdminQuizzes(): Promise<AdminQuizItem[]> {
  try {
    const { data, error } = await (supabase.from("quizzes") as any)
      .select("*, questions(id, question_text, options, correct_index, question_type, time_limit_seconds, order_index, explanation, image_url)")
      .order("created_at", { ascending: false });

    const dbQuizzes: AdminQuizItem[] = [];
    const dbIds = new Set<string>();

    if (!error && data && data.length > 0) {
      data.forEach((q: any) => {
        dbIds.add(q.id);
        dbQuizzes.push({
          id: q.id,
          title: q.title || "كويز بدون عنوان",
          category: q.category || "عام",
          subcategory: q.subcategory || "",
          language: q.language || "ar",
          quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : q.quiz_difficulty === "easy" ? "easy" : "standard",
          is_public: q.is_public ?? true,
          created_at: q.created_at || new Date().toISOString(),
          question_count: Array.isArray(q.questions) ? q.questions.length : 0,
          user_id: q.user_id,
          questions: q.questions || [],
          source: "db",
        });
      });
    }

    // Merge static QUIZ_LIBRARY quizzes not yet in DB
    const libraryQuizzes: AdminQuizItem[] = QUIZ_LIBRARY.filter(
      (q) => !q.archived && q.launch_enabled !== false && !dbIds.has(q.id)
    ).map((q) => ({
      id: q.id,
      title: q.title,
      category: q.category || "عام",
      subcategory: (q as any).subcategory || "",
      language: q.language || "ar",
      quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : q.quiz_difficulty === "easy" ? "easy" : "standard",
      is_public: true,
      created_at: q.created_at || new Date().toISOString(),
      question_count: Array.isArray(q.questions) ? q.questions.length : 0,
      user_id: q.user_id || "system",
      questions: q.questions || [],
      source: "library",
    }));

    return [...dbQuizzes, ...libraryQuizzes];
  } catch (err) {
    console.error("Error fetching admin quizzes:", err);
    // Fallback to library
    return QUIZ_LIBRARY.map((q) => ({
      id: q.id,
      title: q.title,
      category: q.category || "عام",
      subcategory: (q as any).subcategory || "",
      language: q.language || "ar",
      quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : "standard",
      is_public: true,
      created_at: q.created_at || new Date().toISOString(),
      question_count: Array.isArray(q.questions) ? q.questions.length : 0,
      user_id: q.user_id || "system",
      questions: q.questions || [],
      source: "library",
    }));
  }
}

/**
 * Get ALL categories derived from all website quizzes + Supabase categories table
 */
export async function getAllAdminCategories(): Promise<AdminCategoryItem[]> {
  const allQuizzes = await getAllAdminQuizzes();

  // Count quizzes per category name
  const categoryCounts = new Map<string, number>();
  allQuizzes.forEach((q) => {
    const cat = (q.category || "عام").trim();
    if (cat) {
      categoryCounts.set(cat, (categoryCounts.get(cat) || 0) + 1);
    }
  });

  // Try fetching DB categories
  const { data: dbCategories } = await (supabase.from("categories") as any)
    .select("*, subcategories(*)")
    .order("name");

  const categoryMap = new Map<string, AdminCategoryItem>();

  // Add DB Categories first
  if (dbCategories && dbCategories.length > 0) {
    dbCategories.forEach((c: any) => {
      const name = c.name.trim();
      categoryMap.set(name, {
        id: c.id,
        name,
        slug: c.slug || name.toLowerCase().replace(/\s+/g, "-"),
        quiz_count: categoryCounts.get(name) || 0,
        subcategories: (c.subcategories || []).map((sub: any) => ({
          id: sub.id,
          name: sub.name,
          slug: sub.slug,
          quiz_count: allQuizzes.filter((q) => q.subcategory === sub.name).length,
        })),
      });
    });
  }

  // Ensure all categories from quizzes are represented
  categoryCounts.forEach((count, name) => {
    if (!categoryMap.has(name)) {
      categoryMap.set(name, {
        id: `derived-${name.toLowerCase().replace(/\s+/g, "-")}`,
        name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        quiz_count: count,
        subcategories: [],
      });
    }
  });

  return Array.from(categoryMap.values()).sort((a, b) => b.quiz_count - a.quiz_count);
}

/**
 * Get website-wide KPI counts
 */
export async function getAdminKPIStats() {
  const allQuizzes = await getAllAdminQuizzes();
  const allCategories = await getAllAdminCategories();

  let totalQuestions = 0;
  allQuizzes.forEach((q) => {
    totalQuestions += q.question_count;
  });

  // Get users count from Supabase
  const { count: userCount } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  // Get game sessions count from Supabase
  const { count: sessionCount } = await (supabase.from("game_sessions") as any)
    .select("*", { count: "exact", head: true });

  return {
    totalQuizzes: allQuizzes.length,
    totalQuestions,
    totalCategories: allCategories.length,
    totalUsers: userCount || 1,
    totalSessions: sessionCount || 0,
  };
}
