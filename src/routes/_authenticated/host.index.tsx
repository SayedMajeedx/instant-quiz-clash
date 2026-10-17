import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Check, Loader2, Pencil } from "lucide-react";
import { AppHeader } from "@/components/quiz/AppHeader";
import { GameHistory } from "@/components/quiz/GameHistory";
import { Pager } from "@/components/quiz/Pager";
import { SiteFooter } from "@/components/quiz/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { randomCode, type Quiz } from "@/lib/quizclash";
import { cleanQuizTitle } from "@/lib/browse-helpers";
import { cn } from "@/lib/utils";
import { isDailyLimitError, useSubscription } from "@/hooks/useSubscription";
import { SubscriptionStatusBadge } from "@/components/subscription/SubscriptionStatusBadge";
import { SubscriptionPaywallModal } from "@/components/subscription/SubscriptionPaywallModal";

const PAGE_SIZE = 10;

export const Route = createFileRoute("/_authenticated/host/")({
  validateSearch: (search: Record<string, unknown>): { quiz?: string; checkout?: string } => ({
    ...(typeof search["quiz"] === "string" ? { quiz: search["quiz"] } : {}),
    ...(typeof search["checkout"] === "string" ? { checkout: search["checkout"] } : {}),
  }),
  head: () => ({
    meta: [
      { title: "استضافة لعبة — QuizClash" },
      { name: "description", content: "اختر كويز وسننشئ رمز انضمام للاعبين على الشاشة الكبيرة." },
      { property: "og:title", content: "استضافة لعبة — QuizClash" },
    ],
  }),
  component: HostCreate,
});

function HostCreate() {
  const navigate = useNavigate();
  const { t, lang } = useI18n();
  const { quiz: preselected, checkout } = Route.useSearch();
  const { user } = Route.useRouteContext();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<string | null>(preselected ?? null);
  const [busy, setBusy] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paywallReason, setPaywallReason] = useState<string>("");
  const { refresh: refreshSub } = useSubscription();

  useEffect(() => {
    if (checkout === "cancelled") toast.info(t("hostPick.checkoutCancelled"));
  }, [checkout, t]);

  const load = useCallback(async () => {
    // One request: each quiz with the number of questions it really has, so the
    // "add a question first" guard below sees the truth.
    const { data } = await (supabase.from("quizzes") as any)
      .select("*, questions(count)")
      .eq("user_id", user.id)
      .eq("personal_library", true)
      .order("created_at", { ascending: false });

    const rows = ((data ?? []) as (Quiz & { questions?: { count: number }[] })[]).filter(
      (quiz) => quiz.quiz_kind !== "custom_generated",
    );
    const map: Record<string, number> = {};
    for (const row of rows) map[row.id] = row.questions?.[0]?.count ?? 0;

    setQuizzes(rows);
    setCounts(map);
    const selectedIndex = preselected ? rows.findIndex((quiz) => quiz.id === preselected) : -1;
    setPage(selectedIndex >= 0 ? Math.floor(selectedIndex / PAGE_SIZE) + 1 : 1);
    if (!selected && rows[0]) setSelected(rows[0].id);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  useEffect(() => {
    void load();
  }, [load]);

  const totalPages = Math.max(1, Math.ceil(quizzes.length / PAGE_SIZE));
  const pageQuizzes = quizzes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  async function createRoom() {
    if (!selected) return;
    if ((counts[selected] ?? 0) === 0) {
      toast.error(t("hostPick.needQuestion"));
      return;
    }
    setBusy(true);

    // The database assigns the host and consumes the daily free quota on
    // insert; a duplicate code rolls the quota back, so retrying is safe.
    for (let attempt = 0; attempt < 6; attempt += 1) {
      const code = randomCode();
      const { error } = await supabase.from("rooms").insert({ code, quiz_id: selected });
      if (!error) {
        void refreshSub();
        void navigate({ to: "/host/$code", params: { code } });
        return;
      }
      if (isDailyLimitError(error)) {
        setPaywallReason("daily_limit_reached");
        setShowPaywall(true);
        setBusy(false);
        void refreshSub();
        return;
      }
      if (error.code !== "23505") break;
    }
    setBusy(false);
    toast.error(t("hostPick.createError"));
  }

  const selectedQuiz = quizzes.find((quiz) => quiz.id === selected) ?? null;
  const ar = lang === "ar";

  return (
    <div className="flex min-h-screen flex-col">
      <SubscriptionPaywallModal open={showPaywall} onOpenChange={setShowPaywall} reason={paywallReason} />
      <AppHeader>
        <SubscriptionStatusBadge onOpenUpgrade={() => setShowPaywall(true)} />
        <Link to="/quizzes" className="press rounded-xl bg-secondary px-4 py-2 text-sm font-semibold">
          {t("nav.myQuizzes")}
        </Link>
      </AppHeader>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-16">
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">{t("hostPick.title")}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{t("hostPick.sub")}</p>

        <div className="mt-8 space-y-3">
          {loading
            ? Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="h-[76px] animate-pulse rounded-2xl bg-card" aria-hidden />
              ))
            : null}

          {!loading && quizzes.length === 0 ? (
            <div className="animate-rise rounded-3xl bg-card p-8 text-center">
              <p className="font-display text-2xl">{t("hostPick.needQuiz")}</p>
              <p className="mx-auto mt-2 max-w-sm text-muted-foreground">
                {ar
                  ? "اختر كويزاً جاهزاً من المكتبة أو اكتب كويزك الخاص."
                  : "Pick a ready-made quiz from the library or write your own."}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/browse" className="ledge ledge-blue">
                  <span className="ledge-face h-12 px-6 font-display text-lg">{t("nav.browse")}</span>
                </Link>
                <Link to="/quizzes" className="ledge ledge-panel">
                  <span className="ledge-face h-12 px-6 font-semibold">{t("hostPick.buildQuiz")}</span>
                </Link>
              </div>
            </div>
          ) : null}

          {quizzes.length > 0 ? (
            <div role="radiogroup" aria-label={t("hostPick.title")} className="space-y-3">
              {pageQuizzes.map((quiz) => {
                const displayTitle = cleanQuizTitle(quiz.title);
                const isSel = selected === quiz.id;
                const count = counts[quiz.id] ?? 0;
                return (
                  <div
                    key={quiz.id}
                    className={cn(
                      "flex items-center gap-2 rounded-2xl bg-card pe-3 ring-2 transition-[box-shadow,background-color] duration-150",
                      isSel ? "bg-secondary ring-sun" : "ring-transparent",
                    )}
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={isSel}
                      onClick={() => setSelected(quiz.id)}
                      className="flex min-w-0 flex-1 items-center gap-4 rounded-2xl p-4 text-start"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-full border-2 transition-colors duration-150",
                          isSel ? "border-sun bg-sun text-on-sun" : "border-border",
                        )}
                      >
                        {isSel ? <Check className="size-4" strokeWidth={3} /> : null}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-xl">{displayTitle}</span>
                        <span className={cn("text-sm", count === 0 ? "text-sun" : "text-muted-foreground")}>
                          {count === 0
                            ? ar
                              ? "لا توجد أسئلة بعد"
                              : "No questions yet"
                            : t("quizzes.questionCount", { count })}
                        </span>
                      </span>
                    </button>
                    <Link
                      to="/quizzes/$quizId"
                      params={{ quizId: quiz.id }}
                      search={{ import: undefined }}
                      aria-label={`${t("quizzes.edit")}: ${displayTitle}`}
                      className="press grid size-10 shrink-0 place-items-center rounded-xl text-muted-foreground transition-colors duration-150 hover:bg-background hover:text-foreground"
                    >
                      <Pencil className="size-5" aria-hidden />
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : null}

          {quizzes.length > PAGE_SIZE ? <Pager page={page} totalPages={totalPages} onPage={setPage} /> : null}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {ar ? "تريد أسئلة من عدة أقسام؟ " : "Want questions from several categories? "}
          <Link to="/custom-challenge" className="font-semibold text-sun hover:underline">
            {ar ? "أنشئ تحدياً مخصصاً" : "Build a custom challenge"}
          </Link>
        </p>

        <GameHistory userId={user.id} />
      </main>

      {quizzes.length > 0 ? (
        <div className="sticky bottom-0 z-10 border-t border-border bg-background">
          <div className="mx-auto flex w-full max-w-3xl items-center gap-4 px-5 pb-4 pt-3">
            <div className="hidden min-w-0 flex-1 sm:block">
              <p className="text-sm text-muted-foreground">{ar ? "الكويز المختار" : "Selected quiz"}</p>
              <p className="truncate font-display text-lg">
                {selectedQuiz ? cleanQuizTitle(selectedQuiz.title) : "—"}
              </p>
            </div>
            <button
              type="button"
              disabled={!selected || busy}
              onClick={() => void createRoom()}
              className="ledge ledge-green w-full disabled:opacity-50 sm:w-auto"
            >
              <span className="ledge-face h-14 px-8 font-display text-xl">
                {busy ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
                {busy ? t("hostPick.creating") : t("hostPick.create")}
              </span>
            </button>
          </div>
        </div>
      ) : null}

      <SiteFooter />
    </div>
  );
}
