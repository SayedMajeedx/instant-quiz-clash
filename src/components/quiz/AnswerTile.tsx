import { memo, useEffect, type ReactNode } from "react";
import { SHAPE_KEYS, useI18n } from "@/lib/i18n";
import { ANSWER_STYLES } from "@/lib/quizclash";
import { sounds } from "@/lib/audio";
import { cn } from "@/lib/utils";

/** Ledge colour per answer slot; yellow carries dark text, the rest white. */
const LEDGE_CLASSES = ["ledge-red", "ledge-blue", "ledge-yellow", "ledge-green"];
/** Readable ink on each answer colour. */
const SHAPE_INK = ["bg-white", "bg-white", "bg-on-sun", "bg-white"];
/** Exam-style option letters, so answers never rely on colour alone. */
const OPTION_LETTERS = {
  ar: ["أ", "ب", "ج", "د"],
  en: ["A", "B", "C", "D"],
};

export function AnswerShape({ index, className }: { index: number; className?: string }) {
  const shape = ANSWER_STYLES[index]?.shape ?? "square";
  const common = cn(SHAPE_INK[index] ?? "bg-white", className);
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

export const AnswerTile = memo(function AnswerTile({
  index,
  children,
  onClick,
  disabled,
  state = "idle",
  size = "host",
  count,
}: TileProps) {
  const { t, lang } = useI18n();
  const letter = OPTION_LETTERS[lang === "ar" ? "ar" : "en"][index];

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

  const isPlayer = size === "player";

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={`${letter ?? ""} ${t(SHAPE_KEYS[index] ?? "shape.square")}`}
      data-pressed={state === "chosen" || undefined}
      style={{ ["--ledge-depth" as string]: isPlayer ? "8px" : "5px" }}
      className={cn(
        "ledge w-full transition-opacity duration-200",
        LEDGE_CLASSES[index],
        isPlayer && "rounded-[22px]",
        state === "correct" && "animate-pulse-hard",
        state === "wrong" && "opacity-35",
        state === "dimmed" && "opacity-30",
        disabled && state === "idle" && !isPlayer && "cursor-default",
      )}
    >
      <span
        className={cn(
          "ledge-face font-display",
          isPlayer
            ? "min-h-[18vh] flex-col gap-1 px-3 text-4xl"
            : "min-h-[48px] justify-start px-3 py-1.5 text-start sm:min-h-[58px] sm:px-4 sm:py-2.5 lg:min-h-[68px]",
          (state === "chosen" || state === "correct") && "outline outline-4 -outline-offset-4 outline-white/90",
        )}
      >
        <span className={cn("flex shrink-0 items-center gap-2", isPlayer && "flex-col gap-1")}>
          <span className={cn("grid place-items-center", isPlayer ? "size-14" : "size-6 sm:size-7 lg:size-8")}>
            <AnswerShape index={index} className={isPlayer ? "size-12" : "size-5 sm:size-6 lg:size-7"} />
          </span>
          <span aria-hidden className={cn("leading-none", isPlayer ? "text-4xl" : "text-base sm:text-lg lg:text-xl")}>
            {letter}
          </span>
        </span>
        {children ? (
          <span
            className={cn(
              "flex-1 leading-snug line-clamp-2",
              isPlayer ? "text-center text-xl" : "text-sm sm:text-lg lg:text-xl xl:text-2xl",
            )}
          >
            {children}
          </span>
        ) : null}
        {typeof count === "number" ? (
          <span className="ms-auto rounded-full bg-black/25 px-3 py-1 text-lg tabular-nums">{count}</span>
        ) : null}
      </span>
    </button>
  );
});
