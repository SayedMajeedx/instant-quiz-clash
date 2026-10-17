import { recordQuizPlay } from "@/lib/quiz-stats.functions";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ChevronRight, Play, Timer } from "lucide-react";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { cloneQuiz } from "@/lib/clone-quiz";
import { useI18n } from "@/lib/i18n";
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
        const { QUIZ_LIBRARY } = await import("@/lib/quiz-library");
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
                  time_limit_seconds: q.time_limit_seconds || 30,
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
    <main className="min-h-screen px-5 py-6 pb-32">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between gap-4">
          <Link to="/browse" className="press flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 font-semibold">
            <ChevronRight className="size-4 ltr:rotate-180" aria-hidden />
            مكتبة الكويزات
          </Link>
          <LanguageToggle />
        </header>

        {loading ? (
          <div className="mt-8 space-y-4" aria-busy="true" aria-label={t("editor.loading")}>
            <div className="h-56 animate-pulse rounded-3xl bg-card" aria-hidden />
            <div className="h-48 animate-pulse rounded-2xl bg-card" aria-hidden />
            <div className="h-48 animate-pulse rounded-2xl bg-card" aria-hidden />
          </div>
        ) : !quizMeta ? (
          <div className="mt-16 rounded-3xl bg-card p-10 text-center">
            <p className="font-display text-2xl">{t("preview.notFound")}</p>
            <Link to="/browse" className="ledge ledge-blue mt-6">
              <span className="ledge-face h-12 px-6 font-display text-lg">{t("nav.browse")}</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-6 rounded-3xl bg-card p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-secondary px-4 py-1 font-semibold">{quizMeta.category || "عام"}</span>
                <span className="text-muted-foreground">
                  {t("quizzes.questionCount", { count: quizMeta.question_count })}
                </span>
              </div>
              <h1 className="mt-4 font-display text-3xl leading-tight md:text-5xl">{displayTitle}</h1>
              <p className="mt-2 text-muted-foreground">
                اطّلع على الأسئلة والخيارات قبل البدء. الإجابات الصحيحة مخفية حتى لا تُفسد اللعبة.
              </p>
              <button
                type="button"
                disabled={cloning}
                onClick={() => void handleCloneAndHost()}
                className="ledge ledge-blue mt-6 disabled:opacity-60"
              >
                <span className="ledge-face h-14 px-8 font-display text-xl">
                  <Play className="size-5" aria-hidden />
                  {cloning ? "جارٍ التجهيز…" : "ابدأ اللعب بهذا الكويز"}
                </span>
              </button>
            </div>

            <h2 className="mt-10 font-display text-2xl">أسئلة الكويز ({questions.length})</h2>
            <ol className="mt-4 space-y-4">
              {questions.map((q, idx) => (
                <li key={q.id || idx} className="rounded-2xl bg-card p-5 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-sun">
                      سؤال {idx + 1} من {questions.length}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Timer className="size-4" aria-hidden />
                      {q.time_limit_seconds} ث
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-relaxed md:text-2xl">{q.question_text}</h3>
                  {/* Options shown neutrally: same treatment for every option, nothing marks the answer. */}
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {q.options.map((opt, optIdx) => (
                      <li key={optIdx} className="flex items-center gap-3 rounded-xl bg-background p-3">
                        <span
                          className="grid size-9 shrink-0 place-items-center rounded-lg"
                          style={{ backgroundColor: `var(--answer-${optIdx + 1})` }}
                        >
                          <AnswerShape index={optIdx} className="size-4" />
                        </span>
                        <span className="font-semibold text-muted-foreground">{optionLabels[optIdx] || optIdx + 1}</span>
                        <span className="leading-snug">{opt}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background">
              <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3">
                <div className="min-w-0">
                  <p className="truncate font-display text-lg">{displayTitle}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("quizzes.questionCount", { count: quizMeta.question_count })}
                  </p>
                </div>
                <button
                  type="button"
                  disabled={cloning}
                  onClick={() => void handleCloneAndHost()}
                  className="ledge ledge-blue shrink-0 disabled:opacity-60"
                >
                  <span className="ledge-face h-12 px-6 font-display text-lg">
                    {cloning ? "جارٍ التجهيز…" : "ابدأ اللعب"}
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
