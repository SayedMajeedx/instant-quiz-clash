# QuizClash Game

Build a fully working, visually stunning live quiz game website called "QuizClash" — a Kahoot-style multiplayer trivia experience with a host display and player devices, fully automatic question flow (no host clicking "next"), and real-time-feeling sync. This should be a responsive web app accessed entirely through the browser (desktop and mobile) — no native app, no app store, no install step. Players join instantly by visiting a URL and entering a room code.

Core concept

A host creates a quiz (title + questions, each with 4 answer options, one correct answer, and a time limit per question) and starts a game room.

The room gets a short 6-character join code.

Players join from their own phone/laptop by entering the code and a nickname — no login required.

Once the game starts, questions advance AUTOMATICALLY on a timer — there is no "host clicks next" step. Every connected screen (host display and all player devices) independently computes the current question from a shared start timestamp + each question's duration, so late joiners and refreshing all work correctly.

Players race to answer correctly and quickly; speed affects score (classic Kahoot-style: faster correct answers earn more points, out of a max like 1000).

After each question, show a reveal screen (correct answer highlighted, who got it right, points earned) then a leaderboard, before auto-advancing to the next question.

At the end, show a podium/final results screen for the top 3 plus a full ranked list.

Screens to build

Home / Landing — clean hero, "Create a Quiz" and "Join a Game" as the two primary actions.

Quiz Editor — create/edit/delete quizzes. Each quiz has a title and a list of questions. Each question has: question text, 4 answer options, which one is correct, and a time limit (default 20s, editable per question). Support adding/reordering/deleting questions. Autosave.

My Quizzes — list of quizzes the user has created, with edit/delete/host actions.

Host: Create Room — pick a quiz, generate a join code, show a QR code and the code big on screen.

Host: Lobby — shows the join code prominently, live list of players joining, player count, a "Start Game" button that kicks off the auto-timer sequence.

Host: Live Game Display (meant for a shared/projected screen) — current question, 4 answer options with distinct shapes/colors like Kahoot (triangle/diamond/circle/square), a big animated countdown ring/bar, live "X of Y players answered" counter.

Player: Join — enter room code + nickname, animated confirmation on joining.

Player: Waiting Room — "You're in!" state with player's avatar/color, waiting for host to start.

Player: Answer Screen — 4 big colorful tappable answer buttons (no question text repeated — just shapes/colors, like real Kahoot, to force glancing at the shared screen), countdown, locks after answering with a "waiting for others" state.

Reveal Screen (host + player variants) — correct answer highlighted with a satisfying animation, "Correct!/Incorrect" feedback, points earned this round, streak indicator if applicable.

Leaderboard — animated ranking transitions between questions (bars/rows sliding to new positions), top 5 visible.

Final Results / Podium — 1st/2nd/3rd on an animated podium with confetti, full leaderboard below, "Play Again" / "Back Home" actions.

Data & sync architecture

Use Supabase (via Lovable's native Supabase integration) for the backend:

quizzes table: id, owner_id, title, created_at

questions table: id, quiz_id, question_text, options (jsonb array of 4 strings), correct_index, time_limit_seconds, order_index

rooms table: id, code (unique, short), quiz_id, status (lobby/active/ended), started_at (timestamp used to derive current question purely from elapsed time — do NOT rely on any client "advance" action)

players table: id, room_id, nickname, joined_at, avatar_color

answers table: id, room_id, question_id, player_id, choice_index, answered_at, is_correct, points_awarded

Use Supabase Realtime (postgres_changes subscriptions) so player joins, answers, and leaderboard updates reflect live on the host screen without manual refresh. Compute "which question is currently live" as a pure function of now() - started_at compared against cumulative question durations — this must work correctly even if a client joins mid-game or refreshes.

Scoring: correct answer = base 1000 points scaled down linearly based on how much of the time limit was used (e.g., answering instantly ≈ 1000 pts, answering right at the buffer ≈ 300 pts), wrong answer = 0. Recompute and upsert leaderboard totals after each question closes.

Handle edge cases: duplicate nicknames in the same room (auto-suffix), players joining after a question has already started (they see the current question with remaining time only, previous questions are simply missed with 0 points), and room codes expiring/cleaning up after the game ends.

Design direction — make this genuinely stunning, not generic

Bold, high-energy, playful design language — think confident color-blocking, big rounded shapes, punchy gradients (purple/violet, hot pink, electric blue, warm yellow) — energetic like a live game show, not a corporate SaaS dashboard.

Distinct, chunky typography for question text and scores — should feel readable from across a room on a projected screen.

Smooth, satisfying micro-animations everywhere: countdown ring tension building near zero, answer buttons with tactile press feedback, leaderboard rows animating into new rank positions, confetti burst on the podium screen.

Use shape+color coded answer buttons (triangle/red, diamond/blue, circle/yellow, square/green) consistently across host and player screens, matching the genre convention players will instantly recognize.

Fully responsive: the host display should look great on a large screen, and the player screens must be optimized for one-handed mobile use with large tap targets.

Include a subtle animated background (soft gradient motion or floating shapes) on idle/waiting screens to keep energy up.

Technical requirements

Fully functional end-to-end: quiz creation → room hosting → multiplayer joining → automatic timed gameplay → scoring → live leaderboard → final results, all working with real data via Supabase, not mocked.

No login required for players joining a room (nickname only); simple auth (or even just local session ownership) for hosts creating/managing quizzes is fine.

Test that the automatic timer-based question advancement works correctly for multiple simultaneous players without any single "controller" device required to stay open.

This is a website, not a native app — everything runs in the browser via a shareable URL (e.g. a host shares a link or code, players open it in any mobile or desktop browser and join instantly, no download or install required). Please build this as a complete, polished, fully working website — not a wireframe or partial prototype.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://instant-quiz-clash.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b893d7bf-d6d1-49ea-8db3-0b42faf3a6d9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
