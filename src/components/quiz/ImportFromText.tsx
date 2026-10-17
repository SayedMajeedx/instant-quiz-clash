import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AlertTriangle, Check, Loader2, Sparkles, X } from "lucide-react";
import { AnswerShape } from "@/components/quiz/AnswerTile";
import { Segmented } from "@/components/quiz/Segmented";
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !saving) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, saving]);

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
        toast.error(
          t(
            result.error === "quota_exceeded"
              ? "import.monthlyQuota"
              : result.error === "rate_limited"
                ? "import.rateLimited"
                : "import.empty",
          ),
        );
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
        toast.error(
          t(
            result.error === "quota_exceeded"
              ? "import.monthlyQuota"
              : result.error === "rate_limited"
                ? "import.rateLimited"
                : "aiGen.failed",
          ),
        );
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
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="import-title"
        className="my-6 w-full max-w-3xl animate-pop rounded-3xl bg-card p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="import-title" className="font-display text-3xl">{t("import.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("import.sub")}</p>
          </div>
          <button
            type="button"
            onClick={close}
            className="press grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-muted-foreground transition-colors duration-150 hover:text-foreground"
            aria-label={t("import.close")}
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {drafts === null ? (
          <>
            <Segmented
              label={t("import.title")}
              size="lg"
              className="mt-6"
              value={mode}
              options={[
                { value: "topic", label: t("aiGen.tabTopic") },
                { value: "text", label: t("aiGen.tabText") },
              ]}
              onChange={setMode}
            />

            {mode === "topic" ? (
              <>
                <label
                  className="mt-5 block text-sm font-semibold text-muted-foreground"
                  htmlFor="ai-topic"
                >
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
                  className="field mt-2 text-base"
                />

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {/* Number of Questions Slider/Input */}
                  <div className="text-sm font-semibold text-muted-foreground sm:col-span-1">
                    <div className="flex justify-between items-center">
                      <span>{t("aiGen.count")}</span>
                      <span className="font-display text-base tabular-nums text-sun">
                        {count}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={20}
                      value={count}
                      onChange={(e) => setCount(Number(e.target.value))}
                      className="mt-3 h-2 w-full cursor-pointer accent-[var(--sun)]"
                    />
                  </div>

                  {/* Difficulty */}
                  <div className="text-sm font-semibold text-muted-foreground sm:col-span-1">
                    {t("aiGen.difficulty")}
                    <Segmented
                      label={t("aiGen.difficulty")}
                      className="mt-2 flex-nowrap [&>button]:flex-1"
                      value={difficulty}
                      options={[
                        { value: "standard", label: t("aiGen.standard") },
                        { value: "challenge", label: t("aiGen.challenge") },
                      ]}
                      onChange={setDifficulty}
                    />
                  </div>

                  {/* Language */}
                  <div className="text-sm font-semibold text-muted-foreground sm:col-span-1">
                    {t("aiGen.language")}
                    <Segmented
                      label={t("aiGen.language")}
                      className="mt-2 flex-nowrap [&>button]:flex-1"
                      value={language}
                      options={[
                        { value: "ar", label: t("aiGen.langAr") },
                        { value: "en", label: t("aiGen.langEn") },
                      ]}
                      onChange={(l) => {
                        setLanguage(l);
                        setUserOverrodeLang(true);
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={loading || topic.trim().length < 2}
                    onClick={() => void generate()}
                    className="ledge ledge-blue disabled:opacity-50"
                  >
                    <span className="ledge-face h-12 px-6 font-display text-lg">
                      {loading ? (
                        <Loader2 className="size-5 animate-spin" aria-hidden />
                      ) : (
                        <Sparkles className="size-5" aria-hidden />
                      )}
                      {loading ? t("aiGen.generating") : t("aiGen.generate")}
                    </span>
                  </button>
                  <button type="button" onClick={close} className="ledge ledge-panel">
                    <span className="ledge-face h-12 px-5 font-semibold">{t("import.cancel")}</span>
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
                  aria-label={t("aiGen.tabText")}
                  className="field mt-5 resize-y text-base"
                />
                <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <span
                    className={cn(
                      overLimit
                        ? "text-destructive"
                        : nearLimit
                          ? "text-sun"
                          : "text-muted-foreground",
                    )}
                  >
                    {t("import.counter", { n: text.length, max: MAX_IMPORT_CHARS })}
                  </span>
                  {overLimit ? (
                    <span className="text-destructive">{t("import.tooLong")}</span>
                  ) : null}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={loading || overLimit || !text.trim()}
                    onClick={() => void parse()}
                    className="ledge ledge-blue disabled:opacity-50"
                  >
                    <span className="ledge-face h-12 px-6 font-display text-lg">
                      {loading ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
                      {loading ? t("import.loading") : t("import.parse")}
                    </span>
                  </button>
                  <button type="button" onClick={close} className="ledge ledge-panel">
                    <span className="ledge-face h-12 px-5 font-semibold">{t("import.cancel")}</span>
                  </button>
                </div>
              </>
            )}
          </>
        ) : drafts.length === 0 ? (
          <div className="mt-6 rounded-2xl bg-background p-6 text-center">
            <p className="font-display text-2xl">{t("import.emptyTitle")}</p>
            <p className="mt-2 text-muted-foreground">{t("import.emptyBody")}</p>
            <button
              type="button"
              onClick={() => setDrafts(null)}
              className="ledge ledge-panel mt-5"
            >
              <span className="ledge-face h-12 px-5 font-semibold">{t("import.tryAgain")}</span>
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
                    "rounded-2xl bg-background p-4 transition-opacity duration-150",
                    !draft.include && "opacity-50",
                  )}
                >
                  <header className="flex flex-wrap items-center gap-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <input
                        type="checkbox"
                        checked={draft.include}
                        onChange={(e) => patch(index, { include: e.target.checked })}
                        className="size-5 accent-[var(--sun)]"
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
                    className="field mt-3 resize-none bg-card"
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
                              options: [0, 1, 2, 3].map((k) =>
                                k === i ? e.target.value : (draft.options[k] ?? ""),
                              ),
                            })
                          }
                          className="field h-10 min-w-0 flex-1 bg-card py-0 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => patch(index, { correct_index: i })}
                          aria-label={t("editor.markCorrect")}
                          aria-pressed={draft.correct_index === i}
                          className={cn(
                            "press grid size-9 shrink-0 place-items-center rounded-full border-2 transition-colors duration-150",
                            draft.correct_index === i
                              ? "border-lime bg-lime text-background"
                              : "border-border text-muted-foreground",
                          )}
                        >
                          <Check className="size-4" strokeWidth={3} aria-hidden />
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
                          time_limit_seconds: Math.max(
                            5,
                            Math.min(120, Number(e.target.value) || 30),
                          ),
                        })
                      }
                      className="field h-9 w-20 bg-card px-2 py-0 text-center tabular-nums"
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
                className="ledge ledge-green disabled:opacity-50"
              >
                <span className="ledge-face h-12 px-6 font-display text-lg">
                  {saving ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
                  {saving ? t("import.adding") : t("import.addToQuiz", { n: selectedCount })}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setDrafts(null)}
                className="ledge ledge-panel"
              >
                <span className="ledge-face h-12 px-5 font-semibold">{t("import.backToPaste")}</span>
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
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-sun">
      <AlertTriangle className="size-3.5" aria-hidden />
      {label}
    </span>
  );
}
