import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  HelpCircle,
  Plus,
  Pencil,
  Trash2,
  ArrowUp,
  ArrowDown,
  Save,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/quizzes/$quizId/edit")({
  component: InteractiveQuizEditorPage,
});

type QuestionItem = {
  id?: string;
  quiz_id?: string;
  question_text: string;
  options: string[];
  correct_index: number;
  question_type: "multi" | "boolean";
  time_limit_seconds: number;
  order_index: number;
  explanation?: string | null;
  image_url?: string | null;
};

function InteractiveQuizEditorPage() {
  const { quizId } = useParams({ from: "/admin/quizzes/$quizId/edit" });
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("عام");
  const [subcategory, setSubcategory] = useState("");
  const [difficulty, setDifficulty] = useState("standard");
  const [language, setLanguage] = useState("ar");
  const [isPublic, setIsPublic] = useState(true);

  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Question Modal Editor
  const [qDialogOpen, setQDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [qText, setQText] = useState("");
  const [qType, setQType] = useState<"multi" | "boolean">("multi");
  const [qOptions, setQOptions] = useState<string[]>(["", "", "", ""]);
  const [qCorrectIndex, setQCorrectIndex] = useState(0);
  const [qTimeLimit, setQTimeLimit] = useState(20);
  const [qExplanation, setQExplanation] = useState("");
  const [qImageUrl, setQImageUrl] = useState("");

  useEffect(() => {
    if (quizId) loadQuizData();
  }, [quizId]);

  async function loadQuizData() {
    setLoading(true);
    try {
      let targetQuiz: any = null;
      const { data: quizData } = await (supabase.from("quizzes") as any)
        .select("*")
        .eq("id", quizId)
        .maybeSingle();

      if (quizData) {
        targetQuiz = quizData;
      } else {
        const { getAllAdminQuizzes } = await import("@/lib/admin-data-helper");
        const allAdmin = await getAllAdminQuizzes();
        const found = allAdmin.find((q) => q.id === quizId);
        if (found) {
          targetQuiz = found;
        }
      }

      if (targetQuiz) {
        setTitle(targetQuiz.title || "");
        setCategory(targetQuiz.category || "عام");
        setSubcategory(targetQuiz.subcategory || "");
        setDifficulty(targetQuiz.quiz_difficulty || "standard");
        setLanguage(targetQuiz.language || "ar");
        setIsPublic(targetQuiz.is_public ?? true);

        // Fetch Questions from DB first, else from targetQuiz.questions
        const { data: qData } = await supabase
          .from("questions")
          .select("*")
          .eq("quiz_id", quizId)
          .order("order_index", { ascending: true });

        const rawQuestions = qData && qData.length > 0 ? qData : (targetQuiz.questions || []);

        const formatted: QuestionItem[] = rawQuestions.map((q: any, idx: number) => ({
          id: q.id,
          quiz_id: quizId,
          question_text: q.question_text || q.question || "سؤال",
          options: Array.isArray(q.options) ? q.options : ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
          correct_index: q.correct_index ?? 0,
          question_type: (q.question_type as any) || "multi",
          time_limit_seconds: q.time_limit_seconds || 20,
          order_index: q.order_index ?? idx,
          explanation: q.explanation || "",
          image_url: q.image_url || "",
        }));
        setQuestions(formatted);
      } else {
        toast.error("الكويز المطلوب غير موجود");
      }
    } catch (err: any) {
      console.error("Error loading quiz:", err);
      toast.error("تعذر تحميل بيانات الكويز");
    } finally {
      setLoading(false);
    }
  }

  // Open Question Modal
  const openQuestionEditor = (index: number | null) => {
    setEditingIndex(index);
    if (index !== null && questions[index]) {
      const q = questions[index];
      setQText(q.question_text);
      setQType(q.question_type || "multi");
      setQOptions([...q.options]);
      setQCorrectIndex(q.correct_index);
      setQTimeLimit(q.time_limit_seconds || 20);
      setQExplanation(q.explanation || "");
      setQImageUrl(q.image_url || "");
    } else {
      setQText("");
      setQType("multi");
      setQOptions(["", "", "", ""]);
      setQCorrectIndex(0);
      setQTimeLimit(20);
      setQExplanation("");
      setQImageUrl("");
    }
    setQDialogOpen(true);
  };

  // Save Question in Modal
  const handleSaveQuestion = () => {
    if (!qText.trim()) {
      toast.error("يرجى كتابة نص السؤال");
      return;
    }

    let finalOptions = qOptions;
    if (qType === "boolean") {
      finalOptions = ["صح", "خطأ"];
    } else {
      const cleanOpts = qOptions.map((o) => o.trim());
      if (cleanOpts.some((o) => !o)) {
        toast.error("يرجى تعبئة جميع الخيارات الأربعة");
        return;
      }
      finalOptions = cleanOpts;
    }

    const newQuestion: QuestionItem = {
      quiz_id: quizId,
      question_text: qText.trim(),
      options: finalOptions,
      correct_index: Math.min(qCorrectIndex, finalOptions.length - 1),
      question_type: qType,
      time_limit_seconds: qTimeLimit,
      order_index: editingIndex !== null ? editingIndex : questions.length,
      explanation: qExplanation.trim() || null,
      image_url: qImageUrl.trim() || null,
    };

    if (editingIndex !== null) {
      const updated = [...questions];
      updated[editingIndex] = newQuestion;
      setQuestions(updated);
    } else {
      setQuestions([...questions, newQuestion]);
    }

    setQDialogOpen(false);
    toast.success(editingIndex !== null ? "تم تحديث السؤال" : "تم إضافة السؤال للقائمة");
  };

  // Move Question
  const moveQuestion = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= questions.length) return;

    const updated = [...questions];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;

    updated.forEach((q, i) => {
      q.order_index = i;
    });

    setQuestions(updated);
  };

  // Delete Question
  const deleteQuestion = (index: number) => {
    const updated = questions.filter((_, i) => i !== index);
    updated.forEach((q, i) => {
      q.order_index = i;
    });
    setQuestions(updated);
  };

  // Save Full Quiz & Questions permanently to Supabase DB
  const handleSaveAll = async () => {
    if (!title.trim()) {
      toast.error("يرجى إدخال عنوان الكويز");
      return;
    }

    setSaving(true);
    try {
      const db = supabase as any;
      const { data: userData } = await supabase.auth.getUser();
      const currentUserId = userData.user?.id || null;

      // 1. Upsert Quiz Metadata in Supabase DB
      const quizPayload: any = {
        id: quizId,
        title: title.trim(),
        category: category.trim(),
        subcategory: subcategory.trim(),
        quiz_difficulty: difficulty,
        language: language,
        is_public: isPublic,
      };
      if (currentUserId) quizPayload.user_id = currentUserId;

      const { error: quizError } = await db
        .from("quizzes")
        .upsert([quizPayload]);

      if (quizError) {
        console.warn("Full quiz upsert warning, trying minimal upsert:", quizError);
        const { error: quizError2 } = await db
          .from("quizzes")
          .upsert([{ id: quizId, title: title.trim() }]);
        if (quizError2) throw quizError2;
      }

      // 2. Sync Questions (Delete old questions & re-insert updated array)
      await db.from("questions").delete().eq("quiz_id", quizId);

      if (questions.length > 0) {
        const qInserts = questions.map((q, idx) => ({
          quiz_id: quizId,
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          question_type: q.question_type,
          time_limit_seconds: q.time_limit_seconds,
          order_index: idx,
          explanation: q.explanation || null,
          image_url: q.image_url || null,
        }));

        const { error: qError } = await db.from("questions").insert(qInserts);
        if (qError) throw qError;
      }

      toast.success("تم حفظ جميع التعديلات في قاعدة البيانات بنجاح!");
      void loadQuizData();
    } catch (err: any) {
      console.error("Save error:", err);
      toast.error(err.message || "حدث خطأ أثناء حفظ الكويز");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-12 text-center text-muted-foreground">جارٍ تحميل محرر الكويز...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl"
            onClick={() => void navigate({ to: "/admin/quizzes" })}
          >
            <ArrowRight className="size-4" />
          </Button>
          <div>
            <h1 className="font-display text-2xl font-bold">محرر الكويز والأسئلة التفاعلي</h1>
            <p className="text-sm text-muted-foreground">تعديل بيانات الكويز وتنظيم وتنسيق الأسئلة بسهولة.</p>
          </div>
        </div>

        <Button
          onClick={handleSaveAll}
          disabled={saving}
          className="rounded-xl gap-2 bg-gradient-hero text-primary-foreground shadow-md"
        >
          <Save className="size-4" />
          {saving ? "جارٍ الحفظ..." : "حفظ التغيرات بالكامل"}
        </Button>
      </div>

      {/* Quiz Metadata Card */}
      <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm p-6 space-y-4">
        <h3 className="font-display text-base font-bold">بيانات الكويز الأساسية</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label>عنوان الكويز</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="عنوان الكويز..."
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label>القسم الرئيسي</Label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="التاريخ، علوم، رياضة..."
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label>مستوى الصعوبة</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectItem value="easy">سهل (Easy)</SelectItem>
                <SelectItem value="standard">قياسي (Standard)</SelectItem>
                <SelectItem value="challenge">تحدي (Challenge)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>اللغة</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectItem value="ar">العربية (Arabic)</SelectItem>
                <SelectItem value="en">الإنجليزية (English)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-xl bg-muted/40">
            <Label className="text-xs font-semibold">إتاحة الكويز للمكتبة العامة (Public)</Label>
            <Switch checked={isPublic} onCheckedChange={setIsPublic} />
          </div>
        </div>
      </Card>

      {/* Questions Builder Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">قائمة الأسئلة ({questions.length})</h2>

          <Button
            size="sm"
            onClick={() => openQuestionEditor(null)}
            className="rounded-xl gap-2 bg-primary text-primary-foreground"
          >
            <Plus className="size-4" />
            إضافة سؤال جديد
          </Button>
        </div>

        {questions.length === 0 ? (
          <Card className="rounded-2xl border-dashed p-8 text-center text-muted-foreground">
            لا توجد أسئلة مضافة بعد. اضغط "إضافة سؤال جديد" للبدء.
          </Card>
        ) : (
          <div className="space-y-3">
            {questions.map((q, idx) => (
              <Card
                key={idx}
                className="rounded-2xl border-border bg-card/60 backdrop-blur-sm p-4 transition-all hover:border-primary/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        #{idx + 1}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-0 text-[10px]">
                        {q.question_type === "boolean" ? "صح أو خطأ" : "خيارات متعددة"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {q.time_limit_seconds} ثانية
                      </span>
                    </div>

                    <h4 className="font-bold text-base">{q.question_text}</h4>

                    {/* Options list */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`text-xs px-3 py-1.5 rounded-lg border ${
                            oIdx === q.correct_index
                              ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold"
                              : "bg-muted/40 border-border text-muted-foreground"
                          }`}
                        >
                          {oIdx === q.correct_index ? "✓ " : ""}{opt}
                        </div>
                      ))}
                    </div>

                    {q.explanation && (
                      <p className="text-xs text-muted-foreground italic pt-1">
                        الشرح: {q.explanation}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 sm:self-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-lg"
                      disabled={idx === 0}
                      onClick={() => moveQuestion(idx, "up")}
                    >
                      <ArrowUp className="size-3.5" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-lg"
                      disabled={idx === questions.length - 1}
                      onClick={() => moveQuestion(idx, "down")}
                    >
                      <ArrowDown className="size-3.5" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-lg text-primary"
                      onClick={() => openQuestionEditor(idx)}
                    >
                      <Pencil className="size-3.5" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-lg hover:text-destructive"
                      onClick={() => deleteQuestion(idx)}
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Question Modal Editor */}
      <Dialog open={qDialogOpen} onOpenChange={setQDialogOpen}>
        <DialogContent className="sm:max-w-lg rounded-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
          <DialogHeader>
            <DialogTitle>
              {editingIndex !== null ? "تعديل السؤال" : "إضافة سؤال جديد"}
            </DialogTitle>
            <DialogDescription className="text-xs">
              صغ السؤال، اختر النوع، وحدد الخيارات والإجابة الصحيحة.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>نص السؤال</Label>
              <Textarea
                value={qText}
                onChange={(e) => setQText(e.target.value)}
                placeholder="أدخل نص السؤال هنا..."
                className="rounded-xl min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>نوع السؤال</Label>
                <Select
                  value={qType}
                  onValueChange={(v: any) => {
                    setQType(v);
                    if (v === "boolean") {
                      setQOptions(["صح", "خطأ"]);
                      setQCorrectIndex(0);
                    } else if (qOptions.length === 2) {
                      setQOptions(["خيار 1", "خيار 2", "خيار 3", "خيار 4"]);
                    }
                  }}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="multi">خيارات متعددة (4 خيارات)</SelectItem>
                    <SelectItem value="boolean">صح أو خطأ (خيارين)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>مهلة الإجابة (ثوانٍ)</Label>
                <Input
                  type="number"
                  value={qTimeLimit}
                  onChange={(e) => setQTimeLimit(Number(e.target.value) || 20)}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Answer Options & Correct Selector */}
            <div className="space-y-2 border-t border-border pt-3">
              <Label className="font-bold">الخيارات (حدد الإجابة الصحيحة):</Label>

              <RadioGroup
                value={qCorrectIndex.toString()}
                onValueChange={(v) => setQCorrectIndex(Number(v))}
                className="space-y-2"
              >
                {qType === "multi" ? (
                  qOptions.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2">
                      <RadioGroupItem value={oIdx.toString()} id={`opt-${oIdx}`} />
                      <Input
                        value={opt}
                        onChange={(e) => {
                          const updated = [...qOptions];
                          updated[oIdx] = e.target.value;
                          setQOptions(updated);
                        }}
                        placeholder={`الخيار ${oIdx + 1}`}
                        className="rounded-xl flex-1 text-xs"
                      />
                    </div>
                  ))
                ) : (
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="flex items-center gap-2 border p-3 rounded-xl">
                      <RadioGroupItem value="0" id="bool-true" />
                      <Label htmlFor="bool-true" className="cursor-pointer font-bold">
                        صح
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 border p-3 rounded-xl">
                      <RadioGroupItem value="1" id="bool-false" />
                      <Label htmlFor="bool-false" className="cursor-pointer font-bold">
                        خطأ
                      </Label>
                    </div>
                  </div>
                )}
              </RadioGroup>
            </div>

            <div className="space-y-2 border-t border-border pt-3">
              <Label>شرح الإجابة (توضيح إضافي عند كشف الإجابة)</Label>
              <Input
                value={qExplanation}
                onChange={(e) => setQExplanation(e.target.value)}
                placeholder="توضيح اختياري..."
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label>رابط صورة تعبيرية (اختياري)</Label>
              <Input
                value={qImageUrl}
                onChange={(e) => setQImageUrl(e.target.value)}
                placeholder="https://example.com/image.png"
                className="rounded-xl dir-ltr text-left"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setQDialogOpen(false)} className="rounded-xl">
              إلغاء
            </Button>
            <Button onClick={handleSaveQuestion} className="rounded-xl bg-primary text-primary-foreground">
              حفظ السؤال
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
