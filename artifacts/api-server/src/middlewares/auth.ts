import type { Request, Response, NextFunction } from "express";
import type { Role } from "../lib/db";

declare module "express-session" {
  interface SessionData {
    userId?: number;
    role?: Role;
    username?: string;
    fullName?: string;
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  next();
}

export function requireRole(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userId) return res.status(401).json({ error: "Not authenticated" });
    if (!req.session.role || !roles.includes(req.session.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
}
