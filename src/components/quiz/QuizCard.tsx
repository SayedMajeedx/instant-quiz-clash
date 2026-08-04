import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { cloneQuiz } from "@/lib/clone-quiz";
import { useI18n } from "@/lib/i18n";
import {
  cleanQuizTitle,
  getDifficultyDetails,
  getGameModeDetails,
} from "@/lib/browse-helpers";

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
};

export function QuizCard({ quiz }: { quiz: PublicQuiz }) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [isCloning, setIsCloning] = useState(false);

  const cleanedTitle = cleanQuizTitle(quiz.title);
  const diffInfo = getDifficultyDetails(quiz);
  const modeInfo = getGameModeDetails(quiz.quiz_difficulty);

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

      toast.success(t("browse.cloned") || "Quiz cloned successfully!");
      void navigate({ to: "/host", search: { quiz: res.newQuizId } });
    } catch {
      toast.error("Failed to clone quiz");
    } finally {
      setIsCloning(false);
    }
  }

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-gradient p-5 shadow-md transition-all hover:border-primary/50 hover:shadow-glow">
      <div>
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Primary Difficulty Badge */}
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-bold flex items-center gap-1 ${diffInfo.badgeClass}`}
            >
              <span>{diffInfo.icon}</span>
              <span>{diffInfo.label}</span>
            </span>

            {/* Distinct Game Mode Badge */}
            <span
              className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold flex items-center gap-1 ${modeInfo.badgeClass}`}
            >
              <span>{modeInfo.icon}</span>
              <span>{modeInfo.label}</span>
            </span>
          </div>

          <span className="text-base font-semibold">
            {quiz.language === "en" ? "🇬🇧" : "🇸🇦"}
          </span>
        </div>

        {/* Cleaned Title */}
        <h2 className="mt-3.5 font-display text-xl sm:text-2xl leading-snug text-foreground">
          {cleanedTitle}
        </h2>

        {/* Secondary Info Line */}
        <div className="mt-2 flex items-center gap-2 text-xs font-medium text-muted-foreground flex-wrap">
          <span>{quiz.category || "عام"}</span>
          <span>·</span>
          <span>{t("quizzes.questionCount", { count: quiz.question_count })}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex items-center gap-2 pt-2 border-t border-border/40">
        <Link
          to="/browse/$quizId/preview"
          params={{ quizId: quiz.id }}
          className="press flex-1 rounded-2xl border border-border/80 bg-background/50 py-2.5 text-center font-display text-xs sm:text-sm hover:border-primary/50 flex items-center justify-center gap-1.5"
        >
          <span>👁️</span>
          <span>معاينة</span>
        </Link>
        <button
          type="button"
          disabled={isCloning}
          onClick={() => void handleClone()}
          className="press flex-[1.5] rounded-2xl bg-gradient-hero py-2.5 font-display text-xs sm:text-sm text-primary-foreground shadow-chunky disabled:opacity-50 flex items-center justify-center gap-1.5"
        >
          <span>✨</span>
          <span>{isCloning ? t("browse.cloning") : t("browse.cloneAndPlay")}</span>
        </button>
      </div>
    </div>
  );
}
