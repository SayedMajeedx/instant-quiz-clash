import { useMemo } from "react";

/** Soft floating gradient blobs — keeps idle/waiting screens energetic. */
export function AnimatedBg({ dense = false }: { dense?: boolean }) {
  const blobs = useMemo(
    () => [
      { cls: "bg-primary", size: 520, top: "-12%", left: "-10%", delay: "0s" },
      { cls: "bg-hot", size: 440, top: "45%", left: "68%", delay: "-6s" },
      { cls: "bg-electric", size: 380, top: "72%", left: "-6%", delay: "-11s" },
      { cls: "bg-sun", size: 300, top: "6%", left: "72%", delay: "-3s" },
    ],
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl animate-blob ${b.cls}`}
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            opacity: dense ? 0.4 : 0.28,
            animationDelay: b.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}
