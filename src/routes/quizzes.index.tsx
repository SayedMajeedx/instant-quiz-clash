import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { supabase } from "@/integrations/supabase/client";
import { ownerId } from "@/lib/session";
import type { Quiz } from "@/lib/quizclash";

export const Route = createFileRoute("/quizzes/")({
  head: () => ({
    meta: [
      { title: "My Quizzes — QuizClash" },
      { name: "description", content: "Manage the trivia quizzes you have created, then host one live." },
      { property: "og:title", content: "My Quizzes — QuizClash" },
      { property: "og:description", content: "Edit, delete and host your QuizClash trivia quizzes." },
    ],
  }),
  component: MyQuizzes,
});

function MyQuizzes() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const owner = ownerId();
    const { data } = await supabase
      .from("quizzes")
      .select("*")
      .eq("owner_id", owner)
      .order("created_at", { ascending: false });
    const rows = (data ?? []) as unknown as Quiz[];
    setQuizzes(rows);
    if (rows.length) {
      const { data: qs } = await supabase
        .from("questions")
        .select("id, quiz_id")
        .in("quiz_id", rows.map((q) => q.id));
      const map: Record<string, number> = {};
      for (const q of (qs ?? []) as { quiz_id: string }[]) map[q.quiz_id] = (map[q.quiz_id] ?? 0) + 1;
      setCounts(map);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function createQuiz() {
    const { data, error } = await supabase
      .from("quizzes")
      .insert({ owner_id: ownerId(), title: "My new quiz" })
      .select()
      .single();
    if (error || !data) {
      toast.error("Could not create the quiz");
      return;
    }
    const quiz = data as unknown as Quiz;
    await supabase.from("questions").insert({
      quiz_id: quiz.id,
      question_text: "",
      options: ["", "", "", ""],
      correct_index: 0,
      time_limit_seconds: 20,
      order_index: 0,
    });
    void navigate({ to: "/quizzes/$quizId", params: { quizId: quiz.id } });
  }

  async function remove(id: string) {
    await supabase.from("quizzes").delete().eq("id", id);
    setQuizzes((prev) => prev.filter((q) => q.id !== id));
    toast.success("Quiz deleted");
  }

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto max-w-3xl px-5 py-10">
        <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
          ← QuizClash
        </Link>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-4xl md:text-5xl">My quizzes</h1>
          <button
            type="button"
            onClick={createQuiz}
            className="press rounded-2xl bg-gradient-hero px-5 py-3 font-display text-lg text-primary-foreground shadow-chunky"
          >
            + New quiz
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {loading ? <p className="text-muted-foreground">Loading…</p> : null}
          {!loading && quizzes.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface-gradient p-8 text-center">
              <p className="font-display text-2xl">No quizzes yet</p>
              <p className="mt-2 text-muted-foreground">Create your first quiz and host it in under a minute.</p>
            </div>
          ) : null}
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface-gradient p-4"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-xl">{quiz.title}</p>
                <p className="text-sm text-muted-foreground">{counts[quiz.id] ?? 0} questions</p>
              </div>
              <Link
                to="/quizzes/$quizId"
                params={{ quizId: quiz.id }}
                className="press rounded-xl border border-border px-4 py-2 text-sm font-semibold"
              >
                Edit
              </Link>
              <Link
                to="/host"
                search={{ quiz: quiz.id }}
                className="press rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Host
              </Link>
              <button
                type="button"
                onClick={() => void remove(quiz.id)}
                className="press rounded-xl border border-border px-4 py-2 text-sm font-semibold text-destructive"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
