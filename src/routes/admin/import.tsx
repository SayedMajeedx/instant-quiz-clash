import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  FileUp,
  FileJson,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  HelpCircle,
  Eye,
  Trash2,
  Sliders,
  Database,
  UploadCloud,
  Check,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getAllAdminCategories } from "@/lib/admin-data-helper";

export const Route = createFileRoute("/admin/import")({
  component: AdminImportPage,
});

export interface ImportedQuestion {
  question_text: string;
  options: string[];
  correct_index: number;
  time_limit_seconds?: number | undefined;
  question_type?: string | undefined;
  image_url?: string | undefined;
  explanation?: string | undefined;
  subcategory?: string | undefined;
}

export interface ParsedQuiz {
  tempId: string;
  title: string;
  category?: string | undefined;
  subcategory?: string | undefined;
  language?: string | undefined;
  quiz_difficulty?: string | undefined;
  questions: ImportedQuestion[];
  collisionStatus: "new" | "collision" | "unknown";
  matchedDbQuizId?: string | undefined;
}

export type ImportMode = "auto" | "override";
export type CollisionStrategy = "skip" | "upsert" | "duplicate";

function AdminImportPage() {
  const db = supabase as any;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Categories list fetched from DB
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [subcategories, setSubcategories] = useState<
    { id: string; name: string; category_id: string }[]
  >([]);

  // Import configuration
  const [importMode, setImportMode] = useState<ImportMode>("auto");
  const [overrideCategory, setOverrideCategory] = useState<string>("");
  const [overrideSubcategory, setOverrideSubcategory] = useState<string>("");
  const [collisionStrategy, setCollisionStrategy] = useState<CollisionStrategy>("skip");

  // Drag & drop state
  const [isDragging, setIsDragging] = useState(false);
  const [parsedQuizzes, setParsedQuizzes] = useState<ParsedQuiz[]>([]);
  const [fileNameInfo, setFileNameInfo] = useState<string>("");

  // Existing quizzes map for collision check
  const [existingQuizTitles, setExistingQuizTitles] = useState<Map<string, string>>(new Map());

  // Import execution state
  const [isImporting, setIsImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);

  // Question Preview Dialog
  const [previewQuiz, setPreviewQuiz] = useState<ParsedQuiz | null>(null);

  // Fetch Categories & Existing Quiz titles
  const fetchDbData = async () => {
    try {
      const unifiedCategoryData = await getAllAdminCategories();
      // Fetch categories safely
      const { data: catData } = await db.from("categories").select("*");
      if (catData && Array.isArray(catData)) {
        setCategories(
          catData.map((c: any) => ({
            id: c.id,
            name: c.name || c.name_ar || c.name_en || c.title || c.slug || "بدون اسم",
          })),
        );
      }

      // Fetch subcategories safely
      const { data: subData } = await db.from("subcategories").select("*");
      if (subData && Array.isArray(subData)) {
        setSubcategories(
          subData.map((s: any) => ({
            id: s.id,
            name: s.name || s.name_ar || s.name_en || s.title || s.slug || "بدون اسم",
            category_id: s.category_id || "",
          })),
        );
      }

      // Fetch existing quiz titles
      const { data: quizData } = await db
        .from("quizzes")
        .select("id, title, category, subcategory, quiz_kind");

      const mergedCategories = new Map<string, { id: string; name: string }>();
      const categoryIdByName = new Map<string, string>();
      for (const category of Array.isArray(catData) ? catData : []) {
        const name = String(
          category.name ||
            category.name_ar ||
            category.name_en ||
            category.title ||
            category.slug ||
            "",
        ).trim();
        if (!name) continue;
        const key = name.toLocaleLowerCase();
        mergedCategories.set(key, { id: category.id, name });
        categoryIdByName.set(key, category.id);
      }
      for (const quiz of Array.isArray(quizData) ? quizData : []) {
        if (quiz.quiz_kind === "custom_generated") continue;
        const name = String(quiz.category ?? "").trim();
        if (!name) continue;
        const key = name.toLocaleLowerCase();
        if (!mergedCategories.has(key)) {
          const id = `quiz-category:${name}`;
          mergedCategories.set(key, { id, name });
          categoryIdByName.set(key, id);
        }
      }
      setCategories(
        Array.from(mergedCategories.values()).sort((a, b) => a.name.localeCompare(b.name, "ar")),
      );

      const mergedSubcategories = new Map<
        string,
        { id: string; name: string; category_id: string }
      >();
      for (const subcategory of Array.isArray(subData) ? subData : []) {
        const name = String(
          subcategory.name ||
            subcategory.name_ar ||
            subcategory.name_en ||
            subcategory.title ||
            subcategory.slug ||
            "",
        ).trim();
        if (!name) continue;
        const categoryId = subcategory.category_id || "";
        mergedSubcategories.set(`${categoryId}:${name.toLocaleLowerCase()}`, {
          id: subcategory.id,
          name,
          category_id: categoryId,
        });
      }
      for (const quiz of Array.isArray(quizData) ? quizData : []) {
        if (quiz.quiz_kind === "custom_generated") continue;
        const categoryName = String(quiz.category ?? "").trim();
        const name = String(quiz.subcategory ?? "").trim();
        const categoryId = categoryIdByName.get(categoryName.toLocaleLowerCase()) ?? "";
        if (!name || !categoryId) continue;
        const key = `${categoryId}:${name.toLocaleLowerCase()}`;
        if (!mergedSubcategories.has(key)) {
          mergedSubcategories.set(key, {
            id: `quiz-subcategory:${categoryName}:${name}`,
            name,
            category_id: categoryId,
          });
        }
      }
      setSubcategories(Array.from(mergedSubcategories.values()));

      // The shared catalog taxonomy is authoritative across Browse, Admin and imports.
      setCategories(
        unifiedCategoryData.map((category) => ({ id: category.id, name: category.name })),
      );
      setSubcategories(
        unifiedCategoryData.flatMap((category) =>
          category.subcategories.map((subcategory) => ({
            id: subcategory.id,
            name: subcategory.name,
            category_id: category.id,
          })),
        ),
      );

      if (quizData) {
        const titleMap = new Map<string, string>();
        quizData.forEach((q: { id: string; title: string }) => {
          if (q.title) titleMap.set(q.title.trim().toLowerCase(), q.id);
        });
        setExistingQuizTitles(titleMap);
      }
    } catch (err) {
      console.error("Failed to fetch database schema info:", err);
    }
  };

  useEffect(() => {
    void fetchDbData();
  }, []);

  // Update collision status whenever parsed quizzes or existing map changes
  useEffect(() => {
    if (parsedQuizzes.length === 0) return;

    setParsedQuizzes((prev) =>
      prev.map((q) => {
        const normTitle = q.title.trim().toLowerCase();
        const matchedId = existingQuizTitles.get(normTitle);
        return {
          ...q,
          collisionStatus: matchedId ? "collision" : "new",
          matchedDbQuizId: matchedId,
        };
      }),
    );
  }, [existingQuizTitles]);

  // Handle Raw JSON parsing
  const parseJsonContent = (text: string, filename: string) => {
    try {
      const json = JSON.parse(text);
      const quizList: ParsedQuiz[] = [];

      const normalizeQuiz = (raw: any, index: number): ParsedQuiz | null => {
        if (!raw || typeof raw !== "object") return null;

        const title = (raw.title || raw.quiz_title || raw.name || `كويز مستورد ${index + 1}`)
          .toString()
          .trim();
        const rawQuestions = Array.isArray(raw.questions) ? raw.questions : [];

        const questions: ImportedQuestion[] = rawQuestions.map((q: any, qIdx: number) => {
          const question_text = (q.question_text || q.question || q.title || `سؤال ${qIdx + 1}`)
            .toString()
            .trim();
          let options: string[] = [];

          if (Array.isArray(q.options)) {
            options = q.options.map((opt: any) =>
              typeof opt === "object" ? opt.text || opt.label || JSON.stringify(opt) : String(opt),
            );
          } else if (Array.isArray(q.choices)) {
            options = q.choices.map((opt: any) =>
              typeof opt === "object" ? opt.text || opt.label || JSON.stringify(opt) : String(opt),
            );
          } else {
            options = ["خيار 1", "خيار 2", "خيار 3", "خيار 4"];
          }

          let correct_index = typeof q.correct_index === "number" ? q.correct_index : 0;
          if (typeof q.correct_answer === "number") correct_index = q.correct_answer;
          if (typeof q.correct === "number") correct_index = q.correct;

          return {
            question_text,
            options,
            correct_index: Math.max(0, Math.min(correct_index, options.length - 1)),
            time_limit_seconds: Number(q.time_limit_seconds || q.timer || 30),
            question_type: q.question_type || "multiple_choice",
            image_url: q.image_url || null,
            explanation: q.explanation || null,
            subcategory: q.subcategory || null,
          };
        });

        const normTitle = title.trim().toLowerCase();
        const matchedId = existingQuizTitles.get(normTitle);

        return {
          tempId: `import-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          title,
          category: raw.category || raw.cat || "عام",
          subcategory: raw.subcategory || raw.subCat || "",
          language: raw.language || "ar",
          quiz_difficulty: raw.quiz_difficulty || "standard",
          questions,
          collisionStatus: matchedId ? "collision" : "new",
          matchedDbQuizId: matchedId,
        };
      };

      if (Array.isArray(json)) {
        json.forEach((item, idx) => {
          const parsed = normalizeQuiz(item, idx);
          if (parsed) quizList.push(parsed);
        });
      } else if (typeof json === "object") {
        if (Array.isArray(json.quizzes)) {
          json.quizzes.forEach((item: any, idx: number) => {
            const parsed = normalizeQuiz(item, idx);
            if (parsed) quizList.push(parsed);
          });
        } else {
          const parsed = normalizeQuiz(json, 0);
          if (parsed) quizList.push(parsed);
        }
      }

      if (quizList.length === 0) {
        toast.error("الملف لا يحتوي على كويزات أو أسئلة بتنسيق JSON صحيح");
        return;
      }

      setParsedQuizzes((prev) => [...prev, ...quizList]);
      setFileNameInfo(filename);
      toast.success(`تم تحليل ${quizList.length} كويز بنجاح من الملف!`);
    } catch (err) {
      console.error("JSON parse error:", err);
      toast.error("الملف المحدد ليس تنسيق JSON ذو بنية سليمة");
    }
  };

  // Drag and Drop handlers
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter((f) => f.name.endsWith(".json"));
    if (files.length === 0) {
      toast.error("يرجى إفلات ملفات بتنسيق .json فقط");
      return;
    }

    files.forEach((file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) parseJsonContent(text, file.name);
      };
      reader.readAsText(file, "UTF-8");
    });
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter((f) => f.name.endsWith(".json"));
    if (files.length === 0) return;

    files.forEach((file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) parseJsonContent(text, file.name);
      };
      reader.readAsText(file, "UTF-8");
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Remove Quiz from import queue
  const handleRemoveQuiz = (tempId: string) => {
    setParsedQuizzes((prev) => prev.filter((q) => q.tempId !== tempId));
  };

  // Clear all parsed quizzes
  const handleClearAll = () => {
    setParsedQuizzes([]);
    setFileNameInfo("");
  };

  // Execute Database Batch Import
  const handleConfirmImport = async () => {
    if (parsedQuizzes.length === 0) {
      toast.error("لا توجد كويزات مستوردة في قائمة المعاينة");
      return;
    }

    if (importMode === "override" && !overrideCategory) {
      toast.error("يرجى اختيار القسم الهدف في وضع التجاوز المحدد");
      return;
    }

    setIsImporting(true);
    setImportProgress(10);

    try {
      const { data: userData } = await supabase.auth.getUser();
      const currentUserId = userData.user?.id || null;

      let importedCount = 0;
      let skippedCount = 0;
      let updatedCount = 0;
      let failedCount = 0;
      let lastErrorMessage = "";

      const totalItems = parsedQuizzes.length;

      for (let i = 0; totalItems > 0 && i < totalItems; i++) {
        const item = parsedQuizzes[i]!;

        // Determine final category and subcategory
        const targetCategory =
          importMode === "override" ? overrideCategory : item.category || "عام";
        const targetSubcategory =
          importMode === "override"
            ? overrideSubcategory === "none"
              ? ""
              : overrideSubcategory
            : item.subcategory || "";

        // Check Collision strategy
        if (item.collisionStatus === "collision") {
          if (collisionStrategy === "skip") {
            skippedCount++;
            setImportProgress(Math.round(((i + 1) / totalItems) * 100));
            continue;
          }

          if (collisionStrategy === "upsert" && item.matchedDbQuizId) {
            // Delete old questions first
            await db.from("questions").delete().eq("quiz_id", item.matchedDbQuizId);

            // Update quiz meta
            await db
              .from("quizzes")
              .update({
                title: item.title,
                category: targetCategory,
                subcategory: targetSubcategory,
              })
              .eq("id", item.matchedDbQuizId);

            // Insert new questions
            if (item.questions.length > 0) {
              const questionInserts = item.questions.map((q, idx) => ({
                quiz_id: item.matchedDbQuizId,
                question_text: q.question_text,
                options: q.options,
                correct_index: q.correct_index,
                time_limit_seconds: q.time_limit_seconds || 30,
                order_index: idx,
                question_type: q.question_type || "multiple_choice",
                image_url: q.image_url || null,
                explanation: q.explanation || null,
                subcategory: q.subcategory || null,
              }));

              await db.from("questions").insert(questionInserts);
            }

            updatedCount++;
            setImportProgress(Math.round(((i + 1) / totalItems) * 100));
            continue;
          }
        }

        // New Quiz or Duplicate Strategy: Insert new Quiz record
        const quizInsertTitle =
          item.collisionStatus === "collision" && collisionStrategy === "duplicate"
            ? `${item.title} (مستورد)`
            : item.title;

        let newQuiz: any = null;
        let quizErr: any = null;

        // Tier 1: Attempt full insert with category and subcategory
        const quizPayloadFull: any = {
          title: quizInsertTitle,
          category: targetCategory || null,
          subcategory: targetSubcategory || null,
        };
        if (currentUserId) quizPayloadFull.user_id = currentUserId;

        const res1 = await db.from("quizzes").insert([quizPayloadFull]).select().single();
        if (!res1.error && res1.data) {
          newQuiz = res1.data;
        } else {
          quizErr = res1.error;
          console.warn("Full quiz insert failed, trying fallback insert:", res1.error);

          // Tier 2: Minimal insert fallback (in case category/subcategory columns are missing in PostgREST schema cache)
          const quizPayloadMinimal: any = {
            title: quizInsertTitle,
          };
          if (currentUserId) quizPayloadMinimal.user_id = currentUserId;

          const res2 = await db.from("quizzes").insert([quizPayloadMinimal]).select().single();
          if (!res2.error && res2.data) {
            newQuiz = res2.data;
            quizErr = null;
          } else {
            quizErr = res2.error;
          }
        }

        if (quizErr || !newQuiz) {
          console.error("Failed to insert quiz:", quizErr);
          failedCount++;
          lastErrorMessage = quizErr?.message || "فشل في حفظ البيانات";
          continue;
        }

        // Insert questions
        if (item.questions.length > 0) {
          const questionInsertsFull = item.questions.map((q, idx) => ({
            quiz_id: newQuiz.id,
            question_text: q.question_text,
            options: q.options,
            correct_index: q.correct_index,
            time_limit_seconds: q.time_limit_seconds || 30,
            order_index: idx,
            question_type: q.question_type || "multiple_choice",
            image_url: q.image_url || null,
            explanation: q.explanation || null,
            subcategory: q.subcategory || null,
          }));

          const { error: qErr } = await db.from("questions").insert(questionInsertsFull);
          if (qErr) {
            console.warn("Full questions insert failed, trying minimal questions insert:", qErr);
            const questionInsertsMinimal = item.questions.map((q, idx) => ({
              quiz_id: newQuiz.id,
              question_text: q.question_text,
              options: q.options,
              correct_index: q.correct_index,
              time_limit_seconds: q.time_limit_seconds || 30,
              order_index: idx,
            }));
            const { error: qErr2 } = await db.from("questions").insert(questionInsertsMinimal);
            if (qErr2) {
              console.error("Failed to insert questions for quiz:", newQuiz.id, qErr2);
            }
          }
        }

        importedCount++;
        setImportProgress(Math.round(((i + 1) / totalItems) * 100));
      }

      setImportProgress(100);

      if (importedCount > 0 || updatedCount > 0) {
        toast.success(
          `تمت العملية! (تم إضافة: ${importedCount}، تحديث: ${updatedCount}، تخطي: ${skippedCount}${failedCount > 0 ? `، فشل: ${failedCount}` : ""})`,
        );
      } else if (skippedCount > 0) {
        toast.info(
          `تم تخطي جميع الكويزات (${skippedCount}) لأن عناوينها موجودة مسبقاً في قاعدة البيانات بالتزامن مع خيار (تخطي الكويزات الموجودة). اختر (استبدال) أو (إنشاء نسخة) لإعادة استيرادها.`,
        );
      } else {
        toast.error(
          `لم يتم استيراد أي كويز. ${lastErrorMessage ? `السبب: ${lastErrorMessage}` : ""}`,
        );
      }

      // Reset state and refresh existing quiz titles
      if (importedCount > 0 || updatedCount > 0) {
        setParsedQuizzes([]);
        setFileNameInfo("");
      }
      void fetchDbData();
    } catch (err: any) {
      console.error("Bulk import failed:", err);
      toast.error(err?.message || "حدث خطأ غير متوقع أثناء الاستيراد");
    } finally {
      setIsImporting(false);
      setImportProgress(0);
    }
  };

  return (
    <div dir="rtl" className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <FileUp className="size-5" />
            </span>
            <h1 className="font-display text-2xl font-extrabold sm:text-3xl">
              مستورد ملفات JSON الذكي
            </h1>
          </div>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            ارفع كويزات مفردة أو مصفوفات كاملة بملفات JSON مع تحديد وضع دمج وتصنيف الكويزات
            تلقائياً.
          </p>
        </div>

        {parsedQuizzes.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearAll}
            className="rounded-2xl gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
          >
            <Trash2 className="size-4" />
            <span>تفريغ القائمة ({parsedQuizzes.length})</span>
          </Button>
        )}
      </div>

      {/* Main Grid: Upload Dropzone & Configuration Options */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Dropzone Area (Spans 2 cols on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="rounded-3xl border-border shadow-sm overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="font-display text-lg font-bold flex items-center gap-2">
                <UploadCloud className="size-5 text-primary" />
                <span>منطقة رفع وسحب الملفات (.json)</span>
              </CardTitle>
              <CardDescription className="text-xs">
                يدعم ملفات الكويز المفردة أو مصفوفات الكويزات بملفات JSON
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative cursor-pointer flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition-all ${
                  isDragging
                    ? "border-primary bg-primary/10 scale-[0.99]"
                    : "border-border/80 bg-muted/20 hover:border-primary/50 hover:bg-muted/40"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />

                <div className="flex size-16 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-4 shadow-sm">
                  <FileJson className="size-8" />
                </div>

                <h3 className="font-display text-base font-bold sm:text-lg">
                  اسحب وأفلت ملفات JSON هنا أو{" "}
                  <span className="text-primary underline">استعرض جهازك</span>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground max-w-sm leading-relaxed">
                  يمكنك رفع ملف واحد أو ملفات متعددة في نفس الوقت وسيقوم النظام بتفحص البنية
                  والأسئلة تلقائياً.
                </p>

                {fileNameInfo && (
                  <Badge variant="secondary" className="mt-4 rounded-xl px-3 py-1 text-xs gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    <span>آخر ملف: {fileNameInfo}</span>
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configurations Panel */}
        <div className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm">
            <CardHeader className="p-6 pb-3">
              <CardTitle className="font-display text-lg font-bold flex items-center gap-2">
                <Sliders className="size-5 text-primary" />
                <span>إعدادات وتصنيف الاستيراد</span>
              </CardTitle>
              <CardDescription className="text-xs">
                اختر طريقة تعيين القسم الرئيسي والفرعي وكيفية التعامل مع الكويزات المكررة.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-0 space-y-5">
              {/* Mode Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground block">
                  وضع التصنيف (Mode)
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-muted/50 border border-border/60">
                  <button
                    type="button"
                    onClick={() => setImportMode("auto")}
                    className={`rounded-xl py-2 px-3 text-xs font-bold transition-all ${
                      importMode === "auto"
                        ? "bg-background text-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    تلقائي (Auto)
                  </button>
                  <button
                    type="button"
                    onClick={() => setImportMode("override")}
                    className={`rounded-xl py-2 px-3 text-xs font-bold transition-all ${
                      importMode === "override"
                        ? "bg-background text-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    تجاوز وإسناد (Override)
                  </button>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {importMode === "auto"
                    ? "يستخرج اسم القسم والفرع المكتوب داخل كل كويز بملف JSON."
                    : "يجبر جميع الكويزات بملف JSON على الانتماء للقسم المكتوب أدناه."}
                </p>
              </div>

              {/* Override Controls */}
              {importMode === "override" && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-3.5 space-y-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-foreground">
                      القسم الرئيسي الموحد *
                    </label>
                    <Select value={overrideCategory} onValueChange={setOverrideCategory}>
                      <SelectTrigger className="rounded-xl text-xs bg-background">
                        <SelectValue placeholder="اختر القسم..." />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        {categories.map((c) => (
                          <SelectItem key={c.id} value={c.name} className="text-xs">
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-foreground">
                      القسم الفرعي الموحد (اختياري)
                    </label>
                    <Select value={overrideSubcategory} onValueChange={setOverrideSubcategory}>
                      <SelectTrigger className="rounded-xl text-xs bg-background">
                        <SelectValue placeholder="بدون قسم فرعي" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        <SelectItem value="none" className="text-xs">
                          بدون قسم فرعي
                        </SelectItem>
                        {subcategories
                          .filter((subcategory) => {
                            if (!overrideCategory) return true;
                            const category = categories.find(
                              (item) => item.name === overrideCategory,
                            );
                            return category?.id === subcategory.category_id;
                          })
                          .map((s) => (
                            <SelectItem key={s.id} value={s.name} className="text-xs">
                              {s.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Collision Strategy Selector */}
              <div className="space-y-2 pt-2 border-t border-border/60">
                <label className="text-xs font-bold text-foreground block">
                  استراتيجية التعارض (Collisions)
                </label>
                <RadioGroup
                  value={collisionStrategy}
                  onValueChange={(val) => setCollisionStrategy(val as CollisionStrategy)}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2.5 rounded-2xl border border-border p-2.5 hover:bg-muted/20">
                    <RadioGroupItem value="skip" id="strat-skip" />
                    <Label
                      htmlFor="strat-skip"
                      className="text-xs font-semibold cursor-pointer flex-1"
                    >
                      تخطي الكويزات الموجودة (Skip)
                    </Label>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-2xl border border-border p-2.5 hover:bg-muted/20">
                    <RadioGroupItem value="upsert" id="strat-upsert" />
                    <Label
                      htmlFor="strat-upsert"
                      className="text-xs font-semibold cursor-pointer flex-1"
                    >
                      استبدال وتحديث الأسئلة (Upsert)
                    </Label>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-2xl border border-border p-2.5 hover:bg-muted/20">
                    <RadioGroupItem value="duplicate" id="strat-duplicate" />
                    <Label
                      htmlFor="strat-duplicate"
                      className="text-xs font-semibold cursor-pointer flex-1"
                    >
                      إنشاء نسخة جديدة مكررة (Duplicate)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Preview Table */}
      <Card className="rounded-3xl border-border shadow-sm overflow-hidden">
        <CardHeader className="p-6 pb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle className="font-display text-lg font-bold flex items-center gap-2">
              <Database className="size-5 text-primary" />
              <span>معاينة وتأكيد كويزات الاستيراد</span>
              <Badge variant="secondary" className="rounded-xl px-2.5 py-0.5 text-xs mr-2">
                {parsedQuizzes.length} كويز جاهز
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs">
              راجع عناوين الكويزات، عدد الأسئلة، الأقسام وحالة المطابقة قبل الحفظ النهائي بـ
              Supabase.
            </CardDescription>
          </div>

          <Button
            onClick={handleConfirmImport}
            disabled={parsedQuizzes.length === 0 || isImporting}
            className="rounded-2xl gap-2 bg-gradient-hero text-primary-foreground shadow-sm hover:scale-[1.01]"
          >
            <Sparkles className="size-4" />
            <span>{isImporting ? "جارٍ حفظ البيانات..." : "تأكيد واستيراد الكل لـ Supabase"}</span>
          </Button>
        </CardHeader>

        {isImporting && (
          <div className="px-6 py-2 bg-primary/5 border-y border-primary/20 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span>تقدم عملية الاستيراد الدفعية...</span>
              <span>{importProgress}%</span>
            </div>
            <Progress value={importProgress} className="h-2 rounded-full" />
          </div>
        )}

        <CardContent className="p-6 pt-0">
          {parsedQuizzes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center space-y-3">
              <FileText className="mx-auto size-10 text-muted-foreground/50" />
              <p className="text-sm font-semibold">لا توجد كويزات في قائمة المعاينة حالياً</p>
              <p className="text-xs text-muted-foreground">
                قم بسحب وإفلات ملف JSON في المنطقة أعلاه لتظهر الكويزات هنا للمعاينة
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-border overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="text-right font-bold text-xs">#</TableHead>
                    <TableHead className="text-right font-bold text-xs">عنوان الكويز</TableHead>
                    <TableHead className="text-center font-bold text-xs">عدد الأسئلة</TableHead>
                    <TableHead className="text-right font-bold text-xs">القسم المحدد</TableHead>
                    <TableHead className="text-center font-bold text-xs">حالة التعارض</TableHead>
                    <TableHead className="text-center font-bold text-xs">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parsedQuizzes.map((quiz, index) => {
                    const displayCat =
                      importMode === "override"
                        ? overrideCategory || "غير محدد"
                        : quiz.category || "عام";
                    const displaySub =
                      importMode === "override"
                        ? overrideSubcategory || ""
                        : quiz.subcategory || "";

                    return (
                      <TableRow
                        key={quiz.tempId}
                        className="group hover:bg-muted/20 transition-colors"
                      >
                        <TableCell className="text-xs text-muted-foreground font-mono">
                          {index + 1}
                        </TableCell>
                        <TableCell className="font-bold text-sm">
                          <span className="line-clamp-1">{quiz.title}</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="rounded-xl px-2.5 font-bold text-xs">
                            {quiz.questions.length} سؤال
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-semibold">{displayCat}</span>
                            {displaySub && displaySub !== "none" && (
                              <span className="text-[11px] text-muted-foreground">
                                ← {displaySub}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          {quiz.collisionStatus === "collision" ? (
                            <Badge
                              variant="outline"
                              className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-300 rounded-xl text-[11px] gap-1"
                            >
                              <AlertTriangle className="size-3" />
                              <span>موجود حالياً</span>
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-300 rounded-xl text-[11px] gap-1"
                            >
                              <CheckCircle2 className="size-3" />
                              <span>جديد</span>
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setPreviewQuiz(quiz)}
                              className="size-8 rounded-xl text-muted-foreground hover:text-primary"
                              title="معاينة الأسئلة"
                            >
                              <Eye className="size-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveQuiz(quiz.tempId)}
                              className="size-8 rounded-xl text-muted-foreground hover:text-destructive"
                              title="حذف من الاستيراد"
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* MODAL: Question Preview Dialog */}
      <Dialog open={!!previewQuiz} onOpenChange={() => setPreviewQuiz(null)}>
        <DialogContent dir="rtl" className="sm:max-w-2xl rounded-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold flex items-center gap-2">
              <HelpCircle className="size-5 text-primary" />
              <span>معاينة كويز: {previewQuiz?.title}</span>
            </DialogTitle>
            <DialogDescription className="text-xs">
              يتضمن هذا الكويز {previewQuiz?.questions.length} سؤال جاهز للرفع
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {previewQuiz?.questions.map((q, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-muted/20 p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-sm text-foreground">
                    {idx + 1}. {q.question_text}
                  </span>
                  <Badge variant="outline" className="text-[10px] shrink-0 rounded-lg">
                    ⏱️ {q.time_limit_seconds || 30} ثانية
                  </Badge>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className={`rounded-xl px-3 py-1.5 text-xs flex items-center justify-between border ${
                        optIdx === q.correct_index
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold"
                          : "border-border/60 bg-background text-muted-foreground"
                      }`}
                    >
                      <span className="truncate">{opt}</span>
                      {optIdx === q.correct_index && (
                        <Check className="size-3 text-emerald-500 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button
              onClick={() => setPreviewQuiz(null)}
              className="rounded-2xl text-xs w-full sm:w-auto"
            >
              إغلاق المعاينة
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
