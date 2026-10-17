import type { ConnectionStatus } from "@/hooks/useRoomGame";
import { useI18n } from "@/lib/i18n";

/** Shown only while the live connection is down. Enters once; the dot is the only loop. */
export function ReconnectingBanner({ status }: { status: ConnectionStatus }) {
  const { lang } = useI18n();
  if (status === "connected" || status === "connecting") return null;

  const isOffline = status === "offline";
  const label =
    lang === "ar"
      ? isOffline
        ? "انقطع الاتصال، نحاول إعادة الاتصال…"
        : "جارٍ إعادة الاتصال باللعبة…"
      : isOffline
        ? "Connection lost. Reconnecting…"
        : "Reconnecting to the game…";

  return (
    <div role="status" className="pointer-events-none fixed top-4 left-1/2 z-50 -translate-x-1/2 animate-rise">
      <div className="flex items-center gap-2.5 rounded-full bg-secondary px-4 py-2 text-sm font-semibold">
        <span
          className={`size-2.5 animate-pulse rounded-full ${isOffline ? "bg-destructive" : "bg-sun"}`}
          aria-hidden
        />
        <span>{label}</span>
      </div>
    </div>
  );
}
