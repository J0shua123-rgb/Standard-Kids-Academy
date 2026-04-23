import React from "react";
import { Link, useLocation } from "wouter";
import { LogOut } from "lucide-react";
import logoImg from "@assets/logo.jpeg";
import { useAuth, roleHomePath } from "@/lib/auth";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
}

export function PortalShell({
  title,
  nav,
  children,
}: {
  title: string;
  nav: NavItem[];
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const [, navigate] = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <Link href={user ? roleHomePath(user.role) : "/"} className="flex items-center gap-2">
            <img src={logoImg} alt="SKA" className="w-9 h-9 rounded-md object-contain bg-white" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-primary text-sm">Standard Kids</span>
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground">{title}</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {user && (
              <span className="hidden sm:block text-sm text-muted-foreground">
                {user.fullName} <span className="text-xs">({user.role})</span>
              </span>
            )}
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-2 flex gap-1 overflow-x-auto">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">{children}</main>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [location] = useLocation();
  const active = location === href;
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}
