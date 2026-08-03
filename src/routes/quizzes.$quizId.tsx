import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { supabase } from "@/integrations/supabase/client";
import { ANSWER_STYLES, type Question, type Quiz } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quizzes/$quizId")({
  head: () => ({
    meta: [
      { title: "Quiz Editor — QuizClash" },
      { name: "description", content: "Write questions, set answer options and per-question time limits. Autosaves." },
      { property: "og:title", content: "Quiz Editor — QuizClash" },
      { property: "og:description", content: "Build a live trivia quiz with four options per question." },
    ],
  }),
  component: Editor,
});

function Editor() {
  const { quizId } = Route.useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [saving, setSaving] = useState(false);
  const timers = useRef<Record<string, number>>({});

  useEffect(() => {
    void (async () => {
      const [{ data: q }, { data: qs }] = await Promise.all([
        supabase.from("quizzes").select("*").eq("id", quizId).maybeSingle(),
        supabase.from("questions").select("*").eq("quiz_id", quizId).order("order_index"),
      ]);
      setQuiz((q as unknown as Quiz) ?? null);
      setQuestions(
        ((qs ?? []) as unknown as Question[]).map((row) => ({ ...row, options: row.options as string[] })),
      );
    })();
  }, [quizId]);

  const scheduleSave = useCallback((key: string, fn: () => Promise<void>) => {
    setSaving(true);
    window.clearTimeout(timers.current[key]);
    timers.current[key] = window.setTimeout(() => {
      void fn().then(() => setSaving(false));
    }, 700);
  }, []);

  function updateTitle(title: string) {
    setQuiz((prev) => (prev ? { ...prev, title } : prev));
    scheduleSave("title", async () => {
      await supabase.from("quizzes").update({ title }).eq("id", quizId);
    });
  }

  function patchQuestion(id: string, patch: Partial<Question>) {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));
    scheduleSave(id, async () => {
      await supabase.from("questions").update(patch as never).eq("id", id);
    });
  }

  async function addQuestion() {
    const { data, error } = await supabase
      .from("questions")
      .insert({
        quiz_id: quizId,
        question_text: "",
        options: ["", "", "", ""],
        correct_index: 0,
        time_limit_seconds: 20,
        order_index: questions.length,
      })
      .select()
      .single();
    if (error || !data) {
      toast.error("Could not add question");
      return;
    }
    const row = data as unknown as Question;
    setQuestions((prev) => [...prev, { ...row, options: row.options as string[] }]);
  }

  async function removeQuestion(id: string) {
    await supabase.from("questions").delete().eq("id", id);
    const next = questions.filter((q) => q.id !== id).map((q, i) => ({ ...q, order_index: i }));
    setQuestions(next);
    await Promise.all(next.map((q) => supabase.from("questions").update({ order_index: q.order_index }).eq("id", q.id)));
  }

  async function move(index: number, dir: -1 | 1) {
    const target = index + dir;
    if (target < 0 || target >= questions.length) return;
    const next = [...questions];
    const a = next[index]!;
    const b = next[target]!;
    next[index] = b;
    next[target] = a;
    const reindexed = next.map((q, i) => ({ ...q, order_index: i }));
    setQuestions(reindexed);
    await Promise.all(
      reindexed.map((q) => supabase.from("questions").update({ order_index: q.order_index }).eq("id", q.id)),
    );
  }

  if (!quiz) {
    return (
      <main className="grid min-h-screen place-items-center">
        <AnimatedBg />
        <p className="text-muted-foreground">Loading quiz…</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="flex items-center justify-between">
          <Link to="/quizzes" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            ← My quizzes
          </Link>
          <span className={cn("text-sm", saving ? "text-sun" : "text-muted-foreground")}>
            {saving ? "Saving…" : "All changes saved"}
          </span>
        </div>

        <input
          value={quiz.title}
          onChange={(e) => updateTitle(e.target.value)}
          placeholder="Quiz title"
          className="mt-6 w-full rounded-2xl border border-border bg-surface-gradient px-5 py-4 font-display text-3xl outline-none focus:ring-2 focus:ring-ring"
        />

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <section key={question.id} className="rounded-3xl border border-border bg-surface-gradient p-5">
              <header className="flex items-center justify-between gap-2">
                <h2 className="font-display text-xl">Question {index + 1}</h2>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => void move(index, -1)}
                    className="press rounded-lg border border-border px-3 py-1 text-sm"
                    aria-label="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => void move(index, 1)}
                    className="press rounded-lg border border-border px-3 py-1 text-sm"
                    aria-label="Move down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => void removeQuestion(question.id)}
                    className="press rounded-lg border border-border px-3 py-1 text-sm text-destructive"
                  >
                    Delete
                  </button>
                </div>
              </header>

              <textarea
                value={question.question_text}
                onChange={(e) => patchQuestion(question.id, { question_text: e.target.value })}
                placeholder="What do you want to ask?"
                rows={2}
                className="mt-4 w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-ring"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-xl"
                      style={{ backgroundColor: `var(--answer-${i + 1})` }}
                    >
                      <AnswerShape index={i} className="size-5" />
                    </span>
                    <input
                      value={question.options[i] ?? ""}
                      onChange={(e) => {
                        const options = [0, 1, 2, 3].map((k) =>
                          k === i ? e.target.value : (question.options[k] ?? ""),
                        );
                        patchQuestion(question.id, { options });
                      }}
                      placeholder={`${ANSWER_STYLES[i]!.label} answer`}
                      className="w-full rounded-xl border border-border bg-background/50 px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                    />
                    <button
                      type="button"
                      onClick={() => patchQuestion(question.id, { correct_index: i })}
                      aria-label="Mark as correct"
                      className={cn(
                        "press grid size-9 shrink-0 place-items-center rounded-full border-2",
                        question.correct_index === i
                          ? "border-lime bg-lime text-background"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      ✓
                    </button>
                  </div>
                ))}
              </div>

              <label className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                Time limit
                <input
                  type="number"
                  min={5}
                  max={120}
                  value={question.time_limit_seconds}
                  onChange={(e) =>
                    patchQuestion(question.id, {
                      time_limit_seconds: Math.max(5, Math.min(120, Number(e.target.value) || 20)),
                    })
                  }
                  className="w-20 rounded-xl border border-border bg-background/50 px-3 py-2 text-center text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
                seconds
              </label>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => void addQuestion()}
            className="press rounded-2xl border border-border bg-surface-gradient px-5 py-3 font-display text-lg"
          >
            + Add question
          </button>
          <Link
            to="/host"
            search={{ quiz: quizId }}
            className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky"
          >
            Host this quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
