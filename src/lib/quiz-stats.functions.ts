import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Play counter. The underlying DB function is privileged, so it is no longer
 * callable from the browser — it runs here on the server instead, and only
 * for signed-in users so anonymous scripts cannot inflate the counts.
 */
export const recordQuizPlay = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
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
