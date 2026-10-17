import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { ChevronDown, Trash2, Trophy } from "lucide-react";
import { ConfirmDialog } from "@/components/quiz/ConfirmDialog";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { TEAM_COLORS } from "@/lib/quizclash";
import { cn } from "@/lib/utils";

type GameRow = {
  id: string;
  quiz_title: string;
  room_code: string;
  team_count: number;
  question_count: number;
  player_count: number;
  played_at: string;
};

type PlayerRow = {
  id: string;
  game_id: string;
  nickname: string;
  avatar_color: string;
  team_index: number | null;
  rank: number;
  score: number;
  correct_count: number;
  answered_count: number;
  best_streak: number;
};

/** Host-only archive of finished games: headline stats plus per-game standings. */
export function GameHistory({ userId }: { userId: string }) {
  const { t, lang } = useI18n();
  const [games, setGames] = useState<GameRow[]>([]);
  const [results, setResults] = useState<Record<string, PlayerRow[]>>({});
  const [open, setOpen] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pendingDelete, setPendingDelete] = useState<GameRow | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("game_results")
      .select("id, quiz_title, room_code, team_count, question_count, player_count, played_at")
      .eq("host_id", userId)
      .order("played_at", { ascending: false })
      .limit(50);
    const rows = (data ?? []) as GameRow[];
    setGames(rows);

    if (rows.length) {
      const { data: players } = await supabase
        .from("game_player_results")
        .select("*")
        .in("game_id", rows.map((g) => g.id))
        .order("rank");
      const grouped: Record<string, PlayerRow[]> = {};
      for (const row of (players ?? []) as PlayerRow[]) {
        (grouped[row.game_id] ??= []).push(row);
      }
      setResults(grouped);
    }
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    void load();
  }, [load]);

  async function remove(id: string) {
    setGames((prev) => prev.filter((g) => g.id !== id));
    const { error } = await supabase.from("game_results").delete().eq("id", id);
    if (error) {
      await load();
      return;
    }
    toast.success(t("dash.deleted"));
  }

  if (loading || games.length === 0) {
    return (
      <section className="mt-14">
        <h2 className="font-display text-3xl">{t("dash.title")}</h2>
        {loading ? (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-hidden>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="h-[88px] animate-pulse rounded-2xl bg-card" />
            ))}
          </div>
        ) : (
          <p className="mt-4 rounded-2xl bg-card p-6 text-center text-muted-foreground">{t("dash.empty")}</p>
        )}
      </section>
    );
  }

  const totalPlayers = games.reduce((sum, g) => sum + g.player_count, 0);
  const totalQuestions = games.reduce((sum, g) => sum + g.question_count, 0);
  const winners = games
    .map((g) => results[g.id]?.[0]?.score ?? 0)
    .filter((score) => score > 0);
  const avgWinner = winners.length ? Math.round(winners.reduce((a, b) => a + b, 0) / winners.length) : 0;

  const stats = [
    { label: t("dash.games"), value: games.length, color: "var(--answer-2)" },
    { label: t("dash.players"), value: totalPlayers, color: "var(--answer-4)" },
    { label: t("dash.questionsAsked"), value: totalQuestions, color: "var(--answer-1)" },
    { label: t("dash.avgScore"), value: avgWinner, color: "var(--answer-3)" },
  ];
  const locale = lang === "ar" ? "ar" : "en";

  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl">{t("dash.title")}</h2>
      <p className="mt-1 text-muted-foreground">{t("dash.sub")}</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-card p-4">
            <span aria-hidden className="block h-1 w-8 rounded-full" style={{ backgroundColor: stat.color }} />
            <p className="mt-3 font-display text-3xl tabular-nums">{stat.value.toLocaleString(locale)}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {games.map((game) => {
          const rows = results[game.id] ?? [];
          const winner = rows[0];
          const expanded = open === game.id;
          return (
            <article key={game.id} className="rounded-2xl bg-card p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-xl">{game.quiz_title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(game.played_at).toLocaleDateString(locale, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    {" · "}
                    {t("dash.playersN", { n: game.player_count })}
                    {" · "}
                    {t("dash.questionsN", { n: game.question_count })}
                  </p>
                  {winner ? (
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-gold">
                      <Trophy className="size-4" aria-hidden />
                      {t("dash.winner")}: {winner.nickname} · <span className="tabular-nums">{winner.score}</span>
                    </p>
                  ) : null}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPendingDelete(game)}
                    aria-label={`${t("dash.delete")}: ${game.quiz_title}`}
                    className="press grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
                  >
                    <Trash2 className="size-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : game.id)}
                    className="press flex h-10 items-center gap-1.5 rounded-xl bg-secondary px-4 text-sm font-semibold"
                  >
                    {expanded ? t("dash.hide") : t("dash.view")}
                    <ChevronDown
                      className={cn("size-4 transition-transform duration-200 ease-[var(--ease-out)]", expanded && "rotate-180")}
                      aria-hidden
                    />
                  </button>
                </div>
              </div>

              {expanded ? (
                <ol className="mt-4 animate-rise space-y-2">
                  {rows.map((row) => (
                    <li key={row.id} className="flex items-center gap-3 rounded-xl bg-background px-3 py-2">
                      <span
                        className={cn(
                          "grid size-8 shrink-0 place-items-center rounded-lg font-display tabular-nums",
                          row.rank === 1 ? "bg-gold text-on-sun" : row.rank === 2 ? "bg-silver text-on-sun" : row.rank === 3 ? "bg-bronze text-on-sun" : "bg-secondary",
                        )}
                      >
                        {row.rank}
                      </span>
                      <span className="size-7 shrink-0 rounded-full" style={{ backgroundColor: row.avatar_color }} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold">{row.nickname}</span>
                        <span className="text-xs text-muted-foreground">
                          {t("dash.correct", { n: row.correct_count })} · {t("dash.bestStreak", { n: row.best_streak })}
                        </span>
                      </span>
                      {row.team_index !== null ? (
                        <span
                          className="rounded-full px-2 py-0.5 text-xs font-bold text-white"
                          style={{ backgroundColor: TEAM_COLORS[row.team_index % TEAM_COLORS.length] }}
                        >
                          {t("team.name", { n: row.team_index + 1 })}
                        </span>
                      ) : null}
                      <span className="font-display text-xl tabular-nums">{row.score}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </article>
          );
        })}
      </div>

      <ConfirmDialog
        open={pendingDelete !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) setPendingDelete(null);
        }}
        title={lang === "ar" ? "حذف نتيجة هذه اللعبة؟" : "Delete this game's results?"}
        body={
          lang === "ar"
            ? "ستختفي الترتيبات النهائية من سجلّك. لا يمكن التراجع."
            : "The final standings will be removed from your history. This can't be undone."
        }
        confirmLabel={t("dash.delete")}
        onConfirm={() => {
          if (pendingDelete) void remove(pendingDelete.id);
          setPendingDelete(null);
        }}
      />
    </section>
  );
}
