import { useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import type { Standing } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

export function Leaderboard({
  rows,
  limit = 5,
  highlightPlayerId,
  showDelta = true,
}: {
  rows: Standing[];
  limit?: number;
  highlightPlayerId?: string | null | undefined;
  showDelta?: boolean;
}) {
  const { t } = useI18n();
  const max = Math.max(1, rows[0]?.total ?? 1);
  const visible = useMemo(() => rows.slice(0, limit), [rows, limit]);

  return (
    <div className="relative w-full" style={{ height: visible.length * 76 }}>
      {visible.map((row) => (
        <div
          key={row.player.id}
          className="absolute left-0 right-0 transition-all duration-700 ease-out"
          style={{ transform: `translateY(${(row.rank - 1) * 76}px)` }}
        >
          <div
            className={cn(
              "flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-surface-gradient px-4 py-3",
              row.player.id === highlightPlayerId && "ring-2 ring-sun",
            )}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-background/50 font-display text-lg tabular-nums">
              {row.rank}
            </span>
            <span
              className="size-9 shrink-0 rounded-full border-2 border-background/40"
              style={{ backgroundColor: row.player.avatar_color }}
            />
            <div className="min-w-0 flex-1">
              <div className="truncate font-display text-lg">{row.player.nickname}</div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-background/50">
                <div
                  className="h-full rounded-full bg-gradient-hero transition-all duration-700"
                  style={{ width: `${(row.total / max) * 100}%` }}
                />
              </div>
            </div>
            <div className="text-end">
              <div className="font-display text-2xl tabular-nums">{row.total}</div>
              {showDelta && row.lastPoints > 0 ? (
                <div className="text-xs font-semibold text-lime">+{row.lastPoints}</div>
              ) : null}
              {row.streak > 1 ? (
                <div className="text-xs font-semibold text-sun">{t("board.streak", { n: row.streak })}</div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
      {visible.length === 0 ? (
        <p className="text-center text-muted-foreground">{t("board.noScores")}</p>
      ) : null}
    </div>
  );
}
