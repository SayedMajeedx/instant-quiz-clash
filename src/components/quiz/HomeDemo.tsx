import { useEffect, useState } from "react";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LETTERS = { ar: ["أ", "ب", "ج", "د"], en: ["A", "B", "C", "D"] };
const QUESTION = {
  ar: { text: "ما عاصمة مملكة البحرين؟", options: ["المحرق", "المنامة", "الرفاع", "سترة"] },
  en: { text: "What is the capital of Bahrain?", options: ["Muharraq", "Manama", "Riffa", "Sitra"] },
};
const CORRECT = 1;
const VOTES = [2, 7, 2, 1];
const PLAYERS = 12;
const QUESTION_MS = 5000;
const REVEAL_MS = 2600;
const FACE = ["bg-answer-1 text-white", "bg-answer-2 text-white", "bg-answer-3 text-on-sun", "bg-answer-4 text-white"];

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * A question playing itself on the home page: votes come in, time runs out, the answer
 * is revealed. Explanatory motion is the one place a long loop earns its keep; with
 * reduced motion it holds the revealed state instead.
 */
export function HomeDemo() {
  const { lang, t } = useI18n();
  const copy = QUESTION[lang === "ar" ? "ar" : "en"];
  const letters = LETTERS[lang === "ar" ? "ar" : "en"];
  const [cycle, setCycle] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setAnswered(PLAYERS);
      setRevealed(true);
      return;
    }
    setAnswered(0);
    setRevealed(false);
    setRunning(false);
    // Start the timer bar on the next frame so its transition has a starting point.
    const raf = requestAnimationFrame(() => setRunning(true));
    const tick = window.setInterval(() => setAnswered((n) => Math.min(PLAYERS, n + 1)), QUESTION_MS / PLAYERS);
    const reveal = window.setTimeout(() => {
      window.clearInterval(tick);
      setAnswered(PLAYERS);
      setRevealed(true);
    }, QUESTION_MS);
    const next = window.setTimeout(() => setCycle((c) => c + 1), QUESTION_MS + REVEAL_MS);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(tick);
      window.clearTimeout(reveal);
      window.clearTimeout(next);
    };
  }, [cycle]);

  const fmt = (n: number) => n.toLocaleString(lang === "ar" ? "ar-EG" : "en-US");

  return (
    <div className="rounded-3xl bg-card p-5 sm:p-6" aria-label={t("home.demoLabel")} role="img">
      <div className="flex justify-between text-sm font-semibold text-muted-foreground">
        <span>{t("play.questionOf", { n: fmt(3), total: fmt(10) })}</span>
        <span className="tabular-nums">{t("host.answered", { answered: fmt(answered), total: fmt(PLAYERS) })}</span>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-background">
        <div
          className="h-full w-full rounded-full bg-sun ltr:origin-left rtl:origin-right"
          style={{
            transform: `scaleX(${running && !revealed ? 0 : revealed ? 0 : 1})`,
            transition: running && !revealed ? `transform ${QUESTION_MS}ms linear` : "none",
          }}
        />
      </div>
      <p className="mt-5 min-h-[2.6em] font-display text-2xl leading-snug sm:text-3xl">{copy.text}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {copy.options.map((label, i) => (
          <div
            key={i}
            className={cn(
              "relative flex items-center gap-2.5 overflow-hidden rounded-xl px-3.5 py-3 font-display text-lg transition-opacity duration-200",
              FACE[i],
              revealed && i !== CORRECT && "opacity-35",
              revealed && i === CORRECT && "animate-pulse-hard outline outline-4 -outline-offset-4 outline-white/90",
            )}
          >
            {/* Vote share fills from the reading start; only transform animates. */}
            <span
              aria-hidden
              className="absolute inset-0 bg-black/15 ltr:origin-left rtl:origin-right"
              style={{
                transform: `scaleX(${revealed ? VOTES[i]! / PLAYERS : 0})`,
                transition: "transform 600ms var(--ease-out)",
              }}
            />
            <span className="relative grid size-6 shrink-0 place-items-center">
              <AnswerShape index={i} className="size-5" />
            </span>
            <span className="relative">{letters[i]}</span>
            <span className="relative truncate">{label}</span>
            <span className="relative ms-auto tabular-nums">{revealed ? fmt(VOTES[i]!) : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
