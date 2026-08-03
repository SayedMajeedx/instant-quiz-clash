import { Link } from "@tanstack/react-router";
import { Confetti } from "@/components/quiz/Confetti";
import { Leaderboard } from "@/components/quiz/Leaderboard";
import { useI18n } from "@/lib/i18n";
import type { Standing } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

const PODIUM = [
  { rank: 2, height: "h-32 md:h-44", color: "bg-silver", order: "order-1" },
  { rank: 1, height: "h-44 md:h-64", color: "bg-gold", order: "order-2" },
  { rank: 3, height: "h-24 md:h-32", color: "bg-bronze", order: "order-3" },
];

export function Podium({
  rows,
  title,
  highlightPlayerId,
  actions,
}: {
  rows: Standing[];
  title: string;
  highlightPlayerId?: string | null | undefined;
  actions?: boolean;
}) {
  const { t } = useI18n();
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 py-10">
      <Confetti />
      <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {t("podium.final")}
      </p>
      <h1 className="mt-2 text-center font-display text-4xl md:text-6xl text-gradient">{title}</h1>

      <div className="mt-12 flex items-end justify-center gap-3 md:gap-6">
        {PODIUM.map((slot) => {
          const row = rows.find((r) => r.rank === slot.rank);
          return (
            <div key={slot.rank} className={cn("flex w-1/3 flex-col items-center", slot.order)}>
              {row ? (
                <div className="mb-3 flex animate-pop flex-col items-center text-center">
                  <span
                    className="size-12 rounded-full border-4 border-background md:size-16"
                    style={{ backgroundColor: row.player.avatar_color }}
                  />
                  <span className="mt-2 max-w-full truncate font-display text-lg md:text-2xl">
                    {row.player.nickname}
                  </span>
                  <span className="font-display text-sun tabular-nums md:text-xl">{row.total}</span>
                </div>
              ) : (
                <div className="mb-3 text-muted-foreground">—</div>
              )}
              <div
                className={cn(
                  "flex w-full items-start justify-center rounded-t-2xl pt-3 font-display text-3xl text-background md:text-5xl",
                  slot.height,
                  slot.color,
                )}
              >
                {slot.rank}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="mb-4 font-display text-2xl">{t("podium.standings")}</h2>
        <Leaderboard rows={rows} limit={rows.length} highlightPlayerId={highlightPlayerId} showDelta={false} />
      </div>

      {actions ? (
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/host"
            className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky"
          >
            {t("podium.playAgain")}
          </Link>
          <Link
            to="/"
            className="press rounded-2xl border border-border bg-surface-gradient px-6 py-3 font-display text-lg"
          >
            {t("podium.home")}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
