import { createFileRoute, Link } from "@tanstack/react-router";
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
  const { t } = useI18n();
  const features = [
    { t: t("home.f1.t"), d: t("home.f1.d") },
    { t: t("home.f2.t"), d: t("home.f2.d") },
    { t: t("home.f3.t"), d: t("home.f3.d") },
    { t: t("home.f4.t"), d: t("home.f4.d") },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBg dense />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <span className="font-display text-2xl tracking-tight">
          {t("brand.quiz")}
          <span className="text-gradient">{t("brand.clash")}</span>
        </span>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link
            to="/quizzes"
            className="press rounded-xl border border-border bg-surface-gradient px-4 py-2 text-sm font-semibold"
          >
            {t("nav.myQuizzes")}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-24 pt-10 text-center">
        <p className="animate-rise text-sm font-bold uppercase tracking-[0.35em] text-sun">{t("home.kicker")}</p>
        <h1 className="mt-5 animate-rise font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
          {t("home.title1")}
          <span className="block text-gradient">{t("home.title2")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-rise text-lg text-muted-foreground">{t("home.sub")}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/host"
            className="press w-full max-w-xs rounded-3xl bg-gradient-hero px-8 py-5 font-display text-2xl text-primary-foreground shadow-chunky sm:w-auto"
          >
            {t("home.createQuiz")}
          </Link>
          <Link
            to="/join"
            className="press w-full max-w-xs rounded-3xl border-b-[6px] border-secondary bg-surface-gradient px-8 py-5 font-display text-2xl sm:w-auto"
          >
            {t("home.joinGame")}
          </Link>
        </div>

        <div className="mt-20 grid gap-4 text-start sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.t} className="rounded-2xl border border-border bg-surface-gradient p-5">
              <span
                className="mb-4 grid size-10 place-items-center rounded-xl"
                style={{ backgroundColor: `var(--answer-${i + 1})` }}
              >
                <AnswerShape index={i} className="size-6" />
              </span>
              <h2 className="font-display text-xl">{f.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
