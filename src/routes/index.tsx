import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { useI18n } from "@/lib/i18n";

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

  const categories = [
    { label: lang === "ar" ? "أنمي ومانغا" : "Anime", icon: "⚔️" },
    { label: lang === "ar" ? "كرة قدم ورياضة" : "Sports", icon: "⚽" },
    { label: lang === "ar" ? "تاريخ وحضارات" : "History", icon: "📜" },
    { label: lang === "ar" ? "جغرافيا وعواصم" : "Geography", icon: "🌍" },
    { label: lang === "ar" ? "ثقافة ومعلومات عامة" : "Trivia", icon: "💡" },
    { label: lang === "ar" ? "أفلام ومسلسلات" : "Movies & TV", icon: "🎬" },
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
        <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          {/* PRIMARY DOMINANT CTA - CREATE QUIZ -> BLANK QUIZ EDITOR */}
          <button
            type="button"
            disabled={creating}
            onClick={() => void handleCreateQuiz()}
            className="press w-full max-w-xs sm:max-w-none rounded-3xl bg-gradient-hero px-9 py-5 font-display text-2xl text-primary-foreground shadow-chunky transition-transform hover:scale-[1.02] disabled:opacity-50"
          >
            ✨ {creating ? t("quizzes.loading") : t("home.createQuiz")}
          </button>

          {/* SECONDARY OUTLINE CTAs */}
          <Link
            to="/browse"
            className="press w-full max-w-xs sm:max-w-none rounded-3xl border border-primary/50 bg-background/60 hover:bg-background/90 px-7 py-5 font-display text-xl text-primary backdrop-blur-md shadow-md hover:border-primary"
          >
            📚 {t("browse.title")}
          </Link>

          <Link
            to="/join"
            className="press w-full max-w-xs sm:max-w-none rounded-3xl border border-secondary/60 bg-background/60 hover:bg-background/90 px-7 py-5 font-display text-xl text-foreground backdrop-blur-md shadow-md hover:border-secondary"
          >
            🎮 {t("home.joinGame")}
          </Link>

          <Link
            to="/custom-challenge"
            className="press w-full max-w-xs sm:max-w-none rounded-3xl border border-sun/60 bg-sun/10 px-7 py-5 font-display text-xl text-sun shadow-md hover:bg-sun/20"
          >
            ⚡ {lang === "ar" ? "تحدي كويز مخصص" : "Custom Challenge"}
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
                  ⚡ 370+ {lang === "ar" ? "كويز" : "Quizzes"}
                </span>
                <span className="rounded-full border border-border bg-background/50 px-3.5 py-1 text-xs font-bold text-muted-foreground">
                  5,000+ {lang === "ar" ? "سؤال" : "Questions"}
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl sm:text-4xl text-gradient">
                {lang === "ar"
                  ? "تصفح مئات الكويزات جاهزة للإطلاق فوراً"
                  : "Explore Hundreds of Ready-Made Quizzes"}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                {lang === "ar"
                  ? "اختر من بين تشكيلة واسعة من الكويزات المجهزة والمراجعة في كافة التخصصات والاهتمامات:"
                  : "Choose from a massive, hand-curated library covering all popular categories:"}
              </p>

              {/* Category Pills Spotlight */}
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat.label}
                    className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/90 shadow-sm"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
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
