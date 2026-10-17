import { cn } from "@/lib/utils";

/**
 * A row of mutually exclusive choices. The selected one turns solid yellow; only colours
 * transition, so switching quickly between options never lags behind the tap.
 */
export function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
  size = "sm",
  className,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)} role="group" aria-label={label || undefined}>
      {options.map((option) => (
        <button
          key={String(option.value)}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "press rounded-lg font-semibold transition-colors duration-150",
            size === "lg" ? "flex-1 px-3 py-3 font-display text-lg" : "px-3 py-1.5 text-sm",
            value === option.value ? "bg-sun text-on-sun" : "bg-secondary text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
