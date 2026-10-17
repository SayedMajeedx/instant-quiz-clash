import { useEffect, useRef } from "react";
import { sounds } from "@/lib/audio";
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
  const lastSecRef = useRef(secs);

  useEffect(() => {
    if (secs > 0 && secs <= 5 && secs !== lastSecRef.current) {
      lastSecRef.current = secs;
      sounds.playTick();
    }
  }, [secs]);

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

/**
 * Linear time bar. Only transform animates (scaleX), linear because time is constant
 * motion, and it shrinks toward the reading start. Ticks for the last five seconds
 * when `withTick` is set.
 */
export function CountdownBar({
  msLeft,
  totalMs,
  withTick = false,
  className,
}: {
  msLeft: number;
  totalMs: number;
  withTick?: boolean;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(1, msLeft / Math.max(1, totalMs)));
  const secs = Math.max(0, Math.ceil(msLeft / 1000));
  const urgent = msLeft <= 5000;
  const lastSecRef = useRef(secs);

  useEffect(() => {
    if (withTick && secs > 0 && secs <= 5 && secs !== lastSecRef.current) {
      lastSecRef.current = secs;
      sounds.playTick();
    }
  }, [secs, withTick]);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={Math.round(totalMs / 1000)}
      aria-valuenow={secs}
      className={cn("h-3 w-full overflow-hidden rounded-full bg-secondary", className)}
    >
      <div
        className={cn(
          "h-full w-full rounded-full ltr:origin-left rtl:origin-right transition-[transform,background-color] duration-200 ease-linear",
          urgent ? "bg-destructive" : "bg-sun",
        )}
        style={{ transform: `scaleX(${pct})` }}
      />
    </div>
  );
}
