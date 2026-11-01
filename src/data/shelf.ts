import { SHELF_PHOTOS, type PhotoStripItem } from './site';

export interface ShelfTag {
  label: string;
  href?: string;
  pageId?: string;
  color?: string;
}

export interface ShelfRotationItem {
  id: string;
  meta: string;
  title: string;
  descHtml: string;
  descText: string;
  tags: ShelfTag[];
}

export interface ShelfEvergreenItem {
  id: string;
  meta: string;
  title: string;
  desc: string;
}

export interface ShelfFeedPayload {
  status: 'ok';
  source: string;
  cachedAt: string;
  updatedLabel: string;
  ttlSeconds: number;
  rotation: ShelfRotationItem[];
  evergreen: ShelfEvergreenItem[];
  photos: PhotoStripItem[];
}

export const DEFAULT_SHELF_ROTATION: ShelfRotationItem[] = [
  {
    id: 'spotify-live',
    meta: '♫ spotify · live',
    title: 'Khruangbin — "A La Sala" (24-bit / 96kHz FLAC & Spotify)',
    descHtml:
      'Last played track: <em>May Ninth</em> · Top genres this month: Psychedelic Dub, Instrumental Post-Rock, Classic Indian Classical Fusion.',
    descText:
      'Last played track: May Ninth · Top genres this month: Psychedelic Dub, Instrumental Post-Rock, Classic Indian Classical Fusion.',
    tags: [
      { label: '● synced via spotify worker', color: 'var(--status-green)' },
      { label: 'usb-dac' },
    ],
  },
  {
    id: 'goodreads-rss',
    meta: '📖 goodreads rss',
    title: 'Designing Data-Intensive Applications — Martin Kleppmann',
    descHtml:
      'Re-reading Chapter 9 (Consistency and Consensus) alongside <em>Operating Systems: Three Easy Pieces</em> for my systems lectures.',
    descText:
      'Re-reading Chapter 9 (Consistency and Consensus) alongside Operating Systems: Three Easy Pieces for my systems lectures.',
    tags: [
      {
        label: 'read my book notes →',
        href: '/posts/notes-designing-data-intensive-applications-khruangbin',
        pageId: 'article-view',
        color: 'var(--accent)',
      },
      { label: '★ 5/5' },
    ],
  },
  {
    id: 'letterboxd-rss',
    meta: '🎬 letterboxd rss',
    title: 'Stalker (1979, dir. Andrei Tarkovsky) · 4K Remaster',
    descHtml:
      'Streamed uncompressed from my local eHom Jellyfin NAS over 2.5GbE. Unmatched pacing and sound design.',
    descText:
      'Streamed uncompressed from my local eHom Jellyfin NAS over 2.5GbE. Unmatched pacing and sound design.',
    tags: [{ label: 'sci-fi' }, { label: '★ 5/5' }],
  },
];

export const DEFAULT_SHELF_EVERGREEN: ShelfEvergreenItem[] = [
  {
    id: 'books-canon',
    meta: 'books · canon',
    title: 'UNIX and Linux System Administration Handbook · The Pragmatic Programmer · Zero to One',
    desc: 'The three books I gift most often to students and early-stage technical founders.',
  },
  {
    id: 'records-reference',
    meta: 'records · reference',
    title: 'Daft Punk (Random Access Memories) · Pink Floyd (Wish You Were Here) · Nujabes',
    desc: 'My reference tracks whenever testing a new USB DAC, IEM crossover, or kernel audio patch.',
  },
];

export function buildShelfFeedPayload(): ShelfFeedPayload {
  return {
    status: 'ok',
    source: 'cloudflare-worker-edge-cache',
    cachedAt: new Date().toISOString(),
    updatedLabel: 'updated 14m ago',
    ttlSeconds: 3600,
    rotation: DEFAULT_SHELF_ROTATION,
    evergreen: DEFAULT_SHELF_EVERGREEN,
    photos: SHELF_PHOTOS,
  };
}
