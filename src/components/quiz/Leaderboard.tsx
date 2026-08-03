import { useEffect, useMemo, useState } from "react";
import { PlayerAvatar } from "@/components/quiz/PlayerAvatar";
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
  const max = Math.max(1, ...rows.map((r) => r.total));

  // Animation stage: 0 = initial (prev scores & prev ranks), 1 = count scores & extend bar, 2 = swap ranks, 3 = final lock
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(showDelta ? 0 : 3);

  useEffect(() => {
    if (!showDelta) {
      setStage(3);
      return;
    }
    setStage(0);
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [rows, showDelta]);

  const activeRows = useMemo(() => {
    const list = [...rows];
    if (stage < 2) {
      list.sort((a, b) => a.prevRank - b.prevRank);
    } else {
      list.sort((a, b) => a.rank - b.rank);
    }
    return list.slice(0, limit);
  }, [rows, limit, stage]);

  const rowHeight = 88;

  return (
    <div className="relative w-full" style={{ height: activeRows.length * rowHeight }}>
      {activeRows.map((row) => {
        const isPastInitial = stage >= 1;
        const isSwapped = stage >= 2;

        const currentRank = isSwapped ? row.rank : row.prevRank;
        const displayScore = isPastInitial ? row.total : row.prevTotal;
        const barWidth = isPastInitial
          ? (row.total / max) * 100
          : (row.prevTotal / max) * 100;

        const rankDiff = row.prevRank - row.rank; // > 0 means moved UP (e.g. 3 -> 1 is +2)

        return (
          <div
            key={row.player.id}
            className="absolute left-0 right-0 transition-all duration-700 ease-out"
            style={{ transform: `translateY(${(currentRank - 1) * rowHeight}px)` }}
          >
            <div
              className={cn(
                "flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-surface-gradient px-4 py-3.5 shadow-sm transition-colors duration-500",
                row.player.id === highlightPlayerId && "ring-2 ring-sun",
                isSwapped && rankDiff > 0 && "border-lime/50 bg-lime/10",
              )}
            >
              {/* Rank number badge */}
              <div className="relative shrink-0">
                <span className="grid size-10 place-items-center rounded-xl bg-background/50 font-display text-lg tabular-nums transition-all duration-500">
                  {currentRank}
                </span>
                {isSwapped && rankDiff !== 0 ? (
                  <span
                    className={cn(
                      "absolute -top-2 -right-2 rounded-full px-1.5 py-0.5 font-display text-[10px] font-extrabold animate-pop shadow-md",
                      rankDiff > 0 ? "bg-lime text-background" : "bg-destructive text-destructive-foreground",
                    )}
                  >
                    {rankDiff > 0 ? `▲ +${rankDiff}` : `▼ ${rankDiff}`}
                  </span>
                ) : null}
              </div>

              {/* Player Avatar */}
              <PlayerAvatar player={row.player} size="md" />

              {/* Nickname & Progress Bar */}
              <div className="min-w-0 flex-1">
                <div className="truncate font-display text-lg">{row.player.nickname}</div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-background/50">
                  <div
                    className="h-full rounded-full bg-gradient-hero transition-all duration-700 ease-out"
                    style={{ width: `${Math.max(4, barWidth)}%` }}
                  />
                </div>
              </div>

              {/* Score & Delta */}
              <div className="text-end shrink-0">
                <div className="font-display text-2xl tabular-nums leading-none">
                  <CounterNumber target={displayScore} />
                </div>

                {showDelta && row.lastPoints > 0 && isPastInitial ? (
                  <div className="mt-1 text-xs font-semibold text-lime leading-none animate-pop">
                    +{row.lastPoints}
                  </div>
                ) : null}

                {stage >= 3 && row.streak > 1 ? (
                  <div className="mt-1 text-xs font-semibold text-sun leading-none animate-pop">
                    {t("board.streak", { n: row.streak })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

      {activeRows.length === 0 ? (
        <p className="text-center text-muted-foreground">{t("board.noScores")}</p>
      ) : null}
    </div>
  );
}

function CounterNumber({ target }: { target: number }) {
  const [val, setVal] = useState(target);

  useEffect(() => {
    if (val === target) return;
    const start = val;
    const diff = target - start;
    const duration = 600;
    const startTime = performance.now();

    let frameId: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - (1 - progress) * (1 - progress);
      setVal(Math.round(start + diff * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return <>{val}</>;
}
