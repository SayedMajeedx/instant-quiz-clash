import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useI18n } from "@/lib/i18n";

/**
 * Asks before something can't be undone. Matches the host's exit dialog: a flat card with a
 * panel "cancel" and a red confirm. Radix handles focus, Escape and the outside click; the
 * card scales from 0.95 rather than from nothing, and leaves faster than it arrives.
 */
export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  body,
  confirmLabel,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  body?: string | undefined;
  confirmLabel: string;
  onConfirm: () => void;
}) {
  const { lang } = useI18n();
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-150" />
        <AlertDialog.Content
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-card p-6 text-center ease-[var(--ease-out)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-150"
        >
          <AlertDialog.Title className="font-display text-2xl">{title}</AlertDialog.Title>
          {body ? (
            <AlertDialog.Description className="mt-2 text-muted-foreground">{body}</AlertDialog.Description>
          ) : (
            <AlertDialog.Description className="sr-only">{title}</AlertDialog.Description>
          )}
          <div className="mt-6 flex gap-3">
            <AlertDialog.Cancel className="ledge ledge-panel flex-1">
              <span className="ledge-face h-12 font-display text-lg">{lang === "ar" ? "إلغاء" : "Cancel"}</span>
            </AlertDialog.Cancel>
            <AlertDialog.Action onClick={onConfirm} className="ledge ledge-red flex-1">
              <span className="ledge-face h-12 font-display text-lg">{confirmLabel}</span>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
