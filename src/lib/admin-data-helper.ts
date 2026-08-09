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
const STORAGE_KEY_DELETED_CATEGORIES = "QUIZCLASH_ADMIN_DELETED_CATS_V2";
const STORAGE_KEY_DELETED_SUBCATEGORIES = "QUIZCLASH_ADMIN_DELETED_SUBS_V2";

export function getDeletedCategories(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DELETED_CATEGORIES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getDeletedSubcategories(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DELETED_SUBCATEGORIES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

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

export function isUUID(str: string | null | undefined): boolean {
  if (!str || typeof str !== "string") return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str.trim());
}

/** Permanently delete quizzes and record library tombstones in one DB transaction. */
export async function deleteAdminQuizzes(
  quizzes: Array<{ id: string; title: string }>
): Promise<number> {
  if (quizzes.length === 0) return 0;

  const { data, error } = await (supabase as any).rpc("delete_admin_quizzes", {
    p_quiz_ids: quizzes.filter((quiz) => isUUID(quiz.id)).map((quiz) => quiz.id),
    p_library_ids: quizzes.map((quiz) => quiz.id),
    p_titles: quizzes.map((quiz) => quiz.title),
  });

  if (error) throw new Error(error.message || "Quiz deletion failed");
  const deletedCount = Number(data);
  if (!Number.isFinite(deletedCount) || deletedCount !== quizzes.length) {
    throw new Error("The database did not confirm every quiz deletion");
  }
  return deletedCount;
}

/**
 * Save quiz override PERMANENTLY to Supabase DB
 */
export async function saveLocalQuizOverride(quizId: string, override: Partial<AdminQuizItem>) {
  if (typeof window !== "undefined") {
    try {
      const existing = getLocalQuizOverrides();
      existing[quizId] = { ...(existing[quizId] || {}), ...override };
      localStorage.setItem(STORAGE_KEY_QUIZ_OVERRIDES, JSON.stringify(existing));
    } catch (e) {
      console.warn("Failed to save quiz override in localStorage", e);
    }
  }

  // Persist permanently in Supabase Database
  try {
    const db = supabase as any;
    const libQuiz = QUIZ_LIBRARY.find((q) => q.id === quizId || q.title === quizId || (override.title && q.title === override.title));
    const targetTitle = override.title || (libQuiz ? libQuiz.title : (isUUID(quizId) ? "" : quizId));
    const validUuid = isUUID(quizId) ? quizId : null;

    // 1. Try RPC first safely (bypasses PostgREST schema cache)
    try {
      const { error: rpcErr } = await db.rpc("upsert_admin_quiz_by_id_or_title", {
        p_quiz_id: validUuid,
        p_title: targetTitle && targetTitle.trim() ? targetTitle.trim() : null,
        p_category: override.category || (libQuiz ? libQuiz.category : "عام") || "عام",
        p_subcategory: override.subcategory !== undefined ? override.subcategory : ((libQuiz as any)?.subcategory || ""),
        p_difficulty: override.quiz_difficulty || (libQuiz ? libQuiz.quiz_difficulty : "standard") || "standard",
        p_language: override.language || (libQuiz ? libQuiz.language : "ar") || "ar",
        p_is_public: override.is_public !== undefined ? override.is_public : true,
      });

      if (!rpcErr) return;
      console.warn("upsert_admin_quiz_by_id_or_title failed, falling back:", rpcErr);
    } catch (e) {
      // RPC fallback
    }

    // 2. Direct DB fallback if RPC is unavailable
    const { data: userData } = await supabase.auth.getUser();
    const currentUserId = userData.user?.id ?? null;
    let existingDbQuiz: any = null;

    if (validUuid) {
      const { data: byId } = await db.from("quizzes").select("id, title").eq("id", validUuid).maybeSingle();
      if (byId) existingDbQuiz = byId;
    }

    if (!existingDbQuiz && targetTitle && targetTitle.trim() && !isUUID(targetTitle)) {
      const { data: byTitle } = await db.from("quizzes").select("id, title").eq("title", targetTitle.trim()).maybeSingle();
      if (byTitle) existingDbQuiz = byTitle;
    }

    if (existingDbQuiz) {
      const updatePayload: any = {};
      if (override.title !== undefined) updatePayload.title = override.title;
      if (override.category !== undefined) updatePayload.category = override.category;
      if (override.subcategory !== undefined) updatePayload.subcategory = override.subcategory;
      if (override.is_public !== undefined) updatePayload.is_public = override.is_public;
      if (override.quiz_difficulty !== undefined) updatePayload.quiz_difficulty = override.quiz_difficulty;
      if (override.language !== undefined) updatePayload.language = override.language;

      const { error } = await db.from("quizzes").update(updatePayload).eq("id", existingDbQuiz.id);
      if (error) throw error;
    } else if (targetTitle && targetTitle.trim() && !isUUID(targetTitle)) {
      const insertPayload: any = {
        title: targetTitle.trim(),
        category: override.category || (libQuiz ? libQuiz.category : "عام") || "عام",
        subcategory: override.subcategory !== undefined ? override.subcategory : ((libQuiz as any)?.subcategory || ""),
        is_public: override.is_public !== undefined ? override.is_public : true,
        quiz_difficulty: override.quiz_difficulty || (libQuiz ? libQuiz.quiz_difficulty : "standard") || "standard",
        language: override.language || (libQuiz ? libQuiz.language : "ar") || "ar",
      };
      if (currentUserId) insertPayload.user_id = currentUserId;

      const { error } = await db.from("quizzes").insert([insertPayload]);
      if (error) throw error;
    }
  } catch (err) {
    console.error("Failed to persist quiz change:", err);
    throw err;
  }
}

/**
 * Get all local main categories
 */
export function getLocalCategories(): AdminCategoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Save or update a main category PERMANENTLY in Supabase DB
 */
export async function saveLocalCategory(catName: string, catSlug?: string): Promise<AdminCategoryItem> {
  const name = catName.trim();
  const slug = catSlug?.trim() || name.toLowerCase().replace(/\s+/g, "-");

  const existing = getLocalCategories();
  let item = existing.find((c) => c.name.trim().toLowerCase() === name.toLowerCase());

  if (!item) {
    item = {
      id: `cat-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name,
      slug,
      quiz_count: 0,
      subcategories: [],
    };
    existing.push(item);
  } else {
    item.slug = slug;
  }

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(existing));

      const deletedCats = getDeletedCategories().filter(
        (x) => x.toLowerCase() !== name.toLowerCase() && x.toLowerCase() !== item!.id.toLowerCase()
      );
      localStorage.setItem(STORAGE_KEY_DELETED_CATEGORIES, JSON.stringify(deletedCats));
    } catch (e) {
      console.warn("Failed to save category locally", e);
    }
  }

  // Persist permanently in Supabase DB
  try {
    const db = supabase as any;
    const { data: existingCat } = await db.from("categories").select("id").eq("name", name).maybeSingle();
    if (existingCat) {
      const { error } = await db.from("categories").update({ name, slug }).eq("id", existingCat.id);
      if (error) throw error;
    } else {
      const { error } = await db.from("categories").insert([{ name, slug }]);
      if (error) throw error;
    }
  } catch (e) {
    console.error("Failed to persist category to Supabase DB:", e);
    throw e;
  }

  return item;
}

/**
 * Delete a main category PERMANENTLY from Supabase DB
 */
export async function deleteLocalCategory(catId: string, catName?: string) {
  if (typeof window !== "undefined") {
    try {
      const existing = getLocalCategories();
      const updated = existing.filter((c) => c.id !== catId && c.name.trim().toLowerCase() !== (catName || "").trim().toLowerCase());
      localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(updated));

      const deletedList = getDeletedCategories();
      if (!deletedList.includes(catId)) deletedList.push(catId);
      if (catName && !deletedList.includes(catName.trim())) deletedList.push(catName.trim());
      localStorage.setItem(STORAGE_KEY_DELETED_CATEGORIES, JSON.stringify(deletedList));
    } catch (e) {
      console.warn("Failed to delete category locally", e);
    }
  }

  // Persist deletion permanently in Supabase DB
  try {
    const db = supabase as any;
    if (catId && !catId.startsWith("cat-")) {
      const { error } = await db.from("categories").delete().eq("id", catId);
      if (error) throw error;
    }
    if (catName) {
      const { error } = await db.from("categories").delete().eq("name", catName);
      if (error) throw error;
    }
  } catch (e) {
    console.error("Failed to delete category from Supabase DB:", e);
    throw e;
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
 * Save or update a subcategory PERMANENTLY in Supabase DB
 */
export async function saveLocalSubcategory(parentCatId: string, parentCatName: string, subName: string, subSlug?: string): Promise<AdminSubcategoryItem> {
  const existing = getLocalSubcategories();
  const slug = subSlug?.trim() || subName.trim().toLowerCase().replace(/\s+/g, "-");
  const cleanParentName = parentCatName.trim();

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

      const deletedSubs = getDeletedSubcategories().filter(
        (x) => x.toLowerCase() !== subName.trim().toLowerCase() && x.toLowerCase() !== item!.id.toLowerCase()
      );
      localStorage.setItem(STORAGE_KEY_DELETED_SUBCATEGORIES, JSON.stringify(deletedSubs));
    } catch (e) {
      console.warn("Failed to save subcategory locally", e);
    }
  }

  // Persist permanently in Supabase DB
  try {
    const db = supabase as any;
    let realCatId: string | null = null;
    if (parentCatId && !parentCatId.startsWith("cat-")) {
      realCatId = parentCatId;
    } else if (cleanParentName) {
      const { data: pCat } = await db.from("categories").select("id").eq("name", cleanParentName).maybeSingle();
      if (pCat) realCatId = pCat.id;
    }

    const { data: existingSub } = await db.from("subcategories").select("id").eq("name", subName.trim()).maybeSingle();
    if (existingSub) {
      const updatePayload: any = { name: subName.trim(), slug };
      if (realCatId) updatePayload.category_id = realCatId;
      const { error } = await db.from("subcategories").update(updatePayload).eq("id", existingSub.id);
      if (error) throw error;
    } else {
      const insertPayload: any = { name: subName.trim(), slug };
      if (realCatId) insertPayload.category_id = realCatId;
      const { error } = await db.from("subcategories").insert([insertPayload]);
      if (error) throw error;
    }
  } catch (e) {
    console.error("Failed to persist subcategory to Supabase DB:", e);
    throw e;
  }

  return item;
}

/**
 * Delete a subcategory PERMANENTLY from Supabase DB
 */
export async function deleteLocalSubcategory(subId: string, subName?: string) {
  if (typeof window !== "undefined") {
    try {
      const existing = getLocalSubcategories();
      const updated = existing.filter((s) => s.id !== subId && s.name.trim().toLowerCase() !== (subName || "").trim().toLowerCase());
      localStorage.setItem(STORAGE_KEY_SUBCATEGORIES, JSON.stringify(updated));

      const deletedList = getDeletedSubcategories();
      if (!deletedList.includes(subId)) deletedList.push(subId);
      if (subName && !deletedList.includes(subName.trim())) deletedList.push(subName.trim());
      localStorage.setItem(STORAGE_KEY_DELETED_SUBCATEGORIES, JSON.stringify(deletedList));
    } catch (e) {
      console.warn("Failed to delete subcategory locally", e);
    }
  }

  // Persist deletion permanently in Supabase DB
  try {
    const db = supabase as any;
    if (subId && !subId.startsWith("sub-")) {
      const { error } = await db.from("subcategories").delete().eq("id", subId);
      if (error) throw error;
    }
    if (subName) {
      const { error } = await db.from("subcategories").delete().eq("name", subName);
      if (error) throw error;
    }
  } catch (e) {
    console.error("Failed to delete subcategory from Supabase DB:", e);
    throw e;
  }
}

/**
 * Fetch ALL quizzes across DB and QUIZ_LIBRARY
 */
export async function getAllAdminQuizzes(): Promise<AdminQuizItem[]> {
  const overrides = getLocalQuizOverrides();
  const dbQuizzes: AdminQuizItem[] = [];
  const dbIds = new Set<string>();
  const dbTitles = new Set<string>();

  const cleanTitle = (s: string) => (s || "").toLowerCase().replace(/[\u064B-\u0652\u0640]/g, "").trim();
  const deletedLibraryIds = new Set<string>();
  const deletedTitles = new Set<string>();

  const { data: deletedData, error: deletedError } = await (supabase as any).rpc(
    "get_catalog_deleted_quizzes"
  );
  if (deletedError) {
    throw new Error(`Could not synchronize deleted quizzes: ${deletedError.message}`);
  }
  if (!Array.isArray(deletedData)) {
    throw new Error("Could not synchronize deleted quizzes: invalid database response");
  }
  deletedData.forEach((item: any) => {
    if (item.library_id) deletedLibraryIds.add(item.library_id);
    if (item.title) deletedTitles.add(cleanTitle(item.title));
  });

  const { data, error } = await (supabase.from("quizzes") as any)
    .select("*, questions(*)")
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Could not synchronize quizzes: ${error.message}`);
  if (!Array.isArray(data)) {
    throw new Error("Could not synchronize quizzes: invalid database response");
  }

  data.forEach((q: any) => {
    if (q.quiz_kind === "custom_generated") return;
        const matchingLibraryQuiz = QUIZ_LIBRARY.find(
          (libraryQuiz) =>
            libraryQuiz.id === q.id || cleanTitle(libraryQuiz.title) === cleanTitle(q.title),
        );
        const resolvedQuestions =
          Array.isArray(q.questions) && q.questions.length > 0
            ? q.questions
            : matchingLibraryQuiz?.questions || [];
        if (q.id) dbIds.add(q.id);
        if (q.title) dbTitles.add(cleanTitle(q.title));

        const ov = overrides[q.id] || overrides[cleanTitle(q.title)] || {};
        dbQuizzes.push({
          id: q.id,
          title: ov.title || q.title || "كويز بدون عنوان",
          category: ov.category || q.category || "عام",
          subcategory: ov.subcategory !== undefined ? ov.subcategory : q.subcategory || "",
          language: q.language || "ar",
          quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : q.quiz_difficulty === "easy" ? "easy" : "standard",
          is_public: ov.is_public !== undefined ? ov.is_public : (q.is_public ?? true),
          created_at: q.created_at || new Date().toISOString(),
          question_count: resolvedQuestions.length,
          user_id: q.user_id,
          questions: resolvedQuestions,
          source: "db",
        });
  });

  // Merge static QUIZ_LIBRARY (ONLY for quizzes NOT present in Supabase DB by ID or Title)
  const libraryQuizzes: AdminQuizItem[] = QUIZ_LIBRARY.filter(
    (q) =>
      !q.archived &&
      q.launch_enabled !== false &&
      !deletedLibraryIds.has(q.id) &&
      !deletedTitles.has(cleanTitle(q.title)) &&
      !dbIds.has(q.id) &&
      !dbTitles.has(cleanTitle(q.title))
  ).map((q) => {
    const ov = overrides[q.id] || overrides[cleanTitle(q.title)] || {};
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
 * Get ALL Categories & Subcategories with accurate strictly scoped hierarchy from Supabase DB
 */
export async function getAllAdminCategories(providedQuizzes?: AdminQuizItem[]): Promise<AdminCategoryItem[]> {
  const allQuizzes = providedQuizzes || await getAllAdminQuizzes();

  // Count quizzes per category
  const categoryQuizCounts = new Map<string, number>();
  allQuizzes.forEach((q) => {
    const cat = (q.category || "عام").trim();
    if (cat) {
      categoryQuizCounts.set(cat, (categoryQuizCounts.get(cat) || 0) + 1);
    }
  });

  // Try DB categories safely
  let dbCategories: any[] = [];
  try {
    const { data, error } = await (supabase.from("categories") as any)
      .select("*, subcategories(*)");
    if (!error && data && Array.isArray(data)) dbCategories = data;
  } catch {
    // Fall back to the local catalog when the remote category query is unavailable.
  }

  const categoryMap = new Map<string, AdminCategoryItem>();

  // Add DB Categories
  if (dbCategories.length > 0) {
    dbCategories.forEach((c: any) => {
      const name = (c.name || c.name_ar || c.name_en || c.title || "").trim();
      if (name) {
        categoryMap.set(name, {
          id: c.id,
          name,
          slug: c.slug || name.toLowerCase().replace(/\s+/g, "-"),
          quiz_count: categoryQuizCounts.get(name) || 0,
          subcategories: [],
        });
      }
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

  // Add Local Categories
  const localCats = getLocalCategories();
  localCats.forEach((lc) => {
    const name = lc.name.trim();
    if (!categoryMap.has(name)) {
      categoryMap.set(name, {
        id: lc.id,
        name,
        slug: lc.slug || name.toLowerCase().replace(/\s+/g, "-"),
        quiz_count: categoryQuizCounts.get(name) || 0,
        subcategories: [],
      });
    }
  });

  // Attach Subcategories
  const localSubs = getLocalSubcategories();

  // 1. From DB
  dbCategories.forEach((c: any) => {
    const parentName = (c.name || c.name_ar || c.name_en || "").trim();
    const parentObj = categoryMap.get(parentName);
    if (parentObj && Array.isArray(c.subcategories)) {
      c.subcategories.forEach((sub: any) => {
        const subName = (sub.name || sub.name_ar || sub.name_en || "").trim();
        if (subName) {
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

  const deletedCats = new Set(getDeletedCategories().map((x) => x.toLowerCase().trim()));
  const deletedSubs = new Set(getDeletedSubcategories().map((x) => x.toLowerCase().trim()));

  const result: AdminCategoryItem[] = [];

  categoryMap.forEach((parentObj, key) => {
    const isDeletedCat =
      deletedCats.has(key.toLowerCase().trim()) ||
      deletedCats.has(parentObj.id.toLowerCase().trim());

    if (!isDeletedCat) {
      parentObj.subcategories = parentObj.subcategories.filter(
        (s) =>
          !deletedSubs.has(s.id.toLowerCase().trim()) &&
          !deletedSubs.has(s.name.toLowerCase().trim())
      );
      result.push(parentObj);
    }
  });

  return result.sort((a, b) => b.quiz_count - a.quiz_count);
}

/**
 * Get KPI Stats
 */
export async function getAdminKPIStats() {
  const [allQuizzes, activityResult] = await Promise.all([
    getAllAdminQuizzes(),
    (supabase.rpc as any)("admin_activity_summary"),
  ]);
  const allCategories = await getAllAdminCategories(allQuizzes);

  if (activityResult.error) {
    throw new Error(`Could not load unified admin activity: ${activityResult.error.message}`);
  }

  let totalQuestions = 0;
  allQuizzes.forEach((q) => {
    totalQuestions += q.question_count;
  });

  let totalSubcategories = 0;
  allCategories.forEach((cat) => {
    totalSubcategories += cat.subcategories ? cat.subcategories.length : 0;
  });

  const activity = activityResult.data || {};

  return {
    totalQuizzes: allQuizzes.length,
    totalQuestions,
    totalCategories: allCategories.length,
    totalSubcategories,
    totalUsers: Number(activity.users || 0),
    totalSessions: Number(activity.game_sessions || 0),
  };
}
