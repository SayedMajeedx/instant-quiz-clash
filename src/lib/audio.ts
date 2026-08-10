/**
 * QuizClash Studio-Quality Web Audio & BGM Sound Manager
 * Independent dual audio channels (BGM & SFX) with mastering dynamics compressor.
 */

import { QUIZ_LIBRARY } from "@/lib/quiz-library";

class SoundManager {
  private ctx: AudioContext | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private sfxGain: GainNode | null = null;

  private bgmAudio: HTMLAudioElement | null = null;
  private currentBgmUrl: string | null = null;

  private isBgmMuted: boolean = false;
  private isSfxMuted: boolean = false;
  private bgmVolume: number = 0.30; // Ambient background music level
  private sfxVolume: number = 0.80; // Crisp sound effects level

  constructor() {
    if (typeof window !== "undefined") {
      this.isBgmMuted = localStorage.getItem("quizclash:bgmMuted") === "true";
      this.isSfxMuted = localStorage.getItem("quizclash:sfxMuted") === "true";
    }
  }

  private initCtx(): { ctx: AudioContext; gain: GainNode } | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();

        // Studio Mastering Compressor: Prevents distortion, clipping, and crackling
        this.compressor = this.ctx.createDynamicsCompressor();
        this.compressor.threshold.setValueAtTime(-24, this.ctx.currentTime);
        this.compressor.knee.setValueAtTime(30, this.ctx.currentTime);
        this.compressor.ratio.setValueAtTime(12, this.ctx.currentTime);
        this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
        this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(this.isSfxMuted ? 0 : this.sfxVolume, this.ctx.currentTime);

        this.sfxGain.connect(this.compressor);
        this.compressor.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      void this.ctx.resume();
    }
    if (this.ctx && this.sfxGain) {
      return { ctx: this.ctx, gain: this.sfxGain };
    }
    return null;
  }

  // --- Background Music (BGM) Channel Controls ---
  public toggleBgmMute(): boolean {
    this.isBgmMuted = !this.isBgmMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("quizclash:bgmMuted", String(this.isBgmMuted));
    }
    if (this.bgmAudio) {
      this.bgmAudio.volume = this.isBgmMuted ? 0 : this.bgmVolume;
      if (!this.isBgmMuted && this.bgmAudio.paused) {
        void this.bgmAudio.play().catch(() => {});
      }
    }
    return this.isBgmMuted;
  }

  public getBgmMuted(): boolean {
    return this.isBgmMuted;
  }

  public setBgmMuted(muted: boolean) {
    this.isBgmMuted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("quizclash:bgmMuted", String(muted));
    }
    if (this.bgmAudio) {
      this.bgmAudio.volume = muted ? 0 : this.bgmVolume;
      if (!muted && this.bgmAudio.paused) {
        void this.bgmAudio.play().catch(() => {});
      }
    }
  }

  // --- Sound Effects (SFX) Channel Controls ---
  public toggleSfxMute(): boolean {
    this.isSfxMuted = !this.isSfxMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("quizclash:sfxMuted", String(this.isSfxMuted));
    }
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(this.isSfxMuted ? 0 : this.sfxVolume, this.ctx.currentTime);
    }
    return this.isSfxMuted;
  }

  public getSfxMuted(): boolean {
    return this.isSfxMuted;
  }

  public setSfxMuted(muted: boolean) {
    this.isSfxMuted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("quizclash:sfxMuted", String(muted));
    }
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(muted ? 0 : this.sfxVolume, this.ctx.currentTime);
    }
  }

  // Global Mute Toggle (for single button control)
  public toggleMute(): boolean {
    const next = !this.getMuted();
    this.setBgmMuted(next);
    this.setSfxMuted(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("quizclash:muted", String(next));
    }
    return next;
  }

  public getMuted(): boolean {
    return this.isBgmMuted && this.isSfxMuted;
  }

  public playBgm(url: string) {
    if (typeof window === "undefined") return;
    if (this.currentBgmUrl === url && this.bgmAudio && !this.bgmAudio.paused) {
      return;
    }

    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio = null;
    }

    this.currentBgmUrl = url;
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = this.isBgmMuted ? 0 : this.bgmVolume;
    this.bgmAudio = audio;

    const attemptPlay = () => {
      if (!this.bgmAudio || this.bgmAudio !== audio) return;
      audio.play().then(() => {
        console.log("BGM playing successfully:", url);
      }).catch((err) => {
        console.warn("BGM autoplay waiting for user interaction:", err);
      });
    };

    attemptPlay();

    // Listen for any user gesture on host screen to unlock browser audio restrictions
    const unlock = () => {
      if (this.bgmAudio === audio && audio.paused && !this.isBgmMuted) {
        attemptPlay();
      }
    };
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("click", unlock, { passive: true });
    window.addEventListener("keydown", unlock, { passive: true });
  }

  public pauseBgm() {
    if (this.bgmAudio && !this.bgmAudio.paused) {
      this.bgmAudio.pause();
    }
  }

  public resumeBgm() {
    if (this.bgmAudio && this.bgmAudio.paused && !this.isBgmMuted) {
      void this.bgmAudio.play().catch(() => {});
    }
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
    if (this.isSfxMuted) return;
    const sys = this.initCtx();
    if (!sys) return;
    const { ctx, gain: masterGain } = sys;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      /* ignore audio error */
    }
  }

  // ✨ Apple Pay / Nintendo Success Chime (Warm C5 Major 9th Chord)
  public playCorrect() {
    if (this.isSfxMuted) return;
    const sys = this.initCtx();
    if (!sys) return;
    const { ctx, gain: masterGain } = sys;

    try {
      const frequencies = [523.25, 783.99, 1046.5, 1318.51]; // C5, G5, C6, E6
      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = ctx.currentTime + i * 0.06;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15 - i * 0.02, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.5);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.5);
      });
    } catch {
      /* ignore audio error */
    }
  }

  // 🔇 Soft Double Thud for Incorrect Answer
  public playWrong() {
    if (this.isSfxMuted) return;
    const sys = this.initCtx();
    if (!sys) return;
    const { ctx, gain: masterGain } = sys;

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
        gain.connect(masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.08);
      });
    } catch {
      /* ignore audio error */
    }
  }

  // 🌟 Smooth Ascending Pentatonic Score Roll
  public playScoreUp() {
    if (this.isSfxMuted) return;
    const sys = this.initCtx();
    if (!sys) return;
    const { ctx, gain: masterGain } = sys;

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
        gain.connect(masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.12);
      });
    } catch {
      /* ignore audio error */
    }
  }

  // ⏱️ Soft Woodblock Metronome Tick
  public playTick() {
    if (this.isSfxMuted) return;
    const sys = this.initCtx();
    if (!sys) return;
    const { ctx, gain: masterGain } = sys;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch {
      /* ignore audio error */
    }
  }

  // 🎉 Triumphant Multi-Tone Game Show Fanfare
  public playFanfare() {
    if (this.isSfxMuted) return;
    const sys = this.initCtx();
    if (!sys) return;
    const { ctx, gain: masterGain } = sys;

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
          gain.connect(masterGain);

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
  quiz: { id?: string; quiz_id?: string; category?: string | null; subcategory?: string | null; title?: string | null } | null | undefined
): string | null {
  if (!quiz) return null;
  const title = (quiz.title ?? "").trim();
  const category = (quiz.category ?? "").trim();
  const subcategory = (quiz.subcategory ?? "").trim();

  // Search QUIZ_LIBRARY to match metadata if category is missing on DB object
  const libMatch = QUIZ_LIBRARY.find(
    (lq) =>
      lq.id === quiz.id ||
      lq.id === quiz.quiz_id ||
      (title && lq.title.includes(title)) ||
      (lq.title && title.includes(lq.title))
  );

  const fullCategory = category || libMatch?.category || "";
  const fullSubcategory = subcategory || libMatch?.subcategory || "";
  const fullTitle = title || libMatch?.title || "";
  const normalizeArabic = (value: string) =>
    value.toLowerCase().replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/[ـ\s_-]+/g, "");
  const categoryPath = normalizeArabic(`${fullCategory} ${fullSubcategory}`);
  const testStr = normalizeArabic(`${fullCategory} ${fullSubcategory} ${fullTitle}`);

  // Strictly match ONLY Ahl al-Bayt quiz series ("سلسلة مسابقات أهل البيت")
  const isAhlAlBaytSeries =
    testStr.includes("أهل البيت") ||
    testStr.includes("أهل بيت") ||
    testStr.includes("أهل‌البيت") ||
    testStr.includes("ahl_albayt") ||
    testStr.includes("ahlalbayt");

  const isIslamicCategory = categoryPath.includes("اسلاميات");

  if (isIslamicCategory || isAhlAlBaytSeries) {
    return "/audio/islamic.mp3";
  }

  // All other quizzes and categories use the default background music /audio/quiz.mp3
  return "/audio/quiz.mp3";
}
