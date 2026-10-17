/**
 * Formerly a set of floating gradient blobs behind every screen. The redesign uses a
 * flat stage colour instead: the blobs were decoration that never stopped moving, cost
 * battery on phones and ignored reduced motion. Kept as a no-op so existing screens
 * need no changes; remove call sites as screens are redesigned.
 */
export function AnimatedBg(_props: { dense?: boolean }) {
  return null;
}
