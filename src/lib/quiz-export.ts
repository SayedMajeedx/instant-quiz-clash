type ExportQuiz = {
  id: string;
  title: string;
  category: string;
  subcategory?: string | null;
  questions?: any[];
  [key: string]: unknown;
};

type QuestionReference = {
  quiz_id: string;
  quiz_title: string;
  category: string;
  subcategory: string | null;
  question_id: string | null;
  question_index: number;
  question_text: string;
};

const ARABIC_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;
const NON_WORDS = /[^\p{L}\p{N}\s]/gu;
const STOP_WORDS = new Set([
  "ما", "ماذا", "من", "في", "على", "الى", "إلى", "عن", "هو", "هي", "هذا", "هذه", "أي", "اين", "أين",
  "the", "a", "an", "of", "in", "on", "to", "is", "are", "what", "which", "who", "where",
]);

export function normalizeQuestionText(value: unknown): string {
  return String(value || "")
    .normalize("NFKC")
    .replace(ARABIC_DIACRITICS, "")
    .replace(/ـ/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(NON_WORDS, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function likelyDuplicateKey(text: string): string {
  return normalizeQuestionText(text)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token))
    .sort((a, b) => a.localeCompare(b, "ar"))
    .join(" ");
}

function groupedValues<T>(map: Map<string, T[]>): Array<{ key: string; matches: T[] }> {
  return [...map.entries()]
    .filter(([, matches]) => matches.length > 1)
    .map(([key, matches]) => ({ key, matches }))
    .sort((a, b) => b.matches.length - a.matches.length || a.key.localeCompare(b.key, "ar"));
}

export function buildCatalogExport(quizzes: ExportQuiz[]) {
  const questionCount = quizzes.reduce((sum, quiz) => sum + (quiz.questions?.length || 0), 0);
  return {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    description: "Unified QuizClash catalog export. Temporary generated quizzes and deleted catalog entries are excluded by the catalog loader.",
    summary: {
      quiz_count: quizzes.length,
      question_count: questionCount,
      public_quiz_count: quizzes.filter((quiz) => quiz.is_public === true).length,
      private_quiz_count: quizzes.filter((quiz) => quiz.is_public === false).length,
    },
    quizzes,
  };
}

export function buildDuplicateReport(quizzes: ExportQuiz[]) {
  const exact = new Map<string, QuestionReference[]>();
  const likely = new Map<string, QuestionReference[]>();
  const externalIds = new Map<string, QuestionReference[]>();
  const duplicateChoices: Array<QuestionReference & { duplicate_options: string[] }> = [];
  let questionCount = 0;

  for (const quiz of quizzes) {
    (quiz.questions || []).forEach((question, questionIndex) => {
      questionCount += 1;
      const text = String(question.question_text || "").trim();
      const normalized = normalizeQuestionText(text);
      const reference: QuestionReference = {
        quiz_id: quiz.id,
        quiz_title: quiz.title,
        category: quiz.category,
        subcategory: quiz.subcategory || null,
        question_id: question.id ? String(question.id) : null,
        question_index: questionIndex,
        question_text: text,
      };

      if (normalized) {
        exact.set(normalized, [...(exact.get(normalized) || []), reference]);
        const likelyKey = likelyDuplicateKey(text);
        if (likelyKey) {
          likely.set(likelyKey, [...(likely.get(likelyKey) || []), reference]);
        }
      }

      const externalId = String(question.external_id || "").trim().toLowerCase();
      if (externalId) {
        externalIds.set(externalId, [...(externalIds.get(externalId) || []), reference]);
      }

      const optionGroups = new Map<string, string[]>();
      for (const option of Array.isArray(question.options) ? question.options : []) {
        const optionText = String(option || "").trim();
        const optionKey = normalizeQuestionText(optionText);
        if (optionKey) optionGroups.set(optionKey, [...(optionGroups.get(optionKey) || []), optionText]);
      }
      const repeatedOptions = [...optionGroups.values()].filter((items) => items.length > 1).flat();
      if (repeatedOptions.length > 0) duplicateChoices.push({ ...reference, duplicate_options: repeatedOptions });
    });
  }

  const exactGroups = groupedValues(exact);
  const likelyGroups = groupedValues(likely).filter((group) => {
    const normalizedTexts = new Set(group.matches.map((match) => normalizeQuestionText(match.question_text)));
    return normalizedTexts.size > 1;
  });
  const externalIdGroups = groupedValues(externalIds);

  return {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    mode: "review_only",
    notes: [
      "No questions were changed or deleted.",
      "Exact matches ignore punctuation, spacing, Arabic diacritics, and common Arabic letter variants.",
      "Likely matches ignore common question words and word order; review them manually before deletion.",
    ],
    summary: {
      quiz_count: quizzes.length,
      question_count: questionCount,
      exact_duplicate_groups: exactGroups.length,
      likely_duplicate_groups: likelyGroups.length,
      repeated_external_id_groups: externalIdGroups.length,
      questions_with_duplicate_options: duplicateChoices.length,
    },
    exact_duplicate_questions: exactGroups,
    likely_duplicate_questions: likelyGroups,
    repeated_external_ids: externalIdGroups,
    duplicate_options_within_questions: duplicateChoices,
  };
}

export function downloadJson(filename: string, payload: unknown) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
