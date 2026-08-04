import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { cloneQuiz } from "@/lib/clone-quiz";
import { useI18n } from "@/lib/i18n";
import type { Quiz } from "@/lib/quizclash";
import { QUIZ_LIBRARY } from "@/lib/quiz-library";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/browse/")({
  head: () => ({
    meta: [
      { title: "Browse Ready-Made Quizzes — QuizClash" },
      { name: "description", content: "Explore 230+ pre-seeded trivia quizzes in history, science, anime, sports, and geography ready to host immediately." },
      { property: "og:title", content: "Browse Ready-Made Quizzes — QuizClash" },
      { property: "og:description", content: "Play or clone ready-made trivia quizzes in seconds." },
    ],
  }),
  component: BrowsePage,
});

type PublicQuiz = Quiz & {
  category: string | null;
  language: string | null;
  question_count: number;
};

const LIBRARY_QUIZZES: PublicQuiz[] = QUIZ_LIBRARY.map((q) => ({
  id: q.id,
  title: q.title,
  user_id: q.user_id,
  created_at: q.created_at,
  is_public: true,
  category: q.category,
  language: q.language,
  question_count: q.questions.length,
}));

function BrowsePage() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [quizzes, setQuizzes] = useState<PublicQuiz[]>(LIBRARY_QUIZZES);
  const [loading, setLoading] = useState(false);
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedLang, setSelectedLang] = useState("all");
  const [cloningId, setCloningId] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      try {
        type LooseQuizRow = {
          id: string;
          title: string;
          user_id: string | null;
          created_at: string;
          is_public: boolean | null;
          category: string | null;
          language: string | null;
          questions?: { id: string }[];
        };
        const query = supabase.from("quizzes").select("*, questions(id)") as unknown as {
          eq: (column: string, value: unknown) => {
            order: (
              column: string,
              options: { ascending: boolean },
            ) => PromiseLike<{ data: LooseQuizRow[] | null; error: unknown }>;
          };
        };
        const { data, error } = await query.eq("is_public", true).order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          const dbFormatted = data.map((q) => ({
            id: q.id,
            title: q.title,
            user_id: q.user_id ?? "system",
            created_at: q.created_at,
            is_public: q.is_public ?? true,
            category: q.category,
            language: q.language,
            question_count: Array.isArray(q.questions) ? q.questions.length : 0,
          }));

          // Merge DB quizzes with local library (avoiding duplicate IDs)
          const dbIds = new Set(dbFormatted.map((q) => q.id));
          const restLocal = LIBRARY_QUIZZES.filter((q) => !dbIds.has(q.id));
          setQuizzes([...dbFormatted, ...restLocal]);
        }
      } catch {
        // Keep static QUIZ_LIBRARY on network error
      }
    })();
  }, []);

  const categories = useMemo(() => {
    const map = new Map<string, { id: string; label: string; icon: string }>();
    map.set("all", { id: "all", label: t("browse.allCategories"), icon: "🌐" });

    quizzes.forEach((q) => {
      if (q.category && !map.has(q.category)) {
        let icon = "📚";
        if (q.category.includes("أنمي") || q.category.includes("Anime")) icon = "⚔️";
        else if (q.category.includes("إسلام") || q.category.includes("دين")) icon = "🕌";
        else if (q.category.includes("تاريخ") || q.category.includes("History") || q.category === "history") icon = "📜";
        else if (q.category.includes("جغراف") || q.category.includes("Geo") || q.category === "geography") icon = "🌍";
        else if (q.category.includes("علوم") || q.category.includes("Science") || q.category === "science") icon = "🔬";
        else if (q.category.includes("رياضة") || q.category.includes("Sport") || q.category === "sports") icon = "⚽";
        else if (q.category.includes("فن") || q.category.includes("أدب") || q.category === "arts") icon = "🎨";
        else if (q.category.includes("لغة") || q.category.includes("عرب") || q.category === "language_culture") icon = "✍️";
        else if (q.category.includes("ثقاف") || q.category.includes("عام") || q.category === "inventions") icon = "💡";

        map.set(q.category, { id: q.category, label: q.category, icon });
      }
    });

    return Array.from(map.values());
  }, [quizzes, t]);

  async function handleClone(quiz: PublicQuiz) {
    setCloningId(quiz.id);
    try {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes.user;

      if (!user) {
        toast.error(t("auth.required") || "Please sign in to clone quizzes to your collection");
        void navigate({ to: "/auth" });
        return;
      }

      const res = await cloneQuiz(quiz.id, quiz, user.id);

      if (!res.success || !res.newQuizId) {
        toast.error(res.error || t("browse.error"));
        return;
      }

      toast.success(t("browse.cloned") || "Quiz cloned successfully!");
      // Navigate directly to Host Room Creation / Lobby with the NEW quiz preselected
      void navigate({ to: "/host", search: { quiz: res.newQuizId } });
    } catch {
      toast.error("Failed to clone quiz");
    } finally {
      setCloningId(null);
    }
  }

  const filteredQuizzes = quizzes.filter((q) => {
    const matchCat = selectedCat === "all" || q.category === selectedCat;
    const matchLang = selectedLang === "all" || q.language === selectedLang;
    return matchCat && matchLang;
  });

  return (
    <main className="relative min-h-screen px-5 py-8">
      <AnimatedBg />
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link to="/" className="font-display text-3xl">
              {t("brand.quiz")}<span className="text-gradient">{t("brand.clash")}</span>
            </Link>
            <h1 className="mt-2 font-display text-3xl sm:text-5xl text-gradient">{t("browse.title")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("browse.sub")}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/quizzes"
              className="press rounded-2xl border border-border bg-surface-gradient px-4 py-2 font-display text-sm"
            >
              {t("nav.quizzes")}
            </Link>
            <LanguageToggle />
          </div>
        </header>

        {/* Category & Language Filters */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={cn(
                  "press rounded-2xl border px-4 py-2 font-display text-sm flex items-center gap-2",
                  selectedCat === cat.id
                    ? "border-primary bg-gradient-hero text-primary-foreground shadow-chunky"
                    : "border-border bg-surface-gradient text-muted-foreground hover:text-foreground",
                )}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground me-2">
              {t("aiGen.language")}:
            </span>
            {[
              { id: "all", labelKey: "browse.allLanguages" },
              { id: "ar", labelKey: "aiGen.langAr" },
              { id: "en", labelKey: "aiGen.langEn" },
            ].map((lang) => (
              <button
                key={lang.id}
                type="button"
                onClick={() => setSelectedLang(lang.id)}
                className={cn(
                  "press rounded-full border px-3 py-1 text-xs font-semibold",
                  selectedLang === lang.id
                    ? "border-primary bg-primary/20 text-primary ring-1 ring-primary"
                    : "border-border bg-background/40 text-muted-foreground",
                )}
              >
                {t(lang.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Grid */}
        {loading ? (
          <div className="mt-12 text-center text-muted-foreground">{t("editor.loading")}</div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-border bg-surface-gradient p-10 text-center">
            <p className="font-display text-2xl">{t("browse.empty")}</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredQuizzes.map((quiz) => {
              const isCloning = cloningId === quiz.id;

              return (
                <div
                  key={quiz.id}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-surface-gradient p-6 shadow-md transition-all hover:border-primary/50 hover:shadow-glow"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {quiz.category || "عام"}
                      </span>
                      <span className="text-sm font-semibold">
                        {quiz.language === "en" ? "🇬🇧" : "🇸🇦"}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl leading-snug">{quiz.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t("quizzes.questionCount", { count: quiz.question_count })}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <Link
                      to="/browse/$quizId/preview"
                      params={{ quizId: quiz.id }}
                      className="press flex-1 rounded-2xl border border-border bg-background/50 py-3 text-center font-display text-sm hover:border-primary/50 flex items-center justify-center gap-1.5"
                    >
                      <span>👁️</span>
                      <span>معاينة</span>
                    </Link>
                    <button
                      type="button"
                      disabled={isCloning}
                      onClick={() => void handleClone(quiz)}
                      className="press flex-[2] rounded-2xl bg-gradient-hero py-3 font-display text-base text-primary-foreground shadow-chunky disabled:opacity-50 flex items-center justify-center gap-1.5"
                    >
                      <span>✨</span>
                      <span>{isCloning ? t("browse.cloning") : t("browse.cloneAndPlay")}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
