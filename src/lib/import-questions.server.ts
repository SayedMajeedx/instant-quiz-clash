import { z } from "zod";

export const MAX_IMPORT_CHARS = 10000;

export const parsedQuestionSchema = z.object({
  question_text: z.string().trim().min(1).max(400),
  options: z.array(z.string().trim().min(1).max(200)).length(4),
  correct_index: z.number().int().min(0).max(3),
  time_limit_seconds: z.number().int().min(5).max(120).default(20),
  padded_options: z.boolean().default(false),
  inferred_correct: z.boolean().default(false),
  ambiguous_split: z.boolean().default(false),
});

export const parsedPayloadSchema = z.object({
  questions: z.array(parsedQuestionSchema),
});

export type ParsedQuestion = z.infer<typeof parsedQuestionSchema>;

const SYSTEM_PROMPT = `You convert messy pasted text into structured multiple-choice quiz questions.

Rules:
- Extract every question you can find, in the order they appear.
- Each question must have EXACTLY 4 answer options.
- If the source has fewer than 4 options, invent plausible distractors and set "padded_options": true.
- If the source has more than 4, keep the correct one plus the 3 strongest distractors and set "padded_options": true.
- "correct_index" is the 0-based index of the correct option. If the source does not explicitly state the answer, pick the factually correct option and set "inferred_correct": true.
- "time_limit_seconds" defaults to 20 unless the text specifies a time.
- Set "ambiguous_split": true when you were unsure where one question ended and the next began.
- Handle any layout: A/B/C/D labels, numbered lists, inline comma-separated options, bullet points, or loose trivia notes.
- If the text contains no quiz-like content at all, return {"questions": []}.

Respond with ONLY strict JSON matching:
{"questions":[{"question_text":"string","options":["s","s","s","s"],"correct_index":0,"time_limit_seconds":20,"padded_options":false,"inferred_correct":false,"ambiguous_split":false}]}
No markdown, no code fences, no commentary.`;

const STRICTER_SUFFIX = `

CRITICAL RETRY: your previous reply was not valid JSON for the schema. Output raw JSON only, starting with { and ending with }. Every question needs exactly 4 non-empty options and a correct_index between 0 and 3.`;

function extractJson(content: string): unknown {
  const cleaned = content
    .replace(/^\s*```(?:json)?/i, "")
    .replace(/```\s*$/, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start === -1 || end <= start) throw new Error("no json");
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

async function callModel(text: string, stricter: boolean): Promise<ParsedQuestion[]> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI is not configured");

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: stricter ? SYSTEM_PROMPT + STRICTER_SUFFIX : SYSTEM_PROMPT },
        { role: "user", content: text },
      ],
    }),
  });

  if (response.status === 429) throw new Error("rate_limited");
  if (response.status === 402) throw new Error("payment_required");
  if (!response.ok) throw new Error(`ai_error_${response.status}`);

  const json = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const content = json.choices?.[0]?.message?.content ?? "";
  const parsed = parsedPayloadSchema.parse(extractJson(content));
  return parsed.questions.slice(0, 50);
}

export async function parseQuizText(text: string): Promise<{ questions: ParsedQuestion[] }> {
  const trimmed = text.trim().slice(0, MAX_IMPORT_CHARS);
  if (!trimmed) return { questions: [] };
  try {
    return { questions: await callModel(trimmed, false) };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message === "rate_limited" || message === "payment_required") throw error;
    // One stricter retry before giving up on malformed model output.
    return { questions: await callModel(trimmed, true) };
  }
}
