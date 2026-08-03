import { cn } from "@/lib/utils";

export function CountdownRing({
  msLeft,
  totalMs,
  size = 150,
}: {
  msLeft: number;
  totalMs: number;
  size?: number;
}) {
  const pct = Math.max(0, Math.min(1, msLeft / Math.max(1, totalMs)));
  const secs = Math.max(0, Math.ceil(msLeft / 1000));
  const urgent = msLeft <= 5000;
  const stroke = size * 0.09;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div
      className={cn("relative grid place-items-center", urgent && "animate-pulse-hard")}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          className="stroke-secondary"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className={cn("transition-none", urgent ? "stroke-destructive" : "stroke-sun")}
        />
      </svg>
      <span
        className="absolute font-display tabular-nums"
        style={{ fontSize: size * 0.4 }}
      >
        {secs}
      </span>
    </div>
  );
}

export function CountdownBar({ msLeft, totalMs }: { msLeft: number; totalMs: number }) {
  const pct = Math.max(0, Math.min(1, msLeft / Math.max(1, totalMs)));
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className={cn("h-full rounded-full", msLeft <= 5000 ? "bg-destructive" : "bg-gradient-hero")}
        style={{ width: `${pct * 100}%` }}
      />
    </div>
  );
}
