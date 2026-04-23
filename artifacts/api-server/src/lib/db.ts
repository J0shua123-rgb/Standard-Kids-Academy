import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import bcrypt from "bcryptjs";

const dataDir = path.resolve(process.cwd(), "artifacts/api-server/data");
fs.mkdirSync(dataDir, { recursive: true });

export const db = new Database(path.join(dataDir, "app.db"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('STUDENT','STAFF','ADMIN')),
    created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
  );

  CREATE TABLE IF NOT EXISTS assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    instructions TEXT NOT NULL,
    due_date TEXT,
    class_or_group TEXT,
    created_by INTEGER NOT NULL REFERENCES users(id),
    created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
  );

  CREATE TABLE IF NOT EXISTS library_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT,
    visibility TEXT NOT NULL DEFAULT 'ALL',
    created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
  );

  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    assignment_id INTEGER NOT NULL REFERENCES assignments(id) ON DELETE CASCADE,
    student_id INTEGER NOT NULL REFERENCES users(id),
    file_url TEXT NOT NULL,
    submitted_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
  );
`);

export type Role = "STUDENT" | "STAFF" | "ADMIN";

export interface UserRow {
  id: number;
  username: string;
  password_hash: string;
  full_name: string;
  role: Role;
  created_at: number;
}

export function seedIfEmpty() {
  const row = db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number };
  if (row.c > 0) return;

  const seeds: Array<{ username: string; password: string; fullName: string; role: Role }> = [
    { username: "admin", password: "admin123", fullName: "School Admin", role: "ADMIN" },
    { username: "teacher", password: "teacher123", fullName: "Ms. Mensah", role: "STAFF" },
    { username: "kofi", password: "student123", fullName: "Kofi Asare", role: "STUDENT" },
    { username: "ama", password: "student123", fullName: "Ama Boateng", role: "STUDENT" },
  ];

  const insert = db.prepare(
    "INSERT INTO users (username, password_hash, full_name, role) VALUES (?, ?, ?, ?)",
  );
  for (const s of seeds) {
    insert.run(s.username, bcrypt.hashSync(s.password, 10), s.fullName, s.role);
  }

  // eslint-disable-next-line no-console
  console.log("[seed] Created demo users:");
  for (const s of seeds) {
    // eslint-disable-next-line no-console
    console.log(`  ${s.role.padEnd(7)} -> username: ${s.username}  password: ${s.password}`);
  }
}

seedIfEmpty();
