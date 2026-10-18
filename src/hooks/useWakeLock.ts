import { useEffect, useRef, useState } from "react";

/**
 * Keeps the screen awake during a live game with the Screen Wake Lock API
 * (Chrome, Edge, Android, Safari 16.4+). Browsers drop the lock whenever the
 * page is hidden, so it is taken again when the page is visible or tapped.
 */
export function useWakeLock(enabled = true) {
  const [isLocked, setIsLocked] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined" || !("wakeLock" in navigator)) return;

    let active = true;
    let requesting = false;

    async function acquire() {
      if (!active || requesting || document.visibilityState !== "visible") return;
      if (wakeLockRef.current && !wakeLockRef.current.released) return;
      requesting = true;
      try {
        const lock = await navigator.wakeLock.request("screen");
        if (!active) {
          void lock.release().catch(() => undefined);
          return;
        }
        wakeLockRef.current = lock;
        setIsLocked(true);
        lock.addEventListener("release", () => {
          if (wakeLockRef.current === lock) wakeLockRef.current = null;
          setIsLocked(false);
        });
      } catch (err) {
        // Refused (e.g. battery saver, or no user gesture yet); retried on the next tap.
        console.warn("Screen wake lock unavailable:", err);
      } finally {
        requesting = false;
      }
    }

    void acquire();
    const reacquire = () => void acquire();
    document.addEventListener("visibilitychange", reacquire);
    window.addEventListener("focus", reacquire);
    window.addEventListener("pointerdown", reacquire, { passive: true });

    return () => {
      active = false;
      document.removeEventListener("visibilitychange", reacquire);
      window.removeEventListener("focus", reacquire);
      window.removeEventListener("pointerdown", reacquire);
      if (wakeLockRef.current) {
        void wakeLockRef.current.release().catch(() => undefined);
        wakeLockRef.current = null;
      }
    };
  }, [enabled]);

  return { isLocked };
}
