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
  type CategoryInfo,
} from "@/lib/browse-helpers";

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

function BrowseLandingPage() {
  const { t } = useI18n();

  const [quizzes, setQuizzes] = useState<PublicQuiz[]>(STATIC_QUIZZES);
  const [loading, setLoading] = useState(true);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisibleCount, setSearchVisibleCount] = useState(BATCH_SIZE);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const { data, error } = await (supabase.from("quizzes") as any)
          .select("*, questions(id)")
          .eq("is_public", true)
          .order("created_at", { ascending: false });

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
          setQuizzes([...dbFormatted, ...restStatic]);
        }
      } catch {
        // Static QUIZ_LIBRARY fallback
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Derive unique categories with live quiz counts
  const categories = useMemo<CategoryInfo[]>(() => {
    const map = new Map<string, number>();

    quizzes.forEach((q) => {
      const cat = (q.category || "عام").trim();
      if (cat) {
        map.set(cat, (map.get(cat) ?? 0) + 1);
      }
    });

    // Sort categories by popularity / quiz count
    const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    return sorted.map(([name, count]) => ({
      id: name,
      name,
      icon: getCategoryIcon(name),
      count,
    }));
  }, [quizzes]);

  // Dynamic & Hybrid Selection for "الأحدث والأكثر شهرة" (Latest + Most Popular)
  const popularQuizzes = useMemo(() => {
    if (!quizzes || quizzes.length === 0) return [];

    // 1. Sort all quizzes by created_at descending (newest first)
    const sortedByDate = [...quizzes].sort((a, b) => {
      const dateA = new Date(a.created_at || "2026-01-01").getTime();
      const dateB = new Date(b.created_at || "2026-01-01").getTime();
      return dateB - dateA;
    });

    // 2. Pick top 3 Latest quizzes
    const latest3 = sortedByDate.slice(0, 3);
    const usedIds = new Set(latest3.map((q) => q.id));

    // 3. Pick top 3 Popular/Featured quizzes across diverse categories
    const remaining = quizzes.filter((q) => !usedIds.has(q.id));

    const popular3: PublicQuiz[] = [];
    const featuredCats = [
      "سلسلة مسابقات أهل البيت (ع)",
      "أنمي",
      "معلومات عامة",
      "تاريخ",
      "جغرافيا",
      "علوم وطب",
      "تكنولوجيا",
      "رياضة",
    ];

    for (const cat of featuredCats) {
      if (popular3.length >= 3) break;
      const match = remaining.find(
        (q) => q.category === cat && !popular3.some((p) => p.id === q.id)
      );
      if (match) popular3.push(match);
    }

    // Fallback if needed
    while (popular3.length < 3 && remaining.length > popular3.length) {
      const next = remaining.find((q) => !popular3.some((p) => p.id === q.id));
      if (next) popular3.push(next);
      else break;
    }

    // Interleave Latest and Popular
    const hybrid: PublicQuiz[] = [];
    for (let i = 0; i < 3; i++) {
      const itemL = latest3[i];
      if (itemL) hybrid.push(itemL);
      const itemP = popular3[i];
      if (itemP) hybrid.push(itemP);
    }

    return hybrid;
  }, [quizzes]);

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
    <main className="relative min-h-screen px-5 py-8 pb-24">
      <AnimatedBg />
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link to="/" className="font-display text-3xl">
              {t("brand.quiz")}<span className="text-gradient">{t("brand.clash")}</span>
            </Link>
            <h1 className="mt-2 font-display text-3xl sm:text-5xl text-gradient">مكتبة الكويزات الجاهزة</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              استكشف مئات الكويزات الممتعة والمجهزة للعب المباشر مع أصدقائك وعائلتك!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/quizzes"
              className="press rounded-2xl border border-border bg-surface-gradient px-4 py-2 font-display text-sm hover:border-primary/50"
            >
              {t("nav.quizzes")}
            </Link>
            <LanguageToggle />
          </div>
        </header>

        {/* Global Search Bar */}
        <div className="mt-8">
          <div className="relative mx-auto max-w-3xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 ابحث عن كويز أو موضوع (مثال: ون بيس، جغرافيا، تاريخ، الدوري الإنجليزي...)"
              className="w-full rounded-3xl border border-primary/40 bg-background/80 px-6 py-4 pe-12 font-display text-base text-foreground placeholder:text-muted-foreground shadow-glow backdrop-blur-xl transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground"
              >
                ✕ مسح
              </button>
            ) : null}
          </div>
        </div>

        {/* SEARCH RESULTS VIEW (When query is active) */}
        {searchQuery.trim() ? (
          <div className="mt-10">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <h2 className="font-display text-2xl">
                نتائج البحث عن «{searchQuery}»{" "}
                <span className="text-sm font-normal text-muted-foreground">({searchResults.length} كويز)</span>
              </h2>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="press text-sm text-primary hover:underline font-semibold"
              >
                العودة إلى الأقسام
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="mt-10 rounded-3xl border border-border bg-surface-gradient p-10 text-center">
                <p className="font-display text-2xl">لم نجد كويزات تطابق «{searchQuery}»</p>
                <p className="mt-2 text-sm text-muted-foreground">جرب البحث بكلمات أخرى أو تصفح الأقسام الرئيسية</p>
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {visibleSearchResults.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-10 flex flex-col items-center justify-center gap-3">
                  <p className="text-xs font-semibold text-muted-foreground">
                    عرض {visibleSearchResults.length} من أصل {searchResults.length} كويز
                  </p>
                  {hasMoreSearch ? (
                    <button
                      type="button"
                      onClick={() => setSearchVisibleCount((v) => v + BATCH_SIZE)}
                      className="press rounded-2xl bg-gradient-hero px-8 py-3.5 font-display text-lg text-primary-foreground shadow-chunky hover:scale-[1.02]"
                    >
                      عرض المزيد (+12 كويز) ⬇️
                    </button>
                  ) : null}
                </div>
              </>
            )}
          </div>
        ) : (
          /* STANDARD TWO-STAGE LANDING VIEW */
          <>
            {/* ROW 1: Most Popular / Featured Row */}
            <section className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl text-gradient flex items-center gap-2">
                  <span>🔥</span>
                  <span>الأحدث والأكثر شهرة</span>
                </h2>
                <span className="text-xs font-bold text-sun border border-sun/40 bg-sun/10 px-3 py-1 rounded-full">
                  جاهزة للعب فوراً
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {popularQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </section>

            {/* ROW 2: Category Grid */}
            <section className="mt-14">
              <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-4">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-gradient flex items-center gap-2">
                    <span>📚</span>
                    <span>الأقسام الرئيسية</span>
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    اختر القسم المناسب للوصول إلى كافة الكويزات التابعة له
                  </p>
                </div>
                <span className="text-xs font-bold text-muted-foreground border border-border bg-background/50 px-3 py-1.5 rounded-full">
                  إجمالي الأقسام: {categories.length}
                </span>
              </div>

              {loading ? (
                <div className="mt-12 text-center text-muted-foreground">{t("editor.loading")}</div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to="/browse/$category"
                      params={{ category: encodeURIComponent(cat.name) }}
                      className="press group flex items-center justify-between rounded-3xl border border-border/80 bg-surface-gradient/80 p-6 shadow-md transition-all hover:border-primary/60 hover:bg-background/90 hover:shadow-glow hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid size-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-3xl shadow-sm transition-transform group-hover:scale-110">
                          {cat.icon}
                        </span>
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                            {cat.name}
                          </h3>
                          <p className="mt-1 text-xs font-bold text-sun">
                            {cat.count} {cat.count === 1 ? "كويز" : "كويزات"}
                          </p>
                        </div>
                      </div>

                      <span className="font-display text-2xl text-muted-foreground transition-transform group-hover:translate-x-[-4px] group-hover:text-primary">
                        ←
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
