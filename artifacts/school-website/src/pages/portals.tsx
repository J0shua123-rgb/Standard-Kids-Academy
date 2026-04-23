import React from "react";
import { useLocation, Redirect } from "wouter";
import { BookOpen, FileText, Library, Users, GraduationCap, Upload, ClipboardList } from "lucide-react";
import { useAuth, type Role } from "@/lib/auth";
import { PortalShell } from "@/components/PortalShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function Guard({ allow, children }: { allow: Role[]; children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center text-muted-foreground">
        Loading…
      </div>
    );
  }
  if (!user) return <Redirect to="/login" />;
  if (!allow.includes(user.role)) return <Redirect to="/login" />;
  return <>{children}</>;
}

const studentNav = [
  { label: "Dashboard", href: "/student" },
  { label: "Assignments", href: "/student/assignments" },
  { label: "E-Library", href: "/student/library" },
];

const staffNav = [
  { label: "Dashboard", href: "/staff" },
  { label: "Assignments", href: "/staff/assignments" },
  { label: "E-Library", href: "/staff/library" },
];

const adminNav = [
  { label: "Dashboard", href: "/admin" },
  { label: "Users", href: "/admin/users" },
];

function PlaceholderCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
          <Icon className="w-5 h-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground border border-dashed rounded-md p-4 text-center">
          Coming soon
        </div>
      </CardContent>
    </Card>
  );
}

export function StudentDashboard() {
  const { user } = useAuth();
  return (
    <Guard allow={["STUDENT"]}>
      <PortalShell title="Student Portal" nav={studentNav}>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Welcome back, {user?.fullName.split(" ")[0]}!</h1>
        <p className="text-muted-foreground mb-8">Here's what's happening in your classes today.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard icon={ClipboardList} title="Assignments" desc="View and submit your work" />
          <PlaceholderCard icon={Library} title="E-Library" desc="Access reading materials" />
          <PlaceholderCard icon={GraduationCap} title="Results" desc="Check your assessment scores" />
        </div>
      </PortalShell>
    </Guard>
  );
}

export function StudentAssignments() {
  return (
    <Guard allow={["STUDENT"]}>
      <PortalShell title="Student Portal" nav={studentNav}>
        <h1 className="text-2xl font-bold mb-6">My Assignments</h1>
        <Card><CardContent className="py-12 text-center text-muted-foreground">No assignments posted yet.</CardContent></Card>
      </PortalShell>
    </Guard>
  );
}

export function StudentLibrary() {
  return (
    <Guard allow={["STUDENT"]}>
      <PortalShell title="Student Portal" nav={studentNav}>
        <h1 className="text-2xl font-bold mb-6">E-Library</h1>
        <Card><CardContent className="py-12 text-center text-muted-foreground">No items in the library yet.</CardContent></Card>
      </PortalShell>
    </Guard>
  );
}

export function StaffDashboard() {
  const { user } = useAuth();
  return (
    <Guard allow={["STAFF"]}>
      <PortalShell title="Staff Portal" nav={staffNav}>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Hello, {user?.fullName}</h1>
        <p className="text-muted-foreground mb-8">Manage your assignments and library resources.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard icon={FileText} title="Create Assignment" desc="Post new work for students" />
          <PlaceholderCard icon={Upload} title="Upload Library Item" desc="Share recordings & materials" />
          <PlaceholderCard icon={BookOpen} title="Submissions" desc="Review student work" />
        </div>
      </PortalShell>
    </Guard>
  );
}

export function StaffAssignments() {
  return (
    <Guard allow={["STAFF"]}>
      <PortalShell title="Staff Portal" nav={staffNav}>
        <h1 className="text-2xl font-bold mb-6">Assignments</h1>
        <Card><CardContent className="py-12 text-center text-muted-foreground">Create your first assignment soon.</CardContent></Card>
      </PortalShell>
    </Guard>
  );
}

export function StaffLibrary() {
  return (
    <Guard allow={["STAFF"]}>
      <PortalShell title="Staff Portal" nav={staffNav}>
        <h1 className="text-2xl font-bold mb-6">E-Library Management</h1>
        <Card><CardContent className="py-12 text-center text-muted-foreground">Upload library materials soon.</CardContent></Card>
      </PortalShell>
    </Guard>
  );
}

export function AdminDashboard() {
  const { user } = useAuth();
  return (
    <Guard allow={["ADMIN"]}>
      <PortalShell title="Admin Portal" nav={adminNav}>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Admin — {user?.fullName}</h1>
        <p className="text-muted-foreground mb-8">Manage users, roles and system settings.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard icon={Users} title="User Management" desc="Create accounts & assign roles" />
          <PlaceholderCard icon={ClipboardList} title="All Assignments" desc="Oversee posted work" />
          <PlaceholderCard icon={Library} title="Library Overview" desc="Audit library content" />
        </div>
      </PortalShell>
    </Guard>
  );
}

export function AdminUsers() {
  return (
    <Guard allow={["ADMIN"]}>
      <PortalShell title="Admin Portal" nav={adminNav}>
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <Card><CardContent className="py-12 text-center text-muted-foreground">User management coming soon.</CardContent></Card>
      </PortalShell>
    </Guard>
  );
}
