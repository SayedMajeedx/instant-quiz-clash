import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil, Play, Plus, Sparkles, Trash2 } from "lucide-react";
import { AppHeader } from "@/components/quiz/AppHeader";
import { ConfirmDialog } from "@/components/quiz/ConfirmDialog";
import { Pager } from "@/components/quiz/Pager";
import { SiteFooter } from "@/components/quiz/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { cleanQuizTitle } from "@/lib/browse-helpers";

import type { Quiz } from "@/lib/quizclash";

const PAGE_SIZE = 10;

export const Route = createFileRoute("/_authenticated/quizzes/")({
  head: () => ({
    meta: [
      { title: "الكويزات الخاصة بي — QuizClash" },
      { name: "description", content: "إدارة الكويزات التي أنشأتها أو نسختها واستضافتها مباشرة." },
      { property: "og:title", content: "الكويزات الخاصة بي — QuizClash" },
    ],
  }),
  component: MyQuizzes,
});

function MyQuizzes() {
  const navigate = useNavigate();
  const { t, lang } = useI18n();
  const { user } = Route.useRouteContext();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pendingDelete, setPendingDelete] = useState<Quiz | null>(null);

  const load = useCallback(async () => {
    // One request: each quiz with the number of questions it really has.
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
    setPage(1);
    setLoading(false);
  }, [user.id]);

  useEffect(() => {
    void load();
  }, [load]);

  async function createQuiz(withImport = false) {
    const { data, error } = await supabase
      .from("quizzes")
      .insert({
        user_id: user.id,
        title: t("quizzes.newTitle"),
        personal_library: true,
        personal_library_origin: "created",
      } as never)
      .select()
      .single();

    let quiz: Quiz;

    if (error || !data) {
      // Fallback local creation if DB is slow
      quiz = {
        id: `local-quiz-${Date.now()}`,
        user_id: user.id,
        title: "كويز جديد",
        created_at: new Date().toISOString(),
        is_public: false,
      } as Quiz;
    } else {
      quiz = data as unknown as Quiz;
    }

    // Save to local cache backup
    const localKey = `quizclash_user_quizzes_${user.id}`;
    try {
      const cachedRaw = localStorage.getItem(localKey);
      const existing = cachedRaw ? (JSON.parse(cachedRaw) as Quiz[]) : [];
      localStorage.setItem(localKey, JSON.stringify([quiz, ...existing]));
    } catch {
      // ignore
    }

    if (!withImport && !error) {
      await supabase.from("questions").insert({
        quiz_id: quiz.id,
        question_text: "",
        options: ["", "", "", ""],
        correct_index: 0,
        time_limit_seconds: 30,
        order_index: 0,
      });
    }

    void navigate({
      to: "/quizzes/$quizId",
      params: { quizId: quiz.id },
      search: { import: withImport ? true : undefined },
    });
  }

  async function remove(id: string) {
    const { error } = await supabase.from("quizzes").delete().eq("id", id);
    if (error) {
      toast.error(t("auth.error"));
      return;
    }
    setQuizzes((prev) => {
      const updated = prev.filter((q) => q.id !== id);
      const localKey = `quizclash_user_quizzes_${user.id}`;
      try {
        localStorage.setItem(localKey, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
    toast.success(t("quizzes.deleted"));
  }

  const totalPages = Math.max(1, Math.ceil(quizzes.length / PAGE_SIZE));
  const pageQuizzes = quizzes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const newLabel = t("quizzes.new").replace(/^\+\s*/, "");

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader>
        <Link to="/browse" className="press rounded-xl bg-secondary px-4 py-2 text-sm font-semibold">
          {t("nav.browse")}
        </Link>
      </AppHeader>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-20">
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl">{t("quizzes.title")}</h1>
            {!loading && quizzes.length > 0 ? (
              <p className="mt-1 text-muted-foreground">
                {quizzes.length} {lang === "ar" ? "كويز" : quizzes.length === 1 ? "quiz" : "quizzes"}
              </p>
            ) : null}
          </div>
          {quizzes.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => void createQuiz(true)} className="ledge ledge-panel">
                <span className="ledge-face h-12 px-5 font-semibold">
                  <Sparkles className="size-5 text-sun" aria-hidden />
                  {t("import.open")}
                </span>
              </button>
              <button type="button" onClick={() => void createQuiz(false)} className="ledge ledge-blue">
                <span className="ledge-face h-12 px-5 font-display text-lg">
                  <Plus className="size-5" aria-hidden />
                  {newLabel}
                </span>
              </button>
            </div>
          ) : null}
        </div>

        <div className="mt-8 space-y-3">
          {loading
            ? Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="h-[84px] animate-pulse rounded-2xl bg-card" aria-hidden />
              ))
            : null}

          {!loading && quizzes.length === 0 ? (
            <div className="animate-rise rounded-3xl bg-card p-8 text-center sm:p-10">
              <ShapesMark />
              <p className="mt-5 font-display text-3xl">{t("quizzes.emptyTitle")}</p>
              <p className="mx-auto mt-2 max-w-sm text-muted-foreground">{t("quizzes.emptyBody")}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button type="button" onClick={() => void createQuiz(false)} className="ledge ledge-blue">
                  <span className="ledge-face h-12 px-6 font-display text-lg">
                    <Plus className="size-5" aria-hidden />
                    {newLabel}
                  </span>
                </button>
                <button type="button" onClick={() => void createQuiz(true)} className="ledge ledge-panel">
                  <span className="ledge-face h-12 px-6 font-semibold">
                    <Sparkles className="size-5 text-sun" aria-hidden />
                    {t("import.open")}
                  </span>
                </button>
              </div>
              <Link to="/browse" className="mt-6 inline-block font-semibold text-sun hover:underline">
                {t("browse.ctaBtn")}
              </Link>
            </div>
          ) : null}

          {pageQuizzes.map((quiz) => {
            const displayTitle = cleanQuizTitle(quiz.title);
            const count = counts[quiz.id] ?? 0;
            return (
              <article key={quiz.id} className="flex flex-wrap items-center gap-3 rounded-2xl bg-card p-4 sm:flex-nowrap">
                <Link
                  to="/quizzes/$quizId"
                  params={{ quizId: quiz.id }}
                  search={{ import: undefined }}
                  className="min-w-0 flex-1 rounded-lg"
                >
                  <p className="truncate font-display text-xl">{displayTitle}</p>
                  <p className={count === 0 ? "text-sm text-sun" : "text-sm text-muted-foreground"}>
                    {count === 0
                      ? lang === "ar"
                        ? "لا توجد أسئلة بعد"
                        : "No questions yet"
                      : t("quizzes.questionCount", { count })}
                  </p>
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPendingDelete(quiz)}
                    aria-label={`${t("quizzes.delete")}: ${displayTitle}`}
                    className="press grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
                  >
                    <Trash2 className="size-5" aria-hidden />
                  </button>
                  <Link
                    to="/quizzes/$quizId"
                    params={{ quizId: quiz.id }}
                    search={{ import: undefined }}
                    className="press flex h-10 items-center gap-2 rounded-xl bg-secondary px-4 text-sm font-semibold"
                  >
                    <Pencil className="size-4" aria-hidden />
                    {t("quizzes.edit")}
                  </Link>
                  <Link
                    to="/host"
                    search={{ quiz: quiz.id }}
                    className="press flex h-10 items-center gap-2 rounded-xl bg-answer-4 px-4 text-sm font-semibold text-white"
                  >
                    <Play className="size-4 fill-current rtl:rotate-180" aria-hidden />
                    {t("quizzes.host")}
                  </Link>
                </div>
              </article>
            );
          })}

          {!loading && quizzes.length > PAGE_SIZE ? (
            <Pager page={page} totalPages={totalPages} onPage={setPage} />
          ) : null}
        </div>
      </main>

      <SiteFooter />

      <ConfirmDialog
        open={pendingDelete !== null}
        onOpenChange={(open) => {
          if (!open) setPendingDelete(null);
        }}
        title={lang === "ar" ? "حذف هذا الكويز؟" : "Delete this quiz?"}
        body={
          pendingDelete
            ? lang === "ar"
              ? `«${cleanQuizTitle(pendingDelete.title)}» وكل أسئلته ستُحذف نهائياً.`
              : `“${cleanQuizTitle(pendingDelete.title)}” and all its questions will be deleted for good.`
            : undefined
        }
        confirmLabel={t("quizzes.delete")}
        onConfirm={() => {
          if (pendingDelete) void remove(pendingDelete.id);
          setPendingDelete(null);
        }}
      />
    </div>
  );
}

/** The four answer shapes, used as a quiet illustration on empty states. */
function ShapesMark() {
  return (
    <span aria-hidden className="mx-auto grid w-fit grid-cols-2 gap-1.5">
      <span className="size-5 bg-answer-1 [clip-path:polygon(50%_6%,100%_94%,0_94%)]" />
      <span className="size-5 bg-answer-2 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]" />
      <span className="size-5 rounded-full bg-answer-3" />
      <span className="size-5 rounded-[4px] bg-answer-4" />
    </span>
  );
}
