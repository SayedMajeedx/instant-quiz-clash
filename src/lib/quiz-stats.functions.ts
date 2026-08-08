import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Play counter. The underlying DB function is privileged, so it is no longer
 * callable from the browser — it runs here on the server instead.
 */
export const recordQuizPlay = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ sourceId: z.string().min(1).max(200) }).parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: count, error } = await (supabaseAdmin.rpc as any)("record_quiz_play", {
      p_source_id: data.sourceId,
    });
    if (error) return { count: 0 };
    return { count: (count as number) ?? 0 };
  });
