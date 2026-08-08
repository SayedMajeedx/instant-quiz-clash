import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { generateQuizFromTopicFn, importQuestionsFromText } from "@/lib/import-questions.functions";
import { MAX_IMPORT_CHARS, type ParsedQuestion } from "@/lib/import-questions.shared";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Draft = ParsedQuestion & { include: boolean };

export function ImportFromText({
  open,
  onClose,
  onAdd,
  initialMode = "topic",
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (questions: ParsedQuestion[]) => Promise<void>;
  initialMode?: "topic" | "text";
}) {
  const { t } = useI18n();
  const [mode, setMode] = useState<"text" | "topic">(initialMode);
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(10);
  const [difficulty, setDifficulty] = useState<"standard" | "challenge">("standard");
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [userOverrodeLang, setUserOverrodeLang] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [drafts, setDrafts] = useState<Draft[] | null>(null);

  const overLimit = text.length > MAX_IMPORT_CHARS;
  const nearLimit = text.length > MAX_IMPORT_CHARS * 0.9;
  const selectedCount = useMemo(() => (drafts ?? []).filter((d) => d.include).length, [drafts]);

  if (!open) return null;

  function handleTopicChange(val: string) {
    const trimmed = val.slice(0, 400);
    setTopic(trimmed);
    if (!userOverrodeLang && trimmed.trim().length > 0) {
      const isArabic = /[\u0600-\u06FF]/.test(trimmed);
      setLanguage(isArabic ? "ar" : "en");
    }
  }

  function reset() {
    setText("");
    setTopic("");
    setDrafts(null);
    setLoading(false);
    setSaving(false);
    setUserOverrodeLang(false);
  }

  function close() {
    reset();
    onClose();
  }

  async function parse() {
    if (!text.trim() || overLimit) return;
    setLoading(true);
    try {
      const result = await importQuestionsFromText({ data: { text } });
      if (result.questions.length === 0) {
        toast.error(t(result.error === "rate_limited" ? "import.rateLimited" : "import.empty"));
        setDrafts([]);
        return;
      }
      setDrafts(result.questions.map((q) => ({ ...q, include: true })));
    } catch {
      toast.error(t("import.failed"));
    } finally {
      setLoading(false);
    }
  }

  async function generate() {
    if (topic.trim().length < 2) return;
    setLoading(true);
    try {
      const result = await generateQuizFromTopicFn({
        data: { topic: topic.trim(), count, difficulty, language },
      });
      if (result.questions.length === 0) {
        toast.error(t(result.error === "rate_limited" ? "import.rateLimited" : "aiGen.failed"));
        return;
      }
      setDrafts(result.questions.map((q) => ({ ...q, include: true })));
    } catch {
      toast.error(t("aiGen.failed"));
    } finally {
      setLoading(false);
    }
  }

  function patch(index: number, patchValue: Partial<Draft>) {
    setDrafts((prev) => (prev ?? []).map((d, i) => (i === index ? { ...d, ...patchValue } : d)));
  }

  async function confirm() {
    const chosen = (drafts ?? []).filter((d) => d.include && d.question_text.trim());
    if (chosen.length === 0) return;
    setSaving(true);
    try {
      await onAdd(chosen);
      close();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm">
      <div className="my-6 w-full max-w-3xl rounded-3xl border border-border bg-surface-gradient p-6 shadow-chunky">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl">{t("import.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("import.sub")}</p>
          </div>
          <button
            type="button"
            onClick={close}
            className="press rounded-xl border border-border px-3 py-1 text-sm"
            aria-label={t("import.close")}
          >
            ✕
          </button>
        </div>

        {drafts === null ? (
          <>
            <div className="mt-5 flex gap-2 rounded-2xl border border-border bg-background/40 p-1">
              {(["topic", "text"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={cn(
                    "press flex-1 rounded-xl px-4 py-2 font-display text-sm",
                    mode === m ? "bg-gradient-hero text-primary-foreground shadow-chunky" : "text-muted-foreground",
                  )}
                >
                  {t(m === "topic" ? "aiGen.tabTopic" : "aiGen.tabText")}
                </button>
              ))}
            </div>

            {mode === "topic" ? (
              <>
                <label className="mt-5 block text-sm font-semibold text-muted-foreground" htmlFor="ai-topic">
                  {t("aiGen.topicLabel")}
                </label>
                <input
                  id="ai-topic"
                  value={topic}
                  onChange={(e) => handleTopicChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") void generate();
                  }}
                  placeholder={t("aiGen.topicPlaceholder")}
                  className="mt-2 w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
                />

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {/* Number of Questions Slider/Input */}
                  <div className="text-sm font-semibold text-muted-foreground sm:col-span-1">
                    <div className="flex justify-between items-center">
                      <span>{t("aiGen.count")}</span>
                      <span className="font-display text-primary text-base tabular-nums">{count}</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={20}
                      value={count}
                      onChange={(e) => setCount(Number(e.target.value))}
                      className="mt-3 w-full accent-primary h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Difficulty */}
                  <div className="text-sm font-semibold text-muted-foreground sm:col-span-1">
                    {t("aiGen.difficulty")}
                    <div className="mt-2 flex gap-1">
                      {(["standard", "challenge"] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDifficulty(d)}
                          className={cn(
                            "press flex-1 rounded-xl border px-1.5 py-2 text-xs font-semibold flex items-center justify-center gap-1",
                            difficulty === d
                              ? "border-primary bg-primary/20 text-foreground ring-1 ring-primary"
                              : "border-border bg-background/30",
                          )}
                        >
                          <span>{d === "standard" ? "🟡" : "🔴"}</span>
                          <span>{t(`aiGen.${d}`)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div className="text-sm font-semibold text-muted-foreground sm:col-span-1">
                    {t("aiGen.language")}
                    <div className="mt-2 flex gap-1">
                      {(["ar", "en"] as const).map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => {
                            setLanguage(l);
                            setUserOverrodeLang(true);
                          }}
                          className={cn(
                            "press flex-1 rounded-xl border px-1.5 py-2 text-xs font-semibold",
                            language === l
                              ? "border-primary bg-primary/20 text-foreground ring-1 ring-primary"
                              : "border-border bg-background/30",
                          )}
                        >
                          {t(l === "ar" ? "aiGen.langAr" : "aiGen.langEn")}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={loading || topic.trim().length < 2}
                    onClick={() => void generate()}
                    className="press flex items-center gap-2 rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block size-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        {t("aiGen.generating")}
                      </>
                    ) : (
                      <>✨ {t("aiGen.generate")}</>
                    )}
                  </button>
                  <button type="button" onClick={close} className="press rounded-2xl border border-border px-5 py-3">
                    {t("import.cancel")}
                  </button>
                </div>
              </>
            ) : (
              <>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={12}
                  placeholder={t("import.placeholder")}
                  className="mt-5 w-full resize-y rounded-2xl border border-border bg-background/50 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <span className={cn(overLimit ? "text-destructive" : nearLimit ? "text-sun" : "text-muted-foreground")}>
                    {t("import.counter", { n: text.length, max: MAX_IMPORT_CHARS })}
                  </span>
                  {overLimit ? <span className="text-destructive">{t("import.tooLong")}</span> : null}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={loading || overLimit || !text.trim()}
                    onClick={() => void parse()}
                    className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky disabled:opacity-50"
                  >
                    {loading ? t("import.loading") : t("import.parse")}
                  </button>
                  <button type="button" onClick={close} className="press rounded-2xl border border-border px-5 py-3">
                    {t("import.cancel")}
                  </button>
                </div>
              </>
            )}
          </>
        ) : drafts.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-border bg-background/40 p-6 text-center">
            <p className="font-display text-2xl">{t("import.emptyTitle")}</p>
            <p className="mt-2 text-muted-foreground">{t("import.emptyBody")}</p>
            <button
              type="button"
              onClick={() => setDrafts(null)}
              className="press mt-5 rounded-2xl border border-border px-5 py-3 font-semibold"
            >
              {t("import.tryAgain")}
            </button>
          </div>
        ) : (
          <>
            <p className="mt-5 text-sm text-muted-foreground">
              {t("import.reviewHint", { n: drafts.length })}
            </p>
            <div className="mt-4 space-y-4">
              {drafts.map((draft, index) => (
                <section
                  key={index}
                  className={cn(
                    "rounded-2xl border p-4",
                    draft.include ? "border-border bg-background/40" : "border-border/50 bg-background/20 opacity-60",
                  )}
                >
                  <header className="flex flex-wrap items-center gap-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <input
                        type="checkbox"
                        checked={draft.include}
                        onChange={(e) => patch(index, { include: e.target.checked })}
                        className="size-4 accent-[var(--answer-3)]"
                      />
                      {t("editor.question", { n: index + 1 })}
                    </label>
                    <div className="flex flex-wrap gap-1">
                      {draft.padded_options ? <Badge label={t("import.flag.padded")} /> : null}
                      {draft.inferred_correct ? <Badge label={t("import.flag.inferred")} /> : null}
                      {draft.ambiguous_split ? <Badge label={t("import.flag.ambiguous")} /> : null}
                    </div>
                  </header>

                  <textarea
                    value={draft.question_text}
                    onChange={(e) => patch(index, { question_text: e.target.value })}
                    rows={2}
                    placeholder={t("editor.questionPlaceholder")}
                    className="mt-3 w-full resize-none rounded-xl border border-border bg-background/50 px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                  />

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className="grid size-8 shrink-0 place-items-center rounded-lg"
                          style={{ backgroundColor: `var(--answer-${i + 1})` }}
                        >
                          <AnswerShape index={i} className="size-4" />
                        </span>
                        <input
                          value={draft.options[i] ?? ""}
                          onChange={(e) =>
                            patch(index, {
                              options: [0, 1, 2, 3].map((k) => (k === i ? e.target.value : (draft.options[k] ?? ""))),
                            })
                          }
                          className="min-w-0 flex-1 rounded-xl border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                        <button
                          type="button"
                          onClick={() => patch(index, { correct_index: i })}
                          aria-label={t("editor.markCorrect")}
                          className={cn(
                            "press grid size-8 shrink-0 place-items-center rounded-full border-2 text-xs",
                            draft.correct_index === i
                              ? "border-lime bg-lime text-background"
                              : "border-border text-muted-foreground",
                          )}
                        >
                          ✓
                        </button>
                      </div>
                    ))}
                  </div>

                  <label className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    {t("editor.timeLimit")}
                    <input
                      type="number"
                      min={5}
                      max={120}
                      value={draft.time_limit_seconds}
                      onChange={(e) =>
                        patch(index, {
                          time_limit_seconds: Math.max(5, Math.min(120, Number(e.target.value) || 30)),
                        })
                      }
                      className="w-20 rounded-xl border border-border bg-background/50 px-3 py-1 text-center text-foreground outline-none focus:ring-2 focus:ring-ring"
                    />
                    {t("editor.seconds")}
                  </label>
                </section>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={saving || selectedCount === 0}
                onClick={() => void confirm()}
                className="press rounded-2xl bg-gradient-hero px-6 py-3 font-display text-lg text-primary-foreground shadow-chunky disabled:opacity-50"
              >
                {saving ? t("import.adding") : t("import.addToQuiz", { n: selectedCount })}
              </button>
              <button
                type="button"
                onClick={() => setDrafts(null)}
                className="press rounded-2xl border border-border px-5 py-3"
              >
                {t("import.backToPaste")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-sun/50 bg-sun/15 px-2 py-0.5 text-xs font-semibold text-sun">
      ⚠ {label}
    </span>
  );
}
