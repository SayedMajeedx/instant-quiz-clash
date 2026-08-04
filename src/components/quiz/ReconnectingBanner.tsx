import type { ConnectionStatus } from "@/hooks/useRoomGame";

export function ReconnectingBanner({ status }: { status: ConnectionStatus }) {
  if (status === "connected" || status === "connecting") return null;

  const isOffline = status === "offline";

  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 animate-rise pointer-events-none">
      <div className="flex items-center gap-2.5 rounded-full border border-amber-500/50 bg-amber-950/90 px-4 py-2 text-xs font-bold text-amber-200 shadow-lg backdrop-blur-md">
        <span className="relative flex size-2.5">
          <span
            className={`absolute inline-flex size-full animate-ping rounded-full ${
              isOffline ? "bg-red-400" : "bg-amber-400"
            } opacity-75`}
          />
          <span
            className={`relative inline-flex size-2.5 rounded-full ${
              isOffline ? "bg-red-500" : "bg-amber-500"
            }`}
          />
        </span>
        <span>
          {isOffline ? "Connection Lost — Reconnecting..." : "⚡ Reconnecting to game server..."}
        </span>
      </div>
    </div>
  );
}
