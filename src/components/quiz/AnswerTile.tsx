import { useEffect, type ReactNode } from "react";
import { SHAPE_KEYS, useI18n } from "@/lib/i18n";
import { ANSWER_STYLES } from "@/lib/quizclash";
import { sounds } from "@/lib/audio";
import { cn } from "@/lib/utils";

export function AnswerShape({ index, className }: { index: number; className?: string }) {
  const shape = ANSWER_STYLES[index]?.shape ?? "square";
  const common = cn("bg-primary-foreground", className);
  if (shape === "triangle") {
    return <span className={cn(common, "block")} style={{ clipPath: "polygon(50% 4%, 100% 96%, 0 96%)" }} />;
  }
  if (shape === "diamond") {
    return <span className={cn(common, "block rotate-45 rounded-[3px]")} style={{ width: "72%", height: "72%" }} />;
  }
  if (shape === "circle") {
    return <span className={cn(common, "block rounded-full")} />;
  }
  return <span className={cn(common, "block rounded-[4px]")} />;
}

type TileProps = {
  index: number;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  state?: "idle" | "correct" | "wrong" | "dimmed" | "chosen";
  size?: "player" | "host";
  count?: number | undefined;
};

export function AnswerTile({
  index,
  children,
  onClick,
  disabled,
  state = "idle",
  size = "host",
  count,
}: TileProps) {
  const style = ANSWER_STYLES[index]!;
  const { t } = useI18n();

  useEffect(() => {
    if (state === "correct") {
      sounds.playCorrect();
    } else if (state === "wrong") {
      sounds.playWrong();
    }
  }, [state]);

  function handleClick() {
    sounds.playTap();
    if (onClick) onClick();
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={t(SHAPE_KEYS[index] ?? "shape.square")}
      className={cn(
        "press relative flex w-full items-center gap-3 sm:gap-4 overflow-hidden rounded-2xl border-b-[5px] sm:border-b-[6px] px-3 sm:px-4 text-start font-display text-primary-foreground transition-all",
        style.bg,
        size === "player" ? "min-h-[20vh] justify-center" : "min-h-[60px] sm:min-h-[72px] lg:min-h-[84px] py-2 sm:py-3",
        state === "correct" && "animate-pulse-hard ring-4 ring-primary-foreground",
        state === "wrong" && "opacity-35 grayscale",
        state === "dimmed" && "opacity-30",
        state === "chosen" && "ring-4 ring-primary-foreground",
        disabled && "cursor-default",
      )}
      style={{ borderBottomColor: `var(--answer-${index + 1}-shade)` }}
    >
      {/* iOS Liquid Glass Specular Reflection Overlay */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-t-2xl" />
      <span
        className={cn(
          "grid shrink-0 place-items-center",
          size === "player" ? "size-14 sm:size-16" : "size-8 sm:size-10 lg:size-11",
        )}
      >
        <AnswerShape index={index} className={size === "player" ? "size-12 sm:size-14" : "size-7 sm:size-8 lg:size-9"} />
      </span>
      {children ? (
        <span className={cn("flex-1 leading-snug line-clamp-2", size === "host" ? "text-base sm:text-xl lg:text-2xl xl:text-3xl" : "text-lg sm:text-xl")}>
          {children}
        </span>
      ) : null}
      {typeof count === "number" ? (
        <span className="ml-auto rounded-full bg-background/35 px-3 py-1 text-lg tabular-nums">{count}</span>
      ) : null}
    </button>
  );
}
