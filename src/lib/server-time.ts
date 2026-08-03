import { useEffect, useState } from "react";
import { getServerTimeFn } from "@/lib/server-time.functions";

let serverOffsetMs = 0;
let lastSyncedTimestamp = 0;
let isSyncing = false;
const listeners = new Set<() => void>();

function notifyListeners() {
  for (const listener of listeners) {
    listener();
  }
}

/**
 * Returns current timestamp adjusted for server clock offset.
 * MUST be used instead of raw Date.now() for game timers and phase derivations.
 */
export function getSyncedNow(): number {
  return Date.now() + serverOffsetMs;
}

/** Returns the current estimated server time offset in milliseconds. */
export function getServerOffset(): number {
  return serverOffsetMs;
}

/** Returns milliseconds elapsed since last successful server time synchronization. */
export function getTimeSinceLastSync(): number {
  return lastSyncedTimestamp > 0 ? Date.now() - lastSyncedTimestamp : Infinity;
}

/**
 * Performs a round-trip measurement to sync local clock with server time.
 * Calculates offset = serverTime - (startTime + rtt / 2).
 */
export async function syncServerTime(): Promise<number> {
  if (isSyncing) return serverOffsetMs;
  isSyncing = true;
  try {
    const startTime = Date.now();
    const res = await getServerTimeFn();
    const endTime = Date.now();
    const rtt = Math.max(0, endTime - startTime);
    const estimatedServerNow = res.now + rtt / 2;
    serverOffsetMs = Math.round(estimatedServerNow - endTime);
    lastSyncedTimestamp = Date.now();
    notifyListeners();
  } catch (err) {
    // If server function fails, retain previous offset
    console.warn("[ServerTime] Time sync failed, keeping previous offset:", err);
  } finally {
    isSyncing = false;
  }
  return serverOffsetMs;
}

/** Subscribe to time offset changes. */
export function subscribeServerTime(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * React hook to access server time synchronization state and trigger manual or auto re-syncs.
 */
export function useServerTime() {
  const [offset, setOffset] = useState(serverOffsetMs);
  const [lastSync, setLastSync] = useState(lastSyncedTimestamp);
  const [syncing, setSyncing] = useState(isSyncing);

  useEffect(() => {
    const unsubscribe = subscribeServerTime(() => {
      setOffset(serverOffsetMs);
      setLastSync(lastSyncedTimestamp);
      setSyncing(isSyncing);
    });

    // Sync on initial mount if never synced or synced > 30s ago
    if (getTimeSinceLastSync() > 30_000) {
      void syncServerTime();
    }

    // Periodic auto re-sync every 60 seconds
    const intervalId = window.setInterval(() => {
      void syncServerTime();
    }, 60_000);

    // Re-sync on visibility change, focus, or network online
    const handleReactivate = () => {
      if (document.visibilityState === "visible") {
        void syncServerTime();
      }
    };

    document.addEventListener("visibilitychange", handleReactivate);
    window.addEventListener("focus", handleReactivate);
    window.addEventListener("online", handleReactivate);

    return () => {
      unsubscribe();
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleReactivate);
      window.removeEventListener("focus", handleReactivate);
      window.removeEventListener("online", handleReactivate);
    };
  }, []);

  return {
    syncedNow: getSyncedNow(),
    offsetMs: offset,
    lastSyncedAt: lastSync,
    timeSinceLastSync: getTimeSinceLastSync(),
    syncing,
    syncServerTime,
  };
}
