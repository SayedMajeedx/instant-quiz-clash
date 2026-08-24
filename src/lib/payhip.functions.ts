import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const handlePayhipWebhookFn = createServerFn({ method: "POST" })
  .inputValidator((input: { payload: Record<string, any>; signature?: string }) =>
    z.object({ payload: z.record(z.any()), signature: z.string().optional() }).parse(input),
  )
  .handler(async ({ data }) => {
    const { verifyAndProcessPayhipWebhook } = await import("@/lib/payhip.server");
    const rawBody = JSON.stringify(data.payload);
    return verifyAndProcessPayhipWebhook(rawBody, { "x-payhip-signature": data.signature });
  });
