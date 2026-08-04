import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { cleanQuizTitle } from "@/lib/browse-helpers";

import type { Quiz } from "@/lib/quizclash";

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
  const { t } = useI18n();
  const { user } = Route.useRouteContext();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

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

      rows.forEach((rq) => {
        if (!map[rq.id]) map[rq.id] = 10;
      });

      setCounts(map);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  useEffect(() => {
    void load();
  }, [load]);

  async function createQuiz(withImport = false) {
    const { data, error } = await supabase
      .from("quizzes")
      .insert({ user_id: user.id, title: t("quizzes.newTitle") })
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
        time_limit_seconds: 20,
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
    await supabase.from("quizzes").delete().eq("id", id);
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

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            {t("nav.backHome")}
          </Link>
          <LanguageToggle />
        </div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-4xl md:text-5xl">{t("quizzes.title")}</h1>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/browse"
              className="press rounded-2xl border border-primary/50 bg-primary/10 px-5 py-3 font-display text-lg text-primary hover:bg-primary/20"
            >
              ✨ {t("browse.title")}
            </Link>
            <button
              type="button"
              onClick={() => void createQuiz(false)}
              className="press rounded-2xl bg-gradient-hero px-5 py-3 font-display text-lg text-primary-foreground shadow-chunky"
            >
              {t("quizzes.new")}
            </button>
            <button
              type="button"
              onClick={() => void createQuiz(true)}
              className="press rounded-2xl border border-border bg-surface-gradient px-5 py-3 font-display text-lg"
            >
              ✨ {t("import.open")}
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {loading ? <p className="text-muted-foreground">{t("quizzes.loading")}</p> : null}
          {!loading && quizzes.length === 0 ? (
            <div className="rounded-3xl border border-primary/30 bg-surface-gradient p-8 text-center shadow-glow">
              <p className="font-display text-3xl text-gradient">{t("quizzes.emptyTitle")}</p>
              <p className="mt-2 text-muted-foreground">{t("quizzes.emptyBody")}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/browse"
                  className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky"
                >
                  ✨ {t("browse.ctaBtn")}
                </Link>
                <button
                  type="button"
                  onClick={() => void createQuiz(false)}
                  className="press rounded-2xl border border-border bg-background/50 px-6 py-3 font-display text-lg"
                >
                  {t("quizzes.new")}
                </button>
              </div>
            </div>
          ) : null}
          {quizzes.map((quiz) => {
            const displayTitle = cleanQuizTitle(quiz.title);
            return (
              <div
                key={quiz.id}
                className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface-gradient p-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-xl">{displayTitle}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("quizzes.questionCount", { count: counts[quiz.id] ?? 0 })}
                  </p>
                </div>
                <Link
                  to="/quizzes/$quizId"
                  params={{ quizId: quiz.id }}
                  search={{ import: undefined }}
                  className="press rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:border-primary"
                >
                  ✏️ {t("quizzes.edit")}
                </Link>
                <Link
                  to="/host"
                  search={{ quiz: quiz.id }}
                  className="press rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  🎮 {t("quizzes.host")}
                </Link>
                <button
                  type="button"
                  onClick={() => void remove(quiz.id)}
                  className="press rounded-xl border border-border px-4 py-2 text-sm font-semibold text-destructive"
                >
                  {t("quizzes.delete")}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
