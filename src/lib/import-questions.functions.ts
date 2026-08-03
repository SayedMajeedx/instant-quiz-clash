import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { ParsedQuestion } from "@/lib/import-questions.shared";

export const importQuestionsFromText = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { text: string }) => z.object({ text: z.string().max(20000) }).parse(input))
  .handler(async ({ data }) => {
    const { parseQuizText } = await import("@/lib/import-questions.server");
    type Result = { questions: ParsedQuestion[]; error: "rate_limited" | "payment_required" | "failed" | null };
    try {
      const parsed = await parseQuizText(data.text);
      return { questions: parsed.questions, error: null } satisfies Result;
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      const kind: Result["error"] =
        message === "rate_limited" ? "rate_limited" : message === "payment_required" ? "payment_required" : "failed";
      return { questions: [], error: kind } satisfies Result;
    }
  });
