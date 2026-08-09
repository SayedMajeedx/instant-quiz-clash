import { createHash } from "node:crypto";

export type DuplicateQuestion = {
  id: string;
  quizId: string;
  quizTitle: string;
  category: string;
  text: string;
  answer: string;
  explanation: string;
  orderIndex: number;
};

export type DuplicateCandidate = {
  fingerprint: string;
  confidence: number;
  verdict: "exact" | "equivalent" | "related";
  sharedFact: string;
  rationale: string;
  signals: Record<string, unknown>;
  questions: DuplicateQuestion[];
};

const DIACRITICS = /[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed]/g;
const PUNCTUATION = /[^\p{L}\p{N}\s]/gu;
const QUESTION_PREFIX =
  /^(?:ما|ماذا|من|متى|اين|كم|كيف|لماذا|اي|هل)\s+(?:هو|هي|كان|كانت|يعرف|يعرف|اسم|عدد)?\s*/;
const STOP_WORDS = new Set([
  "ما",
  "هو",
  "هي",
  "من",
  "في",
  "على",
  "الى",
  "عن",
  "التي",
  "الذي",
  "هذا",
  "هذه",
  "ع",
  "ص",
]);

export function normalizeArabic(value: unknown): string {
  return String(value ?? "")
    .toLocaleLowerCase("ar")
    .replace(DIACRITICS, "")
    .replace(/ـ/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(PUNCTUATION, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contentTokens(value: string): string[] {
  const normalized = normalizeArabic(value).replace(QUESTION_PREFIX, "");
  return normalized.split(" ").filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function jaccard(left: string[], right: string[]): number {
  const a = new Set(left);
  const b = new Set(right);
  const intersection = [...a].filter((token) => b.has(token)).length;
  return intersection / Math.max(1, new Set([...a, ...b]).size);
}

function containment(left: string[], right: string[]): number {
  const a = new Set(left);
  const b = new Set(right);
  return [...a].filter((token) => b.has(token)).length / Math.max(1, Math.min(a.size, b.size));
}

function charTrigrams(value: string): string[] {
  const compact = normalizeArabic(value).replace(/\s/g, "_");
  return Array.from({ length: Math.max(0, compact.length - 2) }, (_, index) =>
    compact.slice(index, index + 3),
  );
}

function numbers(value: string): string[] {
  return normalizeArabic(value).match(/\d+(?:[.,]\d+)?/g) ?? [];
}

function sameValues(left: string[], right: string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function compatibleAnswers(left: string, right: string): boolean {
  const a = normalizeArabic(left);
  const b = normalizeArabic(right);
  if (!a || !b) return false;
  return (
    a === b ||
    a.includes(b) ||
    b.includes(a) ||
    containment(contentTokens(a), contentTokens(b)) >= 0.8
  );
}

function fingerprint(ids: string[]): string {
  return createHash("sha256")
    .update([...ids].sort().join(":"), "utf8")
    .digest("hex");
}

export function retrieveCandidates(questions: DuplicateQuestion[]): DuplicateCandidate[] {
  const buckets = new Map<string, number[]>();
  questions.forEach((question, index) => {
    const tokens = [...new Set(contentTokens(`${question.text} ${question.answer}`))];
    for (const token of tokens.filter((item) => item.length >= 4).slice(0, 10)) {
      const list = buckets.get(token) ?? [];
      list.push(index);
      buckets.set(token, list);
    }
  });

  const pairVotes = new Map<string, number>();
  for (const indices of buckets.values()) {
    if (indices.length > 100) continue;
    for (let a = 0; a < indices.length; a += 1) {
      for (let b = a + 1; b < indices.length; b += 1) {
        const key = `${indices[a]}:${indices[b]}`;
        pairVotes.set(key, (pairVotes.get(key) ?? 0) + 1);
      }
    }
  }

  const candidates: DuplicateCandidate[] = [];
  for (const [key, votes] of pairVotes) {
    if (votes < 2) continue;
    const [a, b] = key.split(":").map(Number);
    const left = questions[a];
    const right = questions[b];
    if (!left || !right) continue;
    const leftText = normalizeArabic(left.text);
    const rightText = normalizeArabic(right.text);
    const exact = leftText === rightText;
    const tokenSimilarity = jaccard(contentTokens(left.text), contentTokens(right.text));
    const charSimilarity = jaccard(charTrigrams(left.text), charTrigrams(right.text));
    const answerMatch = compatibleAnswers(left.answer, right.answer);
    const numberMatch = sameValues(numbers(left.text), numbers(right.text));
    const categoryMatch = normalizeArabic(left.category) === normalizeArabic(right.category);
    const retrievalScore = exact
      ? 1
      : 0.38 * tokenSimilarity +
        0.32 * charSimilarity +
        0.22 * Number(answerMatch) +
        0.08 * Number(categoryMatch);

    // Matching/contained answers are a powerful retrieval signal. Keep these pairs at a
    // deliberately lower lexical threshold and let the factual judge reject shared generic
    // answers (for example "نعم") later. This catches paraphrases such as عام الحزن where
    // surface wording differs but the answer and named entities agree.
    const minimumScore = answerMatch && categoryMatch ? 0.38 : 0.57;
    if (!exact && (!numberMatch || retrievalScore < minimumScore)) continue;
    candidates.push({
      fingerprint: fingerprint([left.id, right.id]),
      confidence: exact && answerMatch ? 1 : Math.min(0.94, retrievalScore),
      verdict: exact && answerMatch ? "exact" : "related",
      sharedFact: "",
      rationale: exact
        ? "نص السؤال والإجابة متطابقان بعد التطبيع."
        : "مرشح من الاسترجاع العربي الهجين ويحتاج تحكيماً دلالياً.",
      signals: { tokenSimilarity, charSimilarity, answerMatch, numberMatch, categoryMatch },
      questions: [left, right],
    });
  }
  return candidates.sort((a, b) => b.confidence - a.confidence).slice(0, 700);
}

const JUDGE_PROMPT = `أنت محكّم صارم لاكتشاف تكرار أسئلة المسابقات العربية. قرر هل السؤالان يختبران الحقيقة نفسها تماماً، لا مجرد الموضوع نفسه.
أعد JSON فقط بالشكل:
{"verdict":"equivalent|related|different","confidence":0.0,"shared_fact":"","rationale":""}
قواعد حاسمة:
- اختلاف الشخص أو المكان أو التاريخ أو الرقم يعني different.
- تشابه القالب اللغوي وحده لا يكفي.
- اختلاف مستوى التفصيل مقبول فقط إذا كانت الإجابتان متوافقتين وتشيران للكيان نفسه.
- equivalent يعني أن وجود السؤالين في اللعبة تكرار فعلي للمعلومة.`;

async function judgeBatch(
  candidates: DuplicateCandidate[],
): Promise<Map<string, Partial<DuplicateCandidate>>> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey || candidates.length === 0) return new Map();
  const payload = candidates.map((candidate) => ({
    id: candidate.fingerprint,
    a: { question: candidate.questions[0]?.text, answer: candidate.questions[0]?.answer },
    b: { question: candidate.questions[1]?.text, answer: candidate.questions[1]?.answer },
  }));
  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      temperature: 0,
      messages: [
        { role: "system", content: JUDGE_PROMPT },
        {
          role: "user",
          content: `حلّل كل زوج وأعد مصفوفة JSON مع id لكل نتيجة:\n${JSON.stringify(payload)}`,
        },
      ],
    }),
  });
  if (!response.ok) return new Map();
  const body = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const raw = body.choices?.[0]?.message?.content?.replace(/^```json\s*|```$/g, "").trim() ?? "[]";
  try {
    const rows = JSON.parse(raw) as Array<Record<string, unknown>>;
    return new Map(
      rows.map((row) => [
        String(row.id),
        {
          verdict: row.verdict === "equivalent" ? "equivalent" : "related",
          confidence: Math.max(0, Math.min(1, Number(row.confidence) || 0)),
          sharedFact: String(row.shared_fact ?? ""),
          rationale: String(row.rationale ?? ""),
        },
      ]),
    );
  } catch {
    return new Map();
  }
}

export async function adjudicateCandidates(
  candidates: DuplicateCandidate[],
): Promise<DuplicateCandidate[]> {
  const exact = candidates.filter((candidate) => candidate.verdict === "exact");
  const uncertain = candidates.filter((candidate) => candidate.verdict !== "exact").slice(0, 240);
  const accepted: DuplicateCandidate[] = [...exact];
  for (let index = 0; index < uncertain.length; index += 20) {
    const batch = uncertain.slice(index, index + 20);
    const judgments = await judgeBatch(batch);
    for (const candidate of batch) {
      const judgment = judgments.get(candidate.fingerprint);
      if (!judgment || judgment.verdict !== "equivalent" || (judgment.confidence ?? 0) < 0.82)
        continue;
      accepted.push({ ...candidate, ...judgment, verdict: "equivalent" });
    }
  }
  return accepted.sort((a, b) => b.confidence - a.confidence);
}

export function groupCandidates(candidates: DuplicateCandidate[]): DuplicateCandidate[] {
  const graph = new Map<string, Set<string>>();
  const questionById = new Map<string, DuplicateQuestion>();
  const evidenceByQuestion = new Map<string, DuplicateCandidate[]>();
  for (const candidate of candidates) {
    const [left, right] = candidate.questions;
    if (!left || !right) continue;
    questionById.set(left.id, left);
    questionById.set(right.id, right);
    graph.set(left.id, (graph.get(left.id) ?? new Set()).add(right.id));
    graph.set(right.id, (graph.get(right.id) ?? new Set()).add(left.id));
    for (const id of [left.id, right.id]) {
      evidenceByQuestion.set(id, [...(evidenceByQuestion.get(id) ?? []), candidate]);
    }
  }

  const visited = new Set<string>();
  const groups: DuplicateCandidate[] = [];
  for (const start of graph.keys()) {
    if (visited.has(start)) continue;
    const stack = [start];
    const ids: string[] = [];
    visited.add(start);
    while (stack.length) {
      const current = stack.pop();
      if (!current) continue;
      ids.push(current);
      for (const neighbour of graph.get(current) ?? []) {
        if (visited.has(neighbour)) continue;
        visited.add(neighbour);
        stack.push(neighbour);
      }
    }
    const evidence = [...new Set(ids.flatMap((id) => evidenceByQuestion.get(id) ?? []))];
    const strongest = evidence.sort((a, b) => b.confidence - a.confidence)[0];
    if (!strongest) continue;
    groups.push({
      ...strongest,
      fingerprint: fingerprint(ids),
      confidence: Math.max(...evidence.map((item) => item.confidence)),
      verdict: evidence.every((item) => item.verdict === "exact") ? "exact" : "equivalent",
      sharedFact: evidence.find((item) => item.sharedFact)?.sharedFact ?? strongest.sharedFact,
      rationale: `${ids.length} أسئلة مترابطة عبر ${evidence.length} حكم تشابه مستقل. ${strongest.rationale}`,
      signals: { edges: evidence.length, groupSize: ids.length },
      questions: ids.map((id) => questionById.get(id)).filter(Boolean) as DuplicateQuestion[],
    });
  }
  return groups.sort((a, b) => b.confidence - a.confidence);
}
