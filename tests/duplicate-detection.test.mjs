import assert from "node:assert/strict";
import test from "node:test";

import {
  adjudicateCandidates,
  groupCandidates,
  normalizeArabic,
  retrieveCandidates,
} from "../src/lib/duplicate-detection.server.ts";

const base = {
  quizId: "524a7c89-4cf1-497c-a2cd-d7eafa85746e",
  quizTitle: "سيرة النبي محمد (ص)",
  category: "إسلاميات",
  explanation: "",
};

test("normalizes Arabic orthographic variants", () => {
  assert.equal(normalizeArabic("مَا اسمُ أُمِّ المؤمنين؟"), "ما اسم ام المومنين");
});

test("retrieves the reported Year of Sorrow paraphrase before AI adjudication", () => {
  const questions = [
    {
      ...base,
      id: "b0044144-5a75-4088-bba8-ddf3fc588589",
      orderIndex: 3,
      text: "في أي سنة من البعثة النبوية توفيت خديجة بنت خويلد وأبو طالب في نفس العام المعروف بعام الحزن؟",
      answer: "السنة العاشرة",
    },
    {
      ...base,
      id: "cf130b65-4c00-4bc6-83f4-5e15f06ed2da",
      orderIndex: 8,
      text: "في أي عام يسمى عام الحزن توفي فيه كل من أبي طالب وخديجة بنت خويلد؟",
      answer: "السنة العاشرة من البعثة",
    },
  ];

  const candidates = retrieveCandidates(questions);
  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].verdict, "equivalent");
  assert.equal(candidates[0].confidence, 0.93);
  assert.deepEqual(
    new Set(candidates[0].questions.map((question) => question.id)),
    new Set(questions.map((question) => question.id)),
  );
});

test("returns the Year of Sorrow pair in final results without the AI judge", async () => {
  const questions = [
    {
      ...base,
      id: "year-of-sorrow-a",
      orderIndex: 3,
      text: "في أي سنة من البعثة النبوية توفيت خديجة بنت خويلد وأبو طالب في نفس العام المعروف بعام الحزن؟",
      answer: "السنة العاشرة",
    },
    {
      ...base,
      id: "year-of-sorrow-b",
      orderIndex: 8,
      text: "في أي عام يسمى عام الحزن توفي فيه كل من أبي طالب وخديجة بنت خويلد؟",
      answer: "السنة العاشرة من البعثة",
    },
  ];
  const finalResults = await adjudicateCandidates(retrieveCandidates(questions));
  assert.equal(finalResults.length, 1);
  assert.equal(finalResults[0].verdict, "equivalent");
});

test("groups a third equivalent formulation into the same review case", () => {
  const questions = [
    {
      ...base,
      id: "a",
      orderIndex: 3,
      text: "في أي سنة من البعثة النبوية توفيت خديجة بنت خويلد وأبو طالب في عام الحزن؟",
      answer: "السنة العاشرة",
    },
    {
      ...base,
      id: "b",
      orderIndex: 8,
      text: "في أي عام يسمى عام الحزن توفي فيه كل من أبي طالب وخديجة بنت خويلد؟",
      answer: "السنة العاشرة من البعثة",
    },
    {
      ...base,
      id: "c",
      orderIndex: 15,
      text: "في أي سنة توفيت السيدة خديجة زوجة النبي (ص)؟",
      answer: "السنة العاشرة من البعثة",
    },
  ];

  const groups = groupCandidates(
    retrieveCandidates(questions).map((candidate) => ({
      ...candidate,
      verdict: "equivalent",
      confidence: 0.95,
    })),
  );
  assert.equal(groups.length, 1);
  assert.equal(groups[0].questions.length, 3);
});
