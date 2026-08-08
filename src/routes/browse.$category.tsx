import { recordQuizPlay } from "@/lib/quiz-stats.functions";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { QuizCard, type PublicQuiz } from "@/components/quiz/QuizCard";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import {
  cleanQuizTitle,
  getCategoryIcon,
  getDifficultyDetails,
} from "@/lib/browse-helpers";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { cloneQuiz } from "@/lib/clone-quiz";
import {
  getAllAdminCategories,
  getAllAdminQuizzes,
  type AdminSubcategoryItem,
} from "@/lib/admin-data-helper";

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
        <span>🏠</span>
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
  const norm = (s: string) =>
    (s || "")
      .replace(/[\u064B-\u0652\u0640]/g, "")
      .replace(/[إأآا]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .toLowerCase()
      .trim();

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 my-2">
      <div className="flex items-center gap-2.5 min-w-max">
        {/* All Chip */}
        <button
          type="button"
          onClick={() => onSelectSubcategory("all")}
          className={cn(
            "press rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer border",
            selectedSubcategory === "all"
              ? "bg-gradient-hero text-primary-foreground border-primary/50 shadow-glow scale-[1.02]"
              : "bg-background/80 text-muted-foreground border-border/80 hover:border-primary/40 hover:text-foreground"
          )}
        >
          <span>الكل</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-extrabold",
              selectedSubcategory === "all"
                ? "bg-white/20 text-white"
                : "bg-muted text-muted-foreground"
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
                "press rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer border",
                isSelected
                  ? "bg-gradient-hero text-primary-foreground border-primary/50 shadow-glow scale-[1.02]"
                  : "bg-background/80 text-muted-foreground border-border/80 hover:border-primary/40 hover:text-foreground"
              )}
            >
              <span>{sub.name}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-extrabold",
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Component 3: Compact Carousel Quiz Card */
function CarouselQuizCard({ quiz }: { quiz: PublicQuiz }) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [isCloning, setIsCloning] = useState(false);

  const cleanedTitle = cleanQuizTitle(quiz.title);
  const diffInfo = getDifficultyDetails(quiz);

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
    <div className="shrink-0 w-[150px] sm:w-[210px] flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-gradient p-3.5 sm:p-4 shadow-md transition-all hover:border-primary/50 hover:shadow-glow">
      <div>
        {/* Difficulty Badge */}
        <div className="flex items-center justify-between gap-1">
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] sm:text-xs font-bold flex items-center gap-1 ${diffInfo.badgeClass}`}
          >
            <span className="text-[10px]">{diffInfo.icon}</span>
            <span>{diffInfo.label}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-2.5 font-display text-xs sm:text-base leading-tight text-foreground line-clamp-2 min-h-[2.2rem] sm:min-h-[2.6rem]">
          {cleanedTitle}
        </h3>

        {/* Subcategory & Questions */}
        <p className="mt-1.5 text-[10px] sm:text-xs font-medium text-muted-foreground line-clamp-1">
          {quiz.subcategory || quiz.category || "عام"} · {quiz.question_count} أسئلة
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-3 flex flex-col gap-1.5">
        <button
          type="button"
          onClick={handleClone}
          disabled={isCloning}
          className="press w-full rounded-xl bg-gradient-hero py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-primary-foreground shadow-sm hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
        >
          {isCloning ? "جارٍ التحضير..." : "العب الآن 🚀"}
        </button>
        <Link
          to="/browse/$quizId/preview"
          params={{ quizId: quiz.id }}
          className="press w-full text-center rounded-xl border border-border py-1 text-[10px] sm:text-[11px] font-bold text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          شاهد الأسئلة 👁️
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
      className="shrink-0 w-[140px] sm:w-[170px] flex flex-col items-center justify-center rounded-3xl border border-dashed border-primary/50 bg-primary/5 p-4 sm:p-6 shadow-sm hover:bg-primary/10 hover:border-primary transition-all group cursor-pointer"
    >
      <span className="grid size-10 sm:size-12 place-items-center rounded-2xl bg-primary/20 text-primary text-xl sm:text-2xl font-black group-hover:scale-110 transition-transform">
        +{count}
      </span>
      <span className="mt-3 text-xs sm:text-sm font-extrabold text-primary group-hover:underline flex items-center gap-1">
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
          <h2 className="font-display text-lg sm:text-2xl text-foreground flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-primary animate-pulse" />
            <span>{title}</span>
          </h2>
          <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-xs font-extrabold text-primary">
            {quizzes.length} كويز
          </span>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="press text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer"
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

  const icon = getCategoryIcon(category);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const [adminCats, adminQuizzes] = await Promise.all([
          getAllAdminCategories(),
          getAllAdminQuizzes(),
        ]);

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
      } catch {}
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
    <main className="relative min-h-screen px-4 sm:px-6 py-8 pb-24">
      <AnimatedBg />
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
        <div className="mt-6 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-surface-gradient to-background p-6 md:p-8 shadow-glow backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="text-4xl sm:text-5xl">{icon}</span>
              <div>
                <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl text-gradient">{category}</h1>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
                  استكشف أفضل الكويزات والأسئلة التفاعلية في قسم {category} والعبها مباشرة مع أصدقائك!
                </p>
              </div>
            </div>

            {/* Total Count Badge */}
            <div className="rounded-2xl border border-sun/40 bg-sun/10 px-4 py-2 font-display text-xs sm:text-sm text-sun shadow-sm">
              إجمالي الكويزات: <span className="font-extrabold text-base sm:text-lg tabular-nums">{quizzes.length} كويز</span>
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
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground text-sm">
              🔎
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`ابحث داخل قسم ${category}...`}
              className="w-full rounded-2xl border border-border bg-background/60 py-2.5 pr-10 pl-4 font-semibold text-xs sm:text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
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

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">ترتيب حسب:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-border bg-background/60 py-2 pr-4 pl-9 text-xs sm:text-sm font-semibold text-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
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

        {/* Collapsible Scoped Difficulty Filter Bar */}
        <div className="mt-3 rounded-2xl border border-border/80 bg-surface-gradient p-3.5 sm:p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="press font-display text-xs sm:text-sm flex items-center gap-2 text-foreground"
            >
              <span>⚙️</span>
              <span>تصفية حسب المستوى</span>
              <span className="text-[11px] text-muted-foreground">
                ({selectedDiff === "all" ? "جميع المستويات" : "تحديد مخصص"})
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilterExpanded((v) => !v)}
              className="md:hidden press rounded-xl border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
            >
              {filterExpanded ? "إخفاء ▲" : "تحديد ▼"}
            </button>
          </div>

          <div className={cn("mt-3 space-y-3 pt-2.5 border-t border-border/40", !filterExpanded && "hidden md:block")}>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-bold text-muted-foreground">📊 المستوى:</span>
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
                    "press rounded-full border px-3 py-1 text-xs font-semibold cursor-pointer",
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

        {/* MAIN CONTENT AREA */}
        {loading ? (
          <div className="mt-12 text-center text-muted-foreground font-semibold">{t("editor.loading")}</div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-border bg-surface-gradient p-10 text-center">
            <p className="font-display text-xl sm:text-2xl">لا توجد كويزات تطابق هذا البحث أو المستوى حالياً</p>
            {selectedSubcategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedSubcategory("all")}
                className="mt-4 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
              >
                عرض كل الكويزات ↺
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
                  className="press rounded-2xl bg-gradient-hero px-8 py-3 font-display text-base text-primary-foreground shadow-chunky hover:scale-[1.02]"
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
