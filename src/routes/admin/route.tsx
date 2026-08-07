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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      throw redirect({ to: "/auth" });
    }
    return { user: data.user };
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

      // Query profile role
      const { data: profile } = await supabase
        .from("profiles")
        .select("role, name")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (profile) {
        setDisplayName((profile as any).name || (profile as any).display_name || userData.user.email || "");
        const role = (profile as any).role;
        setIsAdmin(role === "admin" || role === "super_admin" || role === "owner");
      } else {
        setDisplayName(userData.user.email || "");
        setIsAdmin(true);
      }
    }
    checkRole();
  }, []);

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
