import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Users,
  Search,
  Shield,
  ShieldCheck,
  ShieldAlert,
  UserCheck,
  UserX,
  MoreVertical,
  Filter,
  Calendar,
  Gamepad2,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/admin/users")({
  component: UserManagementPage,
});

interface UserProfile {
  id: string;
  display_name: string;
  email?: string;
  role: "admin" | "user" | "owner";
  created_at: string;
  total_games_hosted: number;
}

function UserManagementPage() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">("all");
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [filteredTotal, setFilteredTotal] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const pageSize = 10;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Get current authenticated user
      const { data: authData } = await supabase.auth.getUser();
      if (authData.user) {
        setCurrentUserId(authData.user.id);
      }

      const { data: result, error: profileError } = await (supabase.rpc as any)("admin_user_directory_page", {
        p_page: page,
        p_page_size: pageSize,
        p_search: searchQuery.trim(),
        p_role: roleFilter,
      });

      if (profileError) {
        console.error("Error fetching profiles:", profileError);
        toast.error("تعذر تحميل قائمة المستخدمين من قاعدة البيانات");
        setLoading(false);
        return;
      }

      const formattedUsers: UserProfile[] = (result?.items || []).map((p: any) => ({
        id: p.id,
        display_name: p.name || p.display_name || p.email?.split("@")[0] || "مستخدم",
        email: p.email || "",
        role: (p.role === "admin" || p.role === "super_admin" || p.role === "owner") ? "admin" : "user",
        created_at: p.created_at || new Date().toISOString(),
        total_games_hosted: Number(p.total_games_hosted || 0),
      }));

      setUsers(formattedUsers);
      setFilteredTotal(Number(result?.filtered_total || 0));
      setTotalUsers(Number(result?.total_users || 0));
      setTotalAdmins(Number(result?.total_admins || 0));
    } catch (err) {
      console.error("Unexpected error in fetchUsers:", err);
      toast.error("حدث خطأ أثناء تحميل بيانات المستخدمين");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => void fetchUsers(), 250);
    return () => window.clearTimeout(timer);
  }, [page, searchQuery, roleFilter]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, roleFilter]);

  // Update Role handler
  const handleUpdateRole = async (userId: string, newRole: "admin" | "user") => {
    if (updatingId) return;
    setUpdatingId(userId);

    try {
      // Supabase database update
      const { error } = await (supabase.rpc as any)("admin_set_user_role", {
        p_user_id: userId,
        p_role: newRole,
      });

      if (error) {
        console.error("Failed to update role:", error);
        toast.error("فشل تحديث صلاحية المستخدم");
        return;
      }

      // Optimistic state update
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );

      const roleLabel = newRole === "admin" ? "مسؤول (Admin)" : "مستخدم عادي (User)";
      toast.success(`تم تغيير صلاحية المستخدم بنجاح إلى ${roleLabel}`);
    } catch (err) {
      console.error("Error updating role:", err);
      toast.error("حدث خطأ غير متوقع أثناء التحديث");
    } finally {
      setUpdatingId(null);
    }
  };

  const totalStandardUsers = totalUsers - totalAdmins;
  const totalPages = Math.max(1, Math.ceil(filteredTotal / pageSize));

  return (
    <div className="space-y-8 pb-10" dir="rtl">
      {/* Header Banner */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-3xl bg-gradient-to-r from-primary/90 via-primary to-indigo-800 p-6 md:p-8 text-primary-foreground shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="size-4" />
            إدارة الحسابات والصلاحيات
          </div>
          <h1 className="font-display text-3xl font-extrabold md:text-4xl">إدارة المستخدمين</h1>
          <p className="text-primary-foreground/80 text-sm md:text-base max-w-xl">
            عرض كافة الحسابات المسجلة في التطبيق، التحكم بالمستويات والأدوار، وإسناد صلاحيات المسؤولين.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={fetchUsers}
          disabled={loading}
          className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-xl gap-2 w-fit"
        >
          <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
          تحديث القائمة
        </Button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-md p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">إجمالي الحسابات المسجلة</p>
              <p className="font-display text-3xl font-extrabold mt-1">{loading ? "..." : totalUsers}</p>
            </div>
            <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Users className="size-5" />
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-md p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">المسؤولين (Admins)</p>
              <p className="font-display text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                {loading ? "..." : totalAdmins}
              </p>
            </div>
            <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-5" />
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-md p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">المستخدمين العاديين</p>
              <p className="font-display text-3xl font-extrabold mt-1">{loading ? "..." : totalStandardUsers}</p>
            </div>
            <div className="flex size-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <UserCheck className="size-5" />
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filters Bar */}
      <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-md p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="البحث بالاسم أو البريد الإلكتروني..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 rounded-xl bg-background/50 border-border focus-visible:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="size-4 text-muted-foreground shrink-0 hidden sm:block" />
            <Select value={roleFilter} onValueChange={(val: any) => setRoleFilter(val)}>
              <SelectTrigger className="w-full sm:w-44 rounded-xl bg-background/50 border-border">
                <SelectValue placeholder="تصفية الصلاحية" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="all">كافة الصلاحيات ({totalUsers})</SelectItem>
                <SelectItem value="admin">مسؤول فقط ({totalAdmins})</SelectItem>
                <SelectItem value="user">مستخدم عادي ({totalStandardUsers})</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* User Accounts Table */}
      <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-md shadow-sm overflow-hidden">
        <CardHeader className="p-6 pb-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-display text-xl font-bold flex items-center gap-2">
                <Users className="size-5 text-primary" />
                قائمة الحسابات ({filteredTotal})
              </CardTitle>
              <CardDescription className="text-xs mt-1">
                إدارة أذونات المستخدمين وتعديل الصلاحية بضغطة زر
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </div>
              ))}
            </div>
          ) : users.length > 0 ? (
            <table className="w-full text-right text-sm">
              <thead className="bg-muted/40 text-xs font-semibold text-muted-foreground border-b border-border/50">
                <tr>
                  <th className="py-3.5 px-6">المستخدم</th>
                  <th className="py-3.5 px-6">الصلاحية الحالية</th>
                  <th className="py-3.5 px-6 text-center">ألعاب تم استضافتها</th>
                  <th className="py-3.5 px-6">تاريخ التسجيل</th>
                  <th className="py-3.5 px-6 text-center">إجراءات الصلاحية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {users.map((user) => {
                  const isCurrent = user.id === currentUserId;
                  const isAdmin = user.role === "admin";
                  const isUpdating = updatingId === user.id;

                  const initials = user.display_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase() || "U";

                  return (
                    <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                      {/* User Profile Info */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <Avatar className="size-10 border border-primary/20 bg-gradient-hero text-primary-foreground font-bold">
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {initials}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground">{user.display_name}</span>
                              {isCurrent && (
                                <Badge variant="outline" className="text-[10px] bg-primary/10 text-primary border-primary/20">
                                  حسابك الحالي
                                </Badge>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground block dir-ltr text-right">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Current Role Badge */}
                      <td className="py-4 px-6">
                        {isAdmin ? (
                          <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-0 font-bold gap-1 py-1 px-2.5">
                            <ShieldCheck className="size-3.5" />
                            مسؤول (Admin)
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="font-medium text-muted-foreground gap-1 py-1 px-2.5">
                            <UserCheck className="size-3.5" />
                            مستخدم (User)
                          </Badge>
                        )}
                      </td>

                      {/* Games Hosted Count */}
                      <td className="py-4 px-6 text-center">
                        <div className="inline-flex items-center gap-1.5 font-semibold text-xs bg-muted/50 px-3 py-1 rounded-full">
                          <Gamepad2 className="size-3.5 text-primary" />
                          <span>{user.total_games_hosted} مباراة</span>
                        </div>
                      </td>

                      {/* Registration Date */}
                      <td className="py-4 px-6 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          <span>
                            {new Date(user.created_at).toLocaleDateString("ar-EG", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </td>

                      {/* Role Management Actions */}
                      <td className="py-4 px-6 text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={isUpdating}
                              className="rounded-xl gap-2 border-border hover:bg-muted"
                            >
                              {isUpdating ? (
                                <RefreshCw className="size-3.5 animate-spin" />
                              ) : (
                                <Shield className="size-3.5 text-primary" />
                              )}
                              <span>تغيير الصلاحية</span>
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end" className="rounded-xl w-48 dir-rtl">
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                              تحديد مستوى الصلاحية
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                              disabled={isAdmin}
                              onClick={() => handleUpdateRole(user.id, "admin")}
                              className="gap-2 cursor-pointer text-emerald-600 dark:text-emerald-400 font-medium"
                            >
                              <ShieldCheck className="size-4" />
                              منح صلاحية مسؤول (Grant Admin)
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              disabled={!isAdmin}
                              onClick={() => handleUpdateRole(user.id, "user")}
                              className="gap-2 cursor-pointer text-rose-600 dark:text-rose-400 font-medium"
                            >
                              <UserX className="size-4" />
                              سحب الصلاحية (Revoke Admin)
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="p-12 text-center space-y-3">
              <Users className="size-12 mx-auto text-muted-foreground/40" />
              <p className="text-base font-semibold">لم يتم العثور على مستخدمين</p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                جرب تغيير البحث أو فلتر التصفية لإظهار المزيد من الحسابات المسجلة.
              </p>
            </div>
          )}
        </CardContent>
        {!loading && filteredTotal > 0 ? (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/50 px-6 py-4">
            <p className="text-xs text-muted-foreground">
              عرض {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredTotal)} من {filteredTotal} حساب
            </p>
            <div className="flex items-center gap-2" dir="ltr">
              <Button variant="outline" size="sm" className="rounded-xl" disabled={page <= 1} onClick={() => setPage((value) => value - 1)}>
                <ChevronLeft className="size-4" />
              </Button>
              <span className="min-w-20 text-center text-xs font-semibold">{page} / {totalPages}</span>
              <Button variant="outline" size="sm" className="rounded-xl" disabled={page >= totalPages} onClick={() => setPage((value) => value + 1)}>
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
