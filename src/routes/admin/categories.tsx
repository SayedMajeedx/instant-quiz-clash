import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  getAllAdminCategories,
  getAllAdminQuizzes,
  saveLocalCategory,
  deleteLocalCategory,
  saveLocalSubcategory,
  deleteLocalSubcategory,
} from "@/lib/admin-data-helper";
import {
  FolderTree,
  FolderPlus,
  Plus,
  Pencil,
  Trash2,
  ArrowLeftRight,
  Search,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Layers,
  Tag,
  RefreshCw,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

export const Route = createFileRoute("/admin/categories")({
  component: AdminCategoriesPage,
});

export interface CategoryRecord {
  id: string;
  name: string;
  slug: string;
  created_at?: string;
  quiz_count?: number;
}

export interface SubcategoryRecord {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  created_at?: string;
  quiz_count?: number;
}

function generateSlug(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\t\n]+/g, "-")
    .replace(/[^\w\u0600-\u06FF-]/g, "")
    .replace(/--+/g, "-");
}

function AdminCategoriesPage() {
  const db = supabase as any;

  const [categories, setCategories] = useState<CategoryRecord[]>([]);
  const [subcategories, setSubcategories] = useState<SubcategoryRecord[]>([]);
  const [quizzes, setQuizzes] = useState<{ id: string; title: string; category?: string; subcategory?: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Category Dialog state
  const [isCatModalOpen, setIsCatModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<CategoryRecord | null>(null);
  const [catName, setCatName] = useState("");
  const [catSlug, setCatNameSlug] = useState("");
  const [catSaving, setCatSaving] = useState(false);

  // Subcategory Dialog state
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [editingSub, setEditingSub] = useState<SubcategoryRecord | null>(null);
  const [subCatId, setSubCatId] = useState("");
  const [subName, setSubName] = useState("");
  const [subSlug, setSubSlug] = useState("");
  const [subSaving, setSubSaving] = useState(false);

  // Delete Confirmation state
  const [deleteTarget, setDeleteTarget] = useState<{ type: "category" | "subcategory"; item: CategoryRecord | SubcategoryRecord } | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Batch Move Quizzes state
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [batchSourceCat, setBatchSourceCat] = useState("");
  const [batchSourceSub, setBatchSourceSub] = useState("");
  const [batchTargetCat, setBatchTargetCat] = useState("");
  const [batchTargetSub, setBatchTargetSub] = useState("");
  const [batchMoving, setBatchMoving] = useState(false);

  // Fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [adminCategories, adminQuizzes] = await Promise.all([
        getAllAdminCategories(),
        getAllAdminQuizzes(),
      ]);

      setQuizzes(adminQuizzes.map((q) => ({ id: q.id, title: q.title, category: q.category, subcategory: q.subcategory || "" })));

      const formattedCats: CategoryRecord[] = adminCategories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        quiz_count: c.quiz_count,
      }));

      const formattedSubs: SubcategoryRecord[] = [];
      adminCategories.forEach((c) => {
        if (c.subcategories) {
          c.subcategories.forEach((sub) => {
            formattedSubs.push({
              id: sub.id,
              category_id: c.id,
              name: sub.name,
              slug: sub.slug,
              quiz_count: sub.quiz_count,
            });
          });
        }
      });

      setCategories(formattedCats);
      setSubcategories(formattedSubs);
    } catch (err) {
      console.error("Failed to load category data:", err);
      toast.error("حدث خطأ أثناء تحميل بيانات الأقسام");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  // Filtered Categories
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const q = searchQuery.trim().toLowerCase();
    return categories.filter(
      (c) => c.name.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q)
    );
  }, [categories, searchQuery]);

  // Handle Category Submit (Create/Update)
  const handleCategorySave = async () => {
    if (!catName.trim()) {
      toast.error("يرجى إدخال اسم القسم الرئيسي");
      return;
    }
    const slugToSave = catSlug.trim() || generateSlug(catName);

    setCatSaving(true);
    try {
      await saveLocalCategory(catName.trim(), slugToSave);

      toast.success("تم إضافة القسم الرئيسي وحفظه بنجاح!");
      setIsCatModalOpen(false);
      setCatName("");
      setCatSlug("");
      await fetchData();
    } catch (err: any) {
      console.error("Failed to save category:", err);
      toast.error("فشل حفظ القسم الرئيسي في قاعدة البيانات");
    } finally {
      setCatSaving(false);
    }
  };

  // Handle Subcategory Submit (Create/Update)
  const handleSubcategorySave = async () => {
    if (!subCatId) {
      toast.error("يرجى اختيار القسم الرئيسي التابع له");
      return;
    }
    if (!subName.trim()) {
      toast.error("يرجى إدخال اسم القسم الفرعي");
      return;
    }
    const slugToSave = subSlug.trim() || generateSlug(subName);

    setSubSaving(true);
    try {
      const selectedParentCat = categories.find((c) => c.id === subCatId);
      const parentCatName = selectedParentCat?.name || "إسلاميات";

      await saveLocalSubcategory(subCatId, parentCatName, subName.trim(), slugToSave);

      toast.success("تم إضافة القسم الفرعي وحفظه بنجاح!");
      setIsSubModalOpen(false);
      setSubName("");
      setSubSlug("");
      await fetchData();
    } catch (err: any) {
      console.error("Failed to save subcategory:", err);
      toast.error("فشل حفظ القسم الفرعي في قاعدة البيانات");
    } finally {
      setSubSaving(false);
    }
  };

  // Handle Delete Confirmation
  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      if (deleteTarget.type === "category") {
        await deleteLocalCategory(deleteTarget.item.id, deleteTarget.item.name);
        toast.success(`تم حذف القسم الرئيسي "${deleteTarget.item.name}"`);
      } else {
        await deleteLocalSubcategory(deleteTarget.item.id, deleteTarget.item.name);
        toast.success(`تم حذف القسم الفرعي "${deleteTarget.item.name}"`);
      }

      setDeleteTarget(null);
      await fetchData();
    } catch (err: any) {
      console.error("Failed to delete item:", err);
      toast.error(err?.message || "تعذر إكمال عملية الحذف");
    } finally {
      setDeleting(false);
    }
  };

  // Affected Quizzes Count for Batch Move
  const affectedBatchCount = useMemo(() => {
    if (!batchSourceCat) return 0;
    return quizzes.filter((q) => {
      const matchCat = q.category?.trim().toLowerCase() === batchSourceCat.trim().toLowerCase();
      if (!matchCat) return false;
      if (batchSourceSub && batchSourceSub !== "all") {
        return q.subcategory?.trim().toLowerCase() === batchSourceSub.trim().toLowerCase();
      }
      return true;
    }).length;
  }, [quizzes, batchSourceCat, batchSourceSub]);

  // Execute Batch Move
  const handleBatchMoveExecute = async () => {
    if (!batchSourceCat) {
      toast.error("يرجى اختيار القسم المصدر");
      return;
    }
    if (!batchTargetCat) {
      toast.error("يرجى اختيار القسم الهدف الجديد");
      return;
    }
    if (affectedBatchCount === 0) {
      toast.error("لا توجد كويزات مطابقة للقسم المصدر المحدد");
      return;
    }

    setBatchMoving(true);
    try {
      // Build update query for quizzes
      let query = db
        .from("quizzes")
        .update({
          category: batchTargetCat,
          ...(batchTargetSub && batchTargetSub !== "none" ? { subcategory: batchTargetSub } : {}),
        })
        .eq("category", batchSourceCat);

      if (batchSourceSub && batchSourceSub !== "all") {
        query = query.eq("subcategory", batchSourceSub);
      }

      const { error } = await query;
      if (error) throw error;

      toast.success(`تم بنجاح نقل ${affectedBatchCount} كويز إلى قسم "${batchTargetCat}"!`);
      setIsBatchModalOpen(false);
      void fetchData();
    } catch (err: any) {
      console.error("Batch move failed:", err);
      toast.error(err?.message || "فشلت عملية نقل الكويزات الدُفعية");
    } finally {
      setBatchMoving(false);
    }
  };

  // Dialog Helpers
  const openNewCategoryModal = () => {
    setEditingCat(null);
    setCatName("");
    setCatNameSlug("");
    setIsCatModalOpen(true);
  };

  const openEditCategoryModal = (cat: CategoryRecord) => {
    setEditingCat(cat);
    setCatName(cat.name);
    setCatNameSlug(cat.slug);
    setIsCatModalOpen(true);
  };

  const openNewSubcategoryModal = (parentCatId?: string) => {
    setEditingSub(null);
    setSubCatId(parentCatId || (categories[0]?.id ?? ""));
    setSubName("");
    setSubSlug("");
    setIsSubModalOpen(true);
  };

  const openEditSubcategoryModal = (sub: SubcategoryRecord) => {
    setEditingSub(sub);
    setSubCatId(sub.category_id);
    setSubName(sub.name);
    setSubSlug(sub.slug);
    setIsSubModalOpen(true);
  };

  return (
    <div dir="rtl" className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FolderTree className="size-5" />
            </span>
            <h1 className="font-display text-2xl font-extrabold sm:text-3xl">إدارة الهيكل والتصنيفات</h1>
          </div>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            قم بإنشاء وتعديل الأقسام الرئيسية والفرعية ونقل الكويزات بين الأقسام دفعة واحدة.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            onClick={() => setIsBatchModalOpen(true)}
            variant="outline"
            size="sm"
            className="rounded-2xl gap-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5"
          >
            <ArrowLeftRight className="size-4 text-primary" />
            <span>نقل الكويزات دفعة واحدة</span>
          </Button>

          <Button
            onClick={() => openNewSubcategoryModal()}
            variant="outline"
            size="sm"
            className="rounded-2xl gap-2"
          >
            <FolderPlus className="size-4" />
            <span>إضافة قسم فرعي</span>
          </Button>

          <Button
            onClick={openNewCategoryModal}
            size="sm"
            className="rounded-2xl gap-2 bg-gradient-hero text-primary-foreground shadow-sm hover:scale-[1.01]"
          >
            <Plus className="size-4" />
            <span>قسم رئيسي جديد</span>
          </Button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">الأقسام الرئيسية</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{categories.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">الأقسام الفرعية</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{subcategories.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">الكويزات المصنفة</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{quizzes.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">حالة المزامنة</CardDescription>
            <div className="flex items-center gap-2 mt-1">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">متصل بـ Supabase</span>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Main Categories Section */}
      <Card className="rounded-3xl border-border shadow-sm">
        <CardHeader className="p-6 pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <CardTitle className="font-display text-lg font-bold flex items-center gap-2">
                <Layers className="size-5 text-primary" />
                <span>قائمة الأقسام الرئيسية والفرعية</span>
              </CardTitle>
              <CardDescription className="text-xs">
                انقر على إشارات الأقسام لتعديلها أو إضافة تصنيفات فرعية لها
              </CardDescription>
            </div>

            {/* Search Input & Refresh */}
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-64">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ابحث عن قسم..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-2xl pr-9 pl-3 text-xs"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => void fetchData()}
                className="size-9 rounded-2xl text-muted-foreground hover:text-foreground"
                title="تحديث البيانات"
              >
                <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          {loading ? (
            <div className="flex items-center justify-center py-12 text-sm text-muted-foreground gap-2">
              <RefreshCw className="size-4 animate-spin text-primary" />
              <span>جارٍ تحميل شجرة التصنيفات...</span>
            </div>
          ) : filteredCategories.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-8 text-center space-y-3">
              <Tag className="mx-auto size-8 text-muted-foreground/60" />
              <p className="text-sm font-semibold">لم يتم العثور على أي أقسام</p>
              <p className="text-xs text-muted-foreground">قم بإضافة أول قسم رئيسي لبدء تنظيم كويزات اللعبة</p>
              <Button onClick={openNewCategoryModal} size="sm" className="rounded-xl mt-2">
                <Plus className="size-4 me-1.5" />
                إضافة قسم رئيسي
              </Button>
            </div>
          ) : (
            <div className="rounded-2xl border border-border overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="text-right font-bold text-xs">القسم الرئيسي</TableHead>
                    <TableHead className="text-right font-bold text-xs">الرابط المباشر (Slug)</TableHead>
                    <TableHead className="text-center font-bold text-xs">عدد الكويزات</TableHead>
                    <TableHead className="text-right font-bold text-xs">الأقسام الفرعية التابعة</TableHead>
                    <TableHead className="text-center font-bold text-xs">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((cat) => {
                    const childSubs = subcategories.filter(
                      (s) =>
                        s.category_id === cat.id ||
                        s.category_id === `derived-${cat.slug}` ||
                        (s as any).category_name?.trim().toLowerCase() === cat.name.trim().toLowerCase()
                    );

                    return (
                      <TableRow key={cat.id} className="group hover:bg-muted/20 transition-colors">
                        {/* Name */}
                        <TableCell className="font-bold text-sm">
                          <div className="flex items-center gap-2.5">
                            <span className="grid size-8 place-items-center rounded-xl bg-primary/10 text-primary">
                              <FolderTree className="size-4" />
                            </span>
                            <span>{cat.name}</span>
                          </div>
                        </TableCell>

                        {/* Slug */}
                        <TableCell className="text-xs font-mono text-muted-foreground dir-ltr text-right">
                          <Badge variant="outline" className="bg-muted/30 font-normal">
                            /{cat.slug || generateSlug(cat.name)}
                          </Badge>
                        </TableCell>

                        {/* Quiz count */}
                        <TableCell className="text-center">
                          <Badge variant="secondary" className="rounded-xl px-2.5 py-0.5 text-xs">
                            {cat.quiz_count || 0} كويز
                          </Badge>
                        </TableCell>

                        {/* Subcategories */}
                        <TableCell>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {childSubs.length === 0 ? (
                              <span className="text-xs text-muted-foreground/60 italic">لا توجد أقسام فرعية</span>
                            ) : (
                              childSubs.map((sub) => (
                                <Badge
                                  key={sub.id}
                                  variant="outline"
                                  className="group/sub flex items-center gap-1 rounded-xl bg-background/60 py-1 pr-2.5 pl-1.5 text-xs hover:border-primary/50"
                                >
                                  <span>{sub.name}</span>
                                  <span className="text-[10px] text-muted-foreground">({sub.quiz_count || 0})</span>
                                  <button
                                    onClick={() => openEditSubcategoryModal(sub)}
                                    className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-muted-foreground hover:text-primary mr-1"
                                    title="تعديل الفرعي"
                                  >
                                    <Pencil className="size-3" />
                                  </button>
                                  <button
                                    onClick={() => setDeleteTarget({ type: "subcategory", item: sub })}
                                    className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                                    title="حذف الفرعي"
                                  >
                                    <Trash2 className="size-3" />
                                  </button>
                                </Badge>
                              ))
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => openNewSubcategoryModal(cat.id)}
                              className="size-6 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10"
                              title="إضافة قسم فرعي لهذا القسم"
                            >
                              <Plus className="size-3.5" />
                            </Button>
                          </div>
                        </TableCell>

                        {/* Actions */}
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => openEditCategoryModal(cat)}
                              className="size-8 rounded-xl text-muted-foreground hover:text-primary"
                              title="تعديل القسم الرئيسي"
                            >
                              <Pencil className="size-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setDeleteTarget({ type: "category", item: cat })}
                              className="size-8 rounded-xl text-muted-foreground hover:text-destructive"
                              title="حذف القسم الرئيسي"
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

      {/* MODAL 1: Create / Edit Category */}
      <Dialog open={isCatModalOpen} onOpenChange={setIsCatModalOpen}>
        <DialogContent dir="rtl" className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold flex items-center gap-2">
              <FolderTree className="size-5 text-primary" />
              <span>{editingCat ? "تعديل القسم الرئيسي" : "إضافة قسم رئيسي جديد"}</span>
            </DialogTitle>
            <DialogDescription className="text-xs">
              قم بإنشاء وتحديد اسم المعرف المباشر للقسم الرئيسي في التطبيق.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">اسم القسم الرئيسي *</label>
              <Input
                placeholder="مثال: ثقافة عامة، تاريخ، علوم، رياضة..."
                value={catName}
                onChange={(e) => {
                  setCatName(e.target.value);
                  if (!editingCat) {
                    setCatNameSlug(generateSlug(e.target.value));
                  }
                }}
                className="rounded-2xl text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-foreground">الرابط المباشر (Slug)</label>
                <button
                  type="button"
                  onClick={() => setCatNameSlug(generateSlug(catName))}
                  className="text-[11px] text-primary hover:underline"
                >
                  توليد تلقائي
                </button>
              </div>
              <Input
                placeholder="general-culture"
                value={catSlug}
                onChange={(e) => setCatNameSlug(e.target.value)}
                className="rounded-2xl font-mono text-xs dir-ltr text-right"
              />
              <p className="text-[11px] text-muted-foreground">يستخدم في روابط التصفح مثل `/browse/culture`</p>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setIsCatModalOpen(false)}
              className="rounded-2xl text-xs"
            >
              إلغاء
            </Button>
            <Button
              onClick={handleCategorySave}
              disabled={catSaving}
              className="rounded-2xl text-xs bg-gradient-hero text-primary-foreground"
            >
              {catSaving ? "جارٍ الحفظ..." : editingCat ? "حفظ التغيرات" : "إنشاء القسم"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL 2: Create / Edit Subcategory */}
      <Dialog open={isSubModalOpen} onOpenChange={setIsSubModalOpen}>
        <DialogContent dir="rtl" className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold flex items-center gap-2">
              <FolderPlus className="size-5 text-primary" />
              <span>{editingSub ? "تعديل القسم الفرعي" : "إضافة قسم فرعي جديد"}</span>
            </DialogTitle>
            <DialogDescription className="text-xs">
              حدد القسم الرئيسي التابع له والاسم والـ Slug الخاص بالفرع.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">القسم الرئيسي التابع له *</label>
              <Select value={subCatId} onValueChange={setSubCatId}>
                <SelectTrigger className="rounded-2xl text-xs">
                  <SelectValue placeholder="اختر القسم الرئيسي..." />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id} className="text-xs">
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground">اسم القسم الفرعي *</label>
              <Input
                placeholder="مثال: تاريخ إسلامي، الدوري الإنجليزي..."
                value={subName}
                onChange={(e) => {
                  setSubName(e.target.value);
                  if (!editingSub) {
                    setSubSlug(generateSlug(e.target.value));
                  }
                }}
                className="rounded-2xl text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-foreground">الرابط المباشر (Slug)</label>
                <button
                  type="button"
                  onClick={() => setSubSlug(generateSlug(subName))}
                  className="text-[11px] text-primary hover:underline"
                >
                  توليد تلقائي
                </button>
              </div>
              <Input
                placeholder="islamic-history"
                value={subSlug}
                onChange={(e) => setSubSlug(e.target.value)}
                className="rounded-2xl font-mono text-xs dir-ltr text-right"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setIsSubModalOpen(false)}
              className="rounded-2xl text-xs"
            >
              إلغاء
            </Button>
            <Button
              onClick={handleSubcategorySave}
              disabled={subSaving}
              className="rounded-2xl text-xs bg-gradient-hero text-primary-foreground"
            >
              {subSaving ? "جارٍ الحفظ..." : editingSub ? "حفظ التغيرات" : "إنشاء الفرع"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL 3: Batch Move Quizzes */}
      <Dialog open={isBatchModalOpen} onOpenChange={setIsBatchModalOpen}>
        <DialogContent dir="rtl" className="sm:max-w-lg rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold flex items-center gap-2">
              <ArrowLeftRight className="size-5 text-primary" />
              <span>نقل الكويزات دفعة واحدة بين الأقسام</span>
            </DialogTitle>
            <DialogDescription className="text-xs">
              تصلح هذه الأداة لنقل مجموعات من الكويزات من قسم إلى قسم آخر بضغطة زر.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-3">
            {/* Source Section */}
            <div className="rounded-2xl border border-border/80 bg-muted/20 p-4 space-y-3">
              <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                <span>📍 المصدر الحالي (من):</span>
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-muted-foreground">القسم الرئيسي</label>
                  <Select value={batchSourceCat} onValueChange={setBatchSourceCat}>
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
                  <label className="text-[11px] font-semibold text-muted-foreground">القسم الفرعي (اختياري)</label>
                  <Select value={batchSourceSub} onValueChange={setBatchSourceSub}>
                    <SelectTrigger className="rounded-xl text-xs bg-background">
                      <SelectValue placeholder="الكل" />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                      <SelectItem value="all" className="text-xs">كل الفروع</SelectItem>
                      {subcategories.map((s) => (
                        <SelectItem key={s.id} value={s.name} className="text-xs">
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-border/40">
                <span className="text-muted-foreground">عدد الكويزات المستهدفة بالنقل:</span>
                <Badge variant={affectedBatchCount > 0 ? "default" : "outline"} className="rounded-xl px-2.5">
                  {affectedBatchCount} كويز
                </Badge>
              </div>
            </div>

            {/* Target Section */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 space-y-3">
              <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                <span>🎯 الوجهة الجديدة (إلى):</span>
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-muted-foreground">القسم الرئيسي الهدف *</label>
                  <Select value={batchTargetCat} onValueChange={setBatchTargetCat}>
                    <SelectTrigger className="rounded-xl text-xs bg-background">
                      <SelectValue placeholder="اختر القسم الجديد..." />
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
                  <label className="text-[11px] font-semibold text-muted-foreground">القسم الفرعي الهدف (اختياري)</label>
                  <Select value={batchTargetSub} onValueChange={setBatchTargetSub}>
                    <SelectTrigger className="rounded-xl text-xs bg-background">
                      <SelectValue placeholder="بدون قسم فرعي" />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                      <SelectItem value="none" className="text-xs">بدون فرع</SelectItem>
                      {subcategories.map((s) => (
                        <SelectItem key={s.id} value={s.name} className="text-xs">
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setIsBatchModalOpen(false)}
              className="rounded-2xl text-xs"
            >
              إلغاء
            </Button>
            <Button
              onClick={handleBatchMoveExecute}
              disabled={batchMoving || affectedBatchCount === 0 || !batchTargetCat}
              className="rounded-2xl text-xs bg-gradient-hero text-primary-foreground gap-2"
            >
              <ArrowLeftRight className="size-3.5" />
              <span>{batchMoving ? "جارٍ النقل..." : `تأكيد نقل ${affectedBatchCount} كويز`}</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL 4: Delete Confirmation */}
      <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <DialogContent dir="rtl" className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-lg font-bold text-destructive flex items-center gap-2">
              <Trash2 className="size-5" />
              <span>تأكيد الحذف</span>
            </DialogTitle>
            <DialogDescription className="text-xs pt-1">
              هل أنت أصلًا متاكد من رغبتك في حذف{" "}
              {deleteTarget?.type === "category" ? "القسم الرئيسي" : "القسم الفرعي"}{" "}
              <strong className="text-foreground">"{deleteTarget?.item.name}"</strong>؟
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:gap-0 mt-2">
            <Button
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              className="rounded-2xl text-xs"
            >
              إلغاء
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={deleting}
              className="rounded-2xl text-xs"
            >
              {deleting ? "جارٍ الحذف..." : "نعم، تأكيد الحذف"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
