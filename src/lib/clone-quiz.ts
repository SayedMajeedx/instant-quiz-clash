import { supabase } from "@/integrations/supabase/client";
import { QUIZ_LIBRARY } from "@/lib/quiz-library";
import { STARTER_QUIZZES } from "@/lib/starter-quizzes";
import type { Question, Quiz } from "@/lib/quizclash";

export type CloneQuizResult = {
  success: boolean;
  newQuizId?: string;
  error?: string;
};

export async function cloneQuiz(
  quizId: string,
  quizMeta: { title: string; category: string | null; language: string | null },
  userId: string,
): Promise<CloneQuizResult> {
  try {
    // 1. Check local library first, then starter quizzes, then Supabase DB
    const libraryMatch = QUIZ_LIBRARY.find((q) => q.id === quizId);
    const starterMatch = STARTER_QUIZZES.find((sq) => sq.id === quizId);

    let questionsToCopy: Partial<Question>[] = [];

    if (libraryMatch) {
      questionsToCopy = libraryMatch.questions.map((q, idx) => ({
        question_text: q.question_text,
        options: Array.isArray(q.options) ? q.options : ["", "", "", ""],
        correct_index:
          typeof q.correct_index === "number" ? Math.max(0, Math.min(3, q.correct_index)) : 0,
        time_limit_seconds:
          typeof q.time_limit_seconds === "number"
            ? Math.max(5, Math.min(120, q.time_limit_seconds))
            : 30,
        order_index: idx,
        question_type: q.question_type || "multi",
        explanation: q.explanation || null,
        difficulty: q.difficulty || "medium",
        subcategory: q.subcategory || null,
        tags: Array.isArray(q.tags) ? q.tags : [],
        source: q.source || null,
        external_id: q.external_id || null,
        is_verified: q.is_verified !== false,
        version: typeof q.version === "number" ? q.version : 1,
      }));
    } else if (starterMatch) {
      questionsToCopy = starterMatch.questions.map((q, idx) => ({
        question_text: q.question_text,
        options: Array.isArray(q.options) ? q.options : ["", "", "", ""],
        correct_index:
          typeof q.correct_index === "number" ? Math.max(0, Math.min(3, q.correct_index)) : 0,
        time_limit_seconds:
          typeof q.time_limit_seconds === "number"
            ? Math.max(5, Math.min(120, q.time_limit_seconds))
            : 30,
        order_index: idx,
        question_type: q.question_type || "multi",
        explanation: null,
        difficulty: "medium",
        subcategory: null,
        tags: [],
        source: null,
        external_id: null,
        is_verified: true,
        version: 1,
      }));
    } else {
      // Fetch full questions from Supabase DB
      const { data: qData, error: qFetchError } = await supabase
        .from("questions")
        .select("*")
        .eq("quiz_id", quizId)
        .order("order_index");

      if (qFetchError || !qData || qData.length === 0) {
        return { success: false, error: "Failed to fetch source quiz questions" };
      }

      questionsToCopy = qData.map((q: any) => ({
        question_text: q.question_text,
        options: Array.isArray(q.options) ? (q.options as string[]) : ["", "", "", ""],
        correct_index:
          typeof q.correct_index === "number" ? Math.max(0, Math.min(3, q.correct_index)) : 0,
        time_limit_seconds:
          typeof q.time_limit_seconds === "number"
            ? Math.max(5, Math.min(120, q.time_limit_seconds))
            : 30,
        order_index: q.order_index,
        question_type: q.question_type || "multi",
        explanation: q.explanation || null,
        difficulty: q.difficulty || "medium",
        subcategory: q.subcategory || null,
        tags: Array.isArray(q.tags) ? (q.tags as string[]) : [],
        source: q.source || null,
        external_id: q.external_id || null,
        is_verified: q.is_verified !== false,
        version: typeof q.version === "number" ? q.version : 1,
      }));
    }

    if (questionsToCopy.length === 0) {
      return { success: false, error: "No questions found in this quiz" };
    }

    // 2. Insert new quiz row with full columns
    let newQuizRes = await supabase
      .from("quizzes")
      .insert({
        title: quizMeta.title,
        user_id: userId,
        is_public: false,
        personal_library: true,
        personal_library_origin: "copied",
        category: quizMeta.category || null,
        language: quizMeta.language || "ar",
      } as never)
      .select()
      .single();

    if (newQuizRes.error) {
      console.warn("Full quiz insert warning:", newQuizRes.error);
      // Fallback insert if extended columns fail
      newQuizRes = await supabase
        .from("quizzes")
        .insert({
          title: quizMeta.title,
          user_id: userId,
          personal_library: true,
          personal_library_origin: "copied",
        } as never)
        .select()
        .single();
    }

    if (newQuizRes.error || !newQuizRes.data) {
      console.error("Quiz creation failed completely:", newQuizRes.error);
      return { success: false, error: "Failed to create new quiz" };
    }

    const newQuizTyped = newQuizRes.data as unknown as Quiz;

    // Save cloned quiz to local storage cache backup so it NEVER disappears
    const localKey = `quizclash_user_quizzes_${userId}`;
    try {
      const cachedRaw = localStorage.getItem(localKey);
      const existing = cachedRaw ? (JSON.parse(cachedRaw) as Quiz[]) : [];
      localStorage.setItem(localKey, JSON.stringify([newQuizTyped, ...existing]));
    } catch {
      // ignore
    }

    // 3. Insert copies of all questions with full sanitized columns
    const questionsToInsert = questionsToCopy.map((q) => ({
      quiz_id: newQuizTyped.id,
      question_text: q.question_text,
      options: q.options,
      correct_index: q.correct_index,
      time_limit_seconds: q.time_limit_seconds,
      order_index: q.order_index,
      question_type: q.question_type || "multi",
      explanation: q.explanation || null,
      difficulty: q.difficulty || "medium",
      subcategory: q.subcategory || null,
      tags: q.tags || [],
      source: q.source || null,
      external_id: q.external_id || null,
      is_verified: q.is_verified !== false,
      version: q.version || 1,
    }));

    let { error: qInsertError } = await supabase
      .from("questions")
      .insert(questionsToInsert as never);

    if (qInsertError) {
      console.warn("Full question insert failed, attempting reload and basic retry:", qInsertError);

      try {
        await (supabase.rpc as any)("reload_schema_cache");
      } catch {
        // Ignore if RPC does not exist
      }

      const retryRes = await supabase.from("questions").insert(questionsToInsert as never);
      qInsertError = retryRes.error;

      if (qInsertError) {
        console.warn("Full question retry failed, attempting basic core columns:", qInsertError);
        const basicQuestionsToInsert = questionsToCopy.map((q) => ({
          quiz_id: newQuizTyped.id,
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          time_limit_seconds: q.time_limit_seconds,
          order_index: q.order_index,
          question_type: q.question_type || "multi",
        }));

        const fallbackRes = await supabase
          .from("questions")
          .insert(basicQuestionsToInsert as never);
        qInsertError = fallbackRes.error;
      }
    }

    if (qInsertError) {
      console.error("All question insert attempts failed:", qInsertError);
      await supabase.from("quizzes").delete().eq("id", newQuizTyped.id);
      return { success: false, error: "Failed to copy questions to new quiz" };
    }

    return { success: true, newQuizId: newQuizTyped.id };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error during clone";
    console.error("cloneQuiz exception:", err);
    return { success: false, error: msg };
  }
}
