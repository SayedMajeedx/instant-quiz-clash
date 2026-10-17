import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/quiz/Logo";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Top bar for the signed-in screens: the logo goes home, actions sit at the end. */
export function AppHeader({ children, className }: { children?: ReactNode; className?: string }) {
  const { t } = useI18n();
  return (
    <header className={cn("mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5", className)}>
      <Link to="/" aria-label={t("brand.quiz") + t("brand.clash")}>
        <Logo />
      </Link>
      {children ? <nav className="flex flex-wrap items-center justify-end gap-2">{children}</nav> : null}
    </header>
  );
}
