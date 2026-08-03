import { useEffect, useState } from "react";
import type { GameState } from "@/hooks/useRoomGame";
import { phaseAt } from "@/lib/quizclash";
import { getServerOffset, getTimeSinceLastSync, syncServerTime } from "@/lib/server-time";

export function DebugPanel({ state }: { state: GameState }) {
  const [enabled, setEnabled] = useState(false);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("debug") === "1" || urlParams.get("debug") === "true") {
        setEnabled(true);
      }
    }
  }, []);

  if (!enabled) return null;

  const offset = getServerOffset();
  const timeSinceSyncSec = Math.round(getTimeSinceLastSync() / 1000);
  const phase = phaseAt(state.room, state.questions, state.now);

  async function handleResync() {
    setSyncing(true);
    await syncServerTime();
    setSyncing(false);
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs rounded-2xl border border-border/80 bg-background/90 p-4 font-mono text-xs shadow-2xl backdrop-blur-md text-foreground">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="font-bold text-primary">🛠️ QuizClash QA Debug</span>
        <button
          type="button"
          onClick={() => void handleResync()}
          disabled={syncing}
          className="press rounded-lg border border-border bg-surface-gradient px-2 py-1 text-[10px] font-bold text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          {syncing ? "Syncing..." : "Re-sync Time"}
        </button>
      </div>

      <div className="mt-3 space-y-1.5 text-[11px]">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Server Offset:</span>
          <span className={offset >= 0 ? "text-emerald-400" : "text-amber-400"}>
            {offset >= 0 ? `+${offset}` : offset} ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Last Sync:</span>
          <span>{timeSinceSyncSec === Infinity ? "Never" : `${timeSinceSyncSec}s ago`}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Realtime Status:</span>
          <span
            className={
              state.connectionStatus === "connected"
                ? "text-emerald-400 font-bold"
                : state.connectionStatus === "reconnecting"
                  ? "text-amber-400 font-bold"
                  : "text-red-400 font-bold"
            }
          >
            {state.connectionStatus.toUpperCase()}
          </span>
        </div>

        <div className="flex justify-between border-t border-border/50 pt-1.5">
          <span className="text-muted-foreground">Phase:</span>
          <span className="text-primary font-bold">
            {phase.kind}
            {"msLeft" in phase ? ` (${(phase.msLeft / 1000).toFixed(1)}s)` : ""}
          </span>
        </div>

        {"index" in phase ? (
          <div className="flex justify-between">
            <span className="text-muted-foreground">Question Index:</span>
            <span>
              #{phase.index + 1} / {state.questions.length}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
