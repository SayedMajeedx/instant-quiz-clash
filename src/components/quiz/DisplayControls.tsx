import { Cast, ExternalLink, Maximize, Minimize, Monitor, MonitorSmartphone, Volume2, VolumeX, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { sounds } from "@/lib/audio";
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
  const [supported, setSupported] = useState(true);
  const [apple, setApple] = useState(false);
  const [casting, setCasting] = useState(false);
  const [deviceName, setDeviceName] = useState<string | null>(null);
  const connectionRef = useRef<PresentationConnection | null>(null);

  useEffect(() => {
    setApple(isAppleBrowser());

    // Initialize Google Cast Sender SDK callback if on browser
    if (typeof window !== "undefined") {
      const win = window as unknown as {
        __onGCastApiAvailable?: (isAvailable: boolean) => void;
        cast?: {
          framework?: {
            CastContext?: {
              getInstance: () => {
                setOptions: (opts: unknown) => void;
              };
            };
          };
        };
        chrome?: {
          cast?: {
            media?: {
              DEFAULT_MEDIA_RECEIVER_APP_ID?: string;
            };
            AutoJoinPolicy?: {
              ORIGIN_SCOPED?: string;
            };
          };
        };
      };

      win.__onGCastApiAvailable = (isAvailable: boolean) => {
        if (isAvailable && win.cast?.framework && win.chrome?.cast) {
          try {
            const context = (win.cast.framework as any).CastContext.getInstance();
            context.setOptions({
              receiverApplicationId: win.chrome.cast.media?.DEFAULT_MEDIA_RECEIVER_APP_ID || "CC1AD845",
              autoJoinPolicy: win.chrome.cast.AutoJoinPolicy?.ORIGIN_SCOPED,
            });
          } catch (err) {
            console.warn("Cast SDK setup error:", err);
          }
        }
      };

      // Load Google Cast Sender SDK if missing
      if (!document.getElementById("google-cast-sdk")) {
        const script = document.createElement("script");
        script.id = "google-cast-sdk";
        script.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const startCast = useCallback(async () => {
    const ctor = (window as unknown as { PresentationRequest?: PresentationRequestCtor }).PresentationRequest;
    if (typeof ctor === "function") {
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
        return true;
      } catch {
        /* user dismissed or rejected native cast prompt */
      }
    }
    return false;
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
  "press liquid-glass grid size-10 place-items-center rounded-full text-foreground shadow-lg transition-all";

export function DisplayControls({ className }: { className?: string }) {
  const { lang, t } = useI18n();
  const cast = useCast();
  const fs = useFullscreen();
  const [modalOpen, setModalOpen] = useState(false);
  const [audioMenuOpen, setAudioMenuOpen] = useState(false);
  const [bgmMuted, setBgmMuted] = useState(() => sounds.getBgmMuted());
  const [sfxMuted, setSfxMuted] = useState(() => sounds.getSfxMuted());

  function toggleBgm() {
    const next = sounds.toggleBgmMute();
    setBgmMuted(next);
  }

  function toggleSfx() {
    const next = sounds.toggleSfxMute();
    setSfxMuted(next);
    if (!next) sounds.playTap();
  }

  async function handleCastButtonClick() {
    // Open Cast & Big Screen Display Control modal directly
    setModalOpen(true);
  }

  function handleOpenBigScreenWindow() {
    const width = 1280;
    const height = 720;
    const left = window.screen.width ? (window.screen.width - width) / 2 : 100;
    const top = window.screen.height ? (window.screen.height - height) / 2 : 100;

    window.open(
      window.location.href,
      "quizclash_display_window",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=no,location=no,toolbar=no,menubar=no`,
    );
    setModalOpen(false);
  }

  async function handleTriggerChromecast() {
    const win = window as unknown as {
      cast?: {
        framework?: {
          CastContext?: {
            getInstance: () => {
              requestSession: () => Promise<unknown>;
            };
          };
        };
      };
      PresentationRequest?: PresentationRequestCtor;
    };

    // 1. Try Google Cast Framework SDK session
    if (win.cast?.framework?.CastContext) {
      try {
        const context = win.cast.framework.CastContext.getInstance();
        await context.requestSession();
        toast.success(t("cast.castingTo", { name: "Chromecast / Google TV" }));
        setModalOpen(false);
        return;
      } catch (err) {
        console.warn("Cast SDK session request failed or cancelled:", err);
      }
    }

    // 2. Try Web Presentation Request API
    const ctor = win.PresentationRequest;
    if (typeof ctor === "function") {
      try {
        const request = new ctor([window.location.href]);
        await request.start();
        toast.success(t("cast.castingTo", { name: "TV" }));
        setModalOpen(false);
        return;
      } catch (err) {
        console.warn("Presentation request failed or cancelled:", err);
      }
    }

    // 3. Fallback guidance toast if browser requires right-click -> Cast
    toast.info(
      lang === "ar"
        ? "للبث المباشر عبر Google Chrome: انقر بزر الماوس الأيمن في أي مكان بالشاشة واختر «بث... / Cast...» للاتصال بـ Chromecast أو التلفزيون."
        : "To Cast: Right-click anywhere in Chrome and select 'Cast...' to connect your TV or Chromecast.",
      { duration: 7000 },
    );
    setModalOpen(false);
  }

  const allMuted = bgmMuted && sfxMuted;

  return (
    <>
      <div className={cn("relative flex items-center gap-2", className)}>
        {cast.casting ? (
          <span className="flex items-center gap-1.5 rounded-full border border-lime/50 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
            <span className="size-1.5 animate-pulse rounded-full bg-lime" />
            {t("cast.castingTo", { name: cast.deviceName ?? t("cast.device") })}
          </span>
        ) : null}

        {/* Audio Layer Menu Toggle */}
        <div className="relative">
          <button
            type="button"
            aria-label="إعدادات الصوت"
            title="إعدادات الصوت والموسيقى"
            onClick={() => setAudioMenuOpen((prev) => !prev)}
            className={cn(btn, allMuted && "text-muted-foreground/50")}
          >
            {allMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Dual Audio Channel Control Popover */}
          {audioMenuOpen && (
            <div className="absolute end-0 top-12 z-50 w-56 animate-pop rounded-2xl border border-border bg-surface-gradient p-3 shadow-2xl backdrop-blur-xl">
              <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                🔊 إعدادات طبقات الصوت
              </p>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={toggleBgm}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl border px-3 py-2 text-xs font-bold transition-all",
                    !bgmMuted
                      ? "border-primary/50 bg-primary/15 text-primary shadow-sm"
                      : "border-border bg-background/40 text-muted-foreground hover:bg-background/80",
                  )}
                >
                  <span>🎵 موسيقى الخلفية</span>
                  <span className="rounded-md px-2 py-0.5 text-[10px] font-bold border border-current">
                    {!bgmMuted ? "تشغيل" : "كتم"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={toggleSfx}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl border px-3 py-2 text-xs font-bold transition-all",
                    !sfxMuted
                      ? "border-lime/50 bg-lime/15 text-lime shadow-sm"
                      : "border-border bg-background/40 text-muted-foreground hover:bg-background/80",
                  )}
                >
                  <span>🔔 مؤثرات اللعب</span>
                  <span className="rounded-md px-2 py-0.5 text-[10px] font-bold border border-current">
                    {!sfxMuted ? "تشغيل" : "كتم"}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label={cast.casting ? t("cast.stop") : t("cast.start")}
          title={cast.casting ? t("cast.stop") : t("cast.start")}
          onClick={() => void handleCastButtonClick()}
          className={cn(btn, cast.casting && "border-lime/60 text-lime")}
        >
          <Cast size={18} />
        </button>

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

      {/* Cast & Display Control Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl border border-border bg-surface-gradient p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary border border-primary/40">
                  <Cast size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl">{t("cast.modalTitle")}</h3>
                  <p className="text-xs text-muted-foreground">{t("cast.modalSub")}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="press rounded-full p-2 text-muted-foreground hover:bg-background/50 hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {/* Option 1: Open Big Screen Display Window */}
              <button
                type="button"
                onClick={handleOpenBigScreenWindow}
                className="press w-full rounded-2xl border border-primary/40 bg-primary/10 p-4 text-start transition-all hover:bg-primary/20 hover:border-primary group flex items-start gap-3.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-105 transition-transform">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <h4 className="font-display text-base text-foreground">{t("cast.openWindow")}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{t("cast.openWindowSub")}</p>
                </div>
              </button>

              {/* Option 2: Native Chromecast / Web Presentation */}
              <button
                type="button"
                onClick={() => void handleTriggerChromecast()}
                className="press w-full rounded-2xl border border-border/80 bg-background/40 p-4 text-start transition-all hover:bg-background/80 hover:border-border group flex items-start gap-3.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-gradient border border-border text-muted-foreground group-hover:text-foreground">
                  <Monitor size={18} />
                </div>
                <div>
                  <h4 className="font-display text-base text-foreground">{t("cast.chromecast")}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{t("cast.chromecastSub")}</p>
                </div>
              </button>

              {/* Option 3: Apple AirPlay Guide */}
              <div className="rounded-2xl border border-border/60 bg-background/30 p-4 flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-gradient border border-border text-muted-foreground">
                  <MonitorSmartphone size={18} />
                </div>
                <div>
                  <h4 className="font-display text-base text-foreground">{t("cast.airplayTitle")}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{t("cast.airplaySub")}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="press rounded-xl border border-border bg-background/50 px-5 py-2.5 font-display text-sm text-muted-foreground hover:text-foreground"
              >
                {t("cast.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
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
      className="fixed end-3 top-3 z-50 flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur transition-opacity duration-300 hover:text-foreground opacity-100"
    >
      <Minimize size={14} />
      {t("display.exitFullscreen")}
    </button>
  );
}
