import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/* Supabase's generated client does not know the review table until its migration is applied. */
/* eslint-disable @typescript-eslint/no-explicit-any */

async function requireAdmin(supabase: any, userId: string) {
  const { data } = await supabase.from("profiles").select("role").eq("id", userId).maybeSingle();
  if (!["admin", "super_admin", "owner"].includes(String(data?.role ?? "")))
    throw new Error("Admin access required");
}

export const scanDuplicateQuestions = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ useAi: z.boolean().default(true) }).parse(input))
  .handler(async ({ data, context }) => {
    await requireAdmin(context.supabase, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { retrieveCandidates, adjudicateCandidates, groupCandidates } =
      await import("@/lib/duplicate-detection.server");
    const { data: quizzes, error: quizError } = await (supabaseAdmin.from("quizzes") as any)
      .select("id,title,category,quiz_kind")
      // PostgREST `neq` does not include NULL rows. Most catalog quizzes predate
      // quiz_kind and therefore have NULL here, so excluding them made the scan
      // silently inspect only a fraction of the question bank.
      .or("quiz_kind.is.null,quiz_kind.neq.custom_generated");
    if (quizError) throw quizError;
    const quizMap = new Map((quizzes ?? []).map((quiz: any) => [quiz.id, quiz]));
    const { data: rows, error } = await (supabaseAdmin.from("questions") as any).select(
      "id,quiz_id,question_text,options,correct_index,explanation,order_index",
    );
    if (error) throw error;
    const questions = (rows ?? []).flatMap((row: any) => {
      const quiz: any = quizMap.get(row.quiz_id);
      if (!quiz) return [];
      return [
        {
          id: row.id,
          quizId: row.quiz_id,
          quizTitle: quiz.title ?? "",
          category: quiz.category ?? "",
          text: row.question_text ?? "",
          answer: Array.isArray(row.options) ? String(row.options[row.correct_index] ?? "") : "",
          explanation: row.explanation ?? "",
          orderIndex: row.order_index ?? 0,
        },
      ];
    });
    const retrieved = retrieveCandidates(questions);
    const acceptedPairs = data.useAi
      ? await adjudicateCandidates(retrieved)
      : retrieved.filter((item) => item.verdict === "exact");
    const accepted = groupCandidates(acceptedPairs);
    // A scan is a fresh snapshot. Remove only unresolved rows so stale findings do not
    // accumulate across algorithm revisions; dismissed/resolved audit decisions remain.
    const { error: clearError } = await (supabaseAdmin.from("quiz_duplicate_reviews") as any)
      .delete()
      .eq("status", "pending");
    if (clearError) throw clearError;
    const { data: reviewed, error: reviewedError } = await (
      supabaseAdmin.from("quiz_duplicate_reviews") as any
    )
      .select("fingerprint")
      .in("status", ["dismissed", "resolved"]);
    if (reviewedError) throw reviewedError;
    const reviewedFingerprints = new Set(
      (reviewed ?? []).map((item: { fingerprint: string }) => item.fingerprint),
    );
    const queued = accepted.filter(
      (candidate) => !reviewedFingerprints.has(candidate.fingerprint),
    );
    for (const candidate of queued) {
      const { error: saveError } = await (supabaseAdmin.from("quiz_duplicate_reviews") as any).upsert(
        {
          fingerprint: candidate.fingerprint,
          status: "pending",
          confidence: candidate.confidence,
          verdict: candidate.verdict,
          shared_fact: candidate.sharedFact,
          rationale: candidate.rationale,
          signals: candidate.signals,
          questions: candidate.questions,
        },
        { onConflict: "fingerprint", ignoreDuplicates: true },
      );
      if (saveError) throw saveError;
    }
    return {
      scanned: questions.length,
      retrieved: retrieved.length,
      matched: accepted.length,
      flagged: queued.length,
      skippedReviewed: accepted.length - queued.length,
    };
  });

export const listDuplicateReviews = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await requireAdmin(context.supabase, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await (supabaseAdmin.from("quiz_duplicate_reviews") as any)
      .select("*")
      .eq("status", "pending")
      .order("confidence", { ascending: false })
      .limit(500);
    if (error) throw error;
    return data ?? [];
  });

export const resolveDuplicateReview = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        reviewId: z.string().uuid(),
        action: z.enum(["dismiss", "delete"]),
        keepQuestionId: z.string().uuid().optional(),
        deleteQuestionIds: z.array(z.string().uuid()).max(100).default([]),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await requireAdmin(context.supabase, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: review, error: reviewError } = await (
      supabaseAdmin.from("quiz_duplicate_reviews") as any
    )
      .select("*")
      .eq("id", data.reviewId)
      .eq("status", "pending")
      .maybeSingle();
    if (reviewError || !review) throw reviewError ?? new Error("Review not found");
    const allowed = new Set((review.questions ?? []).map((question: any) => question.id));
    if (data.action === "delete") {
      if (!data.keepQuestionId || !allowed.has(data.keepQuestionId))
        throw new Error("Invalid keeper");
      if (data.deleteQuestionIds.some((id) => !allowed.has(id) || id === data.keepQuestionId))
        throw new Error("Invalid deletion set");
      if (data.deleteQuestionIds.length) {
        const { error } = await (supabaseAdmin.from("questions") as any)
          .delete()
          .in("id", data.deleteQuestionIds);
        if (error) throw error;
      }
    }
    const { error: updateError } = await (supabaseAdmin.from("quiz_duplicate_reviews") as any)
      .update({
        status: data.action === "dismiss" ? "dismissed" : "resolved",
        reviewed_at: new Date().toISOString(),
        reviewed_by: context.userId,
        kept_question_id: data.keepQuestionId ?? null,
        deleted_question_ids: data.deleteQuestionIds,
      })
      .eq("id", data.reviewId);
    if (updateError) throw updateError;
    return { ok: true };
  });
