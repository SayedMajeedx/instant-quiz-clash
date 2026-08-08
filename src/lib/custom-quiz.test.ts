import { describe, expect, it } from "vitest";
import {
  buildCategoryBreakdown,
  fisherYatesShuffle,
  selectCustomQuestions,
} from "@/lib/custom-quiz";

describe("custom quiz selection", () => {
  it("shuffles without mutating the source", () => {
    const source = [1, 2, 3, 4];
    const shuffled = fisherYatesShuffle(source, () => 0);
    expect(source).toEqual([1, 2, 3, 4]);
    expect(shuffled).toEqual([2, 3, 4, 1]);
  });

  it("deduplicates, slices, and reindexes questions", () => {
    const selected = selectCustomQuestions(
      [{ id: "a" }, { id: "b" }, { id: "a" }, { id: "c" }],
      2,
      () => 0.999,
    );
    expect(selected).toEqual([
      { id: "a", order_index: 0 },
      { id: "b", order_index: 1 },
    ]);
  });

  it("builds a per-player category accuracy summary", () => {
    const summary = buildCategoryBreakdown(
      [
        { id: "q1", source_category: "رياضة" },
        { id: "q2", source_category: "رياضة" },
        { id: "q3", source_category: "إسلاميات" },
      ],
      [
        { question_id: "q1", player_id: "p1", is_correct: true },
        { question_id: "q2", player_id: "p1", is_correct: false },
        { question_id: "q3", player_id: "p2", is_correct: true },
      ],
      "p1",
    );
    expect(summary).toEqual([
      { category: "رياضة", questionCount: 2, answered: 2, correct: 1, accuracyPercent: 50 },
      { category: "إسلاميات", questionCount: 1, answered: 0, correct: 0, accuracyPercent: 0 },
    ]);
  });
});
