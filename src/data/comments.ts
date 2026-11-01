export interface VerifiedComment {
  id: number;
  postSlug: string;
  authorName: string;
  authorRole?: string;
  body: string;
  verified: boolean;
  createdAt: string;
  authorReply?: string;
  authorReplyMeta?: string;
}

export const INITIAL_VERIFIED_COMMENTS: VerifiedComment[] = [
  {
    id: 1,
    postSlug: 'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud',
    authorName: 'Rohan Deshmukh',
    authorRole: 'Systems Engineer',
    body: 'Setting `zfs_arc_max` to 50% RAM saved our OMV box from OOM-killing Docker containers during nightly scrubs. Are you using special allocation vdevs on NVMe?',
    verified: true,
    createdAt: '2025-02-19',
    authorReply:
      'Yes! On 4-bay builds we mirror two enterprise M.2 drives for metadata + small blocks—makes `rsync` directory traversals 10x snappier.',
    authorReplyMeta: 'indrasen (author) · replied via email',
  },
  {
    id: 2,
    postSlug: 'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud',
    authorName: 'Siddharth Rao',
    authorRole: 'Infrastructure Lead',
    body: 'We replicated your WireGuard + BorgBackup off-site snapshot pattern across two Mumbai studio locations—zero cloud egress fees and 275 MB/s over 2.5GbE.',
    verified: true,
    createdAt: '2025-02-20',
  },
];

export function getVerifiedCommentsForPost(postSlug?: string): VerifiedComment[] {
  if (!postSlug) {
    return INITIAL_VERIFIED_COMMENTS;
  }
  const matches = INITIAL_VERIFIED_COMMENTS.filter((c) => c.postSlug === postSlug);
  return matches.length > 0 ? matches : INITIAL_VERIFIED_COMMENTS;
}
