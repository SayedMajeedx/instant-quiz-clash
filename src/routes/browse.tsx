import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import type { Quiz } from "@/lib/quizclash";
import { STARTER_QUIZZES, type StarterQuiz } from "@/lib/starter-quizzes";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/browse")({
  head: () => ({
    meta: [
      { title: "Browse Ready-Made Quizzes — QuizClash" },
      { name: "description", content: "Explore pre-seeded trivia quizzes in history, science, sports, and geography ready to host immediately." },
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

const CATEGORIES = [
  { id: "all", labelKey: "browse.allCategories", icon: "🌐" },
  { id: "history", labelKey: "cat.history", icon: "📜" },
  { id: "geography", labelKey: "cat.geography", icon: "🌍" },
  { id: "science", labelKey: "cat.science", icon: "🔬" },
  { id: "arts", labelKey: "cat.arts", icon: "🎨" },
  { id: "sports", labelKey: "cat.sports", icon: "⚽" },
  { id: "islamic_history", labelKey: "cat.islamic_history", icon: "🕌" },
  { id: "inventions", labelKey: "cat.inventions", icon: "💡" },
  { id: "language_culture", labelKey: "cat.language_culture", icon: "📚" },
];

function BrowsePage() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [quizzes, setQuizzes] = useState<PublicQuiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedLang, setSelectedLang] = useState("all");
  const [cloningId, setCloningId] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("quizzes")
          .select("*, questions(id)")
          .eq("is_public", true)
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          const formatted = data.map((q) => ({
            id: q.id,
            title: q.title,
            user_id: q.user_id || "system",
            created_at: q.created_at,
            is_public: q.is_public,
            category: q.category,
            language: q.language,
            question_count: Array.isArray(q.questions) ? q.questions.length : 0,
          }));
          setQuizzes(formatted);
        } else {
          // Fallback to static starter quizzes if DB is not seeded yet
          const fallback = STARTER_QUIZZES.map((sq) => ({
            id: sq.id,
            title: sq.title,
            user_id: sq.user_id,
            created_at: sq.created_at,
            is_public: true,
            category: sq.category,
            language: sq.language,
            question_count: sq.questions.length,
          }));
          setQuizzes(fallback);
        }
      } catch {
        const fallback = STARTER_QUIZZES.map((sq) => ({
          id: sq.id,
          title: sq.title,
          user_id: sq.user_id,
          created_at: sq.created_at,
          is_public: true,
          category: sq.category,
          language: sq.language,
          question_count: sq.questions.length,
        }));
        setQuizzes(fallback);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

      // Check if this quiz exists in static STARTER_QUIZZES
      const starterMatch = STARTER_QUIZZES.find((sq) => sq.id === quiz.id);

      let questionsToCopy: {
        question_text: string;
        options: string[];
        correct_index: number;
        time_limit_seconds: number;
        order_index: number;
        question_type?: string;
      }[] = [];

      if (starterMatch) {
        questionsToCopy = starterMatch.questions.map((q) => ({
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          time_limit_seconds: q.time_limit_seconds,
          order_index: q.order_index,
          question_type: q.question_type || "multi",
        }));
      } else {
        // Fetch questions from Supabase DB
        const { data: qData } = await supabase
          .from("questions")
          .select("*")
          .eq("quiz_id", quiz.id)
          .order("order_index");

        if (qData) {
          questionsToCopy = qData.map((q) => ({
            question_text: q.question_text,
            options: q.options as unknown as string[],
            correct_index: q.correct_index,
            time_limit_seconds: q.time_limit_seconds,
            order_index: q.order_index,
            question_type: q.question_type || "multi",
          }));
        }
      }

      // Insert cloned quiz for user
      const { data: newQuiz, error: createError } = await supabase
        .from("quizzes")
        .insert({
          title: quiz.title,
          user_id: user.id,
          is_public: false,
          category: quiz.category,
          language: quiz.language,
        } as never)
        .select()
        .single();

      if (createError || !newQuiz) {
        toast.error(t("browse.error") || "Failed to clone quiz");
        return;
      }

      const newQuizTyped = newQuiz as unknown as Quiz;

      // Copy questions to new quiz
      if (questionsToCopy.length > 0) {
        const questionsToInsert = questionsToCopy.map((q) => ({
          quiz_id: newQuizTyped.id,
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          time_limit_seconds: q.time_limit_seconds,
          order_index: q.order_index,
          question_type: q.question_type || "multi",
        }));

        await supabase.from("questions").insert(questionsToInsert as never);
      }

      toast.success(t("browse.cloned"));
      void navigate({ to: "/quizzes/$quizId", params: { quizId: newQuizTyped.id } });
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
            {CATEGORIES.map((cat) => (
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
                <span>{t(cat.labelKey)}</span>
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
              const catObj = CATEGORIES.find((c) => c.id === quiz.category);
              const isCloning = cloningId === quiz.id;

              return (
                <div
                  key={quiz.id}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-surface-gradient p-6 shadow-md transition-all hover:border-primary/50 hover:shadow-glow"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {catObj ? `${catObj.icon} ${t(catObj.labelKey)}` : "Trivia"}
                      </span>
                      <span className="text-sm font-semibold">
                        {quiz.language === "en" ? "🇬🇧" : "🇸🇦"}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl leading-snug">{quiz.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {quiz.question_count} {t("dash.questionsN", { n: quiz.question_count })}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={isCloning}
                    onClick={() => void handleClone(quiz)}
                    className="press mt-6 w-full rounded-2xl bg-gradient-hero py-3 font-display text-lg text-primary-foreground shadow-chunky disabled:opacity-50"
                  >
                    {isCloning ? t("browse.cloning") : `✨ ${t("browse.cloneAndPlay")}`}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
