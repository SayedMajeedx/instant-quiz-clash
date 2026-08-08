export function fisherYatesShuffle<T>(
  source: readonly T[],
  random: () => number = Math.random,
): T[] {
  const shuffled = [...source];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex]!, shuffled[index]!];
  }
  return shuffled;
}

export function selectCustomQuestions<T extends { id: string }>(
  pool: readonly T[],
  requestedCount: number,
  random: () => number = Math.random,
): Array<T & { order_index: number }> {
  const uniquePool = [...new Map(pool.map((question) => [question.id, question])).values()];
  return fisherYatesShuffle(uniquePool, random)
    .slice(0, Math.max(0, requestedCount))
    .map((question, order_index) => ({ ...question, order_index }));
}

export type CategoryBreakdown = {
  category: string;
  questionCount: number;
  answered: number;
  correct: number;
  accuracyPercent: number;
};

export function buildCategoryBreakdown(
  questions: ReadonlyArray<{ id: string; source_category?: string | null }>,
  answers: ReadonlyArray<{ question_id: string; player_id: string; is_correct: boolean }>,
  playerId?: string | null,
): CategoryBreakdown[] {
  const filteredAnswers = playerId
    ? answers.filter((answer) => answer.player_id === playerId)
    : [...answers];
  const byCategory = new Map<
    string,
    { questionIds: Set<string>; answered: number; correct: number }
  >();

  questions.forEach((question) => {
    const category = question.source_category?.trim() || "عام";
    const entry = byCategory.get(category) ?? {
      questionIds: new Set<string>(),
      answered: 0,
      correct: 0,
    };
    entry.questionIds.add(question.id);
    byCategory.set(category, entry);
  });
  filteredAnswers.forEach((answer) => {
    const question = questions.find((item) => item.id === answer.question_id);
    if (!question) return;
    const category = question.source_category?.trim() || "عام";
    const entry = byCategory.get(category)!;
    entry.answered += 1;
    if (answer.is_correct) entry.correct += 1;
  });

  return [...byCategory.entries()]
    .map(([category, entry]) => ({
      category,
      questionCount: entry.questionIds.size,
      answered: entry.answered,
      correct: entry.correct,
      accuracyPercent: entry.answered ? Math.round((entry.correct / entry.answered) * 100) : 0,
    }))
    .sort(
      (a, b) => b.questionCount - a.questionCount || a.category.localeCompare(b.category, "ar"),
    );
}
