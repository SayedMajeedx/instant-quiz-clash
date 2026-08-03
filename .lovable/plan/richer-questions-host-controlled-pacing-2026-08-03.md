# Richer questions + host-controlled pacing

Six upgrades: skip-when-everyone-answered, auto/manual advance toggle, per-question
length presets, question images, true/false questions, and manual team assignment.

## 1. Pacing engine (the big one)

Today every screen computes "which question are we on" purely from the game start
time plus each question's length. That maths can never skip ahead or wait for a
host, so the room gets an explicit cursor instead.

Room gains: `advance_mode` (`auto` | `manual`), `cursor_index`, `cursor_phase`
(`question` | `reveal` | `board`), `phase_started_at`.

- Countdown still runs off `phase_started_at` + the question's own length, so late
  joins and refreshes land in the right place.
- The host screen owns transitions and writes the next cursor.
- **Everyone answered** → the question phase ends immediately (short 700ms grace so
  the last tap animates), then reveal.
- **Auto mode** → reveal and scoreboard roll on their timers, as now.
- **Manual mode** → reveal and scoreboard wait, and the host screen shows a large
  "Next" button; a countdown is not shown.
- Player screens follow the cursor; they never advance anything themselves.

## 2. Question length

Per-question seconds already exists in the editor. Adding one-tap presets
(10 / 20 / 30 / 45 / 60 / 90) next to the number box, plus an "apply to all
questions" action so setting the pace for a whole quiz is one click.

## 3. Images on questions

- New private storage bucket for question images, host-only write, read via signed
  URLs so images stay tied to the room.
- Editor: drag/click upload per question, preview thumbnail, remove button.
- Host display shows the image above the answer tiles; player screen shows a small
  version so phone users see context.

## 4. True/false questions

- Question gains a type. `boolean` renders exactly two tiles (True / False) with the
  first two answer colours and shapes.
- Editor: a type switch per question. Switching to true/false fills the two options
  and hides the other two; switching back restores four editable options.
- AI generation and text import keep producing 4-option questions, and a pasted
  "True/False" pair is detected as a boolean question.

## 5. Manual teams

Team mode in the lobby gets two sub-modes:

- **Auto** — current behaviour, players are balanced across teams on join.
- **Manual** — the host assigns each player from the lobby player list (tap a player,
  pick a team), with a "shuffle" helper. Players see their team badge update live.

## Technical notes

- Migration: new `rooms` columns, `questions.image_url` + `questions.question_type`,
  `rooms.team_mode`; the guarded `room_questions` / room lookups extend to return the
  new fields.
- New security-definer RPC `set_player_team(player_id, team_index)` restricted to the
  room owner, since players is not directly writable.
- `phaseAt` in `src/lib/quizclash.ts` is rewritten to read the room cursor instead of
  integrating durations; `archive_room` and scoring are untouched.
- Host advance actions are debounced and idempotent (guarded on cursor value) so two
  open host tabs cannot double-advance.
