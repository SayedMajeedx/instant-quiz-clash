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

import { getAllAdminCategories, type AdminSubcategoryItem } from "@/lib/admin-data-helper";

export const Route = createFileRoute("/browse/$category")({
  head: ({ params }) => {
    const categoryName = decodeURIComponent(params.category || "كويزات");
    return {
      meta: [
        { title: `${categoryName} — QuizClash` },
        { name: "description", content: `استكشف أفضل كويزات وقسم ${categoryName} المجهزة للعب المباشر.` },
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
  subcategory: (q as any).subcategory || "",
  language: q.language,
  quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : "standard",
  question_count: q.questions.length,
}));

function CategoryDetailPage() {
  const { category: rawCategory } = Route.useParams();
  const category = useMemo(() => decodeURIComponent(rawCategory || "").trim(), [rawCategory]);
  const { t } = useI18n();

  const [quizzes, setQuizzes] = useState<PublicQuiz[]>([]);
  const [subcategories, setSubcategories] = useState<AdminSubcategoryItem[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  // Filters scoped to this category (Difficulty level)
  const [selectedDiff, setSelectedDiff] = useState("all");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Pagination state
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);


  const icon = getCategoryIcon(category);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const [adminCats, { data, error }] = await Promise.all([
          getAllAdminCategories(),
          (supabase.from("quizzes") as any)
            .select("*, questions(id)")
            .eq("is_public", true)
            .order("created_at", { ascending: false }),
        ]);

        // Find subcategories for this category
        const foundCat = adminCats.find((c) => c.name.trim().toLowerCase() === category.toLowerCase());
        if (foundCat && foundCat.subcategories) {
          setSubcategories(foundCat.subcategories);
        }

        let allQuizzes = STATIC_QUIZZES;

        if (!error && data && data.length > 0) {
          const dbFormatted: PublicQuiz[] = data.map((q: any) => ({
            id: q.id,
            title: q.title,
            user_id: q.user_id ?? "system",
            created_at: q.created_at,
            is_public: q.is_public ?? true,
            category: q.category,
            subcategory: q.subcategory || "",
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

  // Play counts (how many times each quiz was launched)
  const [playCounts, setPlayCounts] = useState<Record<string, number>>({});
  useEffect(() => {
    void (async () => {
      try {
        const { data } = await (supabase.from("quiz_play_stats") as any).select(
          "source_quiz_id, play_count"
        );
        if (!data) return;
        const map: Record<string, number> = {};
        for (const row of data as { source_quiz_id: string; play_count: number }[]) {
          map[row.source_quiz_id] = row.play_count;
        }
        setPlayCounts(map);
      } catch {}
    })();
  }, []);

  // Filter + sort logic
  const filteredQuizzes = useMemo(() => {
    const norm = (s: string) =>
      (s || "")
        .replace(/[\u064B-\u0652\u0640]/g, "")
        .replace(/[إأآا]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .toLowerCase()
        .trim();
    const term = norm(search);
    const diffRank = { "سهل": 0, "متوسط": 1, "صعب": 2 } as Record<string, number>;

    const list = quizzes.filter((q) => {
      if (selectedSubcategory !== "all") {
        const sub = ((q as any).subcategory || "").trim();
        if (sub !== selectedSubcategory.trim()) return false;
      }
      if (selectedDiff !== "all") {
        const diffInfo = getDifficultyDetails(q);
        if (selectedDiff === "easy" && diffInfo.label !== "سهل") return false;
        if (selectedDiff === "medium" && diffInfo.label !== "متوسط") return false;
        if (selectedDiff === "hard" && diffInfo.label !== "صعب") return false;
      }
      if (term && !norm(cleanQuizTitle(q.title) + " " + (q.title || "")).includes(term)) return false;
      return true;
    });

    const sorted = [...list];
    if (sortBy === "easiest") {
      sorted.sort(
        (a, b) =>
          (diffRank[getDifficultyDetails(a).label] ?? 1) -
          (diffRank[getDifficultyDetails(b).label] ?? 1)
      );
    } else if (sortBy === "popular") {
      sorted.sort((a, b) => (playCounts[b.id] ?? 0) - (playCounts[a.id] ?? 0));
    } else if (sortBy === "questions") {
      sorted.sort((a, b) => (a.question_count ?? 0) - (b.question_count ?? 0));

    } else if (sortBy === "alpha") {
      sorted.sort((a, b) => cleanQuizTitle(a.title).localeCompare(cleanQuizTitle(b.title), "ar"));
    } else {
      sorted.sort(
        (a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
      );
    }
    return sorted;
  }, [quizzes, selectedDiff, search, sortBy, playCounts]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [selectedDiff, search, sortBy]);

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
            <span>العودة إلى قائمة الأقسام</span>
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
                  استكشف أفضل الكويزات والأسئلة المتنوعة في قسم {category} والعبها مباشرة مع أصدقائك!
                </p>
              </div>
            </div>

            {/* Total Count Badge */}
            <div className="rounded-2xl border border-sun/40 bg-sun/10 px-4 py-2 font-display text-sm sm:text-base text-sun shadow-sm">
              إجمالي الكويزات: <span className="font-extrabold text-lg tabular-nums">{quizzes.length} كويز</span>
            </div>
          </div>
        </div>

        {/* Subcategories Filter Bar */}
        {subcategories.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-border/80 bg-surface-gradient p-3 shadow-sm">
            <span className="text-xs font-bold text-muted-foreground ml-2">الأقسام الفرعية:</span>
            <button
              type="button"
              onClick={() => setSelectedSubcategory("all")}
              className={cn(
                "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedSubcategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              الكل ({quizzes.length})
            </button>

            {subcategories.map((sub) => {
              const count = quizzes.filter((q) => ((q as any).subcategory || "").trim() === sub.name.trim()).length;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubcategory(sub.name)}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                    selectedSubcategory === sub.name
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>{sub.name}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Search inside this category */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground">
              🔎
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`ابحث داخل قسم ${category}...`}
              className="w-full rounded-2xl border border-border bg-background/60 py-3 pr-11 pl-4 font-semibold text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
            />
            {search ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute inset-y-0 left-3 my-auto h-7 rounded-lg border border-border px-2 text-xs text-muted-foreground hover:text-foreground"
              >
                مسح
              </button>
            ) : null}
          </div>

          {/* Sort dropdown (separate from filters) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">ترتيب حسب:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-border bg-background/60 py-2.5 pr-4 pl-9 text-sm font-semibold text-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
              >
                <option value="newest">الأحدث أولاً</option>
                <option value="popular">الأكثر لعباً</option>
                <option value="easiest">من الأسهل للأصعب</option>
                <option value="questions">عدد الأسئلة (الأقل → الأكثر)</option>
                <option value="alpha">أبجدياً</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-muted-foreground">
                ▼
              </span>
            </div>
          </div>

        </div>

        {/* Collapsible Scoped Filter Bar */}
        <div className="mt-4 rounded-3xl border border-border bg-surface-gradient p-5 shadow-md">
          <div className="flex items-center justify-between">

            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="press font-display text-base flex items-center gap-2 text-foreground"
            >
              <span>⚙️</span>
              <span>تصفية حسب المستوى</span>
              <span className="text-xs text-muted-foreground">
                ({selectedDiff === "all" ? "جميع المستويات" : "تحديد مخصص"})
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
            <p className="font-display text-2xl">لا توجد كويزات تطابق هذا المستوى حالياً</p>
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
                عرض {visibleQuizzes.length} من أصل {filteredQuizzes.length} كويز
              </p>
              {hasMore ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount((v) => v + BATCH_SIZE)}
                  className="press rounded-2xl bg-gradient-hero px-8 py-3.5 font-display text-lg text-primary-foreground shadow-chunky hover:scale-[1.02]"
                >
                  عرض المزيد (+12 كويز) ⬇️
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
