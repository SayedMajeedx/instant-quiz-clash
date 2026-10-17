import { recordQuizPlay } from "@/lib/quiz-stats.functions";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { QuizCard, type PublicQuiz } from "@/components/quiz/QuizCard";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import {
  cleanQuizTitle,
  getCategoryMark,
  getDifficultyDetails,
  getDifficultyStyle,
} from "@/lib/browse-helpers";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { cloneQuiz } from "@/lib/clone-quiz";
import {
  getAllAdminCategories,
  getAllAdminQuizzes,
  type AdminSubcategoryItem,
} from "@/lib/admin-data-helper";
import { ChevronDown, ChevronLeft, ChevronRight, Eye, Play, Search, X } from "lucide-react";
import { SiteFooter } from "@/components/quiz/SiteFooter";

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

/* Component 1: Breadcrumb Component */
export function CategoryBreadcrumb({
  category,
  activeSubcategory,
  onResetSubcategory,
}: {
  category: string;
  activeSubcategory?: string | null;
  onResetSubcategory: () => void;
}) {
  const isRealSub =
    activeSubcategory &&
    activeSubcategory !== "all" &&
    activeSubcategory !== "__UNCATEGORIZED__" &&
    activeSubcategory !== "كويزات عامة أخرى";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground flex-wrap dir-rtl">
      <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
        <span>الرئيسية</span>
      </Link>
      <span className="text-muted-foreground/40">←</span>
      <Link to="/browse" className="hover:text-primary transition-colors">
        الأقسام
      </Link>
      <span className="text-muted-foreground/40">←</span>
      {isRealSub ? (
        <button
          type="button"
          onClick={onResetSubcategory}
          className="hover:text-primary transition-colors cursor-pointer text-muted-foreground"
        >
          {category}
        </button>
      ) : (
        <span className="text-foreground font-bold">{category}</span>
      )}

      {isRealSub && (
        <>
          <span className="text-muted-foreground/40">←</span>
          <span className="text-primary font-bold">{activeSubcategory}</span>
        </>
      )}
    </nav>
  );
}

/* Component 2: SubcategoryChips Bar */
export function SubcategoryChips({
  subcategories,
  selectedSubcategory,
  onSelectSubcategory,
  quizzes,
}: {
  subcategories: AdminSubcategoryItem[];
  selectedSubcategory: string;
  onSelectSubcategory: (subName: string) => void;
  quizzes: PublicQuiz[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const updateOverflow = () => {
      const element = scrollerRef.current;
      setIsOverflowing(Boolean(element && element.scrollWidth > element.clientWidth + 4));
    };
    updateOverflow();
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [subcategories, quizzes.length]);

  const scrollChips = (direction: number) => {
    scrollerRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  const norm = (s: string) =>
    (s || "")
      .replace(/[\u064B-\u0652\u0640]/g, "")
      .replace(/[إأآا]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .toLowerCase()
      .trim();

  return (
    <div className="relative my-2 rounded-2xl bg-card px-2 py-2">
      <div
        ref={scrollerRef}
        className="w-full overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex items-center gap-2.5 min-w-max">
        {/* All Chip */}
        <button
          type="button"
          onClick={() => onSelectSubcategory("all")}
          className={cn(
            "press flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-150",
            selectedSubcategory === "all"
              ? "bg-sun text-on-sun"
              : "bg-secondary text-foreground"
          )}
        >
          <span>الكل</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
              selectedSubcategory === "all"
                ? "bg-black/15"
                : "bg-background text-muted-foreground"
            )}
          >
            {quizzes.length}
          </span>
        </button>

        {/* Dynamic Subcategory Chips */}
        {subcategories.map((sub) => {
          const count = quizzes.filter(
            (q) => norm((q as any).subcategory || "") === norm(sub.name)
          ).length;

          const isSelected = norm(selectedSubcategory) === norm(sub.name);

          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => onSelectSubcategory(sub.name)}
              className={cn(
                "press flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-150",
                isSelected
                  ? "bg-sun text-on-sun"
                  : "bg-secondary text-foreground"
              )}
            >
              <span>{sub.name}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
                  isSelected
                    ? "bg-black/15"
                    : "bg-background text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
        </div>
      </div>

      {isOverflowing ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 rounded-l-3xl bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-3xl bg-gradient-to-l from-background via-background/80 to-transparent" />
          <button
            type="button"
            aria-label="عرض التصنيفات السابقة"
            onClick={() => scrollChips(-1)}
            className="press absolute left-2 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-secondary text-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="عرض التصنيفات التالية"
            onClick={() => scrollChips(1)}
            className="press absolute right-2 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-secondary text-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}
    </div>
  );
}

/* Component 3: Compact Carousel Quiz Card */
function CarouselQuizCard({ quiz }: { quiz: PublicQuiz }) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [isCloning, setIsCloning] = useState(false);

  const cleanedTitle = cleanQuizTitle(quiz.title);
  const diffInfo = getDifficultyStyle(quiz);

  async function handleClone() {
    setIsCloning(true);
    try {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes.user;

      if (!user) {
        toast.error(t("auth.required") || "يرجى تسجيل الدخول للعب الكويز");
        void navigate({ to: "/auth" });
        return;
      }

      const res = await cloneQuiz(quiz.id, quiz, user.id);

      if (!res.success || !res.newQuizId) {
        toast.error(res.error || t("browse.error"));
        return;
      }

      void recordQuizPlay({ data: { sourceId: quiz.id } }).catch(() => {});

      toast.success(t("browse.cloned") || "تم تجهيز الكويز للعب!");
      void navigate({ to: "/host", search: { quiz: res.newQuizId } });
    } catch {
      toast.error("حدث خطأ أثناء تجهيز الكويز");
    } finally {
      setIsCloning(false);
    }
  }

  return (
    <div className="flex w-[160px] shrink-0 flex-col justify-between rounded-2xl bg-card p-4 sm:w-[220px]">
      <div>
        {/* Difficulty Badge */}
        <div className="flex items-center justify-between gap-1">
          <span className="flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">
            <span className={`size-2 rounded-full ${diffInfo.dot}`} aria-hidden />
            {diffInfo.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 line-clamp-2 min-h-[2.6rem] font-display text-base leading-tight sm:text-lg">
          {cleanedTitle}
        </h3>

        {/* Subcategory & Questions */}
        <p className="mt-1.5 line-clamp-1 text-sm text-muted-foreground">
          {quiz.subcategory || quiz.category || "عام"} · {quiz.question_count} أسئلة
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        <button type="button" onClick={handleClone} disabled={isCloning} className="ledge ledge-blue w-full disabled:opacity-60">
          <span className="ledge-face h-10 font-display text-sm">
            <Play className="size-4" aria-hidden />
            {isCloning ? "جارٍ التحضير…" : "العب الآن"}
          </span>
        </button>
        <Link
          to="/browse/$quizId/preview"
          params={{ quizId: quiz.id }}
          className="press flex h-9 items-center justify-center gap-1.5 rounded-xl bg-secondary text-sm font-semibold"
        >
          <Eye className="size-4" aria-hidden />
          شاهد الأسئلة
        </Link>
      </div>
    </div>
  );
}

/* Component 4: More Subcategory Card */
function MoreSubcategoryCard({
  count,
  onSelect,
}: {
  count: number;
  subName?: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="press flex w-[140px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-4 sm:w-[170px] sm:p-6"
    >
      <span className="grid size-12 place-items-center rounded-xl bg-secondary font-display text-2xl">
        +{count}
      </span>
      <span className="mt-3 flex items-center gap-1 text-sm font-semibold text-sun">
        <span>عرض الكل</span>
        <span>←</span>
      </span>
    </button>
  );
}

/* Component 5: QuizSectionRow */
export function QuizSectionRow({
  title,
  quizzes,
  onViewAll,
}: {
  title: string;
  quizzes: PublicQuiz[];
  onViewAll: () => void;
}) {
  const PREVIEW_LIMIT = 4;
  const previewQuizzes = quizzes.slice(0, PREVIEW_LIMIT);
  const remainingCount = quizzes.length - PREVIEW_LIMIT;

  if (quizzes.length === 0) return null;

  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl sm:text-2xl">{title}</h2>
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-sm font-semibold tabular-nums">
            {quizzes.length} كويز
          </span>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="press flex cursor-pointer items-center gap-1 text-sm font-semibold text-sun hover:underline"
        >
          <span>عرض الكل</span>
          <span>←</span>
        </button>
      </div>

      {/* Horizontal Carousel Row */}
      <div className="w-full overflow-x-auto no-scrollbar pb-3 pt-1">
        <div className="flex items-stretch gap-3.5 sm:gap-4 min-w-max">
          {previewQuizzes.map((quiz) => (
            <CarouselQuizCard key={quiz.id} quiz={quiz} />
          ))}

          {remainingCount > 0 && (
            <MoreSubcategoryCard
              count={remainingCount}
              subName={title}
              onSelect={onViewAll}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* Main Category Detail Page */
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

  const mark = getCategoryMark(category);
  const MarkIcon = mark.Icon;

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        // One catalogue fetch (counts only), reused for the category list.
        const quizzesRes = await Promise.allSettled([getAllAdminQuizzes({ withQuestions: false })]).then(
          ([result]) => result!,
        );
        const catsRes = await Promise.allSettled([
          getAllAdminCategories(quizzesRes.status === "fulfilled" ? quizzesRes.value : []),
        ]).then(([result]) => result!);

        const adminCats = catsRes.status === "fulfilled" ? catsRes.value : [];
        const adminQuizzes = quizzesRes.status === "fulfilled" ? quizzesRes.value : [];

        // Find subcategories for this category
        const foundCat = adminCats.find(
          (c) => c.name.trim().toLowerCase() === category.trim().toLowerCase()
        );
        if (foundCat && foundCat.subcategories) {
          setSubcategories(foundCat.subcategories);
        }

        // Format public quizzes with overrides
        const publicQuizzes: PublicQuiz[] = adminQuizzes
          .filter((q) => q.is_public)
          .map((q) => ({
            id: q.id,
            title: q.title,
            user_id: q.user_id || "system",
            created_at: q.created_at,
            is_public: true,
            category: q.category,
            subcategory: q.subcategory || "",
            language: q.language || "ar",
            quiz_difficulty: q.quiz_difficulty === "challenge" ? "challenge" : "standard",
            question_count: q.question_count,
          }));

        // Filter strictly for this category
        const categoryQuizzes = publicQuizzes.filter(
          (q) => (q.category || "").trim().toLowerCase() === category.trim().toLowerCase()
        );

        setQuizzes(categoryQuizzes);
      } catch (err) {
        console.error("Error loading category quizzes:", err);
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
      } catch {
        // Play counts are optional; keep the catalog usable if analytics are unavailable.
      }
    })();
  }, []);

  const norm = (s: string) =>
    (s || "")
      .replace(/[\u064B-\u0652\u0640]/g, "")
      .replace(/[إأآا]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .toLowerCase()
      .trim();

  // Filter + sort logic
  const filteredQuizzes = useMemo(() => {
    const term = norm(search);
    const diffRank = { "سهل": 0, "متوسط": 1, "صعب": 2 } as Record<string, number>;

    const list = quizzes.filter((q) => {
      if (selectedSubcategory !== "all") {
        if (
          selectedSubcategory === "__UNCATEGORIZED__" ||
          selectedSubcategory === "كويزات عامة أخرى" ||
          norm(selectedSubcategory) === norm(category)
        ) {
          const subNorm = norm((q as any).subcategory || "");
          if (subNorm && subNorm !== norm(category)) return false;
        } else {
          const subNorm = norm((q as any).subcategory || "");
          const targetNorm = norm(selectedSubcategory);
          if (subNorm !== targetNorm) return false;
        }
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
  }, [quizzes, selectedSubcategory, selectedDiff, search, sortBy, playCounts, category]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [selectedSubcategory, selectedDiff, search, sortBy]);

  const visibleQuizzes = filteredQuizzes.slice(0, visibleCount);
  const hasMore = visibleCount < filteredQuizzes.length;

  // Group quizzes by subcategory when "all" is active
  const groupedSections = useMemo(() => {
    if (selectedSubcategory !== "all") return [];

    const sections: { id: string; title: string; filterKey: string; quizzes: PublicQuiz[] }[] = [];
    const assignedIds = new Set<string>();

    subcategories.forEach((sub) => {
      const subQuizzes = quizzes.filter(
        (q) => norm((q as any).subcategory || "") === norm(sub.name)
      );
      if (subQuizzes.length > 0) {
        subQuizzes.forEach((q) => assignedIds.add(q.id));
        sections.push({
          id: sub.id,
          title: sub.name,
          filterKey: sub.name,
          quizzes: subQuizzes,
        });
      }
    });

    // Uncategorized / General quizzes in this main category
    const remainingQuizzes = quizzes.filter((q) => !assignedIds.has(q.id));
    if (remainingQuizzes.length > 0) {
      sections.push({
        id: "uncategorized",
        title: subcategories.length > 0 ? "كويزات عامة أخرى" : category,
        filterKey: "__UNCATEGORIZED__",
        quizzes: remainingQuizzes,
      });
    }

    return sections;
  }, [selectedSubcategory, subcategories, quizzes, category]);

  return (
    <div className="flex min-h-screen flex-col">
    <main className="flex-1 px-4 py-8 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Top Header & Breadcrumb */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryBreadcrumb
            category={category}
            activeSubcategory={selectedSubcategory}
            onResetSubcategory={() => setSelectedSubcategory("all")}
          />
          <LanguageToggle />
        </header>

        {/* Category Main Header Card */}
        <div className="mt-6 rounded-3xl bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${mark.bg} ${mark.fg}`}>
                <MarkIcon className="size-7" aria-hidden />
              </span>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl">{category}</h1>
                <p className="mt-1 max-w-xl text-muted-foreground">
                  استكشف أفضل الكويزات والأسئلة التفاعلية في قسم {category} والعبها مباشرة مع أصدقائك!
                </p>
              </div>
            </div>

            {/* Total Count Badge */}
            <div className="rounded-2xl bg-background px-4 py-2 text-muted-foreground">
              <span className="font-display text-2xl text-foreground tabular-nums">{quizzes.length}</span> كويز
            </div>
          </div>
        </div>

        {/* Subcategories Horizontal Chips Bar */}
        {subcategories.length > 0 && (
          <div className="mt-4">
            <SubcategoryChips
              subcategories={subcategories}
              selectedSubcategory={selectedSubcategory}
              onSelectSubcategory={(subName) => setSelectedSubcategory(subName)}
              quizzes={quizzes}
            />
          </div>
        )}

        {/* Search & Sort Controls Bar */}
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute inset-y-0 start-4 my-auto size-5 text-muted-foreground" aria-hidden />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`ابحث داخل قسم ${category}...`}
              aria-label={`ابحث داخل قسم ${category}`}
              className="h-12 w-full rounded-xl border-2 border-border bg-card ps-12 pe-12 outline-none transition-colors duration-150 placeholder:text-muted-foreground focus:border-sun"
            />
            {search ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="مسح البحث"
                className="press absolute inset-y-0 end-2 my-auto grid size-8 place-items-center rounded-full bg-secondary"
              >
                <X className="size-4" aria-hidden />
              </button>
            ) : null}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="category-sort" className="whitespace-nowrap font-semibold text-muted-foreground">ترتيب حسب</label>
            <div className="relative">
              <select
                id="category-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border-2 border-border bg-card ps-4 pe-10 font-semibold outline-none transition-colors duration-150 focus:border-sun"
              >
                <option value="newest">الأحدث أولاً</option>
                <option value="popular">الأكثر لعباً</option>
                <option value="easiest">من الأسهل للأصعب</option>
                <option value="questions">عدد الأسئلة (الأقل → الأكثر)</option>
                <option value="alpha">أبجدياً</option>
              </select>
              <ChevronDown className="pointer-events-none absolute inset-y-0 end-3 my-auto size-4 text-muted-foreground" aria-hidden />
            </div>
          </div>
        </div>

        {/* Collapsible Scoped Difficulty Filter Bar */}
        <div className="mt-3 rounded-2xl bg-card p-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="press flex items-center gap-2 font-semibold"
            >
              <span>تصفية حسب المستوى</span>
              <span className="text-sm text-muted-foreground">
                ({selectedDiff === "all" ? "جميع المستويات" : "تحديد مخصص"})
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="press rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold md:hidden"
            >
              {filterExpanded ? "إخفاء" : "تحديد"}
            </button>
          </div>

          <div className={cn("mt-3 border-t border-border pt-3", !filterExpanded && "hidden md:block")}>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-muted-foreground">المستوى</span>
              {[
                { id: "all", label: "الكل", dot: "" },
                { id: "easy", label: "سهل", dot: "bg-answer-4" },
                { id: "medium", label: "متوسط", dot: "bg-answer-3" },
                { id: "hard", label: "صعب", dot: "bg-answer-1" },
              ].map((diff) => (
                <button
                  key={diff.id}
                  type="button"
                  onClick={() => setSelectedDiff(diff.id)}
                  aria-pressed={selectedDiff === diff.id}
                  className={cn(
                    "press flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors duration-150",
                    selectedDiff === diff.id ? "bg-sun text-on-sun" : "bg-secondary text-foreground",
                  )}
                >
                  {diff.dot ? <span className={cn("size-2 rounded-full", diff.dot)} aria-hidden /> : null}
                  {diff.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        {loading ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true" aria-label={t("editor.loading")}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="h-[220px] animate-pulse rounded-2xl bg-card" aria-hidden />
            ))}
          </div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-card p-10 text-center">
            <p className="font-display text-2xl">لا توجد كويزات تطابق هذا البحث أو المستوى حالياً</p>
            {selectedSubcategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedSubcategory("all")}
                className="press mt-4 rounded-xl bg-secondary px-4 py-2 font-semibold"
              >
                عرض كل الكويزات
              </button>
            )}
          </div>
        ) : selectedSubcategory === "all" && !search && selectedDiff === "all" ? (
          /* MODE A: GROUPED SECTION CAROUSELS VIEW WHEN "الكل" IS ACTIVE */
          <div className="mt-6 space-y-8">
            {groupedSections.map((sec) => (
              <QuizSectionRow
                key={sec.id}
                title={sec.title}
                quizzes={sec.quizzes}
                onViewAll={() => setSelectedSubcategory(sec.filterKey)}
              />
            ))}
          </div>
        ) : (
          /* MODE B: EXPANDED SINGLE GRID VIEW WHEN SPECIFIC CHIP/FILTER/SEARCH IS ACTIVE */
          <>
            <div className="mt-6 flex items-center justify-between px-1">
              <h2 className="font-display text-lg sm:text-xl text-foreground">
                {selectedSubcategory === "__UNCATEGORIZED__" || selectedSubcategory === "كويزات عامة أخرى" || norm(selectedSubcategory) === norm(category)
                  ? `الكويزات العامة - قسم ${category}`
                  : selectedSubcategory !== "all"
                  ? `كويزات ${selectedSubcategory}`
                  : "نتائج البحث والتصفية"}
              </h2>
              <span className="text-xs font-bold text-muted-foreground">
                ({filteredQuizzes.length} كويز)
              </span>
            </div>

            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  className="ledge ledge-panel"
                >
                  <span className="ledge-face h-12 px-8 font-display text-lg">عرض المزيد</span>
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </main>
    <SiteFooter />
    </div>
  );
}
