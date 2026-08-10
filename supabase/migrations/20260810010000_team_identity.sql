-- Custom team names and colors for each hosted room.
ALTER TABLE public.rooms
  ADD COLUMN IF NOT EXISTS team_names jsonb NOT NULL
    DEFAULT '["الفريق البنفسجي","الفريق الذهبي","الفريق الأخضر","الفريق الأزرق"]'::jsonb,
  ADD COLUMN IF NOT EXISTS team_colors jsonb NOT NULL
    DEFAULT '["#a855f7","#f59e0b","#10b981","#3b82f6"]'::jsonb;
