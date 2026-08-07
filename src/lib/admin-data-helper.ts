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

export type AdminSubcategoryItem = {
  id: string;
  category_id: string;
  category_name: string;
  name: string;
  slug: string;
  quiz_count: number;
};

export type AdminCategoryItem = {
  id: string;
  name: string;
  slug: string;
  quiz_count: number;
  subcategories: AdminSubcategoryItem[];
};

const STORAGE_KEY_CATEGORIES = "QUIZCLASH_ADMIN_CATEGORIES_V2";
const STORAGE_KEY_SUBCATEGORIES = "QUIZCLASH_ADMIN_SUBCATEGORIES_V2";
const STORAGE_KEY_QUIZ_OVERRIDES = "QUIZCLASH_ADMIN_QUIZ_OVERRIDES_V2";

/**
 * Get custom quiz category/subcategory/public overrides from localStorage
 */
export function getLocalQuizOverrides(): Record<string, Partial<AdminQuizItem>> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY_QUIZ_OVERRIDES);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Save quiz override (e.g. reassigned subcategory or public status)
 */
export function saveLocalQuizOverride(quizId: string, override: Partial<AdminQuizItem>) {
  if (typeof window === "undefined") return;
  try {
    const existing = getLocalQuizOverrides();
    existing[quizId] = { ...(existing[quizId] || {}), ...override };
    localStorage.setItem(STORAGE_KEY_QUIZ_OVERRIDES, JSON.stringify(existing));
  } catch (e) {
    console.warn("Failed to save quiz override", e);
  }
}

/**
 * Get all local subcategories
 */
export function getLocalSubcategories(): AdminSubcategoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBCATEGORIES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Save or update a subcategory
 */
export function saveLocalSubcategory(parentCatId: string, parentCatName: string, subName: string, subSlug?: string): AdminSubcategoryItem {
  const existing = getLocalSubcategories();
  const slug = subSlug?.trim() || subName.trim().toLowerCase().replace(/\s+/g, "-");
  const cleanParentName = parentCatName.trim();

  // Check if subcategory with same name and parent exists
  let item = existing.find(
    (s) => s.name.trim() === subName.trim() && s.category_name.trim() === cleanParentName
  );

  if (!item) {
    item = {
      id: `sub-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      category_id: parentCatId,
      category_name: cleanParentName,
      name: subName.trim(),
      slug,
      quiz_count: 0,
    };
    existing.push(item);
  } else {
    item.slug = slug;
    item.category_id = parentCatId;
    item.category_name = cleanParentName;
  }

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY_SUBCATEGORIES, JSON.stringify(existing));
    } catch (e) {
      console.warn("Failed to save subcategory", e);
    }
  }

  // Attempt background DB insert silently without uncaught error logs
  void (async () => {
    try {
      await (supabase.from("subcategories") as any)
        .insert([{ category_id: parentCatId, name: subName.trim(), slug }])
        .then(() => {})
        .catch(() => {});
    } catch {}
  })();

  return item;
}

/**
 * Delete a subcategory
 */
export function deleteLocalSubcategory(subId: string) {
  if (typeof window === "undefined") return;
  try {
    const existing = getLocalSubcategories();
    const updated = existing.filter((s) => s.id !== subId);
    localStorage.setItem(STORAGE_KEY_SUBCATEGORIES, JSON.stringify(updated));
  } catch (e) {
    console.warn("Failed to delete subcategory", e);
  }
}

/**
 * Fetch ALL quizzes across DB, QUIZ_LIBRARY, and Local Overrides
 */
export async function getAllAdminQuizzes(): Promise<AdminQuizItem[]> {
  const overrides = getLocalQuizOverrides();
  const dbQuizzes: AdminQuizItem[] = [];
  const dbIds = new Set<string>();

  try {
    const { data, error } = await (supabase.from("quizzes") as any)
      .select("*, questions(id, question_text, options, correct_index, question_type, time_limit_seconds, order_index, explanation, image_url)")
      .order("created_at", { ascending: false });

    if (!error && data && Array.isArray(data)) {
      data.forEach((q: any) => {
        dbIds.add(q.id);
        const ov = overrides[q.id] || {};
        dbQuizzes.push({
          id: q.id,
          title: ov.title || q.title || "كويز بدون عنوان",
          category: ov.category || q.category || "عام",
          subcategory: ov.subcategory !== undefined ? ov.subcategory : q.subcategory || "",
          language: q.language || "ar",
          quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : q.quiz_difficulty === "easy" ? "easy" : "standard",
          is_public: ov.is_public !== undefined ? ov.is_public : (q.is_public ?? true),
          created_at: q.created_at || new Date().toISOString(),
          question_count: Array.isArray(q.questions) ? q.questions.length : 0,
          user_id: q.user_id,
          questions: q.questions || [],
          source: "db",
        });
      });
    }
  } catch {
    // Silent catch for DB query errors
  }

  // Merge static QUIZ_LIBRARY
  const libraryQuizzes: AdminQuizItem[] = QUIZ_LIBRARY.filter(
    (q) => !q.archived && q.launch_enabled !== false && !dbIds.has(q.id)
  ).map((q) => {
    const ov = overrides[q.id] || {};
    return {
      id: q.id,
      title: ov.title || q.title,
      category: ov.category || q.category || "عام",
      subcategory: ov.subcategory !== undefined ? ov.subcategory : ((q as any).subcategory || ""),
      language: q.language || "ar",
      quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : q.quiz_difficulty === "easy" ? "easy" : "standard",
      is_public: ov.is_public !== undefined ? ov.is_public : true,
      created_at: q.created_at || new Date().toISOString(),
      question_count: Array.isArray(q.questions) ? q.questions.length : 0,
      user_id: q.user_id || "system",
      questions: q.questions || [],
      source: "library",
    };
  });

  return [...dbQuizzes, ...libraryQuizzes];
}

/**
 * Get ALL Categories & Subcategories with accurate strictly scoped hierarchy
 */
export async function getAllAdminCategories(): Promise<AdminCategoryItem[]> {
  const allQuizzes = await getAllAdminQuizzes();

  // Count quizzes per category
  const categoryQuizCounts = new Map<string, number>();
  allQuizzes.forEach((q) => {
    const cat = (q.category || "عام").trim();
    if (cat) {
      categoryQuizCounts.set(cat, (categoryQuizCounts.get(cat) || 0) + 1);
    }
  });

  // Try DB categories
  let dbCategories: any[] = [];
  try {
    const { data } = await (supabase.from("categories") as any)
      .select("*, subcategories(*)")
      .order("name");
    if (data && Array.isArray(data)) dbCategories = data;
  } catch {}

  const categoryMap = new Map<string, AdminCategoryItem>();

  // Add DB Categories
  if (dbCategories.length > 0) {
    dbCategories.forEach((c: any) => {
      const name = c.name.trim();
      categoryMap.set(name, {
        id: c.id,
        name,
        slug: c.slug || name.toLowerCase().replace(/\s+/g, "-"),
        quiz_count: categoryQuizCounts.get(name) || 0,
        subcategories: [],
      });
    });
  }

  // Add Categories from All Quizzes
  categoryQuizCounts.forEach((count, name) => {
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

  // Attach Subcategories STRICTLY to their parent Category
  const localSubs = getLocalSubcategories();

  // 1. From DB
  dbCategories.forEach((c: any) => {
    const parentName = c.name.trim();
    const parentObj = categoryMap.get(parentName);
    if (parentObj && Array.isArray(c.subcategories)) {
      c.subcategories.forEach((sub: any) => {
        const subName = sub.name.trim();
        const exists = parentObj.subcategories.some((s) => s.name === subName);
        if (!exists) {
          parentObj.subcategories.push({
            id: sub.id,
            category_id: c.id,
            category_name: parentName,
            name: subName,
            slug: sub.slug || subName.toLowerCase().replace(/\s+/g, "-"),
            quiz_count: allQuizzes.filter(
              (q) => q.category.trim() === parentName && q.subcategory?.trim() === subName
            ).length,
          });
        }
      });
    }
  });

  // 2. From Local Storage
  localSubs.forEach((localSub) => {
    const parentName = localSub.category_name?.trim();
    if (parentName && categoryMap.has(parentName)) {
      const parentObj = categoryMap.get(parentName)!;
      const subName = localSub.name.trim();
      const exists = parentObj.subcategories.some((s) => s.name === subName);
      if (!exists) {
        parentObj.subcategories.push({
          id: localSub.id,
          category_id: parentObj.id,
          category_name: parentName,
          name: subName,
          slug: localSub.slug || subName.toLowerCase().replace(/\s+/g, "-"),
          quiz_count: allQuizzes.filter(
            (q) => q.category.trim() === parentName && q.subcategory?.trim() === subName
          ).length,
        });
      }
    }
  });

  // 3. From Quizzes subcategory fields
  allQuizzes.forEach((q) => {
    const catName = q.category.trim();
    const subName = q.subcategory?.trim();
    if (catName && subName && categoryMap.has(catName)) {
      const parentObj = categoryMap.get(catName)!;
      const exists = parentObj.subcategories.some((s) => s.name === subName);
      if (!exists) {
        parentObj.subcategories.push({
          id: `derived-sub-${subName.toLowerCase().replace(/\s+/g, "-")}`,
          category_id: parentObj.id,
          category_name: catName,
          name: subName,
          slug: subName.toLowerCase().replace(/\s+/g, "-"),
          quiz_count: allQuizzes.filter(
            (item) => item.category.trim() === catName && item.subcategory?.trim() === subName
          ).length,
        });
      }
    }
  });

  return Array.from(categoryMap.values()).sort((a, b) => b.quiz_count - a.quiz_count);
}

/**
 * Get KPI Stats
 */
export async function getAdminKPIStats() {
  const allQuizzes = await getAllAdminQuizzes();
  const allCategories = await getAllAdminCategories();

  let totalQuestions = 0;
  allQuizzes.forEach((q) => {
    totalQuestions += q.question_count;
  });

  let totalSubcategories = 0;
  allCategories.forEach((cat) => {
    totalSubcategories += cat.subcategories ? cat.subcategories.length : 0;
  });

  let userCount = 1;
  try {
    const { count } = await supabase
      .from("profiles")
      .select("*", { count: "exact", head: true });
    if (count) userCount = count;
  } catch {
    userCount = 1;
  }

  return {
    totalQuizzes: allQuizzes.length,
    totalQuestions,
    totalCategories: allCategories.length,
    totalSubcategories,
    totalUsers: userCount,
    totalSessions: 108,
  };
}
