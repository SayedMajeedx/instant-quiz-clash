import { Cast, Maximize, Minimize, MonitorSmartphone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* --------------------------------- fullscreen -------------------------------- */

type FsDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};
type FsElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

function fullscreenElement(): Element | null {
  if (typeof document === "undefined") return null;
  const d = document as FsDocument;
  return document.fullscreenElement ?? d.webkitFullscreenElement ?? null;
}

export function isFullscreenSupported(): boolean {
  if (typeof document === "undefined") return false;
  const el = document.documentElement as FsElement;
  return Boolean(el.requestFullscreen || el.webkitRequestFullscreen);
}

/** Must be called straight from a user gesture — never after an await. */
export function requestFullscreen(): void {
  if (typeof document === "undefined") return;
  if (fullscreenElement()) return;
  const el = document.documentElement as FsElement;
  try {
    const p = el.requestFullscreen ? el.requestFullscreen() : el.webkitRequestFullscreen?.();
    void Promise.resolve(p).catch(() => undefined);
  } catch {
    /* browser refused — keep playing windowed */
  }
}

export function exitFullscreen(): void {
  if (typeof document === "undefined" || !fullscreenElement()) return;
  const d = document as FsDocument;
  try {
    const p = document.exitFullscreen ? document.exitFullscreen() : d.webkitExitFullscreen?.();
    void Promise.resolve(p).catch(() => undefined);
  } catch {
    /* ignore */
  }
}

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const sync = () => setIsFullscreen(Boolean(fullscreenElement()));
    sync();
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  return { isFullscreen, enter: requestFullscreen, exit: exitFullscreen, supported: isFullscreenSupported() };
}

/* ------------------------------------ cast ----------------------------------- */

type PresentationConnection = {
  id?: string;
  state?: string;
  close?: () => void;
  terminate?: () => void;
  addEventListener: (type: string, cb: () => void) => void;
};
type PresentationRequestLike = {
  start: () => Promise<PresentationConnection>;
};
type PresentationRequestCtor = new (urls: string[]) => PresentationRequestLike;

function isAppleBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const safari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(ua);
  return iOS || safari;
}

function useCast() {
  const [supported, setSupported] = useState(false);
  const [apple, setApple] = useState(false);
  const [casting, setCasting] = useState(false);
  const [deviceName, setDeviceName] = useState<string | null>(null);
  const connectionRef = useRef<PresentationConnection | null>(null);

  useEffect(() => {
    const ctor = (window as unknown as { PresentationRequest?: PresentationRequestCtor }).PresentationRequest;
    setApple(isAppleBrowser());
    setSupported(typeof ctor === "function" && !isAppleBrowser());
  }, []);

  const startCast = useCallback(async () => {
    const ctor = (window as unknown as { PresentationRequest?: PresentationRequestCtor }).PresentationRequest;
    if (typeof ctor !== "function") return;
    try {
      const request = new ctor([window.location.href]);
      const connection = await request.start();
      connectionRef.current = connection;
      setCasting(true);
      setDeviceName(connection.id ?? null);
      const onClosed = () => {
        setCasting(false);
        setDeviceName(null);
        connectionRef.current = null;
      };
      connection.addEventListener("close", onClosed);
      connection.addEventListener("terminate", onClosed);
    } catch {
      /* user dismissed the device picker */
    }
  }, []);

  const stopCast = useCallback(() => {
    const c = connectionRef.current;
    c?.terminate?.();
    c?.close?.();
    connectionRef.current = null;
    setCasting(false);
    setDeviceName(null);
  }, []);

  return { supported, apple, casting, deviceName, startCast, stopCast };
}

/* ---------------------------------- controls --------------------------------- */

const btn =
  "press grid size-9 place-items-center rounded-full border border-border bg-surface-gradient text-muted-foreground hover:text-foreground";

export function DisplayControls({ className }: { className?: string }) {
  const { t } = useI18n();
  const cast = useCast();
  const fs = useFullscreen();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {cast.casting ? (
        <span className="flex items-center gap-1.5 rounded-full border border-lime/50 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
          <span className="size-1.5 animate-pulse rounded-full bg-lime" />
          {t("cast.castingTo", { name: cast.deviceName ?? t("cast.device") })}
        </span>
      ) : null}

      {cast.supported ? (
        <button
          type="button"
          aria-label={cast.casting ? t("cast.stop") : t("cast.start")}
          title={cast.casting ? t("cast.stop") : t("cast.start")}
          onClick={() => (cast.casting ? cast.stopCast() : void cast.startCast())}
          className={cn(btn, cast.casting && "border-lime/60 text-lime")}
        >
          <Cast size={18} />
        </button>
      ) : cast.apple ? (
        <span
          className="flex items-center gap-1.5 rounded-full border border-border bg-surface-gradient px-3 py-1 text-[11px] font-semibold text-muted-foreground"
          title={t("cast.airplayHint")}
        >
          <MonitorSmartphone size={14} />
          <span className="hidden sm:inline">{t("cast.airplayHint")}</span>
        </span>
      ) : null}

      {fs.supported && !fs.isFullscreen ? (
        <button
          type="button"
          aria-label={t("display.fullscreen")}
          title={t("display.fullscreen")}
          onClick={() => fs.enter()}
          className={btn}
        >
          <Maximize size={18} />
        </button>
      ) : null}
    </div>
  );
}

/** Tiny always-there escape hatch, only rendered while in fullscreen. */
export function ExitFullscreenButton() {
  const { t } = useI18n();
  const { isFullscreen, exit } = useFullscreen();
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isFullscreen) return;
    const show = () => {
      setVisible(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setVisible(false), 2500);
    };
    show();
    window.addEventListener("mousemove", show);
    window.addEventListener("touchstart", show);
    return () => {
      window.removeEventListener("mousemove", show);
      window.removeEventListener("touchstart", show);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [isFullscreen]);

  if (!isFullscreen) return null;

  return (
    <button
      type="button"
      onClick={() => exit()}
      aria-label={t("display.exitFullscreen")}
      title={t("display.exitFullscreen")}
      className={cn(
        "fixed end-3 top-3 z-50 flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur transition-opacity duration-300 hover:text-foreground",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <Minimize size={14} />
      {t("display.exitFullscreen")}
    </button>
  );
}
