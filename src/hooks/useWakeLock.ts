import { useEffect, useRef, useState } from "react";

/**
 * Custom React hook that uses the Web Screen Wake Lock API to prevent
 * mobile/tablet/desktop screens from going to sleep during live game sessions.
 */
export function useWakeLock(enabled = true) {
  const [isLocked, setIsLocked] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!enabled || typeof navigator === "undefined" || !("wakeLock" in navigator)) {
      return;
    }

    let active = true;

    async function requestLock() {
      try {
        if (document.visibilityState === "visible" && active) {
          const lock = await navigator.wakeLock.request("screen");
          wakeLockRef.current = lock;
          setIsLocked(true);

          lock.addEventListener("release", () => {
            setIsLocked(false);
            wakeLockRef.current = null;
          });
        }
      } catch (err) {
        // Wake lock can fail if battery is ultra-low or user settings override
        console.warn("Screen Wake Lock could not be acquired:", err);
      }
    }

    void requestLock();

    // Re-acquire lock if user switches tabs and returns to the game page
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void requestLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      active = false;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (wakeLockRef.current) {
        void wakeLockRef.current.release().catch(() => undefined);
        wakeLockRef.current = null;
      }
    };
  }, [enabled]);

  return { isLocked };
}
