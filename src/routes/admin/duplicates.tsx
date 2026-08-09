import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { BrainCircuit, Check, RefreshCw, ShieldCheck, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  listDuplicateReviews,
  resolveDuplicateReview,
  scanDuplicateQuestions,
} from "@/lib/duplicate-detection.functions";

export const Route = createFileRoute("/admin/duplicates")({ component: DuplicateReviewPage });

type ReviewQuestion = {
  id: string;
  quizTitle: string;
  text: string;
  answer: string;
  explanation: string;
  orderIndex: number;
};
type Review = {
  id: string;
  confidence: number;
  verdict: "exact" | "equivalent" | "related";
  shared_fact: string;
  rationale: string;
  questions: ReviewQuestion[];
};

function DuplicateReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setReviews((await listDuplicateReviews()) as Review[]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "تعذر تحميل طابور المراجعة");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const scan = async () => {
    setScanning(true);
    try {
      const result = await scanDuplicateQuestions({ data: { useAi: true } });
      toast.success(
        `فُحص ${result.scanned} سؤالاً، وأضيفت ${result.flagged} حالة جديدة للمراجعة` +
          (result.skippedReviewed ? `، وتُخطيت ${result.skippedReviewed} حالة سبق حسمها.` : "."),
      );
      await load();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "فشل الفحص");
    } finally {
      setScanning(false);
    }
  };

  const resolve = async (review: Review, keep?: ReviewQuestion) => {
    setBusyId(review.id);
    try {
      await resolveDuplicateReview({
        data: {
          reviewId: review.id,
          action: keep ? "delete" : "dismiss",
          keepQuestionId: keep?.id,
          deleteQuestionIds: keep
            ? review.questions
                .filter((question) => question.id !== keep.id)
                .map((question) => question.id)
            : [],
        },
      });
      setReviews((current) => current.filter((item) => item.id !== review.id));
      toast.success(
        keep ? "تم الاحتفاظ بالنسخة المختارة وحذف المكرر" : "تم تعليم الحالة بأنها ليست تكراراً",
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "تعذر حفظ القرار");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border bg-gradient-to-l from-primary/15 via-card to-card p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BrainCircuit className="size-6 text-primary" />
            <h1 className="text-2xl font-extrabold">المراجع الذكي للتكرار</h1>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            استرجاع عربي هجين، ثم تحكيم دلالي صارم يطابق الحقيقة والإجابة والكيانات والأرقام. لا
            يُحذف شيء دون اختيارك.
          </p>
        </div>
        <Button onClick={() => void scan()} disabled={scanning} className="gap-2 rounded-xl">
          <RefreshCw className={`size-4 ${scanning ? "animate-spin" : ""}`} />
          {scanning ? "جارٍ الفحص والتحكيم..." : "بدء فحص شامل"}
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">بانتظار القرار</p>
            <p className="text-2xl font-bold">{reviews.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">شبه مؤكد ≥ 93%</p>
            <p className="text-2xl font-bold">
              {reviews.filter((item) => item.confidence >= 0.93).length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">مراجعة دقيقة</p>
            <p className="text-2xl font-bold">
              {reviews.filter((item) => item.confidence < 0.93).length}
            </p>
          </CardContent>
        </Card>
      </div>

      {loading ? (
        <div className="py-16 text-center text-muted-foreground">جارٍ تحميل النتائج...</div>
      ) : reviews.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
            <ShieldCheck className="size-10 text-emerald-500" />
            <h2 className="text-lg font-bold">لا توجد حالات معلقة</h2>
            <p className="text-sm text-muted-foreground">ابدأ فحصًا جديدًا بعد استيراد الكويزات.</p>
          </CardContent>
        </Card>
      ) : (
        reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden rounded-2xl">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-base">
                  {review.shared_fact ||
                    (review.verdict === "exact"
                      ? "تطابق نصي وإجابي"
                      : "المعلومة نفسها بصياغة مختلفة")}
                </CardTitle>
                <Badge className={review.confidence >= 0.93 ? "bg-emerald-600" : "bg-amber-600"}>
                  {Math.round(review.confidence * 100)}% ثقة
                </Badge>
              </div>
              <CardDescription>{review.rationale}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-5">
              <div className="grid gap-4 lg:grid-cols-2">
                {review.questions.map((question) => (
                  <section
                    key={question.id}
                    className="flex flex-col justify-between gap-4 rounded-2xl border bg-card p-4"
                  >
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary">
                        {question.quizTitle} · السؤال {question.orderIndex + 1}
                      </p>
                      <h3 className="font-bold leading-7">{question.text}</h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">الإجابة:</span>{" "}
                        {question.answer}
                      </p>
                      {question.explanation && (
                        <p className="line-clamp-3 text-xs leading-6 text-muted-foreground">
                          {question.explanation}
                        </p>
                      )}
                    </div>
                    <Button
                      disabled={busyId === review.id}
                      onClick={() => void resolve(review, question)}
                      variant="outline"
                      className="gap-2 border-emerald-500/50 text-emerald-700"
                    >
                      <Check className="size-4" />
                      احتفظ بهذه واحذف البقية
                    </Button>
                  </section>
                ))}
              </div>
              <Button
                disabled={busyId === review.id}
                onClick={() => void resolve(review)}
                variant="ghost"
                className="gap-2 text-muted-foreground"
              >
                <X className="size-4" />
                ليستا مكررتين
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
