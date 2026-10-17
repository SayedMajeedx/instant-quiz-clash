import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronRight,
  FileText,
  ImagePlus,
  Loader2,
  Play,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { ConfirmDialog } from "@/components/quiz/ConfirmDialog";
import { ImportFromText } from "@/components/quiz/ImportFromText";
import { QuestionImage } from "@/components/quiz/QuestionImage";
import { Segmented } from "@/components/quiz/Segmented";
import { supabase } from "@/integrations/supabase/client";
import { SHAPE_KEYS, useI18n } from "@/lib/i18n";
import { type ParsedQuestion } from "@/lib/import-questions.shared";
import { optionCount, type Question, type QuestionType, type Quiz } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

const TIME_PRESETS = [10, 20, 30, 45, 60, 90] as const;


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
  const { t, lang } = useI18n();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [saving, setSaving] = useState(false);
  const [importOpen, setImportOpen] = useState(Boolean(search.import));
  const [importMode, setImportMode] = useState<"topic" | "text">("topic");
  const [uploading, setUploading] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);

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
  function setType(question: Question, type: QuestionType) {
    if (question.question_type === type) return;
    const patch: Partial<Question> =
      type === "boolean"
        ? { question_type: type, options: ["True", "False", "", ""], correct_index: Math.min(1, question.correct_index) }
        : { question_type: type, options: ["", "", "", ""], correct_index: 0 };
    patchQuestion(question.id, patch);
  }

  async function applyTimeToAll(seconds: number) {
    setQuestions((prev) => prev.map((q) => ({ ...q, time_limit_seconds: seconds })));
    await supabase.from("questions").update({ time_limit_seconds: seconds } as never).eq("quiz_id", quizId);
    toast.success(t("editor.applied"));
  }

  async function uploadImage(questionId: string, file: File) {
    const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
    if (!allowedTypes.has(file.type)) {
      toast.error(t("editor.imageFailed"));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error(t("editor.imageTooBig"));
      return;
    }
    setUploading(questionId);
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
    const path = `${quizId}/${questionId}-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("question-images").upload(path, file, { upsert: true });
    setUploading(null);
    if (error) {
      toast.error(t("editor.imageFailed"));
      return;
    }
    patchQuestion(questionId, { image_url: path });
  }


  async function addQuestion() {
    const { data, error } = await supabase
      .from("questions")
      .insert({
        quiz_id: quizId,
        question_text: "",
        options: ["", "", "", ""],
        correct_index: 0,
        time_limit_seconds: 30,
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

    // Automatically remove any empty placeholder questions (e.g. from new quiz creation)
    const emptyPlaceholders = questions.filter((q) => !q.question_text.trim() && !q.image_url);
    if (emptyPlaceholders.length > 0) {
      for (const emptyQ of emptyPlaceholders) {
        await supabase.from("questions").delete().eq("id", emptyQ.id);
      }
    }
    const existingQuestions = questions.filter((q) => q.question_text.trim() || q.image_url);

    const rows = parsed.map((q, i) => ({
      quiz_id: quizId,
      question_text: q.question_text,
      options: [0, 1, 2, 3].map((k) => q.options[k] ?? ""),
      correct_index: Math.max(0, Math.min(3, q.correct_index)),
      time_limit_seconds: Math.max(5, Math.min(120, q.time_limit_seconds || 30)),
      order_index: existingQuestions.length + i,
      explanation: q.explanation ?? null,
      difficulty: q.difficulty === "challenge" || q.difficulty === "hard" ? "challenge" : "standard",
    }));

    let { data, error } = await supabase.from("questions").insert(rows as any).select();

    if (error || !data) {
      console.warn("Retrying simple question insert fallback...", error);
      // Fallback: insert core guaranteed columns
      const simpleRows = rows.map((r) => ({
        quiz_id: r.quiz_id,
        question_text: r.question_text,
        options: r.options,
        correct_index: r.correct_index,
        time_limit_seconds: r.time_limit_seconds,
        order_index: r.order_index,
      }));
      const fallbackRes = await supabase.from("questions").insert(simpleRows as any).select();
      data = fallbackRes.data;
      error = fallbackRes.error;
    }

    if (error || !data) {
      console.error("Failed to insert imported questions:", error);
      toast.error(t("editor.addError"));
      return;
    }

    const inserted = (data as unknown as Question[])
      .map((row) => ({ ...row, options: row.options as string[] }))
      .sort((a, b) => a.order_index - b.order_index);
    setQuestions([...existingQuestions, ...inserted]);
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
      <div className="mx-auto w-full max-w-3xl px-5 py-24" aria-busy="true">
        <p className="sr-only">{t("editor.loading")}</p>
        <div className="h-16 animate-pulse rounded-2xl bg-card" aria-hidden />
        <div className="mt-8 h-72 animate-pulse rounded-3xl bg-card" aria-hidden />
      </div>
    );
  }

  const ar = lang === "ar";

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-5 py-3">
          <Link
            to="/quizzes"
            onClick={() => void flushPending()}
            className="press flex h-10 items-center gap-1.5 rounded-xl px-2 font-semibold text-muted-foreground hover:text-foreground"
          >
            <ChevronRight className="size-5 ltr:rotate-180" aria-hidden />
            {t("nav.myQuizzes")}
          </Link>
          <div className="flex items-center gap-3">
            <span role="status" className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                aria-hidden
                className={cn("size-2 rounded-full transition-colors duration-150", saving ? "bg-sun" : "bg-lime")}
              />
              {saving ? t("editor.saving") : t("editor.saved")}
            </span>
            <Link
              to="/host"
              search={{ quiz: quizId }}
              onClick={() => void flushPending()}
              className="press hidden h-10 items-center gap-2 rounded-xl bg-answer-4 px-4 text-sm font-semibold text-white sm:flex"
            >
              <Play className="size-4 fill-current rtl:rotate-180" aria-hidden />
              {t("quizzes.host")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-8">
        <label className="block">
          <span className="sr-only">{t("editor.titlePlaceholder")}</span>
          <input
            value={quiz.title}
            onChange={(e) => updateTitle(e.target.value)}
            onBlur={() => void flushPending()}
            placeholder={t("editor.titlePlaceholder")}
            className="field h-auto bg-card py-4 font-display text-3xl"
          />
        </label>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("quizzes.questionCount", { count: questions.length })}
        </p>

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <section
              key={question.id}
              aria-label={t("editor.question", { n: index + 1 })}
              className="rounded-3xl bg-card p-5 sm:p-6"
            >
              <header className="flex items-center justify-between gap-2">
                <h2 className="flex items-center gap-2.5 font-display text-xl">
                  <span className="grid size-8 place-items-center rounded-lg bg-secondary text-base tabular-nums">
                    {index + 1}
                  </span>
                  {t("editor.question", { n: index + 1 })}
                </h2>
                <div className="flex items-center gap-1">
                  <IconButton
                    label={t("editor.moveUp")}
                    disabled={index === 0}
                    onClick={() => void move(index, -1)}
                  >
                    <ArrowUp className="size-5" aria-hidden />
                  </IconButton>
                  <IconButton
                    label={t("editor.moveDown")}
                    disabled={index === questions.length - 1}
                    onClick={() => void move(index, 1)}
                  >
                    <ArrowDown className="size-5" aria-hidden />
                  </IconButton>
                  <IconButton
                    label={`${t("editor.delete")}: ${t("editor.question", { n: index + 1 })}`}
                    onClick={() => {
                      // An empty question goes straight away; one with work in it asks first.
                      const hasWork =
                        question.question_text.trim() || question.options.some((o) => o.trim()) || question.image_url;
                      if (hasWork) setPendingDelete(question.id);
                      else void removeQuestion(question.id);
                    }}
                  >
                    <Trash2 className="size-5" aria-hidden />
                  </IconButton>
                </div>
              </header>

              <label className="mt-4 block">
                <span className="sr-only">{t("editor.questionPlaceholder")}</span>
                <textarea
                  value={question.question_text}
                  onChange={(e) => patchQuestion(question.id, { question_text: e.target.value })}
                  onBlur={() => void flushPending()}
                  placeholder={t("editor.questionPlaceholder")}
                  rows={2}
                  className="field resize-none text-lg"
                />
              </label>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">{t("editor.type")}</span>
                <Segmented
                  label={t("editor.type")}
                  value={question.question_type ?? "multi"}
                  options={[
                    { value: "multi", label: t("editor.typeMulti") },
                    { value: "boolean", label: t("editor.typeBoolean") },
                  ]}
                  onChange={(type) => setType(question, type as QuestionType)}
                />
              </div>

              <div
                role="radiogroup"
                aria-label={t("editor.markCorrect")}
                className="mt-4 grid gap-3 sm:grid-cols-2"
              >
                {Array.from({ length: optionCount(question) }, (_, i) => {
                  const correct = question.correct_index === i;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center gap-2 rounded-2xl p-1.5 ring-2 transition-[box-shadow] duration-150",
                        correct ? "ring-lime" : "ring-transparent",
                      )}
                    >
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-xl"
                        style={{ backgroundColor: `var(--answer-${i + 1})` }}
                      >
                        <AnswerShape index={i} className="size-5" />
                      </span>
                      {question.question_type === "boolean" ? (
                        <span className="flex h-11 w-full items-center rounded-xl bg-background px-3 font-semibold">
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
                          aria-label={t("editor.answerPlaceholder", { shape: t(SHAPE_KEYS[i]!) })}
                          placeholder={t("editor.answerPlaceholder", { shape: t(SHAPE_KEYS[i]!) })}
                          className="field h-11 min-w-0 py-0"
                        />
                      )}
                      <button
                        type="button"
                        role="radio"
                        aria-checked={correct}
                        onClick={() => patchQuestion(question.id, { correct_index: i })}
                        aria-label={t("editor.markCorrect")}
                        title={t("editor.markCorrect")}
                        className={cn(
                          "press grid size-10 shrink-0 place-items-center rounded-full border-2 transition-colors duration-150",
                          correct ? "border-lime bg-lime text-background" : "border-border text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <Check className="size-5" strokeWidth={3} aria-hidden />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">{t("editor.image")}</span>
                {question.image_url ? (
                  <QuestionImage path={question.image_url} className="size-16 rounded-xl object-cover" />
                ) : null}
                <label className="press flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-secondary px-4 text-sm font-semibold focus-within:outline-2 focus-within:outline-ring">
                  {uploading === question.id ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                  ) : (
                    <ImagePlus className="size-4" aria-hidden />
                  )}
                  {uploading === question.id
                    ? t("editor.uploading")
                    : question.image_url
                      ? t("editor.replaceImage")
                      : t("editor.addImage")}
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      e.target.value = "";
                      if (file) void uploadImage(question.id, file);
                    }}
                  />
                </label>
                {question.image_url ? (
                  <button
                    type="button"
                    onClick={() => patchQuestion(question.id, { image_url: null })}
                    className="press h-10 rounded-xl px-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
                  >
                    {t("editor.removeImage")}
                  </button>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">{t("editor.timeLimit")}</span>
                <Segmented
                  label={t("editor.timeLimit")}
                  value={question.time_limit_seconds}
                  options={TIME_PRESETS.map((sec) => ({ value: sec as number, label: ar ? `${sec} ث` : `${sec}s` }))}
                  onChange={(sec) => patchQuestion(question.id, { time_limit_seconds: sec })}
                />
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="number"
                    min={5}
                    max={120}
                    value={question.time_limit_seconds}
                    onChange={(e) =>
                      patchQuestion(question.id, {
                        time_limit_seconds: Math.max(5, Math.min(120, Number(e.target.value) || 30)),
                      })
                    }
                    aria-label={`${t("editor.timeLimit")} (${t("editor.seconds")})`}
                    className="field h-9 w-20 px-2 py-0 text-center tabular-nums"
                  />
                  {t("editor.seconds")}
                </label>
                {questions.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => void applyTimeToAll(question.time_limit_seconds)}
                    className="text-sm font-semibold text-sun hover:underline"
                  >
                    {t("editor.applyAll")}
                  </button>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={() => void addQuestion()} className="ledge ledge-panel">
            <span className="ledge-face h-14 px-4 font-semibold">
              <Plus className="size-5" aria-hidden />
              {t("editor.add").replace(/^\+\s*/, "")}
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setImportMode("topic");
              setImportOpen(true);
            }}
            className="ledge ledge-panel"
          >
            <span className="ledge-face h-14 px-4 font-semibold">
              <Sparkles className="size-5 text-sun" aria-hidden />
              {t("aiGen.tabTopic")}
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setImportMode("text");
              setImportOpen(true);
            }}
            className="ledge ledge-panel"
          >
            <span className="ledge-face h-14 px-4 font-semibold">
              <FileText className="size-5" aria-hidden />
              {t("aiGen.tabText")}
            </span>
          </button>
        </div>

        <Link
          to="/host"
          search={{ quiz: quizId }}
          onClick={() => void flushPending()}
          className="ledge ledge-green mt-6 w-full"
        >
          <span className="ledge-face h-16 font-display text-2xl">{t("editor.hostThis")}</span>
        </Link>
      </main>

      <ImportFromText
        open={importOpen}
        initialMode={importMode}
        onClose={() => setImportOpen(false)}
        onAdd={addImported}
      />

      <ConfirmDialog
        open={pendingDelete !== null}
        onOpenChange={(open) => {
          if (!open) setPendingDelete(null);
        }}
        title={ar ? "حذف هذا السؤال؟" : "Delete this question?"}
        body={ar ? "سيُحذف السؤال وإجاباته من الكويز." : "The question and its answers will be removed from the quiz."}
        confirmLabel={t("editor.delete")}
        onConfirm={() => {
          if (pendingDelete) void removeQuestion(pendingDelete);
          setPendingDelete(null);
        }}
      />
    </div>
  );
}

function IconButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="press grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  );
}
