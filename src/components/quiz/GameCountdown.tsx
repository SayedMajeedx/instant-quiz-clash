import { useI18n } from "@/lib/i18n";

export function GameCountdown({ msLeft }: { msLeft: number }) {
  const { lang } = useI18n();
  const number = Math.min(3, Math.max(1, Math.ceil(msLeft / 1000)));

  return (
    <main className="relative grid min-h-screen overflow-hidden place-items-center bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.28),hsl(var(--background))_62%)] px-5 text-center">
      <div className="absolute inset-0 opacity-70">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow"
            style={{
              left: `${8 + ((index * 29) % 84)}%`,
              top: `${7 + ((index * 47) % 86)}%`,
              animationDelay: `${(index % 6) * 120}ms`,
              transform: `scale(${0.7 + (index % 4) * 0.25})`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <p className="mb-8 font-display text-xl uppercase tracking-[0.35em] text-sun sm:text-2xl">
          {lang === "ar" ? "استعدوا... التحدي يبدأ" : "Get ready... challenge starts"}
        </p>
        <div
          key={number}
          className="relative grid h-64 w-64 animate-pop place-items-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-ping rounded-full border-4 border-primary/35" />
          <div className="absolute inset-5 rounded-full border border-secondary/60 bg-background/45 shadow-[0_0_90px_hsl(var(--primary)/0.55)] backdrop-blur-xl" />
          <div className="absolute inset-10 animate-pulse rounded-full bg-gradient-hero opacity-25 blur-xl" />
          <span className="relative font-display text-[10rem] leading-none text-gradient drop-shadow-[0_0_32px_hsl(var(--primary)/0.8)] sm:text-[13rem]">
            {number}
          </span>
        </div>
        <p className="mt-8 text-sm font-bold tracking-[0.25em] text-muted-foreground">
          {lang === "ar"
            ? "ركزوا • أسرع إجابة تحصد نقاطاً أكثر"
            : "Focus • faster answers earn more points"}
        </p>
      </div>
    </main>
  );
}
