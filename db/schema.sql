-- Cloudflare D1 SQLite Schema for il0g.com Zero-Maintenance Verified Comments
-- Protected by Cloudflare Turnstile + 1-Click Email Verification + Honeypot

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

-- Seed verified comments for initial posts
INSERT OR IGNORE INTO comments (
  id,
  post_slug,
  author_name,
  author_role,
  author_email,
  body,
  verified,
  verified_at,
  author_reply,
  author_reply_at,
  created_at
) VALUES
  (
    1,
    'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud',
    'Rohan Deshmukh',
    'Systems Engineer',
    'rohan.deshmukh@example.com',
    'Setting `zfs_arc_max` to 50% RAM saved our OMV box from OOM-killing Docker containers during nightly scrubs. Are you using special allocation vdevs on NVMe?',
    1,
    '2025-02-19T09:15:00Z',
    'Yes! On 4-bay builds we mirror two enterprise M.2 drives for metadata + small blocks—makes `rsync` directory traversals 10x snappier.',
    '2025-02-19T11:40:00Z',
    '2025-02-19'
  ),
  (
    2,
    'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud',
    'Siddharth Rao',
    'Infrastructure Lead',
    'siddharth.rao@example.com',
    'We replicated your WireGuard + BorgBackup off-site snapshot pattern across two Mumbai studio locations—zero cloud egress fees and 275 MB/s over 2.5GbE.',
    1,
    '2025-02-20T14:22:00Z',
    NULL,
    NULL,
    '2025-02-20'
  );
