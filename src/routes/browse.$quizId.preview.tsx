import { recordQuizPlay } from "@/lib/quiz-stats.functions";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { cloneQuiz } from "@/lib/clone-quiz";
import { useI18n } from "@/lib/i18n";
import { QUIZ_LIBRARY } from "@/lib/quiz-library";
import { STARTER_QUIZZES } from "@/lib/starter-quizzes";
import { cleanQuizTitle } from "@/lib/browse-helpers";

import { getAllAdminQuizzes } from "@/lib/admin-data-helper";

export const Route = createFileRoute("/browse/$quizId/preview")({
  head: () => ({
    meta: [
      { title: "نظرة على أسئلة الكويز — QuizClash" },
      { name: "description", content: "شاهد الأسئلة والخيارات قبل بدء اللعب، والإجابات الصحيحة مخفية." },
      { property: "og:title", content: "نظرة على أسئلة الكويز — QuizClash" },
    ],
  }),
  component: QuizPreviewPage,
});

type PreviewQuestion = {
  id?: string;
  question_text: string;
  options: string[];
  time_limit_seconds: number;
  question_type?: "multi" | "boolean" | string;
  difficulty?: string | null | undefined;
  subcategory?: string | null | undefined;
  tags?: string[] | null | undefined;
};

type PreviewQuizMeta = {
  id: string;
  title: string;
  category: string | null;
  language: string | null;
  question_count: number;
};

function QuizPreviewPage() {
  const { quizId } = Route.useParams();
  const navigate = useNavigate();
  const { lang, t } = useI18n();

  const [quizMeta, setQuizMeta] = useState<PreviewQuizMeta | null>(null);
  const [questions, setQuestions] = useState<PreviewQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [cloning, setCloning] = useState(false);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const decodedQuizId = decodeURIComponent(quizId || "").trim();
        const normTitle = (s: string) => cleanQuizTitle(s).toLowerCase().trim();

        // 1. Check local QUIZ_LIBRARY first by ID or cleaned title
        const libraryMatch = QUIZ_LIBRARY.find(
          (q) => q.id === decodedQuizId || normTitle(q.title) === normTitle(decodedQuizId)
        );
        const starterMatch = STARTER_QUIZZES.find(
          (sq) => sq.id === decodedQuizId || normTitle(sq.title) === normTitle(decodedQuizId)
        );

        if (libraryMatch) {
          setQuizMeta({
            id: libraryMatch.id,
            title: libraryMatch.title,
            category: libraryMatch.category,
            language: libraryMatch.language,
            question_count: libraryMatch.questions.length,
          });
          setQuestions(
            libraryMatch.questions.map((q, idx) => ({
              id: `q-${idx}`,
              question_text: q.question_text,
              options: q.options,
              time_limit_seconds: q.time_limit_seconds,
              question_type: q.question_type || "multi",
              difficulty: q.difficulty,
              subcategory: q.subcategory,
              tags: q.tags,
            })),
          );
          setLoading(false);
          return;
        }

        if (starterMatch) {
          setQuizMeta({
            id: starterMatch.id,
            title: starterMatch.title,
            category: starterMatch.category,
            language: starterMatch.language,
            question_count: starterMatch.questions.length,
          });
          setQuestions(
            starterMatch.questions.map((q, idx) => ({
              id: `sq-${idx}`,
              question_text: q.question_text,
              options: q.options,
              time_limit_seconds: q.time_limit_seconds,
              question_type: q.question_type || "multi",
            })),
          );
          setLoading(false);
          return;
        }

        // 2. Fetch quiz meta from Supabase by ID or Title
        let qData: any = null;
        const { data: byIdData } = await (supabase.from("quizzes") as any)
          .select("id, title, category, language")
          .eq("id", decodedQuizId)
          .maybeSingle();

        if (byIdData) {
          qData = byIdData;
        } else {
          // Try matching title in Supabase
          const { data: byTitleData } = await (supabase.from("quizzes") as any)
            .select("id, title, category, language")
            .ilike("title", `%${decodedQuizId}%`)
            .maybeSingle();
          if (byTitleData) qData = byTitleData;
        }

        // 3. Fallback to getAllAdminQuizzes()
        if (!qData) {
          const adminQuizzes = await getAllAdminQuizzes();
          const adminMatch = adminQuizzes.find(
            (q) => q.id === decodedQuizId || normTitle(q.title) === normTitle(decodedQuizId)
          );

          if (adminMatch) {
            setQuizMeta({
              id: adminMatch.id,
              title: adminMatch.title,
              category: adminMatch.category,
              language: adminMatch.language,
              question_count: adminMatch.question_count,
            });

            if (Array.isArray(adminMatch.questions) && adminMatch.questions.length > 0) {
              setQuestions(
                adminMatch.questions.map((q: any, idx: number) => ({
                  id: `aq-${idx}`,
                  question_text: q.question_text || q.question || "سؤال",
                  options: q.options || [],
                  time_limit_seconds: q.time_limit_seconds || 20,
                  question_type: q.question_type || "multi",
                  difficulty: q.difficulty,
                  subcategory: q.subcategory,
                }))
              );
              setLoading(false);
              return;
            }
            qData = adminMatch;
          }
        }

        if (qData) {
          const { data: pQuestions } = await (supabase.from("questions") as any)
            .select("id, quiz_id, question_text, options, time_limit_seconds, order_index, question_type, difficulty, subcategory, tags")
            .eq("quiz_id", qData.id)
            .order("order_index");

          const fetchedRows = pQuestions || [];
          setQuizMeta({
            id: qData.id,
            title: qData.title,
            category: qData.category,
            language: qData.language,
            question_count: fetchedRows.length,
          });

          setQuestions(
            fetchedRows.map((q: any) => ({
              id: q.id,
              question_text: q.question_text,
              options: (q.options as unknown as string[]) || [],
              time_limit_seconds: q.time_limit_seconds,
              question_type: q.question_type,
              difficulty: q.difficulty,
              subcategory: q.subcategory,
              tags: q.tags || [],
            })),
          );
        }
      } catch (err) {
        console.error("Failed to load preview:", err);
        toast.error(t("browse.error") || "Failed to load quiz preview");
      } finally {
        setLoading(false);
      }
    })();
  }, [quizId, t]);

  async function handleCloneAndHost() {
    if (!quizMeta) return;
    setCloning(true);
    try {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes.user;

      if (!user) {
        toast.error(t("auth.required") || "Please sign in to clone quizzes");
        void navigate({ to: "/auth" });
        return;
      }

      const res = await cloneQuiz(quizMeta.id, quizMeta, user.id);

      if (!res.success || !res.newQuizId) {
        toast.error(res.error || t("browse.error"));
        return;
      }

      void recordQuizPlay({ data: { sourceId: quizMeta.id } }).catch(() => {});

      toast.success(t("browse.cloned") || "Quiz cloned successfully!");

      // Navigate directly to Host / Lobby creation screen — NEVER to quiz editor
      void navigate({ to: "/host", search: { quiz: res.newQuizId } });
    } catch {
      toast.error(t("browse.error") || "Failed to clone quiz");
    } finally {
      setCloning(false);
    }
  }

  const optionLabels = ["أ", "ب", "ج", "د"];
  const displayTitle = quizMeta ? cleanQuizTitle(quizMeta.title) : "";

  return (
    <main className="relative min-h-screen px-5 py-8 pb-28">
      <AnimatedBg />
      <div className="mx-auto max-w-4xl">
        {/* Top Header */}
        <header className="flex items-center justify-between gap-4">
          <Link
            to="/browse"
            className="press rounded-2xl border border-border bg-surface-gradient px-4 py-2 font-display text-sm flex items-center gap-2 hover:border-primary/50"
          >
            <span>←</span>
            <span>مكتبة الكويزات</span>
          </Link>
          <LanguageToggle />
        </header>

        {loading ? (
          <div className="mt-16 text-center text-muted-foreground">{t("editor.loading")}</div>
        ) : !quizMeta ? (
          <div className="mt-16 rounded-3xl border border-border bg-surface-gradient p-10 text-center">
            <p className="font-display text-2xl">{t("preview.notFound")}</p>
            <Link
              to="/browse"
              className="press mt-4 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky"
            >
              {t("nav.browse")}
            </Link>
          </div>
        ) : (
          <>
            {/* Quiz Info Card */}
            <div className="mt-8 rounded-3xl border border-border bg-surface-gradient p-6 md:p-8 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
                    {quizMeta.category || "عام"}
                  </span>
                </div>
                <span className="text-sm font-bold text-muted-foreground">
                  {t("quizzes.questionCount", { count: quizMeta.question_count })}
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl md:text-5xl leading-tight">{displayTitle}</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                اطّلع على الأسئلة والخيارات قبل البدء — الإجابات الصحيحة مخفية حتى لا تُفسد اللعبة.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  disabled={cloning}
                  onClick={() => void handleCloneAndHost()}
                  className="press rounded-2xl bg-gradient-hero px-8 py-4 font-display text-xl text-primary-foreground shadow-chunky disabled:opacity-50 flex items-center gap-2"
                >
                  <span>✨</span>
                  <span>{cloning ? "جارٍ التجهيز…" : "ابدأ اللعب بهذا الكويز"}</span>
                </button>
              </div>
            </div>

            {/* Questions List (Neutral Preview) */}
            <div className="mt-8 space-y-6">
              <h2 className="font-display text-2xl text-gradient">
                أسئلة الكويز ({questions.length})
              </h2>

              {questions.map((q, idx) => (
                <div
                  key={q.id || idx}
                  className="rounded-3xl border border-border/80 bg-surface-gradient/80 p-6 shadow-md transition-all hover:border-primary/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
                    <span className="font-display text-lg text-primary">
                      سؤال {idx + 1} من {questions.length}
                    </span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-semibold text-muted-foreground">
                        ⏱️ {q.time_limit_seconds}ث
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-xl md:text-2xl leading-relaxed text-foreground">
                    {q.question_text}
                  </h3>

                  {/* Neutral Options Display — Zero Correct Answer Indication */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {q.options.map((opt, optIdx) => (
                      <div
                        key={optIdx}
                        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/30 p-3.5 text-start transition-all hover:bg-background/50"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-surface-gradient font-display text-sm text-muted-foreground">
                          {optionLabels[optIdx] || optIdx + 1}
                        </span>
                        <span className="font-display text-base text-foreground/90 leading-snug">
                          {opt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Floating Action Bar */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl rounded-3xl border border-primary/30 bg-background/80 backdrop-blur-xl p-4 shadow-2xl flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-lg truncate max-w-[200px] sm:max-w-xs">{displayTitle}</p>
                <p className="text-xs text-muted-foreground">{t("quizzes.questionCount", { count: quizMeta.question_count })}</p>
              </div>
              <button
                type="button"
                disabled={cloning}
                onClick={() => void handleCloneAndHost()}
                className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-base text-primary-foreground shadow-chunky disabled:opacity-50 shrink-0"
              >
                {cloning ? "جارٍ التجهيز…" : "ابدأ اللعب"}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
