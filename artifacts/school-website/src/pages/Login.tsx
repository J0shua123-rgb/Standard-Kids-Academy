import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import logoImg from "@assets/logo.jpeg";
import { useAuth, roleHomePath } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  const { login } = useAuth();
  const [, navigate] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const user = await login(username, password);
      navigate(roleHomePath(user.role));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-3">
          <div className="mx-auto bg-white rounded-2xl p-2 w-20 h-20 flex items-center justify-center shadow">
            <img src={logoImg} alt="Standard Kids Academy" className="w-full h-full object-contain" />
          </div>
          <CardTitle className="text-2xl">Portal Login</CardTitle>
          <CardDescription>Standard Kids Academy — Student & Staff Portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary underline-offset-4 hover:underline">
                ← Back to website
              </Link>
            </div>
            <div className="text-xs text-muted-foreground bg-muted/50 rounded-md p-3 space-y-1">
              <div className="font-semibold text-foreground">Demo accounts</div>
              <div>Admin: <code>admin</code> / <code>admin123</code></div>
              <div>Staff: <code>teacher</code> / <code>teacher123</code></div>
              <div>Student: <code>kofi</code> / <code>student123</code></div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
