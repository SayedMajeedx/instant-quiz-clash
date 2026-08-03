import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const importQuestionsFromText = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { text: string }) => z.object({ text: z.string().max(20000) }).parse(input))
  .handler(async ({ data }) => {
    const { parseQuizText } = await import("@/lib/import-questions.server");
    try {
      return await parseQuizText(data.text);
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      if (message === "rate_limited") return { questions: [], error: "rate_limited" as const };
      if (message === "payment_required") return { questions: [], error: "payment_required" as const };
      return { questions: [], error: "failed" as const };
    }
  });
