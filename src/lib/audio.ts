/**
 * QuizClash High-Quality Web Audio Sound Manager
 * Modern, warm, Nintendo/iOS-style game audio synthesizers & background music player.
 */

import { QUIZ_LIBRARY } from "@/lib/quiz-library";

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private bgmAudio: HTMLAudioElement | null = null;
  private currentBgmUrl: string | null = null;
  private bgmVolume: number = 0.35; // Warm background music level

  constructor() {
    if (typeof window !== "undefined") {
      const storedMute = localStorage.getItem("quizclash:muted");
      this.isMuted = storedMute === "true";
    }
  }

  private initCtx(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("quizclash:muted", String(this.isMuted));
    }
    if (this.bgmAudio) {
      this.bgmAudio.volume = this.isMuted ? 0 : this.bgmVolume;
      if (!this.isMuted && this.bgmAudio.paused) {
        void this.bgmAudio.play().catch(() => {});
      }
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playBgm(url: string) {
    if (typeof window === "undefined") return;
    if (this.currentBgmUrl === url && this.bgmAudio && !this.bgmAudio.paused) {
      // Audio is already playing this track
      return;
    }

    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio = null;
    }

    this.currentBgmUrl = url;
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = this.isMuted ? 0 : this.bgmVolume;
    this.bgmAudio = audio;

    const attemptPlay = () => {
      if (!this.bgmAudio || this.bgmAudio !== audio) return;
      audio.play().then(() => {
        console.log("BGM playing successfully:", url);
      }).catch((err) => {
        console.warn("BGM autoplay blocked, waiting for user click/tap:", err);
      });
    };

    attemptPlay();

    // Listen for any user gesture on host display to unlock browser audio restrictions
    const unlock = () => {
      if (this.bgmAudio === audio && audio.paused && !this.isMuted) {
        attemptPlay();
      }
    };
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("click", unlock, { passive: true });
    window.addEventListener("keydown", unlock, { passive: true });
  }

  public stopBgm() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio = null;
    }
    this.currentBgmUrl = null;
  }

  // 🍏 iOS Soft Haptic Tap (Warm popping click)
  public playTap() {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      /* ignore audio error */
    }
  }

  // ✨ Apple Pay / Nintendo Success Chime (Warm C5 Major 9th Chord: C5 -> G5 -> C6 -> E6)
  public playCorrect() {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const frequencies = [523.25, 783.99, 1046.5, 1318.51]; // C5, G5, C6, E6
      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = ctx.currentTime + i * 0.06;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.18 - i * 0.02, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.5);
      });
    } catch {
      /* ignore audio error */
    }
  }

  // 🔇 Soft Double Thud for Incorrect Answer
  public playWrong() {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      [0, 0.1].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = ctx.currentTime + delay;

        osc.type = "sine";
        osc.frequency.setValueAtTime(220, startTime);
        osc.frequency.exponentialRampToValueAtTime(110, startTime + 0.08);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.08);
      });
    } catch {
      /* ignore audio error */
    }
  }

  // 🌟 Smooth Ascending Pentatonic Score Roll
  public playScoreUp() {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = ctx.currentTime + i * 0.04;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.08, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.12);
      });
    } catch {
      /* ignore audio error */
    }
  }

  // ⏱️ Soft Woodblock Metronome Tick
  public playTick() {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch {
      /* ignore audio error */
    }
  }

  // 🎉 Triumphant Multi-Tone Game Show Fanfare
  public playFanfare() {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const chordSequence = [
        { freqs: [523.25, 659.25, 783.99], dur: 0.15 },  // C Major
        { freqs: [587.33, 698.46, 880.00], dur: 0.15 },  // D Minor
        { freqs: [659.25, 783.99, 1046.5], dur: 0.15 },  // E Minor / C
        { freqs: [783.99, 987.77, 1174.66, 1567.98], dur: 0.6 }, // G7 -> C Major Resolution
      ];

      let time = ctx.currentTime;
      chordSequence.forEach((chord) => {
        chord.freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, time);

          gain.gain.setValueAtTime(0, time);
          gain.gain.linearRampToValueAtTime(0.12, time + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, time + chord.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(time);
          osc.stop(time + chord.dur);
        });
        time += chord.dur * 0.85;
      });
    } catch {
      /* ignore audio error */
    }
  }
}

export const sounds = new SoundManager();

/**
 * Returns custom background music URL based on quiz category or title,
 * defaulting to /audio/islamic.mp3 for Islamic & Ahl al-Bayt quizzes.
 */
export function getBgmForQuiz(
  quiz: { id?: string; quiz_id?: string; category?: string | null; title?: string | null } | null | undefined
): string | null {
  if (!quiz) return null;
  const title = (quiz.title ?? "").trim();
  const category = (quiz.category ?? "").trim();

  // Search QUIZ_LIBRARY to match metadata if category is missing on DB object
  const libMatch = QUIZ_LIBRARY.find(
    (lq) =>
      lq.id === quiz.id ||
      lq.id === quiz.quiz_id ||
      (title && lq.title.includes(title)) ||
      (lq.title && title.includes(lq.title))
  );

  const fullCategory = category || libMatch?.category || "";
  const fullTitle = title || libMatch?.title || "";
  const testStr = `${fullCategory} ${fullTitle}`.toLowerCase();

  // Match Islamic / Ahl al-Bayt quizzes
  const isIslamic =
    testStr.includes("إسلام") ||
    testStr.includes("دين") ||
    testStr.includes("أهل البيت") ||
    testStr.includes("الإمام") ||
    testStr.includes("القرآن") ||
    testStr.includes("عاشوراء") ||
    testStr.includes("السيرة") ||
    testStr.includes("علي بن أبي طالب") ||
    testStr.includes("الحسين") ||
    testStr.includes("الحسن") ||
    testStr.includes("فاطمة") ||
    testStr.includes("محمد") ||
    testStr.includes("الأئمة") ||
    testStr.includes("أهل بيت") ||
    testStr.includes("ahl_albayt") ||
    testStr.includes("ahlalbayt") ||
    testStr.includes("اسلام");

  if (isIslamic) {
    return "/audio/islamic.mp3";
  }

  return null;
}
