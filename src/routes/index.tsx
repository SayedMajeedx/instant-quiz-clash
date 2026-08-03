import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerShape } from "@/components/quiz/AnswerTile";

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
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBg dense />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <span className="font-display text-2xl tracking-tight">
          Quiz<span className="text-gradient">Clash</span>
        </span>
        <Link to="/quizzes" className="press rounded-xl border border-border bg-surface-gradient px-4 py-2 text-sm font-semibold">
          My quizzes
        </Link>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-24 pt-10 text-center">
        <p className="animate-rise text-sm font-bold uppercase tracking-[0.35em] text-sun">
          Live trivia · no app · no login
        </p>
        <h1 className="mt-5 animate-rise font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
          Turn any room into a
          <span className="block text-gradient">game show.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-rise text-lg text-muted-foreground">
          Put the big screen up, share a 6-character code, and everyone plays from their own phone.
          Questions advance on a shared timer — nobody has to click “next”.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/host"
            className="press w-full max-w-xs rounded-3xl bg-gradient-hero px-8 py-5 font-display text-2xl text-primary-foreground shadow-chunky sm:w-auto"
          >
            Create a quiz
          </Link>
          <Link
            to="/join"
            className="press w-full max-w-xs rounded-3xl border-b-[6px] border-secondary bg-surface-gradient px-8 py-5 font-display text-2xl sm:w-auto"
          >
            Join a game
          </Link>
        </div>

        <div className="mt-20 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Auto-advance", d: "Every screen derives the live question from one shared start time." },
            { t: "Speed scoring", d: "Answer fast, score up to 1000. Hesitate and it slides toward 300." },
            { t: "Live leaderboard", d: "Rows slide into new ranks after every single question." },
            { t: "Any device", d: "Big projected host display, one-handed phone play for everyone else." },
          ].map((f, i) => (
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
