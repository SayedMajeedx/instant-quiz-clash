#!/usr/bin/env python3
"""Apply the reviewed global duplicate groups to a copy of the QuizClash catalog."""

from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from semantic_duplicate_finder import normalize
from summarize_duplicate_report import compatible_answers


ROOT = Path(__file__).resolve().parents[1]
CATALOG = Path(r"C:\Users\TCIG-Sayeed Majeed\Downloads\quizclash-catalog-2026-08-08.json")
SEMANTIC_REPORT = ROOT / "reports" / "quizclash-catalog-2026-08-08-semantic-duplicates.json"
OUTPUT = ROOT / "quizclash-catalog-2026-08-08-deduplicated.json"
LOG = ROOT / "reports" / "quizclash-global-deduplication-log.json"


def question_text(question: dict[str, Any]) -> str:
    return str(question.get("question_text") or question.get("text") or question.get("question") or "").strip()


def answer(question: dict[str, Any]) -> str:
    for key in ("correct_answer", "answer", "correctAnswer"):
        if question.get(key) not in (None, ""):
            return str(question[key]).strip()
    options = question.get("options") or question.get("answers") or []
    index = question.get("correct_index", question.get("correctIndex"))
    try:
        return str(options[int(index)]).strip()
    except (ValueError, TypeError, IndexError):
        return ""


def question_key(quiz: dict[str, Any], question: dict[str, Any], position: int) -> tuple[str, str]:
    question_id = str(question.get("id") or question.get("external_id") or position)
    return str(quiz.get("id") or ""), question_id


def quality_score(question: dict[str, Any]) -> tuple[int, int, int, int]:
    text = normalize(question_text(question))
    correct = normalize(answer(question))
    explanation = normalize(question.get("explanation"))
    # Prefer complete records and descriptive answers, then a concise but specific question.
    completeness = int(bool(explanation)) + int(bool(question.get("source"))) + int(bool(question.get("image_url")))
    sensible_length = -abs(min(len(text), 180) - 75)
    return completeness, len(explanation), len(correct), sensible_length


def main() -> None:
    catalog = json.loads(CATALOG.read_text(encoding="utf-8-sig"))
    report = json.loads(SEMANTIC_REPORT.read_text(encoding="utf-8"))

    # Remove extra copies of quizzes whose normalized question sequence is identical.
    fingerprints: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for quiz in catalog.get("quizzes", []):
        texts = [normalize(question_text(q)) for q in quiz.get("questions", [])]
        fingerprint = hashlib.sha256("\n".join(texts).encode("utf-8")).hexdigest()
        fingerprints[fingerprint].append(quiz)

    removed_quiz_ids: set[str] = set()
    removed_quizzes: list[dict[str, Any]] = []
    for copies in fingerprints.values():
        if len(copies) < 2:
            continue
        # Keep the oldest stable catalog entry; ties retain catalog order.
        keep = min(copies, key=lambda q: str(q.get("created_at") or "9999"))
        for quiz in copies:
            if quiz is keep:
                continue
            removed_quiz_ids.add(str(quiz.get("id") or ""))
            removed_quizzes.append({
                "removed_quiz_id": quiz.get("id"),
                "kept_quiz_id": keep.get("id"),
                "title": quiz.get("title"),
                "question_count": len(quiz.get("questions", [])),
                "reason": "identical_quiz_copy",
            })

    # Recreate the accepted edge set used by the grouped report.
    accepted_pairs = []
    for pair in report.get("pairs", []):
        left, right = pair["left"], pair["right"]
        promoted = (
            pair["confidence"] == "review"
            and pair["semantic_similarity"] >= 90
            and normalize(left["category"]) == normalize(right["category"])
            and compatible_answers(left["answer"], right["answer"])
        )
        if pair["confidence"] == "high_confidence" or promoted:
            accepted_pairs.append(pair)

    question_lookup: dict[tuple[str, str], dict[str, Any]] = {}
    metadata: dict[tuple[str, str], tuple[dict[str, Any], int]] = {}
    for quiz in catalog.get("quizzes", []):
        for position, question in enumerate(quiz.get("questions", [])):
            key = question_key(quiz, question, position)
            question_lookup[key] = question
            metadata[key] = quiz, position

    graph: dict[tuple[str, str], set[tuple[str, str]]] = defaultdict(set)
    for pair in accepted_pairs:
        a = (pair["left"]["quiz_id"], pair["left"]["question_id"] or str(pair["left"]["index"]))
        b = (pair["right"]["quiz_id"], pair["right"]["question_id"] or str(pair["right"]["index"]))
        if a in question_lookup and b in question_lookup:
            graph[a].add(b)
            graph[b].add(a)

    remove_question_keys: set[tuple[str, str]] = set()
    removals: list[dict[str, Any]] = []
    visited: set[tuple[str, str]] = set()
    for start in graph:
        if start in visited:
            continue
        stack, component = [start], []
        visited.add(start)
        while stack:
            current = stack.pop()
            component.append(current)
            for neighbour in graph[current]:
                if neighbour not in visited:
                    visited.add(neighbour)
                    stack.append(neighbour)

        eligible = [key for key in component if key[0] not in removed_quiz_ids]
        if not eligible:
            continue
        keep_key = max(eligible, key=lambda key: quality_score(question_lookup[key]))
        keep_quiz, keep_position = metadata[keep_key]
        for key in eligible:
            if key == keep_key:
                continue
            remove_question_keys.add(key)
            quiz, position = metadata[key]
            removals.append({
                "removed_quiz_id": quiz.get("id"),
                "removed_quiz_title": quiz.get("title"),
                "removed_question_id": question_lookup[key].get("id"),
                "removed_question_number": position + 1,
                "removed_question_text": question_text(question_lookup[key]),
                "kept_quiz_id": keep_quiz.get("id"),
                "kept_quiz_title": keep_quiz.get("title"),
                "kept_question_id": question_lookup[keep_key].get("id"),
                "kept_question_number": keep_position + 1,
                "kept_question_text": question_text(question_lookup[keep_key]),
                "reason": "global_semantic_duplicate",
            })

    original_quizzes = list(catalog.get("quizzes", []))
    original_question_count = sum(len(q.get("questions", [])) for q in original_quizzes)
    cleaned_quizzes = []
    removed_optionless_questions: list[dict[str, Any]] = []
    for quiz in original_quizzes:
        if str(quiz.get("id") or "") in removed_quiz_ids:
            continue
        questions = []
        for position, question in enumerate(quiz.get("questions", [])):
            if question_key(quiz, question, position) in remove_question_keys:
                continue
            options = question.get("options") or question.get("answers") or []
            if not options:
                removed_optionless_questions.append({
                    "quiz_id": quiz.get("id"),
                    "quiz_title": quiz.get("title"),
                    "question_id": question.get("id"),
                    "original_question_number": position + 1,
                    "question_text": question_text(question),
                    "reason": "no_options",
                })
                continue
            questions.append(question)
        quiz["questions"] = questions
        if "question_count" in quiz:
            quiz["question_count"] = len(questions)
        cleaned_quizzes.append(quiz)

    catalog["quizzes"] = cleaned_quizzes
    if isinstance(catalog.get("summary"), dict):
        catalog["summary"]["quiz_count"] = len(cleaned_quizzes)
        catalog["summary"]["question_count"] = sum(len(q.get("questions", [])) for q in cleaned_quizzes)
        catalog["summary"]["public_quiz_count"] = sum(bool(q.get("is_public")) for q in cleaned_quizzes)
        catalog["summary"]["private_quiz_count"] = sum(not bool(q.get("is_public")) for q in cleaned_quizzes)
    catalog["generated_at"] = datetime.now(timezone.utc).isoformat()
    catalog["description"] = str(catalog.get("description") or "") + " Globally deduplicated copy; original export preserved."

    final_question_count = sum(len(q.get("questions", [])) for q in cleaned_quizzes)
    log = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": str(CATALOG),
        "output": str(OUTPUT),
        "policy": "Keep one best-quality question per accepted global semantic group; remove extra identical quizzes.",
        "summary": {
            "original_quizzes": len(original_quizzes),
            "final_quizzes": len(cleaned_quizzes),
            "removed_identical_quizzes": len(removed_quizzes),
            "original_questions": original_question_count,
            "final_questions": final_question_count,
            "questions_removed_with_identical_quizzes": sum(q["question_count"] for q in removed_quizzes),
            "additional_semantic_duplicate_questions_removed": len(removals),
            "optionless_questions_removed": len(removed_optionless_questions),
            "total_questions_removed": original_question_count - final_question_count,
            "empty_quizzes": sum(len(q.get("questions", [])) == 0 for q in cleaned_quizzes),
        },
        "removed_identical_quizzes": removed_quizzes,
        "removed_questions": removals,
        "removed_optionless_questions": removed_optionless_questions,
    }
    OUTPUT.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")
    LOG.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(log["summary"], ensure_ascii=False, indent=2))
    print(OUTPUT)
    print(LOG)


if __name__ == "__main__":
    main()
