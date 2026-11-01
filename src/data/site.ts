export interface NavRoute {
  idx: string;
  cmd: string;
  href: string;
  pageId: string;
  desc: string;
  mobileDesc: string;
  tabletDesc: string;
  isBadge?: boolean;
}

export const PRIMARY_ROUTES: NavRoute[] = [
  {
    idx: '01',
    cmd: '/home',
    href: '/',
    pageId: 'home',
    desc: 'overview, latest logs & photos',
    mobileDesc: 'intro & logs',
    tabletDesc: 'overview, latest essays & 35mm strip',
  },
  {
    idx: '02',
    cmd: '/posts',
    href: '/posts',
    pageId: 'posts',
    desc: '24 essays on systems, linux & startups',
    mobileDesc: '24 essays',
    tabletDesc: '24 posts + pagefind static search',
  },
  {
    idx: '03',
    cmd: '/projects',
    href: '/projects',
    pageId: 'projects',
    desc: 'eHom NAS, BitPerfect-DAC & hardware',
    mobileDesc: 'eHom & DAC',
    tabletDesc: 'eHom NAS, BitPerfect-DAC, hungryGMS',
  },
  {
    idx: '04',
    cmd: '/shelf',
    href: '/shelf',
    pageId: 'shelf',
    desc: 'auto-synced spotify, books, films & 35mm',
    mobileDesc: 'live spotify',
    tabletDesc: 'automated spotify api + book/film rss',
  },
  {
    idx: '05',
    cmd: '/cv',
    href: '/cv',
    pageId: 'cv',
    desc: 'experience, metrics & book 15-min call',
    mobileDesc: 'hire & pdf',
    tabletDesc: 'quantified impact + book 15-min call',
  },
  {
    idx: '06',
    cmd: '/contact',
    href: '/contact',
    pageId: 'contact',
    desc: 'cloudflare turnstile inbox & socials',
    mobileDesc: 'direct inbox',
    tabletDesc: 'cloudflare turnstile direct message',
  },
];

export const VIEWPORT_ROUTE: NavRoute = {
  idx: '07',
  cmd: '[viewports]',
  href: '/viewports',
  pageId: 'responsive-preview',
  desc: 'preview 375px mobile & 768px tablet UI',
  mobileDesc: '375px & 768px',
  tabletDesc: 'preview 375px mobile & 768px tablet UI',
  isBadge: true,
};

export const ALL_NAV_ROUTES: NavRoute[] = [...PRIMARY_ROUTES, VIEWPORT_ROUTE];

export interface SelectedProject {
  meta: string;
  title: string;
  href: string;
  desc: string;
}

export const HOME_SELECTED_PROJECTS: SelectedProject[] = [
  {
    meta: 'eHom Tech · NAS',
    title: 'eHom Private Cloud & OMV NAS Server Stack',
    href: '/projects',
    desc: 'Centralized RAID/ZFS storage, automated Borg backups, and Plex/Jellyfin media engine deployed for SMBs and home labs.',
  },
  {
    meta: 'C / Shell · ★ 140+',
    title: 'BitPerfect-DAC & magisk-module-hungryGMS',
    href: '/projects',
    desc: 'Open-source Android system modules for lossless USB audio routing and taming Google Play Services wakelock battery drain.',
  },
];

export interface PhotoStripItem {
  src: string;
  alt: string;
  filename: string;
  tag: string;
}

export const HOME_PHOTOS: PhotoStripItem[] = [
  {
    src: 'https://picsum.photos/seed/mumbai-rain/420/260',
    alt: 'Monsoon dusk in Mumbai',
    filename: 'mumbai_dusk.jpg',
    tag: '35mm',
  },
  {
    src: 'https://picsum.photos/seed/nas-rack/420/260',
    alt: 'Custom 4-bay Linux ZFS NAS build',
    filename: 'ehom_nas_v3.jpg',
    tag: 'lab',
  },
  {
    src: 'https://picsum.photos/seed/dac-audio/420/260',
    alt: 'USB DAC & IEM setup',
    filename: 'flac_rig.jpg',
    tag: 'audio',
  },
];

export const SHELF_PHOTOS: PhotoStripItem[] = [
  {
    src: 'https://picsum.photos/seed/mumbai-rain/420/260',
    alt: 'Mumbai Monsoon Street',
    filename: 'mumbai_monsoon.jpg',
    tag: '2025',
  },
  {
    src: 'https://picsum.photos/seed/nas-rack/420/260',
    alt: 'eHom ZFS Server Build',
    filename: 'ehom_4bay_zfs.jpg',
    tag: '2025',
  },
  {
    src: 'https://picsum.photos/seed/dac-audio/420/260',
    alt: 'BitPerfect DAC Bench',
    filename: 'dac_oscilloscope.jpg',
    tag: '2024',
  },
  {
    src: 'https://picsum.photos/seed/konkan-coast/420/260',
    alt: 'Konkan Coast Sunset',
    filename: 'konkan_coast.jpg',
    tag: '2024',
  },
  {
    src: 'https://picsum.photos/seed/thinkpad-linux/420/260',
    alt: 'Linux Terminal Setup',
    filename: 'freebsd_thinkpad.jpg',
    tag: '2024',
  },
  {
    src: 'https://picsum.photos/seed/coffee-filter/420/260',
    alt: 'Morning Pour Over',
    filename: 'v60_morning.jpg',
    tag: '2024',
  },
];

export interface EngagementModel {
  meta: string;
  title: string;
  desc: string;
}

export const CV_ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    meta: '01 · consulting',
    title: 'Private Cloud, NAS & Linux Infrastructure',
    desc: 'Designing high-availability ZFS/RAID storage, self-hosted Nextcloud/backups, and zero-trust WireGuard networks that cut SaaS/AWS storage spend by 50–70%.',
  },
  {
    meta: '02 · engineering',
    title: 'Embedded Linux, Android AOSP/HAL & Python Systems',
    desc: 'Custom hardware-software integration, kernel/audio routing optimization, and backend automation.',
  },
  {
    meta: '03 · training',
    title: 'Executive & Engineering Workshops',
    desc: 'Deep-dive bootcamps on Python OOP, Linux internals, Computer Networks, and Cloud Architecture.',
  },
];

export interface ExperienceItem {
  meta: string;
  role: string;
  bullets: string[];
  proofLink?: {
    label: string;
    href: string;
    dataPage?: string;
    external?: boolean;
  };
}

export const CV_EXPERIENCE: ExperienceItem[] = [
  {
    meta: '2020 — present',
    role: 'Co-Founder & Systems Architect · eHom Technologies (eHom Data Storage Solutions)',
    bullets: [
      'Architected and deployed turnkey Linux/OpenMediaVault/ZFS NAS appliances for SMBs and prosumers, reducing client 3-year cloud storage TCO by <strong>68%</strong>.',
      'Engineered automated local + remote off-site encrypted backup pipelines achieving <strong>99.98% data durability</strong> and saturating 2.5GbE LAN throughput.',
    ],
    proofLink: {
      label: '[proof: read NAS architecture post →]',
      href: '/posts/architecting-zero-cloud-smb-storage-omv-zfs-nextcloud',
      dataPage: 'article-view',
    },
  },
  {
    meta: '2016 — present',
    role: 'Assistant Professor / Lecturer in Computer Science & Engineering',
    bullets: [
      'Taught <strong>1,200+ undergraduate CS/IT students</strong> across Mumbai University colleges in Computer Networks, Operating Systems (Linux/FreeBSD), Cloud Computing, IoT, and Python/C++.',
      'Mentored 35+ final-year hardware and distributed systems capstone projects from prototype to deployment.',
    ],
    proofLink: {
      label: '[proof: read CS pedagogy essay →]',
      href: '/posts/teaching-object-oriented-python-computer-networks',
      dataPage: 'article-view',
    },
  },
  {
    meta: '2018 — 2019',
    role: 'Published Technical Author · Packt Publishing (UK)',
    bullets: [
      'Authored and recorded <em>"Getting Started with Object-Oriented Programming in Python 3"</em>, distilling production OOP design patterns for global developers.',
    ],
    proofLink: {
      label: '[proof: view course in /projects →]',
      href: '/projects#packt-python-oop',
      dataPage: 'projects',
    },
  },
  {
    meta: 'open source',
    role: 'Creator & Maintainer · BitPerfect-DAC & hungryGMS (@varunpilankar)',
    bullets: [
      'Built open-source Android system/Magisk modules used by audiophiles and power users worldwide to achieve lossless USB DAC routing and reduce idle GMS wakelocks by <strong>42%</strong>.',
    ],
    proofLink: {
      label: '[proof: github.com/varunpilankar ↗]',
      href: 'https://github.com/varunpilankar',
      external: true,
    },
  },
];

export interface TechStackRow {
  meta: string;
  desc: string;
}

export const CV_TECH_STACK: TechStackRow[] = [
  {
    meta: 'systems & os',
    desc: 'Linux (Debian, Arch, OpenMediaVault), FreeBSD, OpenZFS, Docker, KVM/Proxmox, Android HAL/Magisk, WireGuard',
  },
  {
    meta: 'languages',
    desc: 'Python 3, C, C++, POSIX Shell / Bash, SQL, JavaScript / TypeScript (Astro)',
  },
  {
    meta: 'education',
    desc: '<strong>M.Sc. &amp; B.Sc. in Computer Science</strong> · University of Mumbai',
  },
];
