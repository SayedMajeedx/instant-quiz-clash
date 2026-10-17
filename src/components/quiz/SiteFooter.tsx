import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Logo } from "@/components/quiz/Logo";

/** Page footer with the site credit (formerly a pill floating over every page). */
export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-muted-foreground">
        <Link to="/" className="text-foreground">
          <Logo />
        </Link>
        <nav className="flex flex-wrap items-center gap-5">
          <Link to="/browse" className="hover:text-foreground">
            {t("nav.browse")}
          </Link>
          <Link to="/join" className="hover:text-foreground">
            {t("home.joinGame")}
          </Link>
          <span>{t("footer.credit")}</span>
        </nav>
      </div>
    </footer>
  );
}
