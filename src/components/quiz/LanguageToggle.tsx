import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { t, toggle, lang } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("lang.label")}
      title={t("lang.label")}
      lang={lang === "ar" ? "en" : "ar"}
      className={cn(
        "press rounded-xl border border-border bg-surface-gradient px-3 py-2 text-sm font-semibold",
        className,
      )}
    >
      {t("lang.switch")}
    </button>
  );
}
