import { supabase } from "@/integrations/supabase/client";

/**
 * Question count per quiz id, for every quiz the caller can see.
 *
 * Anonymous visitors can't use `questions(count)` embeds (answer columns are
 * hidden from them), so this goes through the quiz_question_counts RPC. Until
 * that migration is applied it falls back to counting embedded question ids.
 */
export async function fetchQuestionCounts(): Promise<Map<string, number>> {
  const counts = new Map<string, number>();

  const rpc = await supabase.rpc("quiz_question_counts");
  if (!rpc.error && Array.isArray(rpc.data)) {
    for (const row of rpc.data) counts.set(row.quiz_id, row.question_count);
    return counts;
  }

  const { data, error } = await supabase.from("quizzes").select("id,questions(id)");
  if (error) throw error;
  for (const quiz of (data ?? []) as unknown as Array<{ id: string; questions: unknown[] | null }>) {
    counts.set(quiz.id, Array.isArray(quiz.questions) ? quiz.questions.length : 0);
  }
  return counts;
}
