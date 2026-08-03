import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { ImportFromText } from "@/components/quiz/ImportFromText";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { SHAPE_KEYS, useI18n } from "@/lib/i18n";
import { type ParsedQuestion } from "@/lib/import-questions.shared";
import { type Question, type Quiz } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/quizzes/$quizId")({
  validateSearch: (search: Record<string, unknown>) => ({ import: search["import"] === true || search["import"] === "true" ? true : undefined }),
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
  const search = Route.useSearch();
  const { t } = useI18n();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [saving, setSaving] = useState(false);
  const [importOpen, setImportOpen] = useState(Boolean(search.import));
  const timers = useRef<Record<string, number>>({});
  const pending = useRef<Record<string, Partial<Question>>>({});
  const pendingTitle = useRef<string | null>(null);

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

  // Write every debounced edit that hasn't landed yet. Without this, leaving the
  // editor within the debounce window silently dropped the last keystrokes —
  // which is why hosted questions could show up empty.
  const flushPending = useCallback(async () => {
    for (const id of Object.keys(timers.current)) window.clearTimeout(timers.current[id]);
    timers.current = {};
    const jobs: Promise<unknown>[] = [];
    if (pendingTitle.current !== null) {
      jobs.push(Promise.resolve(supabase.from("quizzes").update({ title: pendingTitle.current }).eq("id", quizId)));
      pendingTitle.current = null;
    }
    for (const [id, body] of Object.entries(pending.current)) {
      jobs.push(Promise.resolve(supabase.from("questions").update(body as never).eq("id", id)));
    }
    pending.current = {};
    await Promise.all(jobs);
    setSaving(false);
  }, [quizId]);

  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === "hidden") void flushPending();
    };
    window.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", () => void flushPending());
    return () => {
      window.removeEventListener("visibilitychange", onHide);
      void flushPending();
    };
  }, [flushPending]);

  const scheduleSave = useCallback((key: string, fn: () => Promise<void>) => {
    setSaving(true);
    window.clearTimeout(timers.current[key]);
    timers.current[key] = window.setTimeout(() => {
      delete timers.current[key];
      void fn().then(() => setSaving(false));
    }, 700);
  }, []);

  function updateTitle(title: string) {
    setQuiz((prev) => (prev ? { ...prev, title } : prev));
    pendingTitle.current = title;
    scheduleSave("title", async () => {
      pendingTitle.current = null;
      await supabase.from("quizzes").update({ title }).eq("id", quizId);
    });
  }

  function patchQuestion(id: string, patch: Partial<Question>) {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));
    // Merge with any patch still waiting on the debounce, otherwise a quick
    // second edit would cancel the first one before it ever reached the server.
    const merged = { ...(pending.current[id] ?? {}), ...patch };
    pending.current[id] = merged;
    scheduleSave(id, async () => {
      const body = pending.current[id];
      delete pending.current[id];
      await supabase.from("questions").update(body as never).eq("id", id);
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
      toast.error(t("editor.addError"));
      return;
    }
    const row = data as unknown as Question;
    setQuestions((prev) => [...prev, { ...row, options: row.options as string[] }]);
  }

  async function addImported(parsed: ParsedQuestion[]) {
    await flushPending();
    const rows = parsed.map((q, i) => ({
      quiz_id: quizId,
      question_text: q.question_text,
      options: [0, 1, 2, 3].map((k) => q.options[k] ?? ""),
      correct_index: Math.max(0, Math.min(3, q.correct_index)),
      time_limit_seconds: Math.max(5, Math.min(120, q.time_limit_seconds || 20)),
      order_index: questions.length + i,
    }));
    const { data, error } = await supabase.from("questions").insert(rows).select();
    if (error || !data) {
      toast.error(t("editor.addError"));
      return;
    }
    const inserted = (data as unknown as Question[])
      .map((row) => ({ ...row, options: row.options as string[] }))
      .sort((a, b) => a.order_index - b.order_index);
    setQuestions((prev) => [...prev, ...inserted]);
    toast.success(t("import.added", { n: inserted.length }));
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
        <p className="text-muted-foreground">{t("editor.loading")}</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/quizzes"
            onClick={() => void flushPending()}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            {t("editor.back")}
          </Link>
          <div className="flex items-center gap-3">
            <span className={cn("text-sm", saving ? "text-sun" : "text-muted-foreground")}>
              {saving ? t("editor.saving") : t("editor.saved")}
            </span>
            <LanguageToggle />
          </div>
        </div>

        <input
          value={quiz.title}
          onChange={(e) => updateTitle(e.target.value)}
          onBlur={() => void flushPending()}
          placeholder={t("editor.titlePlaceholder")}
          className="mt-6 w-full rounded-2xl border border-border bg-surface-gradient px-5 py-4 font-display text-3xl outline-none focus:ring-2 focus:ring-ring"
        />

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <section key={question.id} className="rounded-3xl border border-border bg-surface-gradient p-5">
              <header className="flex items-center justify-between gap-2">
                <h2 className="font-display text-xl">{t("editor.question", { n: index + 1 })}</h2>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => void move(index, -1)}
                    className="press rounded-lg border border-border px-3 py-1 text-sm"
                    aria-label={t("editor.moveUp")}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => void move(index, 1)}
                    className="press rounded-lg border border-border px-3 py-1 text-sm"
                    aria-label={t("editor.moveDown")}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => void removeQuestion(question.id)}
                    className="press rounded-lg border border-border px-3 py-1 text-sm text-destructive"
                  >
                    {t("editor.delete")}
                  </button>
                </div>
              </header>

              <textarea
                value={question.question_text}
                onChange={(e) => patchQuestion(question.id, { question_text: e.target.value })}
                onBlur={() => void flushPending()}
                placeholder={t("editor.questionPlaceholder")}
                rows={2}
                className="mt-4 w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-ring"
              />

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">{t("editor.type")}</span>
                {(["multi", "boolean"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setType(question, type)}
                    className={cn(
                      "press rounded-full border px-4 py-1.5 text-sm font-semibold",
                      question.question_type === type ? "border-primary ring-2 ring-primary" : "border-border",
                    )}
                  >
                    {type === "multi" ? t("editor.typeMulti") : t("editor.typeBoolean")}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {Array.from({ length: optionCount(question) }, (_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-xl"
                      style={{ backgroundColor: `var(--answer-${i + 1})` }}
                    >
                      <AnswerShape index={i} className="size-5" />
                    </span>
                    {question.question_type === "boolean" ? (
                      <span className="w-full rounded-xl border border-border bg-background/30 px-3 py-2 font-semibold">
                        {i === 0 ? t("play.true") : t("play.false")}
                      </span>
                    ) : (
                      <input
                        value={question.options[i] ?? ""}
                        onChange={(e) => {
                          const options = [0, 1, 2, 3].map((k) =>
                            k === i ? e.target.value : (question.options[k] ?? ""),
                          );
                          patchQuestion(question.id, { options });
                        }}
                        onBlur={() => void flushPending()}
                        placeholder={t("editor.answerPlaceholder", { shape: t(SHAPE_KEYS[i]!) })}
                        className="w-full rounded-xl border border-border bg-background/50 px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => patchQuestion(question.id, { correct_index: i })}
                      aria-label={t("editor.markCorrect")}
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

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">{t("editor.image")}</span>
                <label className="press cursor-pointer rounded-xl border border-border bg-background/50 px-4 py-2 text-sm font-semibold">
                  {uploading === question.id
                    ? t("editor.uploading")
                    : question.image_url
                      ? t("editor.replaceImage")
                      : t("editor.addImage")}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      e.target.value = "";
                      if (file) void uploadImage(question.id, file);
                    }}
                  />
                </label>
                {question.image_url ? (
                  <>
                    <QuestionImage
                      path={question.image_url}
                      className="size-16 rounded-xl border border-border object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => patchQuestion(question.id, { image_url: null })}
                      className="press rounded-xl border border-border px-3 py-2 text-sm text-destructive"
                    >
                      {t("editor.removeImage")}
                    </button>
                  </>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-3 text-sm text-muted-foreground">
                  {t("editor.timeLimit")}
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
                  {t("editor.seconds")}
                </label>
                {TIME_PRESETS.map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => patchQuestion(question.id, { time_limit_seconds: sec })}
                    className={cn(
                      "press rounded-full border px-3 py-1 text-sm font-semibold",
                      question.time_limit_seconds === sec ? "border-primary ring-2 ring-primary" : "border-border",
                    )}
                  >
                    {sec}s
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => void applyTimeToAll(question.time_limit_seconds)}
                  className="press rounded-full border border-border px-3 py-1 text-sm font-semibold"
                >
                  {t("editor.applyAll")}
                </button>
              </div>

            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => void addQuestion()}
            className="press rounded-2xl border border-border bg-surface-gradient px-5 py-3 font-display text-lg"
          >
            {t("editor.add")}
          </button>
          <button
            type="button"
            onClick={() => setImportOpen(true)}
            className="press rounded-2xl border border-border bg-surface-gradient px-5 py-3 font-display text-lg"
          >
            ✨ {t("import.open")}
          </button>
          <Link
            to="/host"
            search={{ quiz: quizId }}
            onClick={() => void flushPending()}
            className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky"
          >
            {t("editor.hostThis")}
          </Link>
        </div>
      </div>

      <ImportFromText open={importOpen} onClose={() => setImportOpen(false)} onAdd={addImported} />
    </main>
  );
}
