-- Migration 0001: Zero-Maintenance Verified Comments Table & Indexes (Cloudflare D1)
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_role TEXT DEFAULT NULL,
  author_email TEXT NOT NULL,
  body TEXT NOT NULL,
  verified INTEGER NOT NULL DEFAULT 0,
  verification_token TEXT UNIQUE,
  verification_expires_at TEXT DEFAULT NULL,
  verified_at TEXT DEFAULT NULL,
  author_reply TEXT DEFAULT NULL,
  author_reply_at TEXT DEFAULT NULL,
  ip_hash TEXT DEFAULT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_comments_post_slug_verified
  ON comments (post_slug, verified, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_comments_verification_token
  ON comments (verification_token);
