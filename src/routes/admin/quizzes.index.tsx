import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { QUIZ_LIBRARY } from "@/lib/quiz-library";
import { toast } from "sonner";
import {
  Search,
  Filter,
  Plus,
  Pencil,
  Eye,
  Trash2,
  Play,
  Globe,
  Lock,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FolderEdit,
  SlidersHorizontal,
  HelpCircle,
  X,
  Check,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  getAllAdminCategories,
  getAllAdminQuizzes,
  saveLocalQuizOverride,
  saveLocalSubcategory,
  isUUID,
  deleteAdminQuizzes,
  type AdminCategoryItem,
} from "@/lib/admin-data-helper";

export const Route = createFileRoute("/admin/quizzes/")({
  component: AdminQuizzesPage,
});

export type AdminQuiz = {
  id: string;
  title: string;
  user_id: string;
  created_at: string;
  is_public: boolean;
  category: string;
  subcategory: string | null;
  language: string;
  quiz_difficulty: "easy" | "standard" | "challenge" | string;
  question_count: number;
  questions?: any[];
};

export function AdminQuizzesPage() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<AdminQuiz[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("ALL");
  const [selectedPublicFilter, setSelectedPublicFilter] = useState<string>("ALL");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Selection state
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Categories records state for dropdowns
  const [allCategories, setAllCategories] = useState<AdminCategoryItem[]>([]);
  const [customSubcategoryInput, setCustomSubcategoryInput] = useState("");

  // Dialog States
  const [isBulkCategoryOpen, setIsBulkCategoryOpen] = useState(false);
  const [bulkCategory, setBulkCategory] = useState("");
  const [bulkSubcategory, setBulkSubcategory] = useState("");

  const [isBulkDeleteOpen, setIsBulkDeleteOpen] = useState(false);
  const [isSingleDeleteOpen, setIsSingleDeleteOpen] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<AdminQuiz | null>(null);

  // Preview Sheet state
  const [previewQuiz, setPreviewQuiz] = useState<AdminQuiz | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Action loading states
  const [actionLoading, setActionLoading] = useState(false);

  // Fetch quizzes and categories
  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const [cats, adminQuizzes] = await Promise.all([
        getAllAdminCategories(),
        getAllAdminQuizzes(),
      ]);

      setAllCategories(cats);

      const formatted: AdminQuiz[] = adminQuizzes.map((q) => ({
        id: q.id,
        title: q.title || "بدون عنوان",
        user_id: q.user_id || "system",
        created_at: q.created_at || new Date().toISOString(),
        is_public: q.is_public ?? true,
        category: q.category || "عام",
        subcategory: q.subcategory || null,
        language: q.language || "ar",
        quiz_difficulty: q.quiz_difficulty || "standard",
        question_count: q.question_count,
        questions: q.questions || [],
      }));

      setQuizzes(formatted);
    } catch (err) {
      toast.error("حدث خطأ أثناء تحميل الكويزات");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // Extract unique categories
  const categoriesList = useMemo(() => {
    const set = new Set<string>();
    quizzes.forEach((q) => {
      if (q.category) set.add(q.category);
    });
    return Array.from(set).sort();
  }, [quizzes]);

  // Filtered quizzes
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((q) => {
      // Search
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        q.title.toLowerCase().includes(query) ||
        (q.category && q.category.toLowerCase().includes(query)) ||
        (q.subcategory && q.subcategory.toLowerCase().includes(query));

      // Category
      const matchesCategory = selectedCategory === "ALL" || q.category === selectedCategory;

      // Difficulty
      const matchesDifficulty =
        selectedDifficulty === "ALL" || q.quiz_difficulty === selectedDifficulty;

      // Public status
      const matchesPublic =
        selectedPublicFilter === "ALL" ||
        (selectedPublicFilter === "PUBLIC" && q.is_public) ||
        (selectedPublicFilter === "PRIVATE" && !q.is_public);

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPublic;
    });
  }, [quizzes, searchQuery, selectedCategory, selectedDifficulty, selectedPublicFilter]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedPublicFilter, pageSize]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredQuizzes.length / pageSize));
  const paginatedQuizzes = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredQuizzes.slice(start, start + pageSize);
  }, [filteredQuizzes, currentPage, pageSize]);

  // Checkbox handlers
  const isAllCurrentPageSelected =
    paginatedQuizzes.length > 0 &&
    paginatedQuizzes.every((q) => selectedIds.has(q.id));

  const toggleSelectAll = () => {
    const newSelected = new Set(selectedIds);
    if (isAllCurrentPageSelected) {
      paginatedQuizzes.forEach((q) => newSelected.delete(q.id));
    } else {
      paginatedQuizzes.forEach((q) => newSelected.add(q.id));
    }
    setSelectedIds(newSelected);
  };

  const toggleSelectOne = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  // Single is_public toggle
  const handleTogglePublic = async (quiz: AdminQuiz) => {
    const newStatus = !quiz.is_public;
    try {
      if (isUUID(quiz.id)) {
        const { error } = await (supabase.from("quizzes") as any)
          .update({ is_public: newStatus })
          .eq("id", quiz.id);
        if (error) throw error;
      } else {
        await saveLocalQuizOverride(quiz.id, { is_public: newStatus, title: quiz.title });
      }

      setQuizzes((prev) =>
        prev.map((item) => (item.id === quiz.id ? { ...item, is_public: newStatus } : item))
      );
      toast.success(newStatus ? "تمت إتاحة الكويز كعمومي" : "تم تحويل الكويز إلى خاص");
    } catch (err: any) {
      console.error("Toggle public failed:", err);
      toast.error(err?.message || "فشل تغيير حالة الكويز");
    }
  };

  // Bulk category reassign
  const handleBulkReassignCategory = async () => {
    if (!bulkCategory.trim()) {
      toast.error("يرجى اختيار القسم الرئيسي الجديد من القائمة");
      return;
    }

    let finalSubcategory = bulkSubcategory.trim();
    if (bulkSubcategory === "__CUSTOM__") {
      finalSubcategory = customSubcategoryInput.trim();
      if (finalSubcategory) {
        saveLocalSubcategory("cat-id", bulkCategory.trim(), finalSubcategory);
      }
    }

    setActionLoading(true);
    const selectedArray = Array.from(selectedIds);

    try {
      const payload: any = { category: bulkCategory.trim() };
      if (finalSubcategory) {
        payload.subcategory = finalSubcategory;
      }

      const validUuidIds = selectedArray.filter((id) => isUUID(id));
      if (validUuidIds.length > 0) {
        const { error } = await (supabase.from("quizzes") as any)
          .update(payload)
          .in("id", validUuidIds);
        if (error) throw error;
      }

      const newCategory = bulkCategory.trim();

      for (const quizId of selectedArray) {
        const quizObj = quizzes.find((q) => q.id === quizId);
        await saveLocalQuizOverride(quizId, {
          category: newCategory,
          subcategory: finalSubcategory || "",
          ...(quizObj?.title ? { title: quizObj.title } : {}),
        });
      }

      setQuizzes((prev) =>
        prev.map((item) => {
          if (!selectedIds.has(item.id)) return item;
          return {
            ...item,
            category: newCategory,
            subcategory: finalSubcategory || item.subcategory,
          };
        })
      );

      toast.success(`تم تحديث القسم لـ ${selectedIds.size} كويز بنجاح`);
      setIsBulkCategoryOpen(false);
      setBulkCategory("");
      setBulkSubcategory("");
      setCustomSubcategoryInput("");
      setSelectedIds(new Set());
    } catch {
      toast.error("حدث خطأ أثناء تعديل القسم التجميعي");
    } finally {
      setActionLoading(false);
    }
  };

  // Bulk public toggle
  const handleBulkTogglePublic = async (makePublic: boolean) => {
    setActionLoading(true);
    const selectedArray = Array.from(selectedIds);

    try {
      const validUuidIds = selectedArray.filter((id) => isUUID(id));
      if (validUuidIds.length > 0) {
        const { error } = await (supabase.from("quizzes") as any)
          .update({ is_public: makePublic })
          .in("id", validUuidIds);

        if (error) {
          console.warn("Bulk public note:", error.message);
        }
      }

      for (const quizId of selectedArray) {
        await saveLocalQuizOverride(quizId, { is_public: makePublic });
      }

      setQuizzes((prev) =>
        prev.map((item) => (selectedIds.has(item.id) ? { ...item, is_public: makePublic } : item))
      );

      toast.success(`تم ${makePublic ? "إتاحة" : "إخفاء"} ${selectedIds.size} كويز بنجاح`);
      setSelectedIds(new Set());
    } catch {
      toast.error("فشل تعديل الحالة التجميعية");
    } finally {
      setActionLoading(false);
    }
  };

  // Bulk delete
  const handleBulkDelete = async () => {
    setActionLoading(true);
    try {
      const selectedQuizzes = quizzes
        .filter((quiz) => selectedIds.has(quiz.id))
        .map(({ id, title }) => ({ id, title }));
      await deleteAdminQuizzes(selectedQuizzes);

      setQuizzes((prev) => prev.filter((item) => !selectedIds.has(item.id)));
      toast.success(`تم حذف ${selectedIds.size} كويز بنجاح`);
      setIsBulkDeleteOpen(false);
      setSelectedIds(new Set());
    } catch (error) {
      console.error("Bulk quiz deletion failed:", error);
      toast.error("حدث خطأ أثناء حذف الكويزات المحددة");
    } finally {
      setActionLoading(false);
    }
  };

  // Single delete
  const handleSingleDelete = async () => {
    if (!quizToDelete) return;
    setActionLoading(true);

    try {
      await deleteAdminQuizzes([{ id: quizToDelete.id, title: quizToDelete.title }]);

      setQuizzes((prev) => prev.filter((item) => item.id !== quizToDelete.id));
      toast.success("تم حذف الكويز بنجاح");
      setIsSingleDeleteOpen(false);
      setQuizToDelete(null);
    } catch (error) {
      console.error("Quiz deletion failed:", error);
      toast.error("فشل حذف الكويز");
    } finally {
      setActionLoading(false);
    }
  };

  // Host quick action
  const handleHostQuiz = (quizId: string) => {
    void navigate({ to: "/host" as any, search: { quizId } as any });
  };

  return (
    <div dir="rtl" className="space-y-6">
      {/* Top Header & Action */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <HelpCircle className="size-3.5" />
            إدارة الكويزات والأسئلة
          </div>
          <h1 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">
            إدارة مكتبة الكويزات
          </h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            عرض، تصفية، تعديل وإسناد الأقسام للكويزات مع إمكانية التعديل والتنفيذ التجميعي.
          </p>
        </div>

        <Button
          asChild
          className="rounded-2xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
        >
          <Link to="/admin/quizzes/$quizId/edit" params={{ quizId: "new" } as any}>
            <Plus className="ml-2 size-4" />
            <span>إنشاء كويز جديد</span>
          </Link>
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <Card className="rounded-3xl border-border bg-card/60 backdrop-blur-md shadow-sm">
        <CardContent className="p-4 md:p-6 space-y-4">
          <div className="grid gap-3 md:grid-cols-4">
            {/* Search input */}
            <div className="relative md:col-span-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ابحث بالعنوان أو القسم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-9 rounded-2xl border-border bg-background/50 text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="rounded-2xl border-border bg-background/50 text-sm">
                <div className="flex items-center gap-2 truncate">
                  <Filter className="size-3.5 text-muted-foreground shrink-0" />
                  <SelectValue placeholder="تصفية حسب القسم" />
                </div>
              </SelectTrigger>
              <SelectContent dir="rtl" className="rounded-2xl">
                <SelectItem value="ALL">جميع الأقسام ({quizzes.length})</SelectItem>
                {categoriesList.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="rounded-2xl border-border bg-background/50 text-sm">
                <div className="flex items-center gap-2 truncate">
                  <SlidersHorizontal className="size-3.5 text-muted-foreground shrink-0" />
                  <SelectValue placeholder="الصعوبة" />
                </div>
              </SelectTrigger>
              <SelectContent dir="rtl" className="rounded-2xl">
                <SelectItem value="ALL">جميع المستويات</SelectItem>
                <SelectItem value="easy">سهل (Easy)</SelectItem>
                <SelectItem value="standard">قياسي (Standard)</SelectItem>
                <SelectItem value="challenge">تحدي (Challenge)</SelectItem>
              </SelectContent>
            </Select>

            {/* Public Filter */}
            <Select value={selectedPublicFilter} onValueChange={setSelectedPublicFilter}>
              <SelectTrigger className="rounded-2xl border-border bg-background/50 text-sm">
                <div className="flex items-center gap-2 truncate">
                  <Globe className="size-3.5 text-muted-foreground shrink-0" />
                  <SelectValue placeholder="حالة النشر" />
                </div>
              </SelectTrigger>
              <SelectContent dir="rtl" className="rounded-2xl">
                <SelectItem value="ALL">الكل (عام وخاص)</SelectItem>
                <SelectItem value="PUBLIC">عام فقط (Public)</SelectItem>
                <SelectItem value="PRIVATE">خاص فقط (Private)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter summary tags */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-3 text-xs text-muted-foreground">
            <div>
              تم العثور على <span className="font-bold text-foreground">{filteredQuizzes.length}</span>{" "}
              كويز من أصل <span className="font-bold text-foreground">{quizzes.length}</span>
            </div>

            {(searchQuery ||
              selectedCategory !== "ALL" ||
              selectedDifficulty !== "ALL" ||
              selectedPublicFilter !== "ALL") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("ALL");
                  setSelectedDifficulty("ALL");
                  setSelectedPublicFilter("ALL");
                }}
                className="h-7 text-xs rounded-xl hover:bg-destructive/10 hover:text-destructive"
              >
                إعادة ضبط الفلاتر
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bulk Action Bar (Visible when 1+ selected) */}
      {selectedIds.size > 0 && (
        <div className="sticky top-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4 backdrop-blur-xl shadow-lg transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="rounded-xl px-3 py-1 text-xs font-bold">
              {selectedIds.size} محدّد
            </Badge>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              اختر إجراءً لتطبيقه على كافة الكويزات المحددة:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Reassign category */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsBulkCategoryOpen(true)}
              className="rounded-xl text-xs gap-1.5 border-primary/30 hover:bg-primary/20"
            >
              <FolderEdit className="size-3.5" />
              تغيير القسم
            </Button>

            {/* Toggle public */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleBulkTogglePublic(true)}
              className="rounded-xl text-xs gap-1.5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
            >
              <Globe className="size-3.5" />
              جعلها عامة
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => handleBulkTogglePublic(false)}
              className="rounded-xl text-xs gap-1.5 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
            >
              <Lock className="size-3.5" />
              جعلها خاصة
            </Button>

            {/* Bulk delete */}
            <Button
              size="sm"
              variant="destructive"
              onClick={() => setIsBulkDeleteOpen(true)}
              className="rounded-xl text-xs gap-1.5"
            >
              <Trash2 className="size-3.5" />
              حذف المحدد
            </Button>

            {/* Clear selection */}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSelectedIds(new Set())}
              className="rounded-xl text-xs text-muted-foreground hover:text-foreground"
            >
              إلغاء التحديد
            </Button>
          </div>
        </div>
      )}

      {/* Main Table */}
      <Card className="rounded-3xl border-border bg-card/80 backdrop-blur-sm shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-muted/50 border-b border-border text-xs text-muted-foreground uppercase">
              <tr>
                <th className="p-4 w-12 text-center">
                  <Checkbox
                    checked={isAllCurrentPageSelected}
                    onCheckedChange={toggleSelectAll}
                    aria-label="تحديد الكل"
                  />
                </th>
                <th className="p-4">الكويز</th>
                <th className="p-4">القسم / الفرعي</th>
                <th className="p-4">المستوى</th>
                <th className="p-4 text-center">الأسئلة</th>
                <th className="p-4 text-center">عام / خاص</th>
                <th className="p-4 text-left">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                      <span>جارٍ تحميل قائمة الكويزات...</span>
                    </div>
                  </td>
                </tr>
              ) : paginatedQuizzes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <HelpCircle className="size-10 text-muted-foreground/50" />
                      <p className="font-semibold text-base">لم نجد أي كويزات تطابق شروط البحث</p>
                      <p className="text-xs">جرّب تغيير عبارة البحث أو الفلاتر أعلاه.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedQuizzes.map((quiz) => {
                  const isSelected = selectedIds.has(quiz.id);
                  return (
                    <tr
                      key={quiz.id}
                      className={`transition-colors hover:bg-muted/40 ${
                        isSelected ? "bg-primary/5 hover:bg-primary/10" : ""
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="p-4 text-center">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleSelectOne(quiz.id)}
                          aria-label={`تحديد ${quiz.title}`}
                        />
                      </td>

                      {/* Title & Info */}
                      <td className="p-4 max-w-xs">
                        <Link
                          to="/admin/quizzes/$quizId/edit"
                          params={{ quizId: quiz.id } as any}
                          className="font-bold text-foreground hover:text-primary transition-colors line-clamp-1 block"
                        >
                          {quiz.title}
                        </Link>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground">
                          <span>اللغة: {quiz.language === "ar" ? "عربي 🇸🇦" : "English 🇬🇧"}</span>
                          <span>•</span>
                          <span>
                            {new Date(quiz.created_at).toLocaleDateString("ar-SA", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </td>

                      {/* Category & Subcategory */}
                      <td className="p-4">
                        <div className="flex flex-col gap-1 items-start">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-0 text-xs rounded-lg font-medium"
                          >
                            {quiz.category || "عام"}
                          </Badge>
                          {quiz.subcategory && (
                            <span className="text-[11px] text-muted-foreground">
                              ↳ {quiz.subcategory}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Difficulty */}
                      <td className="p-4">
                        <Badge
                          variant="outline"
                          className={`text-xs rounded-lg border-0 font-semibold ${
                            quiz.quiz_difficulty === "easy"
                              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                              : quiz.quiz_difficulty === "challenge"
                              ? "bg-rose-500/15 text-rose-600 dark:text-rose-400"
                              : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                          }`}
                        >
                          {quiz.quiz_difficulty === "easy"
                            ? "سهل"
                            : quiz.quiz_difficulty === "challenge"
                            ? "تحدي"
                            : "قياسي"}
                        </Badge>
                      </td>

                      {/* Question count */}
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center size-7 rounded-full bg-muted font-bold text-xs">
                          {quiz.question_count}
                        </span>
                      </td>

                      {/* Is Public Toggle */}
                      <td className="p-4 text-center">
                        <button
                          type="button"
                          onClick={() => void handleTogglePublic(quiz)}
                          title="انقر لتغيير حالة الإتاحة (عام / خاص)"
                          className="cursor-pointer transition-transform hover:scale-105"
                        >
                          {quiz.is_public ? (
                            <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 gap-1.5 py-1 px-3 font-semibold">
                              <Globe className="size-3.5" />
                              <span>عام</span>
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-muted text-muted-foreground border border-border gap-1.5 py-1 px-3 font-semibold">
                              <Lock className="size-3.5" />
                              <span>خاص</span>
                            </Badge>
                          )}
                        </button>
                      </td>

                      {/* Action Buttons */}
                      <td className="p-4 text-left">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Edit */}
                          <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-xl hover:bg-primary/10 hover:text-primary"
                            title="تعديل الكويز والأسئلة"
                          >
                            <Link to="/admin/quizzes/$quizId/edit" params={{ quizId: quiz.id } as any}>
                              <Pencil className="size-4" />
                            </Link>
                          </Button>

                          {/* Preview */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-xl hover:bg-blue-500/10 hover:text-blue-500"
                            onClick={() => {
                              setPreviewQuiz(quiz);
                              setIsPreviewOpen(true);
                            }}
                            title="معاينة الأسئلة"
                          >
                            <Eye className="size-4" />
                          </Button>

                          {/* Host */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-500"
                            onClick={() => handleHostQuiz(quiz.id)}
                            title="استضافة اللعبة الآن"
                          >
                            <Play className="size-4" />
                          </Button>

                          {/* Delete */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                            onClick={() => {
                              setQuizToDelete(quiz);
                              setIsSingleDeleteOpen(true);
                            }}
                            title="حذف الكويز"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {filteredQuizzes.length > 0 && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border p-4 bg-muted/20">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>عرض</span>
              <Select
                value={String(pageSize)}
                onValueChange={(val) => setPageSize(Number(val))}
              >
                <SelectTrigger className="h-8 w-16 rounded-xl text-xs border-border bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent dir="rtl" className="rounded-xl">
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span>عنصر بالصفحة</span>
              <span className="mx-2">•</span>
              <span>
                الصفحة {currentPage} من {totalPages} (إجمالي {filteredQuizzes.length})
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-xl"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-xl"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronRight className="size-4" />
              </Button>

              <span className="px-3 text-xs font-bold text-foreground">
                {currentPage} / {totalPages}
              </span>

              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-xl"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-xl"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsLeft className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* DIALOG 1: Bulk Category Reassign */}
      <Dialog open={isBulkCategoryOpen} onOpenChange={setIsBulkCategoryOpen}>
        <DialogContent dir="rtl" className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <FolderEdit className="size-5 text-primary" />
              إعادة إسناد القسم التجميعي
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              تحديد قسم رئيسي وفرعي جديد لـ {selectedIds.size} كويز محدّد.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Main Category Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">اختر القسم الرئيسي الجديد *</label>
              <select
                value={bulkCategory}
                onChange={(e) => {
                  setBulkCategory(e.target.value);
                  setBulkSubcategory("");
                  setCustomSubcategoryInput("");
                }}
                className="w-full rounded-2xl border border-border bg-background p-3 text-sm font-semibold outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
              >
                <option value="">-- اختر القسم الرئيسي من القائمة --</option>
                {allCategories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name} ({c.quiz_count} كويز)
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">اختر القسم الفرعي (اختياري)</label>
              <select
                value={bulkSubcategory}
                onChange={(e) => setBulkSubcategory(e.target.value)}
                disabled={!bulkCategory}
                className="w-full rounded-2xl border border-border bg-background p-3 text-sm font-semibold outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
              >
                <option value="">-- بدون قسم فرعي --</option>
                {(
                  allCategories.find(
                    (c) => c.name.trim().toLowerCase() === bulkCategory.trim().toLowerCase()
                  )?.subcategories || []
                ).map((sub) => (
                  <option key={sub.id} value={sub.name}>
                    {sub.name}
                  </option>
                ))}
                <option value="__CUSTOM__">+ إضافة اسم قسم فرعي جديد...</option>
              </select>

              {bulkSubcategory === "__CUSTOM__" && (
                <Input
                  placeholder="اكتب اسم القسم الفرعي الجديد هنا..."
                  value={customSubcategoryInput}
                  onChange={(e) => setCustomSubcategoryInput(e.target.value)}
                  className="mt-2 rounded-2xl text-sm"
                />
              )}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="ghost"
              onClick={() => setIsBulkCategoryOpen(false)}
              className="rounded-xl"
            >
              إلغاء
            </Button>
            <Button
              onClick={handleBulkReassignCategory}
              disabled={actionLoading}
              className="rounded-xl bg-primary text-primary-foreground"
            >
              {actionLoading ? "جارٍ التحديث..." : "حفظ التغييرات"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* DIALOG 2: Bulk Delete Confirmation */}
      <Dialog open={isBulkDeleteOpen} onOpenChange={setIsBulkDeleteOpen}>
        <DialogContent dir="rtl" className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-destructive flex items-center gap-2">
              <AlertTriangle className="size-5" />
              حذف تجميعي لـ {selectedIds.size} كويز
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              هل أنت ألكيد من إكمال الحذف النهائي؟ سيؤدي ذلك لحذف الكويزات وكافة الأسئلة المرتبطة بها نهائياً ولن تتمكن من استعادتها.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="ghost"
              onClick={() => setIsBulkDeleteOpen(false)}
              className="rounded-xl"
            >
              إلغاء
            </Button>
            <Button
              variant="destructive"
              onClick={handleBulkDelete}
              disabled={actionLoading}
              className="rounded-xl"
            >
              {actionLoading ? "جارٍ الحذف..." : "حذف الآن"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* DIALOG 3: Single Delete Confirmation */}
      <Dialog open={isSingleDeleteOpen} onOpenChange={setIsSingleDeleteOpen}>
        <DialogContent dir="rtl" className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-destructive flex items-center gap-2">
              <Trash2 className="size-5" />
              حذف كويز: {quizToDelete?.title}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              هل أنت ألكيد من حذف هذا الكويز وجميع أسئلته؟ هذا الإجراء لا يمكن التراجع عنه.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="ghost"
              onClick={() => setIsSingleDeleteOpen(false)}
              className="rounded-xl"
            >
              إلغاء
            </Button>
            <Button
              variant="destructive"
              onClick={handleSingleDelete}
              disabled={actionLoading}
              className="rounded-xl"
            >
              {actionLoading ? "جارٍ الحذف..." : "حذف نهائي"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* SHEET: Preview Quiz Questions */}
      <Sheet open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <SheetContent dir="rtl" className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader className="pb-4 border-b border-border">
            <SheetTitle className="text-xl font-bold font-display">
              معاينة الكويز: {previewQuiz?.title}
            </SheetTitle>
            <SheetDescription className="text-xs text-muted-foreground">
              القسم: {previewQuiz?.category} • عدد الأسئلة: {previewQuiz?.question_count}
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-4 py-4">
            {previewQuiz?.questions && previewQuiz.questions.length > 0 ? (
              previewQuiz.questions.map((q, idx) => (
                <Card key={q.id || idx} className="rounded-2xl border-border bg-muted/30">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-bold text-primary">سؤال #{idx + 1}</span>
                      <span>⏱️ {q.time_limit_seconds || 30} ثانية</span>
                    </div>
                    <CardTitle className="text-base font-bold mt-1">
                      {q.question_text}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-1 space-y-2">
                    {/* Image if available */}
                    {q.image_url && (
                      <img
                        src={q.image_url}
                        alt="Question asset"
                        className="rounded-xl max-h-40 w-full object-cover my-2"
                      />
                    )}

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {Array.isArray(q.options) &&
                        q.options.map((opt: string, optIdx: number) => {
                          const isCorrect = optIdx === q.correct_index;
                          return (
                            <div
                              key={optIdx}
                              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border ${
                                isCorrect
                                  ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-700 dark:text-emerald-400"
                                  : "bg-background border-border text-foreground"
                              }`}
                            >
                              <span>{opt}</span>
                              {isCorrect && <Check className="size-3.5 shrink-0" />}
                            </div>
                          );
                        })}
                    </div>

                    {q.explanation && (
                      <p className="text-xs text-muted-foreground bg-background/50 p-2.5 rounded-xl border border-border mt-2">
                        💡 <span className="font-semibold">التوضيح:</span> {q.explanation}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center p-8 text-muted-foreground text-sm">
                لا توجد أسئلة محملة في هذا الكويز.
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
