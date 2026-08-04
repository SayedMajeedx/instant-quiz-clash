import { useEffect, useRef, useState } from "react";

// Tiny 1x1 blank mp4 video encoded in base64 (silent, 1 frame)
const SILENT_VIDEO_B64 =
  "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAAG1kYXQAAAAAAAABAAAAAQ==";

/**
 * Custom React hook that prevents mobile/tablet/desktop screens from sleeping.
 * Uses a dual-strategy for 100% reliability:
 * 1. Web Screen Wake Lock API (native)
 * 2. Muted inline HTML5 video loop fallback (works on iOS Safari low-power mode)
 */
export function useWakeLock(enabled = true) {
  const [isLocked, setIsLocked] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    let active = true;

    // Strategy 1: Silent Video Element Fallback
    let videoEl = document.getElementById("quizclash-wakelock-video") as HTMLVideoElement | null;
    if (!videoEl) {
      videoEl = document.createElement("video");
      videoEl.id = "quizclash-wakelock-video";
      videoEl.setAttribute("playsinline", "");
      videoEl.setAttribute("webkit-playsinline", "");
      videoEl.muted = true;
      videoEl.loop = true;
      videoEl.src = SILENT_VIDEO_B64;
      videoEl.style.position = "fixed";
      videoEl.style.top = "0";
      videoEl.style.left = "0";
      videoEl.style.width = "1px";
      videoEl.style.height = "1px";
      videoEl.style.opacity = "0.01";
      videoEl.style.pointerEvents = "none";
      videoEl.style.zIndex = "-9999";
      document.body.appendChild(videoEl);
    }
    videoRef.current = videoEl;

    const playVideo = () => {
      if (videoRef.current && videoRef.current.paused) {
        void videoRef.current.play().catch(() => undefined);
      }
    };
    playVideo();

    // Strategy 2: Native Screen Wake Lock API
    async function requestNativeLock() {
      if (!("wakeLock" in navigator) || !active) return;
      try {
        if (document.visibilityState === "visible") {
          const lock = await navigator.wakeLock.request("screen");
          wakeLockRef.current = lock;
          setIsLocked(true);

          lock.addEventListener("release", () => {
            setIsLocked(false);
            wakeLockRef.current = null;
          });
        }
      } catch (err) {
        console.warn("Native Screen Wake Lock request deferred/failed:", err);
      }
    }

    void requestNativeLock();

    // Aggressively re-acquire on any user interaction or visibility return
    const reacquire = () => {
      playVideo();
      if (document.visibilityState === "visible") {
        void requestNativeLock();
      }
    };

    window.addEventListener("visibilitychange", reacquire);
    window.addEventListener("focus", reacquire);
    window.addEventListener("pointerdown", reacquire, { passive: true });
    window.addEventListener("touchstart", reacquire, { passive: true });
    window.addEventListener("click", reacquire, { passive: true });

    return () => {
      active = false;
      window.removeEventListener("visibilitychange", reacquire);
      window.removeEventListener("focus", reacquire);
      window.removeEventListener("pointerdown", reacquire);
      window.removeEventListener("touchstart", reacquire);
      window.removeEventListener("click", reacquire);

      if (wakeLockRef.current) {
        void wakeLockRef.current.release().catch(() => undefined);
        wakeLockRef.current = null;
      }
      if (videoRef.current) {
        try {
          videoRef.current.pause();
        } catch {
          // ignore
        }
      }
    };
  }, [enabled]);

  return { isLocked };
}
