import { describe, expect, it } from "vitest";
import { phaseAt, type Question, type Room } from "@/lib/quizclash";

const mockQuestions: Question[] = [
  {
    id: "q1",
    quiz_id: "quiz1",
    question_text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct_index: 1,
    time_limit_seconds: 20,
    order_index: 0,
    image_url: null,
    question_type: "multi",
  },
  {
    id: "q2",
    quiz_id: "quiz1",
    question_text: "Is the sky blue?",
    options: ["True", "False"],
    correct_index: 0,
    time_limit_seconds: 10,
    order_index: 1,
    image_url: null,
    question_type: "boolean",
  },
];

const mockRoom: Room = {
  id: "room1",
  code: "ABCDEF",
  quiz_id: "quiz1",
  status: "active",
  started_at: "2026-08-03T10:00:00.000Z",
  team_count: 2,
  advance_mode: "auto",
  team_mode: "auto",
  cursor_index: 0,
  cursor_phase: "question",
  phase_started_at: "2026-08-03T10:00:00.000Z",
};

describe("phaseAt pure function", () => {
  const startTime = new Date("2026-08-03T10:00:00.000Z").getTime();

  it("returns lobby when room is null or not started", () => {
    expect(phaseAt(null, mockQuestions, startTime)).toEqual({ kind: "lobby" });

    const unstartedRoom = { ...mockRoom, started_at: null };
    expect(phaseAt(unstartedRoom, mockQuestions, startTime)).toEqual({ kind: "lobby" });

    // Before started_at timestamp
    expect(phaseAt(mockRoom, mockQuestions, startTime - 1000)).toEqual({ kind: "lobby" });
  });

  it("returns ended phase when room status is ended", () => {
    const endedRoom = { ...mockRoom, status: "ended" as const };
    expect(phaseAt(endedRoom, mockQuestions, startTime + 5000)).toEqual({ kind: "ended" });
  });

  it("calculates exact question start boundary (0ms elapsed)", () => {
    const phase = phaseAt(mockRoom, mockQuestions, startTime);
    expect(phase).toEqual({
      kind: "question",
      index: 0,
      msLeft: 20000,
      question: mockQuestions[0],
    });
  });

  it("calculates mid-question countdown correctly", () => {
    // 5 seconds elapsed out of 20 seconds limit
    const phase = phaseAt(mockRoom, mockQuestions, startTime + 5000);
    expect(phase).toEqual({
      kind: "question",
      index: 0,
      msLeft: 15000,
      question: mockQuestions[0],
    });
  });

  it("calculates exact question timeout boundary and past time limit", () => {
    // Exactly 20 seconds elapsed
    const phaseAt20s = phaseAt(mockRoom, mockQuestions, startTime + 20000);
    expect(phaseAt20s).toEqual({
      kind: "question",
      index: 0,
      msLeft: 0,
      question: mockQuestions[0],
    });

    // 25 seconds elapsed (over limit before host advance)
    const phaseAt25s = phaseAt(mockRoom, mockQuestions, startTime + 25000);
    expect(phaseAt25s).toEqual({
      kind: "question",
      index: 0,
      msLeft: 0,
      question: mockQuestions[0],
    });
  });

  it("handles reveal phase and countdown correctly", () => {
    const revealRoom: Room = {
      ...mockRoom,
      cursor_index: 0,
      cursor_phase: "reveal",
      phase_started_at: "2026-08-03T10:00:20.000Z",
    };
    const phaseStart = new Date("2026-08-03T10:00:20.000Z").getTime();

    // 1s into reveal phase (REVEAL_MS is 2500ms)
    const phase = phaseAt(revealRoom, mockQuestions, phaseStart + 1000);
    expect(phase).toEqual({
      kind: "reveal",
      index: 0,
      msLeft: 1500,
      question: mockQuestions[0],
    });

    // Past REVEAL_MS
    const phaseExpired = phaseAt(revealRoom, mockQuestions, phaseStart + 3000);
    expect(phaseExpired).toEqual({
      kind: "reveal",
      index: 0,
      msLeft: 0,
      question: mockQuestions[0],
    });
  });

  it("handles leaderboard board phase and countdown correctly", () => {
    const boardRoom: Room = {
      ...mockRoom,
      cursor_index: 0,
      cursor_phase: "board",
      phase_started_at: "2026-08-03T10:00:22.500Z",
    };
    const phaseStart = new Date("2026-08-03T10:00:22.500Z").getTime();

    // 2s into board phase (BOARD_MS is 4500ms)
    const phase = phaseAt(boardRoom, mockQuestions, phaseStart + 2000);
    expect(phase).toEqual({
      kind: "leaderboard",
      index: 0,
      msLeft: 2500,
      question: mockQuestions[0],
    });
  });
});
