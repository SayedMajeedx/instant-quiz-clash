import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FolderTree,
  FileUp,
  HelpCircle,
  BarChart3,
  Users,
  Plus,
  ArrowUpRight,
  Database,
  Sparkles,
  Layers,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { getAdminKPIStats } from "@/lib/admin-data-helper";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const [counts, setCounts] = useState({
    quizzes: 0,
    questions: 0,
    categories: 0,
    users: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const data = await getAdminKPIStats();
        setCounts({
          quizzes: data.totalQuizzes,
          questions: data.totalQuestions,
          categories: data.totalCategories,
          users: data.totalUsers,
        });
      } catch (err) {
        console.error("Failed to load admin stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCounts();
  }, []);

  const modules = [
    {
      title: "إدارة الأقسام والتصنيفات",
      description: "إنشاء وتعديل وتصنيف الأقسام الرئيسية والفرعية ونقل الكويزات بينها دفعة واحدة.",
      to: "/admin/categories",
      icon: FolderTree,
      badge: `${counts.categories} قسم`,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    },
    {
      title: "مستورد JSON الذكي",
      description: "رفع وتحليل أسئلة الكويزات بملفات JSON منفردة أو مصفوفات مع دمج وإسناد الأقسام تلقائياً.",
      to: "/admin/import",
      icon: FileUp,
      badge: "أداة سريعة",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    },
    {
      title: "إدارة الكويزات والأسئلة",
      description: "عرض كافة الكويزات، البحث، التصفية، والتعديل التفاعلي للأسئلة مع إمكانية التبديل والإعادة.",
      to: "/admin/quizzes",
      icon: HelpCircle,
      badge: `${counts.quizzes} كويز`,
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    },
    {
      title: "التقارير والإحصائيات",
      description: "متابعة أداء اللعبة، الأسئلة الأكثر صعوبة، الكويزات الأكثر لعباً، ونسب الإجابات الصحيحة.",
      to: "/admin/analytics",
      icon: BarChart3,
      badge: "تقارير شاملة",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    },
    {
      title: "إدارة المستخدمين والصلاحيات",
      description: "عرض قائمة الحسابات المسجلة وإعادة تعيين الأدوار والصلاحيات (مسؤول / مستخدم).",
      to: "/admin/users",
      icon: Users,
      badge: `${counts.users} مستخدم`,
      color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 via-primary to-primary/80 p-6 md:p-8 text-primary-foreground shadow-lg">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="size-3.5" />
            نظام لوحة التحكم المتكامل v2.0
          </div>
          <h1 className="font-display text-3xl font-extrabold md:text-4xl">مرحباً بك في لوحة إدارة كويز كلاش</h1>
          <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
            من هنا يمكنك التحكم الكامل بالأقسام، رفع الكويزات الذكي عبر JSON، تعديل الأسئلة التفاعلي، ومتابعة إحصائيات الأداء والمستخدمين.
          </p>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">إجمالي الكويزات</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{loading ? "..." : counts.quizzes}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">إجمالي الأسئلة</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{loading ? "..." : counts.questions}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">الأقسام المعتمدة</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{loading ? "..." : counts.categories}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">المستخدمين المسجلين</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">{loading ? "..." : counts.users}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Admin Modules Grid */}
      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold">وحدات التحكم السريعة</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Card key={mod.to} className="group relative overflow-hidden rounded-2xl border-border transition-all hover:border-primary/50 hover:shadow-md">
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className={`flex size-11 items-center justify-center rounded-2xl border ${mod.color}`}>
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                      {mod.badge}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-lg font-bold group-hover:text-primary transition-colors">
                    {mod.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {mod.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-0">
                  <Button asChild variant="ghost" size="sm" className="w-full justify-between rounded-xl hover:bg-primary/10 hover:text-primary">
                    <Link to={mod.to}>
                      <span>الانتقال للوحدة</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
