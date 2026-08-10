#!/usr/bin/env python3
"""Find semantically duplicated QuizClash questions without changing source data."""

from __future__ import annotations

import argparse
import html
import json
import math
import re
import sys
from collections import Counter
from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from sentence_transformers import SentenceTransformer
from sentence_transformers.util import semantic_search


MODEL_NAME = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
ARABIC_DIACRITICS = re.compile(r"[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]")
PUNCTUATION = re.compile(r"[^\w\s]", re.UNICODE)
NUMBER = re.compile(r"\d+(?:[.,]\d+)?")


@dataclass
class Question:
    index: int
    quiz_id: str
    quiz_title: str
    category: str
    subcategory: str
    question_id: str
    question_index: int
    text: str
    answer: str


def normalize(value: Any) -> str:
    text = str(value or "").strip().lower()
    text = ARABIC_DIACRITICS.sub("", text).replace("ـ", "")
    text = text.translate(str.maketrans({"أ": "ا", "إ": "ا", "آ": "ا", "ٱ": "ا", "ى": "ي", "ؤ": "و", "ئ": "ي"}))
    return re.sub(r"\s+", " ", PUNCTUATION.sub(" ", text)).strip()


def correct_answer(question: dict[str, Any]) -> str:
    for key in ("correct_answer", "answer", "correctAnswer"):
        if question.get(key) not in (None, ""):
            return str(question[key]).strip()
    options = question.get("options") or question.get("answers") or []
    index = question.get("correct_index", question.get("correctIndex"))
    try:
        if isinstance(options, list) and index is not None:
            return str(options[int(index)]).strip()
    except (ValueError, TypeError, IndexError):
        pass
    return ""


def load_questions(path: Path) -> list[Question]:
    with path.open("r", encoding="utf-8-sig") as handle:
        payload = json.load(handle)
    quizzes = payload.get("quizzes", []) if isinstance(payload, dict) else payload
    if not isinstance(quizzes, list):
        raise ValueError("Expected a catalog object with a 'quizzes' array, or a quiz array.")

    result: list[Question] = []
    for quiz in quizzes:
        if not isinstance(quiz, dict):
            continue
        for position, item in enumerate(quiz.get("questions") or []):
            if not isinstance(item, dict):
                continue
            text = str(item.get("question_text") or item.get("text") or item.get("question") or "").strip()
            if not text:
                continue
            result.append(Question(
                index=len(result),
                quiz_id=str(quiz.get("id") or ""),
                quiz_title=str(quiz.get("title") or ""),
                category=str(quiz.get("category") or ""),
                subcategory=str(quiz.get("subcategory") or ""),
                question_id=str(item.get("id") or item.get("external_id") or ""),
                question_index=position,
                text=text,
                answer=correct_answer(item),
            ))
    return result


def token_overlap(left: str, right: str) -> float:
    a, b = set(normalize(left).split()), set(normalize(right).split())
    return len(a & b) / max(1, len(a | b))


def answer_relation(left: str, right: str) -> str:
    a, b = normalize(left), normalize(right)
    if not a or not b:
        return "unknown"
    if a == b:
        return "same"
    if token_overlap(a, b) >= 0.75:
        return "similar"
    return "different"


def pair_key(a: int, b: int) -> tuple[int, int]:
    return (a, b) if a < b else (b, a)


def classify(score: float, answer: str, numbers_match: bool, same_category: bool) -> str | None:
    # Conflicting answers or numbers can change the fact being asked, so never auto-elevate them.
    if score >= 0.92 and answer in {"same", "similar"} and numbers_match:
        return "high_confidence"
    if score >= 0.87 and answer != "different" and numbers_match and same_category:
        return "high_confidence"
    if score >= 0.77:
        return "review"
    return None


def find_pairs(questions: list[Question], model_name: str, threshold: float, batch_size: int) -> list[dict[str, Any]]:
    print(f"Loading semantic model: {model_name}", flush=True)
    model = SentenceTransformer(model_name)
    texts = [f"السؤال: {q.text}\nالإجابة الصحيحة: {q.answer}" for q in questions]
    print(f"Encoding {len(texts):,} questions...", flush=True)
    embeddings = model.encode(
        texts,
        batch_size=batch_size,
        show_progress_bar=True,
        convert_to_tensor=True,
        normalize_embeddings=True,
    )
    # Search only a limited nearest-neighbour set; genuine duplicates do not need all N² pairs.
    top_k = min(20, len(questions))
    hits = semantic_search(embeddings, embeddings, top_k=top_k, score_function=lambda a, b: a @ b.T)
    seen: set[tuple[int, int]] = set()
    pairs: list[dict[str, Any]] = []
    for source, neighbours in enumerate(hits):
        for hit in neighbours:
            target, score = int(hit["corpus_id"]), float(hit["score"])
            if source == target or score < threshold:
                continue
            key = pair_key(source, target)
            if key in seen:
                continue
            seen.add(key)
            left, right = questions[key[0]], questions[key[1]]
            relation = answer_relation(left.answer, right.answer)
            left_numbers, right_numbers = NUMBER.findall(normalize(left.text)), NUMBER.findall(normalize(right.text))
            numbers_match = left_numbers == right_numbers
            same_category = normalize(left.category) == normalize(right.category)
            confidence = classify(score, relation, numbers_match, same_category)
            if confidence is None:
                continue
            warnings: list[str] = []
            if relation == "different":
                warnings.append("الإجابتان مختلفتان؛ راجع المعنى بدقة")
            if not numbers_match:
                warnings.append("الأرقام أو التواريخ مختلفة")
            if not same_category:
                warnings.append("القسمان مختلفان")
            pairs.append({
                "confidence": confidence,
                "semantic_similarity": round(score * 100, 2),
                "word_overlap": round(token_overlap(left.text, right.text) * 100, 2),
                "answer_relation": relation,
                "warnings": warnings,
                "left": asdict(left),
                "right": asdict(right),
            })
    return sorted(pairs, key=lambda item: (item["confidence"] != "high_confidence", -item["semantic_similarity"]))


def write_html(path: Path, report: dict[str, Any]) -> None:
    cards = []
    for pair in report["pairs"]:
        level = "شبه مؤكد" if pair["confidence"] == "high_confidence" else "يحتاج مراجعة"
        warnings = " · ".join(pair["warnings"]) or "لا توجد إشارات تعارض واضحة"
        left, right = pair["left"], pair["right"]
        cards.append(f"""
        <article class="pair {pair['confidence']}">
          <header><strong>{level}</strong><span>{pair['semantic_similarity']}% تشابه دلالي</span></header>
          <div class="grid">
            <section><h3>{html.escape(left['text'])}</h3><p>الإجابة: {html.escape(left['answer'] or 'غير محددة')}</p><small>{html.escape(left['quiz_title'])} — {html.escape(left['category'])}</small></section>
            <section><h3>{html.escape(right['text'])}</h3><p>الإجابة: {html.escape(right['answer'] or 'غير محددة')}</p><small>{html.escape(right['quiz_title'])} — {html.escape(right['category'])}</small></section>
          </div><footer>{html.escape(warnings)}</footer>
        </article>""")
    generated = html.escape(report["generated_at"])
    path.write_text(f"""<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8">
<title>تقرير تشابه أسئلة QuizClash</title><style>
body{{margin:0;background:#100722;color:#fff;font-family:Tahoma,Arial,sans-serif}}main{{max-width:1200px;margin:auto;padding:32px}}h1{{color:#f5b7ff}}.summary{{display:flex;gap:12px;flex-wrap:wrap;margin:20px 0}}.summary b{{background:#281345;border:1px solid #693a96;border-radius:999px;padding:10px 16px}}.pair{{background:#1b0d32;border:1px solid #442467;border-radius:20px;padding:20px;margin:16px 0}}.pair.high_confidence{{border-color:#24c98b}}header,footer{{display:flex;justify-content:space-between;gap:12px}}header strong{{color:#d75cff}}.high_confidence header strong{{color:#24e0a1}}.grid{{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0}}section{{background:#120824;border-radius:14px;padding:16px}}h3{{margin-top:0;line-height:1.7}}p,small,footer{{color:#c7b8d8}}@media(max-width:700px){{.grid{{grid-template-columns:1fr}}}}
</style><main><h1>تقرير الأسئلة المتشابهة دلالياً</h1><p>تقرير مراجعة فقط — لم يتم حذف أو تعديل أي سؤال. أُنشئ في {generated}</p>
<div class="summary"><b>{report['summary']['questions_scanned']} سؤالاً</b><b>{report['summary']['high_confidence_pairs']} شبه مؤكد</b><b>{report['summary']['review_pairs']} للمراجعة</b></div>{''.join(cards) or '<p>لم يتم العثور على أزواج فوق الحد المحدد.</p>'}</main></html>""", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Semantic duplicate finder for QuizClash catalog JSON")
    parser.add_argument("input", type=Path, help="Catalog JSON exported from /admin/quizzes")
    parser.add_argument("--output", type=Path, help="Output JSON path")
    parser.add_argument("--threshold", type=float, default=0.77, help="Minimum cosine similarity (default: 0.77)")
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--model", default=MODEL_NAME)
    args = parser.parse_args()
    if not args.input.is_file():
        parser.error(f"Input file not found: {args.input}")
    if not 0.5 <= args.threshold <= 1:
        parser.error("--threshold must be between 0.5 and 1")

    questions = load_questions(args.input)
    if len(questions) < 2:
        parser.error("The catalog must contain at least two questions")
    pairs = find_pairs(questions, args.model, args.threshold, args.batch_size)
    output = args.output or args.input.with_name(f"{args.input.stem}-semantic-duplicates.json")
    report = {
        "schema_version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "mode": "review_only",
        "model": args.model,
        "threshold": args.threshold,
        "notes_ar": [
            "لم يتم حذف أو تعديل أي سؤال.",
            "شبه مؤكد تعني تشابهاً دلالياً مرتفعاً دون تعارض ظاهر في الإجابة أو الأرقام.",
            "قرار الحذف النهائي يجب أن يتم بعد المراجعة البشرية.",
        ],
        "summary": {
            "questions_scanned": len(questions),
            "candidate_pairs": len(pairs),
            "high_confidence_pairs": sum(p["confidence"] == "high_confidence" for p in pairs),
            "review_pairs": sum(p["confidence"] == "review" for p in pairs),
        },
        "pairs": pairs,
    }
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    html_output = output.with_suffix(".html")
    write_html(html_output, report)
    print(f"JSON report: {output.resolve()}")
    print(f"HTML report: {html_output.resolve()}")
    print(f"Found {report['summary']['high_confidence_pairs']} high-confidence and {report['summary']['review_pairs']} review pairs.")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        print("Cancelled.", file=sys.stderr)
        raise SystemExit(130)
