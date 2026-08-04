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
        options: q.options,
        correct_index: q.correct_index,
        time_limit_seconds: q.time_limit_seconds,
        order_index: idx,
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
    } else if (starterMatch) {
      questionsToCopy = starterMatch.questions.map((q, idx) => ({
        question_text: q.question_text,
        options: q.options,
        correct_index: q.correct_index,
        time_limit_seconds: q.time_limit_seconds,
        order_index: idx,
        question_type: q.question_type || "multi",
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

      questionsToCopy = qData.map((q) => ({
        question_text: q.question_text,
        options: q.options as unknown as string[],
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
    }

    if (questionsToCopy.length === 0) {
      return { success: false, error: "No questions found in this quiz" };
    }

    // 2. Insert new quiz row owned by current user
    let newQuizRes = await supabase
      .from("quizzes")
      .insert({
        title: quizMeta.title,
        user_id: userId,
        is_public: false,
        category: quizMeta.category,
        language: quizMeta.language,
      } as never)
      .select()
      .single();

    if (newQuizRes.error) {
      // Fallback insert if extended columns do not exist
      newQuizRes = await supabase
        .from("quizzes")
        .insert({
          title: quizMeta.title,
          user_id: userId,
        } as never)
        .select()
        .single();
    }

    if (newQuizRes.error || !newQuizRes.data) {
      return { success: false, error: "Failed to create new quiz" };
    }

    const newQuizTyped = newQuizRes.data as unknown as Quiz;

    // 3. Insert copies of all questions pointing to the new quiz ID
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

    const { error: qInsertError } = await supabase.from("questions").insert(questionsToInsert as never);

    if (qInsertError) {
      // Atomic rollback: delete the empty quiz if question creation failed
      await supabase.from("quizzes").delete().eq("id", newQuizTyped.id);
      return { success: false, error: "Failed to copy questions to new quiz" };
    }

    return { success: true, newQuizId: newQuizTyped.id };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error during clone";
    return { success: false, error: msg };
  }
}
