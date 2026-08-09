import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { ParsedQuestion } from "@/lib/import-questions.shared";

type AiError = "quota_exceeded" | "rate_limited" | "payment_required" | "failed" | null;
type AiResult = { questions: ParsedQuestion[]; error: AiError };

async function claimMonthlyUsage(supabase: any, feature: "text_import" | "topic_generation") {
  const { data, error } = await supabase.rpc("claim_monthly_ai_usage", { p_feature: feature });
  if (error) throw error;
  return data === true;
}

async function releaseFailedUsage(userId: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const monthStart = new Date().toISOString().slice(0, 7) + "-01";
  const { error } = await (supabaseAdmin as any)
    .from("ai_monthly_usage")
    .delete()
    .eq("user_id", userId)
    .eq("month_start", monthStart);
  if (error) console.error("Failed to release AI usage reservation", error);
}

function classifyAiError(error: unknown): Exclude<AiError, "quota_exceeded" | null> {
  const message = error instanceof Error ? error.message : "";
  if (message === "rate_limited") return "rate_limited";
  if (message === "payment_required") return "payment_required";
  return "failed";
}

export const importQuestionsFromText = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { text: string }) =>
    z.object({ text: z.string().max(20000) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { parseQuizText } = await import("@/lib/import-questions.server");
    const claimed = await claimMonthlyUsage(context.supabase, "text_import");
    if (!claimed) return { questions: [], error: "quota_exceeded" } satisfies AiResult;
    try {
      const parsed = await parseQuizText(data.text);
      return { questions: parsed.questions as ParsedQuestion[], error: null } satisfies AiResult;
    } catch (error) {
      await releaseFailedUsage(context.userId);
      return { questions: [], error: classifyAiError(error) } satisfies AiResult;
    }
  });

export const generateQuizFromTopicFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input: { topic: string; count: number; difficulty: string; language?: "ar" | "en" }) =>
      z
        .object({
          topic: z.string().trim().min(2).max(400),
          count: z.number().int().min(3).max(20),
          difficulty: z
            .enum(["standard", "challenge", "easy", "medium", "hard"])
            .default("standard"),
          language: z.enum(["ar", "en"]).optional(),
        })
        .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { generateQuizFromTopic } = await import("@/lib/import-questions.server");
    const claimed = await claimMonthlyUsage(context.supabase, "topic_generation");
    if (!claimed) return { questions: [], error: "quota_exceeded" } satisfies AiResult;
    try {
      const parsed = await generateQuizFromTopic(data);
      return { questions: parsed.questions as ParsedQuestion[], error: null } satisfies AiResult;
    } catch (error) {
      await releaseFailedUsage(context.userId);
      return { questions: [], error: classifyAiError(error) } satisfies AiResult;
    }
  });
