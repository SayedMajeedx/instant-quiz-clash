import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { QuizCard, type PublicQuiz } from "@/components/quiz/QuizCard";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { QUIZ_LIBRARY } from "@/lib/quiz-library";
import {
  cleanQuizTitle,
  getCategoryIcon,
  getDifficultyDetails,
} from "@/lib/browse-helpers";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/browse/$category")({
  head: ({ params }) => {
    const categoryName = decodeURIComponent(params.category || "كويزات");
    return {
      meta: [
        { title: `${categoryName} — QuizClash` },
        { name: "description", content: `تصفح كويزات واختبارات ${categoryName} الجاهزة للإطلاق المباشر.` },
        { property: "og:title", content: `${categoryName} — QuizClash` },
      ],
    };
  },
  component: CategoryDetailPage,
});

const BATCH_SIZE = 12;

const STATIC_QUIZZES: PublicQuiz[] = QUIZ_LIBRARY.filter(
  (q) => !q.archived && q.launch_enabled !== false
).map((q) => ({
  id: q.id,
  title: q.title,
  user_id: q.user_id,
  created_at: q.created_at,
  is_public: true,
  category: q.category,
  language: q.language,
  quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : "standard",
  question_count: q.questions.length,
}));

function CategoryDetailPage() {
  const { category: rawCategory } = Route.useParams();
  const category = useMemo(() => decodeURIComponent(rawCategory || "").trim(), [rawCategory]);
  const { t } = useI18n();

  const [quizzes, setQuizzes] = useState<PublicQuiz[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters scoped to this category
  const [selectedLang, setSelectedLang] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [selectedDiff, setSelectedDiff] = useState("all");
  const [filterExpanded, setFilterExpanded] = useState(false);

  // Pagination state
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const icon = getCategoryIcon(category);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const { data, error } = await (supabase.from("quizzes") as any)
          .select("*, questions(id)")
          .eq("is_public", true)
          .order("created_at", { ascending: false });

        let allQuizzes = STATIC_QUIZZES;

        if (!error && data && data.length > 0) {
          const dbFormatted: PublicQuiz[] = data.map((q: any) => ({
            id: q.id,
            title: q.title,
            user_id: q.user_id ?? "system",
            created_at: q.created_at,
            is_public: q.is_public ?? true,
            category: q.category,
            language: q.language,
            quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : "standard",
            question_count: Array.isArray(q.questions) ? q.questions.length : 0,
          }));

          const dbIds = new Set(dbFormatted.map((q) => q.id));
          const restStatic = STATIC_QUIZZES.filter((q) => !dbIds.has(q.id));
          allQuizzes = [...dbFormatted, ...restStatic];
        }

        // Filter strictly for this category
        const categoryQuizzes = allQuizzes.filter(
          (q) => (q.category || "").trim().toLowerCase() === category.toLowerCase()
        );

        setQuizzes(categoryQuizzes);
      } catch {
        // Fallback to static
        const categoryQuizzes = STATIC_QUIZZES.filter(
          (q) => (q.category || "").trim().toLowerCase() === category.toLowerCase()
        );
        setQuizzes(categoryQuizzes);
      } finally {
        setLoading(false);
      }
    })();
  }, [category]);

  // Filter logic
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((q) => {
      const matchLang = selectedLang === "all" || q.language === selectedLang;
      const matchMode = selectedMode === "all" || q.quiz_difficulty === selectedMode;

      let matchDiff = true;
      if (selectedDiff !== "all") {
        const diffInfo = getDifficultyDetails(q);
        if (selectedDiff === "easy" && diffInfo.label !== "سهل") matchDiff = false;
        if (selectedDiff === "medium" && diffInfo.label !== "متوسط") matchDiff = false;
        if (selectedDiff === "hard" && diffInfo.label !== "صعب") matchDiff = false;
      }

      return matchLang && matchMode && matchDiff;
    });
  }, [quizzes, selectedLang, selectedMode, selectedDiff]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [selectedLang, selectedMode, selectedDiff]);

  const visibleQuizzes = filteredQuizzes.slice(0, visibleCount);
  const hasMore = visibleCount < filteredQuizzes.length;

  return (
    <main className="relative min-h-screen px-5 py-8 pb-24">
      <AnimatedBg />
      <div className="mx-auto max-w-6xl">
        {/* Top Navigation & Language Toggle */}
        <header className="flex items-center justify-between gap-4">
          <Link
            to="/browse"
            className="press rounded-2xl border border-border bg-surface-gradient px-4 py-2 font-display text-sm flex items-center gap-2 hover:border-primary/50"
          >
            <span>←</span>
            <span>العودة للأقسام</span>
          </Link>
          <LanguageToggle />
        </header>

        {/* Category Header */}
        <div className="mt-8 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-surface-gradient to-background p-6 md:p-8 shadow-glow backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">{icon}</span>
              <div>
                <h1 className="font-display text-3xl sm:text-5xl text-gradient">{category}</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  استكشف كويزات قسم {category} المعالجة والمراجعة للإطلاق
                </p>
              </div>
            </div>

            {/* Total Count Badge */}
            <div className="rounded-2xl border border-sun/40 bg-sun/10 px-4 py-2 font-display text-sm sm:text-base text-sun shadow-sm">
              عدد الاختبارات في هذا القسم: <span className="font-extrabold text-lg tabular-nums">{quizzes.length}</span>
            </div>
          </div>
        </div>

        {/* Collapsible Scoped Filter Bar */}
        <div className="mt-6 rounded-3xl border border-border bg-surface-gradient p-5 shadow-md">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="press font-display text-base flex items-center gap-2 text-foreground"
            >
              <span>⚙️</span>
              <span>الفلاتر والفرز</span>
              <span className="text-xs text-muted-foreground">
                ({selectedLang === "all" && selectedMode === "all" && selectedDiff === "all" ? "الكل" : "فلتر مخصص"})
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="md:hidden press rounded-xl border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
            >
              {filterExpanded ? "إخفاء الفلاتر ▲" : "إظهار الفلاتر ▼"}
            </button>
          </div>

          <div className={cn("mt-4 space-y-4 pt-3 border-t border-border/40", !filterExpanded && "hidden md:block")}>
            <div className="flex flex-wrap items-center gap-6">
              {/* Language Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  🌐 اللغة:
                </span>
                {[
                  { id: "all", label: "الكل" },
                  { id: "ar", label: "🇸🇦 العربية" },
                  { id: "en", label: "🇬🇧 English" },
                ].map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setSelectedLang(lang.id)}
                    className={cn(
                      "press rounded-full border px-3 py-1 text-xs font-semibold",
                      selectedLang === lang.id
                        ? "border-primary bg-primary/20 text-primary ring-1 ring-primary"
                        : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Game Mode Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  ⚡ النمط:
                </span>
                {[
                  { id: "all", label: "الكل" },
                  { id: "standard", label: "🎮 قياسي" },
                  { id: "challenge", label: "⚡ تحدي" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setSelectedMode(mode.id)}
                    className={cn(
                      "press rounded-full border px-3 py-1 text-xs font-semibold",
                      selectedMode === mode.id
                        ? "border-primary bg-primary/20 text-primary ring-1 ring-primary"
                        : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Difficulty Level Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  📊 المستوى:
                </span>
                {[
                  { id: "all", label: "الكل" },
                  { id: "easy", label: "🟢 سهل" },
                  { id: "medium", label: "🟡 متوسط" },
                  { id: "hard", label: "🔴 صعب" },
                ].map((diff) => (
                  <button
                    key={diff.id}
                    type="button"
                    onClick={() => setSelectedDiff(diff.id)}
                    className={cn(
                      "press rounded-full border px-3 py-1 text-xs font-semibold",
                      selectedDiff === diff.id
                        ? "border-primary bg-primary/20 text-primary ring-1 ring-primary"
                        : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {diff.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Cards Grid */}
        {loading ? (
          <div className="mt-12 text-center text-muted-foreground">{t("editor.loading")}</div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-border bg-surface-gradient p-10 text-center">
            <p className="font-display text-2xl">لا توجد اختبارات تطابق الفلاتر المحددة</p>
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleQuizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <p className="text-xs font-semibold text-muted-foreground">
                عرض {visibleQuizzes.length} من أصل {filteredQuizzes.length} اختبار
              </p>
              {hasMore ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount((v) => v + BATCH_SIZE)}
                  className="press rounded-2xl bg-gradient-hero px-8 py-3.5 font-display text-lg text-primary-foreground shadow-chunky hover:scale-[1.02]"
                >
                  عرض المزيد (+12) ⬇️
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
