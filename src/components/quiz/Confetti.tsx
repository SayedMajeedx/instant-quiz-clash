import { useMemo } from "react";

export function Confetti({ pieces = 90 }: { pieces?: number }) {
  const colors = ["var(--primary)", "var(--hot)", "var(--sun)", "var(--lime)", "var(--electric)"];
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 2.4 + Math.random() * 1.8,
        drift: `${(Math.random() - 0.5) * 260}px`,
        color: colors[i % colors.length],
        w: 7 + Math.random() * 8,
        h: 10 + Math.random() * 12,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pieces],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {bits.map((b, i) => (
        <span
          key={i}
          className="absolute top-0 animate-confetti rounded-[2px]"
          style={{
            left: `${b.left}%`,
            width: b.w,
            height: b.h,
            backgroundColor: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            ["--drift" as string]: b.drift,
          }}
        />
      ))}
    </div>
  );
}
