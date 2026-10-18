import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { supabase } from "@/integrations/supabase/client";
import { HomeDemo } from "@/components/quiz/HomeDemo";
import { Logo } from "@/components/quiz/Logo";
import { SiteFooter } from "@/components/quiz/SiteFooter";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import { getCategoryIcon } from "@/lib/browse-helpers";
import { PLAN_PRICES } from "@/lib/pricing";
import { fetchQuestionCounts } from "@/lib/question-counts";

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
        const [{ data, error }, questionCounts] = await Promise.all([
          supabase.from("quizzes").select("id,category").eq("is_public", true),
          fetchQuestionCounts(),
        ]);

        if (error) throw error;
        if (!active) return;
        const playable = (data ?? []) as unknown as Array<{
          id: string;
          category: string | null;
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
          questions: playable.reduce((sum, quiz) => sum + (questionCounts.get(quiz.id) ?? 0), 0),
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
        .insert({ user_id: user.id, title: t("quizzes.newTitle"), is_public: false })
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

  const [code, setCode] = useState("");
  const fmt = (n: number) => n.toLocaleString(lang === "ar" ? "ar-EG" : "en-US");

  function joinWithCode(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/join", search: code.length === 6 ? { code } : {} });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <Link to="/" aria-label={t("brand.quiz") + t("brand.clash")}>
          <Logo />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link to="/browse" className="hidden font-semibold text-muted-foreground hover:text-foreground sm:block">
            {t("nav.browse")}
          </Link>
          <a href="#pricing" className="hidden font-semibold text-muted-foreground hover:text-foreground sm:block">
            {t("home.pricingTitle")}
          </a>
          {isAdmin ? (
            <Link to="/admin" className="press flex items-center gap-1.5 rounded-xl bg-secondary px-3 py-2 text-sm font-semibold">
              <ShieldCheck className="size-4" aria-hidden />
              <span className="hidden sm:inline">{lang === "ar" ? "لوحة التحكم" : "Admin"}</span>
            </Link>
          ) : null}
          {user ? (
            <>
              <Link to="/quizzes" className="press rounded-xl bg-secondary px-3 py-2 text-sm font-semibold">
                {t("nav.myQuizzes")}
              </Link>
              <button
                type="button"
                onClick={() => void signOut()}
                className="hidden px-2 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground sm:block"
              >
                {t("nav.signOut")}
              </button>
            </>
          ) : (
            <Link to="/auth" className="press rounded-xl bg-secondary px-4 py-2 text-sm font-semibold">
              {t("nav.signIn")}
            </Link>
          )}
          <LanguageToggle />
        </nav>
      </header>

      <main className="flex-1">
        {/* First screen: join for players, host for the person with the TV. */}
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-4 pb-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:pt-10">
          <div>
            <h1 className="animate-rise font-display text-5xl leading-[1.1] sm:text-6xl lg:text-7xl">
              {t("home.headline1")}
              <span className="block text-sun">{t("home.headline2")}</span>
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">{t("home.lede")}</p>

            <form onSubmit={joinWithCode} className="mt-8 max-w-md rounded-3xl bg-card p-5">
              <label htmlFor="home-code" className="block font-semibold">
                {t("home.haveCode")}
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start">
                <input
                  id="home-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6))}
                  placeholder="K7Q2M4"
                  autoCapitalize="characters"
                  autoComplete="off"
                  spellCheck={false}
                  dir="ltr"
                  className="h-16 min-w-0 flex-1 rounded-2xl border-2 border-border bg-background text-center font-display text-3xl tracking-[0.25em] uppercase outline-none transition-colors duration-150 placeholder:text-muted-foreground/40 focus:border-sun"
                />
                <button type="submit" className="ledge ledge-yellow">
                  <span className="ledge-face h-16 px-6 font-display text-xl">{t("home.joinCta")}</span>
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link to="/host" className="ledge ledge-blue">
                <span className="ledge-face h-14 px-7 font-display text-xl">{t("home.host")}</span>
              </Link>
              <span className="text-muted-foreground">{t("home.hostNote")}</span>
            </div>
          </div>

          <HomeDemo />
        </section>

        {/* What you can play, and what it costs. */}
        <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col rounded-3xl bg-card p-6 md:col-span-2 lg:col-span-1">
            <h2 className="font-display text-3xl">{t("home.libraryTitle")}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {t("home.libraryBody", { n: libraryStats ? fmt(libraryStats.quizzes) : "…" })}
            </p>
            <ul className="mt-4 flex min-h-10 flex-wrap gap-2">
              {(libraryStats?.categories ?? []).map((cat) => (
                <li key={cat.label} className="flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 font-semibold">
                  {cat.label}
                  <span className="text-lime tabular-nums">{fmt(cat.count)}</span>
                </li>
              ))}
            </ul>
            <Link to="/browse" className="ledge ledge-green mt-6 self-start">
              <span className="ledge-face h-12 px-6 font-display text-lg">{t("home.browse")}</span>
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-1 flex-col rounded-3xl bg-card p-6">
              <h2 className="font-display text-2xl">{t("home.challengeTitle")}</h2>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{t("home.challengeBody")}</p>
              <Link to="/custom-challenge" className="ledge ledge-red mt-5 self-start">
                <span className="ledge-face h-12 px-6 font-display text-lg">{t("home.challengeCta")}</span>
              </Link>
            </div>
            <div className="flex flex-1 flex-col rounded-3xl bg-card p-6">
              <h2 className="font-display text-2xl">{t("home.createTitle")}</h2>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{t("home.createBody")}</p>
              <button
                type="button"
                disabled={creating}
                onClick={() => void handleCreateQuiz()}
                className="ledge ledge-panel mt-5 self-start disabled:opacity-60"
              >
                <span className="ledge-face h-12 px-6 font-display text-lg">
                  {creating ? t("quizzes.loading") : t("home.createQuiz")}
                </span>
              </button>
            </div>
          </div>

          <div id="pricing" className="flex scroll-mt-6 flex-col rounded-3xl bg-card p-6">
            <h2 className="font-display text-2xl">{t("home.pricingTitle")}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-background p-4">
                <p className="font-display text-3xl">{t("home.free")}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t("home.freeNote")}</p>
              </div>
              <div className="rounded-2xl bg-background p-4 ring-2 ring-sun">
                <p className="font-display text-3xl" dir="ltr">
                  {PLAN_PRICES.monthly.symbol}
                  {PLAN_PRICES.monthly.amount}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t("home.proNote")}</p>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t("home.yearly", { price: `${PLAN_PRICES.yearly.symbol}${PLAN_PRICES.yearly.amount}` })}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
