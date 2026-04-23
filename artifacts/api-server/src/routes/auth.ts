import { Router, type IRouter } from "express";
import bcrypt from "bcryptjs";
import { db, type UserRow } from "../lib/db";

const router: IRouter = Router();

router.post("/auth/login", (req, res) => {
  const { username, password } = req.body ?? {};
  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "username and password required" });
  }

  const user = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username.trim().toLowerCase()) as UserRow | undefined;

  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  req.session.userId = user.id;
  req.session.role = user.role;
  req.session.username = user.username;
  req.session.fullName = user.full_name;

  res.json({
    user: {
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      role: user.role,
    },
  });
});

router.post("/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("ska.sid");
    res.json({ ok: true });
  });
});

router.get("/auth/me", (req, res) => {
  if (!req.session.userId) return res.status(401).json({ user: null });
  res.json({
    user: {
      id: req.session.userId,
      username: req.session.username,
      fullName: req.session.fullName,
      role: req.session.role,
    },
  });
});

export default router;
