import { createFileRoute, Outlet, Link, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  LayoutDashboard,
  FolderTree,
  FileUp,
  HelpCircle,
  BarChart3,
  Users,
  ArrowRight,
  ShieldCheck,
  LogOut,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin")({
  ssr: false,
  beforeLoad: async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      throw redirect({ to: "/auth" });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userData.user.id)
      .maybeSingle();

    const role = (profile as any)?.role;
    const isAdmin = role === "admin" || role === "super_admin" || role === "owner";

    if (!isAdmin) {
      // STRICT ACCESS CONTROL: Non-admins are blocked and redirected to homepage
      throw redirect({ to: "/" });
    }

    return { user: userData.user, role };
  },
  component: AdminLayout,
});

function AdminLayout() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    async function checkRole() {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        setIsAdmin(false);
        return;
      }
      setUserEmail(userData.user.email || "");

      const { data: profile } = await supabase
        .from("profiles")
        .select("role, name")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (profile) {
        setDisplayName((profile as any).name || (profile as any).display_name || userData.user.email || "");
        const role = (profile as any).role;
        const adminAllowed = role === "admin" || role === "super_admin" || role === "owner";
        setIsAdmin(adminAllowed);

        if (!adminAllowed) {
          void navigate({ to: "/", replace: true });
        }
      } else {
        setIsAdmin(false);
        void navigate({ to: "/", replace: true });
      }
    }
    checkRole();
  }, [navigate]);

  const navItems = [
    { label: "لوحة التحكم الرئيسية", to: "/admin", icon: LayoutDashboard, exact: true },
    { label: "إدارة الأقسام", to: "/admin/categories", icon: FolderTree },
    { label: "استيراد ملفات JSON", to: "/admin/import", icon: FileUp },
    { label: "إدارة الكويزات والأسئلة", to: "/admin/quizzes", icon: HelpCircle },
    { label: "التقارير والإحصائيات", to: "/admin/analytics", icon: BarChart3 },
    { label: "إدارة المستخدمين", to: "/admin/users", icon: Users },
  ];

  if (isAdmin === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="size-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          <p className="text-sm font-medium text-muted-foreground">جارٍ التحقق من صلاحيات المسؤول...</p>
        </div>
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div dir="rtl" className="flex h-screen w-full flex-col items-center justify-center bg-background p-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-3xl bg-destructive/10 text-destructive mb-4">
          <ShieldAlert className="size-8" />
        </div>
        <h2 className="font-display text-2xl font-bold">عفواً، الوصول غير مصرح به</h2>
        <p className="text-sm text-muted-foreground mt-2 mb-6 max-w-md">
          هذه الصفحة مخصصة لمدراء النظام فقط. تم حظر وصول هذا الحساب إلى لوحة التحكم.
        </p>
        <Button onClick={() => void navigate({ to: "/" })} className="rounded-xl gap-2">
          <ArrowRight className="size-4" />
          العودة للصفحة الرئيسية
        </Button>
      </div>
    );
  }

  return (
    <div dir="rtl" className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-l border-border bg-card/60 backdrop-blur-md flex flex-col justify-between p-4">
        <div>
          {/* Header Branding */}
          <div className="flex items-center gap-3 px-2 py-3 border-b border-border mb-6">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-md">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold leading-tight">لوحة المسؤول</h2>
              <span className="text-xs text-muted-foreground">إدارة كويز كلاش الكاملة</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "bg-primary text-primary-foreground font-semibold shadow-sm" }}
                  inactiveProps={{ className: "text-muted-foreground hover:bg-muted hover:text-foreground" }}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-all"
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer & User Profile */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex items-center justify-between px-2">
            <div className="truncate">
              <p className="text-sm font-semibold truncate">{displayName || "مسؤول النظام"}</p>
              <p className="text-xs text-muted-foreground truncate">{userEmail}</p>
            </div>
            <Badge variant="secondary" className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-0 text-[10px]">
              مسؤول
            </Badge>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 text-xs rounded-xl"
              onClick={() => void navigate({ to: "/" })}
            >
              <ArrowRight className="size-3.5" />
              العودة للعبة
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 size-8 rounded-xl text-muted-foreground hover:text-destructive"
              onClick={async () => {
                await supabase.auth.signOut();
                void navigate({ to: "/auth" });
              }}
              title="تسجيل الخروج"
            >
              <LogOut className="size-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
