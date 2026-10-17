import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

/** Previous / next with the page count. The arrows point the way the page reads. */
export function Pager({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: (page: number) => void;
}) {
  const { lang } = useI18n();
  const ar = lang === "ar";
  return (
    <nav className="flex items-center justify-center gap-3 pt-5" aria-label={ar ? "الصفحات" : "Pages"}>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPage(Math.max(1, page - 1))}
        aria-label={ar ? "الصفحة السابقة" : "Previous page"}
        className="press grid size-10 place-items-center rounded-xl bg-secondary disabled:opacity-35"
      >
        <ChevronRight className="size-5 ltr:rotate-180" aria-hidden />
      </button>
      <span className="min-w-16 text-center text-sm font-semibold tabular-nums text-muted-foreground">
        {page} / {totalPages}
      </span>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        aria-label={ar ? "الصفحة التالية" : "Next page"}
        className="press grid size-10 place-items-center rounded-xl bg-secondary disabled:opacity-35"
      >
        <ChevronLeft className="size-5 ltr:rotate-180" aria-hidden />
      </button>
    </nav>
  );
}
