import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, Search, X } from "lucide-react";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { QuizCard, type PublicQuiz } from "@/components/quiz/QuizCard";
import { Logo } from "@/components/quiz/Logo";
import { SiteFooter } from "@/components/quiz/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { cleanQuizTitle, getCategoryMark } from "@/lib/browse-helpers";

import { getAllAdminQuizzes, getAllAdminCategories, type AdminCategoryItem } from "@/lib/admin-data-helper";

export const Route = createFileRoute("/browse/")({
  head: () => ({
    meta: [
      { title: "مكتبة الكويزات الجاهزة — QuizClash" },
      { name: "description", content: "تصفح مئات الكويزات الجاهزة للعب المباشر حسب الأقسام والتصنيفات." },
      { property: "og:title", content: "مكتبة الكويزات الجاهزة — QuizClash" },
      { property: "og:description", content: "اختر قسمك المفضل واستضف لعبة مسابقات حية في ثوانٍ." },
    ],
  }),
  component: BrowseLandingPage,
});

const BATCH_SIZE = 12;

function BrowseLandingPage() {
  const { t } = useI18n();

  const [quizzes, setQuizzes] = useState<PublicQuiz[]>([]);
  const [categoriesList, setCategoriesList] = useState<AdminCategoryItem[]>([]);
  const [playStats, setPlayStats] = useState<Record<string, { count: number; lastPlayedAt: string }>>({});
  const [loading, setLoading] = useState(true);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisibleCount, setSearchVisibleCount] = useState(BATCH_SIZE);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        // One catalogue fetch (counts only), reused for the category totals.
        const [quizzesRes, statsRes] = await Promise.allSettled([
          getAllAdminQuizzes({ withQuestions: false }),
          supabase.from("quiz_play_stats").select("source_quiz_id, play_count, last_played_at"),
        ]);
        const categoriesRes = await Promise.allSettled([
          getAllAdminCategories(quizzesRes.status === "fulfilled" ? quizzesRes.value : []),
        ]).then(([result]) => result!);

        const adminQuizzes = quizzesRes.status === "fulfilled" ? quizzesRes.value : [];
        const adminCategories = categoriesRes.status === "fulfilled" ? categoriesRes.value : [];
        const statsRows = statsRes.status === "fulfilled" && statsRes.value.data ? statsRes.value.data : [];

        const publicQuizzes: PublicQuiz[] = adminQuizzes
          .filter((q) => q.is_public)
          .map((q) => ({
            id: q.id,
            title: q.title,
            user_id: q.user_id || "system",
            created_at: q.created_at,
            is_public: true,
            category: q.category,
            subcategory: q.subcategory || null,
            language: q.language || "ar",
            quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : "standard",
            question_count: q.question_count,
          }));

        setQuizzes(publicQuizzes);
        setCategoriesList(adminCategories);
        const nextStats: Record<string, { count: number; lastPlayedAt: string }> = {};
        for (const row of statsRows) {
          nextStats[row.source_quiz_id] = { count: row.play_count, lastPlayedAt: row.last_played_at };
        }
        setPlayStats(nextStats);
      } catch (err) {
        console.error("Error loading browse index catalog:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Derive unique categories with subcategories and live quiz counts
  const categories = useMemo(() => {
    return categoriesList.map((c) => ({
      id: c.id,
      name: c.name,
      count: c.quiz_count,
      subcategories: c.subcategories || [],
    }));
  }, [categoriesList]);

  // Dynamic & Hybrid Selection for "الأحدث والأكثر شهرة" (Latest + Most Popular)
  const popularQuizzes = useMemo(() => {
    if (!quizzes || quizzes.length === 0) return [];

    // 1. Sort all quizzes by created_at descending (newest first)
    const sortedByDate = [...quizzes].sort((a, b) => {
      const dateA = new Date(a.created_at || "2026-01-01").getTime();
      const dateB = new Date(b.created_at || "2026-01-01").getTime();
      return dateB - dateA;
    });

    const latest = sortedByDate.slice(0, 2);
    const usedIds = new Set(latest.map((q) => q.id));
    const popular = [...quizzes]
      .filter((q) => !usedIds.has(q.id))
      .sort((a, b) => {
        const aStat = playStats[a.id];
        const bStat = playStats[b.id];
        return (bStat?.count || 0) - (aStat?.count || 0)
          || new Date(bStat?.lastPlayedAt || b.created_at || 0).getTime() - new Date(aStat?.lastPlayedAt || a.created_at || 0).getTime();
      })
      .slice(0, 2);

    return [latest[0], popular[0], latest[1], popular[1]].filter(Boolean) as PublicQuiz[];
  }, [quizzes, playStats]);

  // Search filtered results
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return quizzes.filter((q) => {
      const titleMatch = cleanQuizTitle(q.title).toLowerCase().includes(query) || q.title.toLowerCase().includes(query);
      const catMatch = (q.category || "").toLowerCase().includes(query);
      return titleMatch || catMatch;
    });
  }, [quizzes, searchQuery]);

  // Reset pagination on search query change
  useEffect(() => {
    setSearchVisibleCount(BATCH_SIZE);
  }, [searchQuery]);

  const visibleSearchResults = searchResults.slice(0, searchVisibleCount);
  const hasMoreSearch = searchVisibleCount < searchResults.length;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/quizzes" className="press rounded-xl bg-secondary px-4 py-2 text-sm font-semibold">
            {t("nav.quizzes")}
          </Link>
          <LanguageToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-20">
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">مكتبة الكويزات</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          كويزات عربية جاهزة للعب المباشر مع أصدقائك وعائلتك.
        </p>

        <div className="relative mt-8 max-w-3xl">
          <Search className="pointer-events-none absolute inset-y-0 start-4 my-auto size-5 text-muted-foreground" aria-hidden />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="ابحث في المكتبة"
            placeholder="ابحث عن كويز أو موضوع: ون بيس، جغرافيا، تاريخ…"
            className="h-14 w-full rounded-2xl border-2 border-border bg-card ps-12 pe-12 text-lg outline-none transition-colors duration-150 placeholder:text-muted-foreground focus:border-sun"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="مسح البحث"
              className="press absolute inset-y-0 end-3 my-auto grid size-9 place-items-center rounded-full bg-secondary"
            >
              <X className="size-4" aria-hidden />
            </button>
          ) : null}
        </div>

        {searchQuery.trim() ? (
          <section className="mt-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl">
                نتائج «{searchQuery}»{" "}
                <span className="text-base font-normal text-muted-foreground">({searchResults.length})</span>
              </h2>
              <button type="button" onClick={() => setSearchQuery("")} className="font-semibold text-sun hover:underline">
                العودة إلى الأقسام
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="mt-6 rounded-2xl bg-card p-10 text-center">
                <p className="font-display text-2xl">لا توجد كويزات تطابق «{searchQuery}»</p>
                <p className="mt-2 text-muted-foreground">جرّب كلمات أخرى أو تصفّح الأقسام.</p>
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {visibleSearchResults.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </div>
                <div className="mt-10 flex flex-col items-center gap-3">
                  <p className="text-sm text-muted-foreground">
                    {visibleSearchResults.length} من {searchResults.length}
                  </p>
                  {hasMoreSearch ? (
                    <button
                      type="button"
                      onClick={() => setSearchVisibleCount((v) => v + BATCH_SIZE)}
                      className="ledge ledge-panel"
                    >
                      <span className="ledge-face h-12 px-8 font-display text-lg">عرض المزيد</span>
                    </button>
                  ) : null}
                </div>
              </>
            )}
          </section>
        ) : (
          <>
            <section className="mt-10">
              <h2 className="font-display text-2xl">الأحدث والأكثر لعباً</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {loading
                  ? Array.from({ length: 4 }, (_, i) => <CardSkeleton key={i} />)
                  : popularQuizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)}
              </div>
            </section>

            <section className="mt-14">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl">الأقسام</h2>
                {!loading ? <span className="text-muted-foreground">{categories.length} قسم</span> : null}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {loading
                  ? Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="h-24 animate-pulse rounded-2xl bg-card" aria-hidden />
                    ))
                  : categories.map((cat) => {
                      const mark = getCategoryMark(cat.name);
                      const MarkIcon = mark.Icon;
                      return (
                        <Link
                          key={cat.id}
                          to="/browse/$category"
                          params={{ category: encodeURIComponent(cat.name) }}
                          className="press flex items-center gap-4 rounded-2xl bg-card p-5 transition-colors duration-150 hover:bg-secondary"
                        >
                          <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${mark.bg} ${mark.fg}`}>
                            <MarkIcon className="size-6" aria-hidden />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-display text-xl">{cat.name}</span>
                            <span className="text-sm text-muted-foreground">{cat.count} كويز</span>
                          </span>
                          <ChevronLeft className="size-5 shrink-0 text-muted-foreground ltr:rotate-180" aria-hidden />
                        </Link>
                      );
                    })}
              </div>
            </section>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

/** Placeholder with the same footprint as a QuizCard, so the grid does not jump on load. */
function CardSkeleton() {
  return (
    <div className="h-[220px] animate-pulse rounded-2xl bg-card p-5" aria-hidden>
      <div className="size-10 rounded-xl bg-secondary" />
      <div className="mt-4 h-6 w-3/4 rounded bg-secondary" />
      <div className="mt-3 h-4 w-1/2 rounded bg-secondary" />
    </div>
  );
}
