import { recordQuizPlay } from "@/lib/quiz-stats.functions";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { cloneQuiz } from "@/lib/clone-quiz";
import { useI18n } from "@/lib/i18n";
import { Eye, Play } from "lucide-react";
import { cleanQuizTitle, getCategoryMark, getDifficultyStyle } from "@/lib/browse-helpers";

export type PublicQuiz = {
  id: string;
  title: string;
  user_id?: string | null;
  created_at?: string;
  is_public?: boolean | null;
  category: string | null;
  language: string | null;
  quiz_difficulty?: string | null;
  difficulty?: string | null;
  archived?: boolean;
  launch_enabled?: boolean;
  question_count: number;
  subcategory?: string | null;
};

export function QuizCard({ quiz }: { quiz: PublicQuiz }) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [isCloning, setIsCloning] = useState(false);

  const cleanedTitle = cleanQuizTitle(quiz.title);
  const diffInfo = getDifficultyStyle(quiz);

  async function handleClone() {
    setIsCloning(true);
    try {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes.user;

      if (!user) {
        toast.error(t("auth.required") || "Please sign in to clone quizzes");
        void navigate({ to: "/auth" });
        return;
      }

      const res = await cloneQuiz(quiz.id, quiz, user.id);

      if (!res.success || !res.newQuizId) {
        toast.error(res.error || t("browse.error"));
        return;
      }

      void recordQuizPlay({ data: { sourceId: quiz.id } }).catch(() => {});

      toast.success(t("browse.cloned") || "Quiz cloned successfully!");
      void navigate({ to: "/host", search: { quiz: res.newQuizId } });

    } catch {
      toast.error("Failed to clone quiz");
    } finally {
      setIsCloning(false);
    }
  }

  const mark = getCategoryMark(quiz.category || "");
  const MarkIcon = mark.Icon;

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-card p-5">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className={`grid size-10 place-items-center rounded-xl ${mark.bg} ${mark.fg}`}>
            <MarkIcon className="size-5" aria-hidden />
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">
            <span className={`size-2 rounded-full ${diffInfo.dot}`} aria-hidden />
            {diffInfo.label}
          </span>
        </div>

        <h2 className="mt-4 font-display text-xl leading-snug sm:text-2xl">{cleanedTitle}</h2>

        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{quiz.category || "عام"}</span>
          {quiz.subcategory ? <span>· {quiz.subcategory}</span> : null}
          <span>· {t("quizzes.questionCount", { count: quiz.question_count })}</span>
        </p>
      </div>

      <div className="mt-5 grid grid-cols-[auto_1fr] items-end gap-2">
        <Link
          to="/browse/$quizId/preview"
          params={{ quizId: quiz.id }}
          aria-label={t("browse.preview")}
          title={t("browse.preview")}
          className="press grid size-11 place-items-center rounded-xl bg-secondary"
        >
          <Eye className="size-5" aria-hidden />
        </Link>
        <button
          type="button"
          disabled={isCloning}
          onClick={() => void handleClone()}
          className="ledge ledge-blue w-full disabled:opacity-60"
        >
          <span className="ledge-face h-11 min-w-0 px-2 font-display text-sm">
            <Play className="size-4 shrink-0" aria-hidden />
            <span className="truncate">{isCloning ? t("browse.cloning") : t("browse.cloneAndPlay")}</span>
          </span>
        </button>
      </div>
    </div>
  );
}
