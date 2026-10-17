import { useI18n } from "@/lib/i18n";

const NUMBER_COLORS = ["var(--answer-4)", "var(--answer-3)", "var(--answer-1)"];

/** 3-2-1 before the first question. Each number pops in once; nothing loops. */
export function GameCountdown({ msLeft }: { msLeft: number }) {
  const { lang } = useI18n();
  const number = Math.min(3, Math.max(1, Math.ceil(msLeft / 1000)));

  return (
    <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
      <div className="flex flex-col items-center">
        <p className="font-display text-2xl text-muted-foreground">
          {lang === "ar" ? "استعدوا…" : "Get ready…"}
        </p>
        <div
          key={number}
          className="mt-6 grid size-56 animate-pop place-items-center rounded-full sm:size-72"
          style={{ background: NUMBER_COLORS[number - 1] }}
        >
          <span
            className="font-display text-[9rem] leading-none tabular-nums sm:text-[12rem]"
            style={{ color: number === 2 ? "var(--on-sun)" : "#ffffff" }}
          >
            {number.toLocaleString(lang === "ar" ? "ar-EG" : "en-US")}
          </span>
        </div>
        <p className="mt-8 text-muted-foreground">
          {lang === "ar" ? "أسرع إجابة صحيحة تحصد نقاطاً أكثر" : "Faster correct answers earn more points"}
        </p>
      </div>
    </main>
  );
}
