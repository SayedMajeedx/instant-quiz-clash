import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Gamepad2, LibraryBig, Sparkles, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import { getCategoryIcon } from "@/lib/browse-helpers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuizClash — Live Multiplayer Trivia in Your Browser" },
      {
        name: "description",
        content:
          "Host a live trivia game show in seconds. Players join from any phone with a 6-character code — questions advance automatically, scores update in real time.",
      },
      { property: "og:title", content: "QuizClash — Live Multiplayer Trivia" },
      {
        property: "og:description",
        content: "Create a quiz, share a code, and play live trivia with friends from any browser.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { lang, t } = useI18n();
  const { user } = useAuth();
  const { isAdmin } = useIsAdmin();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [creating, setCreating] = useState(false);
  const [libraryStats, setLibraryStats] = useState<{
    quizzes: number;
    questions: number;
    categories: Array<{ label: string; icon: string; count: number }>;
  } | null>(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const { data, error } = await supabase
          .from("quizzes")
          .select("id,category,questions(count)")
          .eq("is_public", true);

        if (error) throw error;
        if (!active) return;
        const playable = (data ?? []) as unknown as Array<{
          id: string;
          category: string | null;
          questions: Array<{ count: number }>;
        }>;
        const categoryCounts = new Map<string, number>();
        for (const quiz of playable) {
          const category = (quiz.category || "عام").trim();
          categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
        }
        const categories = [...categoryCounts.entries()]
          .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ar"))
          .slice(0, 6)
          .map(([label, count]) => ({ label, count, icon: getCategoryIcon(label) }));

        setLibraryStats({
          quizzes: playable.length,
          questions: playable.reduce((sum, quiz) => sum + (quiz.questions[0]?.count ?? 0), 0),
          categories,
        });
      } catch (error) {
        console.error("Failed to load homepage catalog figures:", error);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    toast.success(t("auth.signedOut"));
    void navigate({ to: "/", replace: true });
  }

  async function handleCreateQuiz() {
    if (!user) {
      void navigate({ to: "/quizzes" });
      return;
    }

    setCreating(true);
    try {
      const { data, error } = await supabase
        .from("quizzes")
        .insert({ user_id: user.id, title: t("quizzes.newTitle") })
        .select()
        .single();

      if (error || !data) {
        toast.error(t("quizzes.createError"));
        void navigate({ to: "/quizzes" });
        return;
      }

      const quiz = data as unknown as { id: string };
      await supabase.from("questions").insert({
        quiz_id: quiz.id,
        question_text: "",
        options: ["", "", "", ""],
        correct_index: 0,
        time_limit_seconds: 30,
        order_index: 0,
      });

      void navigate({
        to: "/quizzes/$quizId",
        params: { quizId: quiz.id },
        search: { import: undefined },
      });
    } catch {
      toast.error(t("quizzes.createError"));
      void navigate({ to: "/quizzes" });
    } finally {
      setCreating(false);
    }
  }

  const features = [
    { t: t("home.f1.t"), d: t("home.f1.d") },
    { t: t("home.f2.t"), d: t("home.f2.d") },
    { t: t("home.f3.t"), d: t("home.f3.d") },
    { t: t("home.f4.t"), d: t("home.f4.d") },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBg dense />

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight">
          {t("brand.quiz")}
          <span className="text-gradient">{t("brand.clash")}</span>
        </Link>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          {isAdmin && (
            <Link
              to="/admin"
              className="press flex items-center gap-1.5 rounded-2xl bg-primary/20 border border-primary/40 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/30"
            >
              <span>🛡️</span>
              <span>{lang === "ar" ? "لوحة التحكم" : "Admin Dashboard"}</span>
            </Link>
          )}
          {user ? (
            <>
              <Link
                to="/quizzes"
                className="press rounded-2xl border border-border bg-surface-gradient px-4 py-2 text-sm font-semibold hover:border-primary/50"
              >
                {t("nav.myQuizzes")}
              </Link>
              <button
                type="button"
                onClick={() => void signOut()}
                className="press rounded-2xl px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                {t("nav.signOut")}
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="press rounded-2xl border border-border bg-surface-gradient px-5 py-2 text-sm font-semibold hover:border-primary/50"
            >
              {t("nav.signIn")}
            </Link>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-8 text-center">
        <p className="animate-rise text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-sun">
          {t("home.kicker")}
        </p>
        <h1 className="mt-4 animate-rise font-display text-5xl leading-[0.98] sm:text-7xl md:text-8xl">
          {t("home.title1")}
          <span className="block text-gradient">{t("home.title2")}</span>
        </h1>

        {/* Concise 1-Line Punchy Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl animate-rise font-display text-lg sm:text-xl md:text-2xl text-muted-foreground/90 leading-relaxed">
          {lang === "ar"
            ? "استضف ألعاب مسابقات تفاعلية ومباشرة بين أصدقائك وعائلتك مجاناً وفي ثوانٍ!"
            : "Host live interactive trivia game shows with friends and family in seconds — 100% free!"}
        </p>

        {/* Clear Action Hierarchy: Single Primary CTA + Clean Secondary Outlines */}
        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* PRIMARY DOMINANT CTA - CREATE QUIZ -> BLANK QUIZ EDITOR */}
          <button
            type="button"
            disabled={creating}
            onClick={() => void handleCreateQuiz()}
            className="group press relative min-h-36 overflow-hidden rounded-[2rem] border border-primary/60 bg-gradient-to-br from-primary/35 via-secondary/20 to-background/80 p-5 text-start shadow-[0_18px_50px_-24px_hsl(var(--primary)/0.9)] backdrop-blur-xl disabled:opacity-50"
          >
            <span className="absolute -end-10 -top-12 h-32 w-32 rounded-full bg-primary/30 blur-3xl transition-transform duration-500 group-hover:scale-150" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
              <Sparkles className="h-6 w-6" />
            </span>
            <span className="relative mt-5 block font-display text-xl text-foreground">
              {creating ? t("quizzes.loading") : t("home.createQuiz")}
            </span>
            <span className="relative mt-1 block text-xs font-semibold text-primary">
              {lang === "ar" ? "صمّمها بطريقتك" : "Build it your way"}
            </span>
          </button>

          {/* SECONDARY OUTLINE CTAs */}
          <Link
            to="/browse"
            className="group press relative min-h-36 overflow-hidden rounded-[2rem] border border-violet-400/50 bg-gradient-to-br from-violet-500/20 via-primary/10 to-background/80 p-5 text-start shadow-[0_18px_50px_-28px_hsl(var(--primary)/0.8)] backdrop-blur-xl"
          >
            <span className="absolute -end-10 -top-12 h-32 w-32 rounded-full bg-violet-500/25 blur-3xl transition-transform duration-500 group-hover:scale-150" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/40 bg-violet-500/20 text-violet-300">
              <LibraryBig className="h-6 w-6" />
            </span>
            <span className="relative mt-5 block font-display text-xl text-foreground">
              {t("browse.title")}
            </span>
            <span className="relative mt-1 block text-xs font-semibold text-violet-300">
              {lang === "ar" ? "اختر من المكتبة" : "Explore the library"}
            </span>
          </Link>

          <Link
            to="/join"
            className="group press relative min-h-36 overflow-hidden rounded-[2rem] border border-cyan-400/45 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-background/80 p-5 text-start shadow-[0_18px_50px_-28px_rgba(34,211,238,0.7)] backdrop-blur-xl"
          >
            <span className="absolute -end-10 -top-12 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/20 text-cyan-300">
              <Gamepad2 className="h-6 w-6" />
            </span>
            <span className="relative mt-5 block font-display text-xl text-foreground">
              {t("home.joinGame")}
            </span>
            <span className="relative mt-1 block text-xs font-semibold text-cyan-300">
              {lang === "ar" ? "ادخل برمز الغرفة" : "Enter a room code"}
            </span>
          </Link>

          <Link
            to="/custom-challenge"
            className="group press relative min-h-36 overflow-hidden rounded-[2rem] border border-sun/55 bg-gradient-to-br from-sun/20 via-orange-500/10 to-background/80 p-5 text-start shadow-[0_18px_50px_-28px_rgba(251,191,36,0.7)] backdrop-blur-xl"
          >
            <span className="absolute -end-10 -top-12 h-32 w-32 rounded-full bg-sun/25 blur-3xl transition-transform duration-500 group-hover:scale-150" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-sun/40 bg-sun/15 text-sun">
              <Zap className="h-6 w-6" />
            </span>
            <span className="relative mt-5 block font-display text-xl text-foreground">
              {lang === "ar" ? "تحدي كويز مخصص" : "Custom Challenge"}
            </span>
            <span className="relative mt-1 block text-xs font-semibold text-sun">
              {lang === "ar" ? "اصنع تحدياً فورياً" : "Generate an instant challenge"}
            </span>
          </Link>
        </div>

        {/* "How It Works" 3-Step Cards */}
        <div className="mt-14 grid gap-4 text-start sm:grid-cols-3">
          <div className="rounded-3xl border border-border/80 bg-background/60 p-6 backdrop-blur-md shadow-md">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 font-display text-lg text-primary">
              1
            </span>
            <h3 className="mt-4 font-display text-xl">
              {lang === "ar" ? "اختر أو أنشئ كويزك" : "Pick or Create"}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {lang === "ar"
                ? "اختر كويزاً جاهزاً من المكتبة الضخمة أو صمّم أسئلتك الخاصة بكل سهولة."
                : "Choose a ready-made quiz from our library or build your own in minutes."}
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-background/60 p-6 backdrop-blur-md shadow-md">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-sun/10 border border-sun/30 font-display text-lg text-sun">
              2
            </span>
            <h3 className="mt-4 font-display text-xl">
              {lang === "ar" ? "شارِك رمز الغرفة" : "Share Room Code"}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {lang === "ar"
                ? "يدخل الحضور عبر جوالاتهم باستخدام رمز مكون من 6 أحرف بدون أي تحميل."
                : "Players join instantly from their phones using a simple 6-character code."}
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-background/60 p-6 backdrop-blur-md shadow-md">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-lime/10 border border-lime/30 font-display text-lg text-lime">
              3
            </span>
            <h3 className="mt-4 font-display text-xl">
              {lang === "ar" ? "تنافَس على الصدارة" : "Play & Compete"}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {lang === "ar"
                ? "تتقدم الأسئلة وتتحديث نتائج لوحة الصدارة الحية في الوقت الفعلي تلقائياً!"
                : "Questions advance on a shared timer with real-time live scoreboard ranks!"}
            </p>
          </div>
        </div>

        {/* Live Library Spotlight Showcase Card (Replaces Duplicate Generic Banner) */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-surface-gradient to-background p-8 shadow-glow text-start backdrop-blur-xl relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-full border border-primary/40 bg-primary/20 px-3.5 py-1 text-xs font-bold text-primary">
                  📚 {lang === "ar" ? "مكتبة جاهزة للعب" : "Ready-to-Play Library"}
                </span>
                <span className="rounded-full border border-sun/40 bg-sun/10 px-3.5 py-1 text-xs font-bold text-sun">
                  ⚡ {libraryStats ? libraryStats.quizzes.toLocaleString(lang === "ar" ? "ar-BH" : "en-US") : "…"} {lang === "ar" ? "كويز" : "Quizzes"}
                </span>
                <span className="rounded-full border border-border bg-background/50 px-3.5 py-1 text-xs font-bold text-muted-foreground">
                  {libraryStats ? libraryStats.questions.toLocaleString(lang === "ar" ? "ar-BH" : "en-US") : "…"} {lang === "ar" ? "سؤال" : "Questions"}
                </span>
              </div>

              <h2 className="mt-4 min-h-[4rem] font-display text-2xl sm:min-h-[6rem] sm:text-4xl text-gradient">
                {lang === "ar"
                  ? `تصفح ${libraryStats?.quizzes.toLocaleString("ar-BH") || ""} كويزاً جاهزاً للإطلاق فوراً`
                  : `Explore ${libraryStats?.quizzes.toLocaleString("en-US") || ""} Ready-Made Quizzes`}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                {lang === "ar"
                  ? "اختر من بين تشكيلة واسعة من الكويزات المجهزة والمراجعة في كافة التخصصات والاهتمامات:"
                  : "Choose from a massive, hand-curated library covering all popular categories:"}
              </p>

              {/* Category Pills Spotlight */}
              <div className="mt-4 flex min-h-[4.5rem] flex-wrap content-start gap-2 sm:min-h-9">
                {(libraryStats?.categories || []).map((cat) => (
                  <span
                    key={cat.label}
                    className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/90 shadow-sm"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-extrabold text-primary">{cat.count}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/browse"
              className="press shrink-0 w-full lg:w-auto text-center rounded-2xl bg-gradient-hero px-7 py-4 font-display text-xl text-primary-foreground shadow-chunky hover:scale-[1.02]"
            >
              🚀 {lang === "ar" ? "استكشف كافة الكويزات الجاهزة ←" : "Explore Library Now →"}
            </Link>
          </div>
        </div>

        {/* Feature Cards — High Contrast & Glassmorphism */}
        <div className="mt-16 grid gap-4 text-start sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.t}
              className="rounded-3xl border border-border/90 bg-background/80 hover:bg-background hover:border-primary/50 p-6 shadow-md backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span
                className="mb-4 grid size-12 place-items-center rounded-2xl shadow-sm"
                style={{ backgroundColor: `var(--answer-${i + 1})` }}
              >
                <AnswerShape index={i} className="size-7" />
              </span>
              <h2 className="font-display text-xl">{f.t}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
