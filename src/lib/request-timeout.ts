/** Live-game requests give up after this long instead of hanging on a dead connection. */
export const GAME_REQUEST_TIMEOUT_MS = 8000;

/**
 * An AbortSignal that fires after `ms`. Pass it to Supabase queries with
 * `.abortSignal()`: fetch has no timeout of its own, and one request stuck on
 * a dropped connection would otherwise block everything waiting on it.
 */
export function timeoutSignal(ms = GAME_REQUEST_TIMEOUT_MS): AbortSignal {
  if (typeof AbortSignal.timeout === "function") return AbortSignal.timeout(ms);
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}
