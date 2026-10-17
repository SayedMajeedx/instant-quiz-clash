import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const MARK = [
  { color: "var(--answer-1)", clip: "polygon(50% 6%, 100% 94%, 0 94%)", radius: "0" },
  { color: "var(--answer-2)", clip: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)", radius: "0" },
  { color: "var(--answer-3)", clip: "none", radius: "50%" },
  { color: "var(--answer-4)", clip: "none", radius: "3px" },
];

/** The four answer shapes as a mark, followed by the wordmark. */
export function Logo({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const { t } = useI18n();
  const cell = size === "lg" ? 16 : 12;
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display", size === "lg" ? "text-4xl" : "text-2xl", className)}>
      <span aria-hidden className="grid grid-cols-2" style={{ gap: cell / 4 }}>
        {MARK.map((m, i) => (
          <span
            key={i}
            className="block"
            style={{ width: cell, height: cell, background: m.color, clipPath: m.clip, borderRadius: m.radius }}
          />
        ))}
      </span>
      <span>
        {t("brand.quiz")}
        {t("brand.clash")}
      </span>
    </span>
  );
}
