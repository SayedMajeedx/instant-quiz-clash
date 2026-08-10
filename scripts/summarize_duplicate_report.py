#!/usr/bin/env python3
"""Create a grouped, action-oriented summary from the semantic duplicate report."""

from __future__ import annotations

import json
import hashlib
import re
from collections import Counter, defaultdict
from pathlib import Path

from semantic_duplicate_finder import normalize, write_html


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "reports" / "quizclash-catalog-2026-08-08-semantic-duplicates.json"
CATALOG = Path(r"C:\Users\TCIG-Sayeed Majeed\Downloads\quizclash-catalog-2026-08-08.json")
FOCUSED_JSON = ROOT / "reports" / "quizclash-duplicates-high-confidence.json"
FOCUSED_HTML = ROOT / "reports" / "quizclash-duplicates-high-confidence.html"
SUMMARY_MD = ROOT / "reports" / "quizclash-duplicates-summary-ar.md"


def qkey(question: dict) -> tuple[str, str]:
    return question["quiz_id"], question["question_id"] or str(question["index"])


def compatible_answers(left: str, right: str) -> bool:
    a, b = normalize(left), normalize(right)
    if not a or not b:
        return False
    if a == b or a in b or b in a:
        return True
    left_tokens, right_tokens = set(a.split()), set(b.split())
    return len(left_tokens & right_tokens) / max(1, min(len(left_tokens), len(right_tokens))) >= 0.75


def main() -> None:
    report = json.loads(SOURCE.read_text(encoding="utf-8"))
    catalog = json.loads(CATALOG.read_text(encoding="utf-8-sig"))
    pairs = []
    promoted_pairs = 0
    for pair in report["pairs"]:
        left, right = pair["left"], pair["right"]
        promoted = (
            pair["confidence"] == "review"
            and pair["semantic_similarity"] >= 90
            and normalize(left["category"]) == normalize(right["category"])
            and compatible_answers(left["answer"], right["answer"])
        )
        if pair["confidence"] == "high_confidence" or promoted:
            pairs.append(pair)
            promoted_pairs += int(promoted)

    nodes: dict[tuple[str, str], dict] = {}
    graph: dict[tuple[str, str], set[tuple[str, str]]] = defaultdict(set)
    for pair in pairs:
        left, right = pair["left"], pair["right"]
        a, b = qkey(left), qkey(right)
        nodes[a], nodes[b] = left, right
        graph[a].add(b)
        graph[b].add(a)

    groups: list[list[dict]] = []
    visited: set[tuple[str, str]] = set()
    for start in nodes:
        if start in visited:
            continue
        stack, component = [start], []
        visited.add(start)
        while stack:
            current = stack.pop()
            component.append(nodes[current])
            for neighbour in graph[current]:
                if neighbour not in visited:
                    visited.add(neighbour)
                    stack.append(neighbour)
        groups.append(sorted(component, key=lambda q: (q["quiz_title"], q["question_index"])))

    groups.sort(key=lambda g: (-len(g), g[0]["quiz_title"], g[0]["question_index"]))
    exact_groups = [g for g in groups if len({normalize(q["text"]) for q in g}) == 1]
    rephrased_groups = [g for g in groups if g not in exact_groups]
    internal_groups = [g for g in groups if len({q["quiz_id"] for q in g}) == 1]
    cross_quiz_groups = [g for g in groups if len({q["quiz_id"] for q in g}) > 1]

    focused = dict(report)
    focused["threshold"] = "high_confidence_only"
    focused["pairs"] = pairs
    focused["summary"] = {
        "questions_scanned": report["summary"]["questions_scanned"],
        "candidate_pairs": len(pairs),
        "high_confidence_pairs": len(pairs),
        "review_pairs": 0,
        "duplicate_groups": len(groups),
        "questions_in_groups": len(nodes),
        "exact_groups": len(exact_groups),
        "rephrased_groups": len(rephrased_groups),
        "promoted_answer_compatible_pairs": promoted_pairs,
    }
    FOCUSED_JSON.write_text(json.dumps(focused, ensure_ascii=False, indent=2), encoding="utf-8")
    write_html(FOCUSED_HTML, focused)

    affected = Counter()
    for q in nodes.values():
        affected[q["quiz_title"]] += 1

    quiz_fingerprints: dict[str, list[dict]] = defaultdict(list)
    for quiz in catalog.get("quizzes", []):
        texts = [normalize(q.get("question_text") or q.get("text") or q.get("question")) for q in quiz.get("questions", [])]
        fingerprint = hashlib.sha256("\n".join(texts).encode("utf-8")).hexdigest()
        quiz_fingerprints[fingerprint].append(quiz)
    identical_quiz_groups = [items for items in quiz_fingerprints.values() if len(items) > 1]

    lines = [
        "# تقرير تكرار أسئلة QuizClash",
        "",
        "> فحص مراجعة فقط؛ لم يُحذف أو يُعدّل أي سؤال في ملف الكتالوج.",
        "",
        "## الملخص التنفيذي",
        "",
        f"- تم فحص **{report['summary']['questions_scanned']:,} سؤالًا** في كامل الكتالوج.",
        f"- عُثر على **{len(pairs):,} علاقة تشابه عالية الثقة**، جُمعت في **{len(groups):,} مجموعة تكرار**.",
        f"- تشمل المجموعات **{len(nodes):,} سؤالًا فريدًا**.",
        f"- **{len(exact_groups):,} مجموعة** متطابقة نصيًا بعد توحيد الهمزات والتشكيل والترقيم.",
        f"- **{len(rephrased_groups):,} مجموعة** تسأل عن المعلومة نفسها بصياغة مختلفة.",
        f"- أُضيفت **{promoted_pairs:,} علاقة** لأن إحدى صيغتي الإجابة تحتوي الأخرى (مثل «فاطمة بنت حزام» و«أم البنين فاطمة بنت حزام الكلابية»).",
        f"- **{len(internal_groups):,} مجموعة** داخل الكويز نفسه، و**{len(cross_quiz_groups):,} مجموعة** تمتد بين أكثر من كويز.",
        f"- توجد كذلك **{report['summary']['review_pairs']:,} علاقة أضعف** في التقرير الموسع، ولا يُنصح بالحذف بناءً عليها آليًا.",
        f"- اكتُشفت **{len(identical_quiz_groups):,} مجموعات كويزات متطابقة بالكامل** (نسخ كاملة، لا مجرد أسئلة متفرقة).",
        "",
        "## كويزات متطابقة بالكامل",
        "",
    ]
    for items in sorted(identical_quiz_groups, key=lambda value: value[0].get("title", "")):
        ids = "، ".join(f"`{quiz.get('id', '')[:8]}`" for quiz in items)
        lines.append(f"- **{items[0].get('title', 'بلا عنوان')}** — {len(items)} نسخ — المعرّفات: {ids}")

    lines.extend([
        "",
        "## أكثر الكويزات تأثرًا",
        "",
        "| الكويز | عدد الأسئلة الداخلة في مجموعات قوية |",
        "|---|---:|",
    ])
    for title, count in affected.most_common(25):
        lines.append(f"| {title.replace('|', '｜')} | {count} |")

    lines.extend(["", "## جميع مجموعات التكرار عالية الثقة", ""])
    for number, group in enumerate(groups, 1):
        kind = "متطابق نصيًا" if group in exact_groups else "إعادة صياغة للمعلومة نفسها"
        scope = "داخل كويز واحد" if len({q['quiz_id'] for q in group}) == 1 else "بين عدة كويزات"
        answers = sorted({q["answer"] for q in group if q["answer"]})
        lines.append(f"### المجموعة {number} — {kind} — {scope}")
        lines.append("")
        if answers:
            lines.append(f"**الإجابة الصحيحة:** {' / '.join(answers)}")
            lines.append("")
        for q in group:
            short_quiz_id = q["quiz_id"][:8]
            short_question_id = q["question_id"][:8] if q["question_id"] else "—"
            text = re.sub(r"\s+", " ", q["text"]).strip()
            lines.append(
                f"- **{q['quiz_title']}** — السؤال {q['question_index'] + 1} "
                f"(quiz `{short_quiz_id}`, question `{short_question_id}`): {text}"
            )
        lines.append("")

    SUMMARY_MD.write_text("\n".join(lines), encoding="utf-8")
    print(json.dumps(focused["summary"], ensure_ascii=False, indent=2))
    print(SUMMARY_MD)
    print(FOCUSED_HTML)


if __name__ == "__main__":
    main()
