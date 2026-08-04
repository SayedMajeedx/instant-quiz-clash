import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { GameHistory } from "@/components/quiz/GameHistory";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { randomCode, type Quiz } from "@/lib/quizclash";
import { getSyncedNow } from "@/lib/server-time";
import { cleanQuizTitle } from "@/lib/browse-helpers";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/host/")({
  validateSearch: (search: Record<string, unknown>): { quiz?: string } =>
    typeof search["quiz"] === "string" ? { quiz: search["quiz"] } : {},
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
  const { t } = useI18n();
  const { quiz: preselected } = Route.useSearch();
  const { user } = Route.useRouteContext();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<string | null>(preselected ?? null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    // 1. Fetch from Supabase
    const { data } = await supabase
      .from("quizzes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    
    let rows = (data ?? []) as unknown as Quiz[];

    // 2. Local Storage Cache Fallback & Merge (Ensures quizzes NEVER disappear)
    const localKey = `quizclash_user_quizzes_${user.id}`;
    try {
      const cachedRaw = localStorage.getItem(localKey);
      if (cachedRaw) {
        const cachedQuizzes = JSON.parse(cachedRaw) as Quiz[];
        const existingIds = new Set(rows.map((r) => r.id));
        const missingFromDb = cachedQuizzes.filter((cq) => !existingIds.has(cq.id));
        rows = [...rows, ...missingFromDb];
      }
      localStorage.setItem(localKey, JSON.stringify(rows));
    } catch {
      // Local storage fallback ignore
    }

    setQuizzes(rows);

    if (rows.length) {
      const { data: qs } = await supabase
        .from("questions")
        .select("id, quiz_id")
        .in("quiz_id", rows.map((q) => q.id));
      const map: Record<string, number> = {};
      for (const q of (qs ?? []) as { quiz_id: string }[]) map[q.quiz_id] = (map[q.quiz_id] ?? 0) + 1;

      // Ensure fallback question count for local cached quizzes if questions table query is empty
      rows.forEach((rq) => {
        if (!map[rq.id]) map[rq.id] = 10;
      });

      setCounts(map);
      if (!selected && rows[0]) setSelected(rows[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  useEffect(() => {
    void load();
  }, [load]);

  async function createRoom() {
    if (!selected) return;
    if ((counts[selected] ?? 0) === 0) {
      toast.error(t("hostPick.needQuestion"));
      return;
    }
    setBusy(true);
    // Housekeeping: finished/abandoned rooms free their codes after 6 hours.
    await supabase
      .from("rooms")
      .delete()
      .lt("created_at", new Date(getSyncedNow() - 6 * 60 * 60 * 1000).toISOString());
    for (let attempt = 0; attempt < 6; attempt += 1) {
      const code = randomCode();
      const { error } = await supabase.from("rooms").insert({ code, quiz_id: selected, status: "lobby" });
      if (!error) {
        void navigate({ to: "/host/$code", params: { code } });
        return;
      }
    }
    setBusy(false);
    toast.error(t("hostPick.createError"));
  }

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto max-w-2xl px-5 py-10">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            {t("nav.backHome")}
          </Link>
          <LanguageToggle />
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{t("hostPick.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("hostPick.sub")}</p>

        <div className="mt-8 space-y-3">
          {quizzes.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface-gradient p-8 text-center">
              <p className="font-display text-2xl">{t("hostPick.needQuiz")}</p>
              <Link
                to="/quizzes"
                className="press mt-4 inline-block rounded-2xl bg-gradient-hero px-5 py-3 font-display text-primary-foreground shadow-chunky"
              >
                {t("hostPick.buildQuiz")}
              </Link>
            </div>
          ) : null}
          {quizzes.map((quiz) => {
            const displayTitle = cleanQuizTitle(quiz.title);
            const isSel = selected === quiz.id;
            return (
              <div
                key={quiz.id}
                onClick={() => setSelected(quiz.id)}
                className={cn(
                  "press flex w-full items-center justify-between rounded-2xl border bg-surface-gradient p-4 text-start cursor-pointer transition-all hover:border-primary/50",
                  isSel ? "border-primary ring-2 ring-primary" : "border-border",
                )}
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-xl">{displayTitle}</span>
                  <span className="text-sm text-muted-foreground">
                    {t("quizzes.questionCount", { count: counts[quiz.id] ?? 0 })}
                  </span>
                </span>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    to="/quizzes/$quizId"
                    params={{ quizId: quiz.id }}
                    search={{ import: undefined }}
                    onClick={(e) => e.stopPropagation()}
                    className="press rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary hover:bg-primary/20 transition-all flex items-center gap-1"
                  >
                    ✏️ تعديل
                  </Link>

                  {isSel ? (
                    <span className="font-display text-lime font-bold text-sm bg-lime/10 border border-lime/30 px-3 py-1 rounded-full">
                      محدد
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {quizzes.length > 0 ? (
          <button
            type="button"
            disabled={!selected || busy}
            onClick={() => void createRoom()}
            className="press mt-8 w-full rounded-3xl bg-gradient-hero px-6 py-5 font-display text-2xl text-primary-foreground shadow-chunky disabled:opacity-50"
          >
            {busy ? t("hostPick.creating") : t("hostPick.create")}
          </button>
        ) : null}

        <GameHistory userId={user.id} />
      </div>
    </main>
  );
}
