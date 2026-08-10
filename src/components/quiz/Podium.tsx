import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Confetti } from "@/components/quiz/Confetti";
import { Leaderboard } from "@/components/quiz/Leaderboard";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
import { sounds } from "@/lib/audio";
import { useI18n } from "@/lib/i18n";
import type { Standing, TeamStanding } from "@/lib/quizclash";
import type { CategoryBreakdown } from "@/lib/custom-quiz";
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
  categoryBreakdown = [],
  teamRows = [],
  teamNames = [],
  teamColors = [],
}: {
  rows: Standing[];
  title: string;
  highlightPlayerId?: string | null | undefined;
  actions?: boolean;
  categoryBreakdown?: CategoryBreakdown[];
  teamRows?: TeamStanding[];
  teamNames?: string[];
  teamColors?: string[];
}) {
  const { t } = useI18n();

  useEffect(() => {
    sounds.playFanfare();
  }, []);
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 py-10">
      <Confetti />
      <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {t("podium.final")}
      </p>
      <h1 className="mt-2 text-center font-display text-4xl md:text-6xl text-gradient">{title}</h1>

      {teamRows.length > 1 ? (
        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-500/15 via-fuchsia-500/15 to-violet-500/15 p-5 text-center shadow-[0_0_40px_rgba(168,85,247,.18)] animate-pop">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">🏆 الفريق البطل</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="size-6 rounded-full shadow-[0_0_20px_currentColor]" style={{ backgroundColor: teamColors[teamRows[0]!.teamIndex], color: teamColors[teamRows[0]!.teamIndex] }} />
            <span className="font-display text-3xl sm:text-4xl">{teamNames[teamRows[0]!.teamIndex] ?? `الفريق ${teamRows[0]!.teamIndex + 1}`}</span>
            <span className="rounded-full bg-amber-300/15 px-3 py-1 font-display text-amber-300">{teamRows[0]!.total}</span>
          </div>
        </div>
      ) : null}

      <div className="mt-12 flex items-end justify-center gap-3 md:gap-6">
        {PODIUM.map((slot) => {
          const row = rows.find((r) => r.rank === slot.rank);
          return (
            <div key={slot.rank} className={cn("flex w-1/3 flex-col items-center", slot.order)}>
              {row ? (
                <div className="mb-3 flex animate-pop flex-col items-center text-center">
                  <PlayerAvatar
                    player={row.player}
                    size={slot.rank === 1 ? "xl" : "lg"}
                    crownRank={slot.rank}
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
        <Leaderboard
          rows={rows}
          limit={rows.length}
          highlightPlayerId={highlightPlayerId}
          showDelta={false}
        />
      </div>

      {categoryBreakdown.length > 0 ? (
        <div className="mt-10">
          <h2 className="mb-4 font-display text-2xl">تحليل الأداء حسب القسم</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categoryBreakdown.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-border bg-surface-gradient p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold">{item.category}</span>
                  <span className="font-display text-xl text-primary">{item.accuracyPercent}%</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.correct} إجابة صحيحة من {item.answered} · {item.questionCount} سؤال
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {actions ? (
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/browse"
            className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky"
          >
            {t("podium.chooseQuiz")}
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
