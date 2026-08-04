import { z } from "zod";
import { MAX_IMPORT_CHARS } from "@/lib/import-questions.shared";

export const parsedQuestionSchema = z.object({
  question_text: z.string().trim().min(1).max(400),
  options: z.array(z.string().trim().min(1).max(200)).length(4),
  correct_index: z.number().int().min(0).max(3),
  time_limit_seconds: z.number().int().min(5).max(120).default(20),
  padded_options: z.boolean().default(false),
  inferred_correct: z.boolean().default(false),
  ambiguous_split: z.boolean().default(false),
  explanation: z.string().trim().optional(),
  difficulty: z.string().trim().optional(),
  subcategory: z.string().trim().optional(),
  tags: z.array(z.string().trim()).optional(),
  source: z.string().trim().optional(),
  id: z.string().trim().optional(),
  external_id: z.string().trim().optional(),
  verified: z.boolean().optional(),
  is_verified: z.boolean().optional(),
  version: z.number().int().optional(),
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

const TOPIC_SYSTEM_PROMPT = `You are a professional trivia writer for QuizClash, a live fast-paced trivia game.

Write ORIGINAL, engaging multiple-choice questions based on the topic and parameters provided.

Strict Rules:
- Write ORIGINAL question text only. Do NOT reproduce copyrighted text verbatim (no book or article excerpts, no song lyrics). Use facts and trivia only, phrased in your own words.
- Each question must have EXACTLY 4 options, with exactly one unambiguously correct answer.
- Distractors must be plausible, well-matched, and non-trivial.
- Keep question text under 140 characters and options under 60 characters so they fit nicely on mobile screens.
- Vary the position of the correct answer (correct_index between 0 and 3).
- "time_limit_seconds" should be 20 by default.
- Set "padded_options", "inferred_correct", and "ambiguous_split" to false.
- Write strictly in the specified target language (Arabic if language is "ar", English if language is "en").

Respond with ONLY strict JSON matching:
{"questions":[{"question_text":"string","options":["s","s","s","s"],"correct_index":0,"time_limit_seconds":20,"padded_options":false,"inferred_correct":false,"ambiguous_split":false}]}
No markdown, no code fences, no commentary.`;

/**
 * Topic → quiz. Runs on the Responses API with streaming (reasoning models can
 * take a while, and a buffered call would hit the platform request timeout);
 * we only need the final text, so the deltas are accumulated server-side.
 */
export async function generateQuizFromTopic(input: {
  topic: string;
  count: number;
  difficulty: "easy" | "medium" | "hard";
  language?: "ar" | "en" | undefined;
}): Promise<{ questions: ParsedQuestion[] }> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI is not configured");

  const topic = input.topic.trim().slice(0, 400);
  if (!topic) return { questions: [] };
  const count = Math.max(3, Math.min(20, Math.round(input.count)));
  const lang = input.language === "en" ? "en" : "ar";

  const response = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "fetch",
    },
    body: JSON.stringify({
      model: "openai/gpt-5.6-sol",
      stream: true,
      reasoning: { effort: "low", summary: "auto" },
      input: [
        { role: "system", content: TOPIC_SYSTEM_PROMPT },
        {
          role: "user",
          content: `Topic: ${topic}\nNumber of questions: ${count}\nDifficulty: ${input.difficulty}\nTarget Language: ${lang === "ar" ? "Arabic" : "English"}`,
        },
      ],
    }),
  });

  if (response.status === 429) throw new Error("rate_limited");
  if (response.status === 402) throw new Error("payment_required");
  if (!response.ok || !response.body) throw new Error(`ai_error_${response.status}`);

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let text = "";
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    buffer += decoder.decode(chunk.value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.startsWith("data:")) continue;
      const payload = line.slice(5).trim();
      if (!payload || payload === "[DONE]") continue;
      try {
        const event = JSON.parse(payload) as { type?: string; delta?: string };
        if (event.type === "response.output_text.delta" && typeof event.delta === "string") {
          text += event.delta;
        }
      } catch {
        // Ignore keep-alive / partial frames.
      }
    }
  }

  const parsed = parsedPayloadSchema.parse(extractJson(text));
  return { questions: parsed.questions.slice(0, count) };
}
