export interface InstagramPost {
  shortcode: string;
  type: "post" | "reel";
}

export interface EventPhase {
  label: string;
  posts: InstagramPost[];
}

export interface PortfolioEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  phases: EventPhase[];
}

export interface RandomPost {
  shortcode: string;
  type: "post" | "reel";
}

export interface CategoryPosts {
  label: string;
  posts: InstagramPost[];
}

export interface PortfolioSection {
  id: string;
  title: string;
  subtitle: string;
}

export const cryptoClubSection: PortfolioSection = {
  id: "crypto-club",
  title: "Crypto Club USTHB",
  subtitle: "Co-founder & Event Manager — Visual Identity & Social Media",
};

export const crystalPoolSection: PortfolioSection = {
  id: "crystal-pool",
  title: "Crystal Pool",
  subtitle: "Social Media Content & Visual Design",
};

export const crystalPoolCategories: CategoryPosts[] = [
  {
    label: "Swimming Pool Products",
    posts: [
      { shortcode: "DF4wzmuNTva", type: "post" },
      { shortcode: "DF48T1mh4Cr", type: "post" },
      { shortcode: "DF7M-zGPZ2i", type: "post" },
      { shortcode: "DF912NkhJRU", type: "post" },
      { shortcode: "DHszur_u886", type: "post" },
      { shortcode: "DQ_cPMviMtK", type: "post" },
    ],
  },
  {
    label: "Robots & Electric",
    posts: [
      { shortcode: "DLh-Vh9C03K", type: "post" },
      { shortcode: "DLz4PF-oKr3", type: "post" },
    ],
  },
  {
    label: "Advices",
    posts: [
      { shortcode: "DF0Ifwppf2z", type: "post" },
      { shortcode: "DGLEu2UJ7qx", type: "post" },
      { shortcode: "DGN4ZXBiVcN", type: "post" },
      { shortcode: "DGQIj1DiF5y", type: "post" },
      { shortcode: "DGdUyh3qXYZ", type: "post" },
    ],
  },
  {
    label: "Holidays",
    posts: [
      { shortcode: "DGwDRhIiWez", type: "post" },
      { shortcode: "DH32NI-CUhO", type: "post" },
      { shortcode: "DI6YIBHtZCl", type: "post" },
      { shortcode: "DKjMYUji5CZ", type: "post" },
    ],
  },
  {
    label: "Reels",
    posts: [
      { shortcode: "DJoc9PZCagm", type: "reel" },
      { shortcode: "DLFvoCcoXGN", type: "reel" },
      { shortcode: "DLirnD0ihpi", type: "reel" },
      { shortcode: "DL0fMbVIX5L", type: "reel" },
    ],
  },
];


export const cryptoClubEvents: PortfolioEvent[] = [
  {
    id: "event-01",
    title: "Algeria Talent Job Fair",
    subtitle: "Co-organisation with Huawei Algeria",
    date: "16 Nov 2024",
    phases: [
      {
        label: "Pre-event",
        posts: [
          { shortcode: "DCKntjLNeTM", type: "post" },
          { shortcode: "DCaA10wtp8E", type: "post" },
        ],
      },
      {
        label: "Event Day",
        posts: [{ shortcode: "DCRSn_0twQX", type: "reel" }],
      },
      {
        label: "After-event",
        posts: [{ shortcode: "DCeQ03DMcPN", type: "post" }],
      },
    ],
  },
  {
    id: "event-02",
    title: "Registration 2024/2025",
    date: "23 Oct 2024",
    phases: [
      {
        label: "Teaser",
        posts: [{ shortcode: "DBeFnJdI_fd", type: "reel" }],
      },
      {
        label: "Club Definition",
        posts: [{ shortcode: "DB9XZBeo6B8", type: "post" }],
      },
      {
        label: "Registration Link",
        posts: [{ shortcode: "DCANk21IrJF", type: "post" }],
      },
      {
        label: "Countdown",
        posts: [{ shortcode: "DCmkC0rtFO_", type: "reel" }],
      },
      {
        label: "Closed Registration",
        posts: [{ shortcode: "DCr9TR6tM3o", type: "post" }],
      },
    ],
  },
  {
    id: "event-03",
    title: "Crypto Gossra 1 & 2",
    date: "Ramadan 2023 & Ramadan 2024",
    phases: [
      {
        label: "Pre-event",
        posts: [
          { shortcode: "Cqk27fkIrqx", type: "post" },
          { shortcode: "C5LuUgIIjRa", type: "post" },
        ],
      },
      {
        label: "Event Day",
        posts: [
          { shortcode: "CqnlU2sIQLA", type: "post" },
          { shortcode: "C5Tug4XoqS3", type: "post" },
        ],
      },
    ],
  },
  {
    id: "event-04",
    title: "Pi Week 2024",
    date: "March 2024",
    phases: [
      {
        label: "Pre-event",
        posts: [
          { shortcode: "C4T3jsCI8m9", type: "post" },
          { shortcode: "C4T49tgIH99", type: "post" },
          { shortcode: "C4XWKEKoBWG", type: "post" },
        ],
      },
      {
        label: "Event Day",
        posts: [{ shortcode: "C4YNuy4ttbe", type: "post" }],
      },
      {
        label: "After-event",
        posts: [{ shortcode: "C4fV-c3IQm2", type: "post" }],
      },
    ],
  },
  {
    id: "event-05",
    title: "Winter is Coming / Registration 2023",
    date: "Dec 2023",
    phases: [
      {
        label: "Pre-event",
        posts: [{ shortcode: "C0XP-boo9xS", type: "post" }],
      },
      {
        label: "Event Day",
        posts: [
          { shortcode: "C0gXrntohNf", type: "post" },
          { shortcode: "C0tqGVJo-9k", type: "post" },
          { shortcode: "C0xBkwNoVl0", type: "post" },
          { shortcode: "C0y7JQbob_-", type: "post" },
        ],
      },
      {
        label: "After-event",
        posts: [
          { shortcode: "C1B5HM_Ia54", type: "reel" },
          { shortcode: "C1SnM7HIqrU", type: "post" },
        ],
      },
    ],
  },
  {
    id: "event-06",
    title: "Summer of Creativity",
    date: "Aug 2023",
    phases: [
      {
        label: "Pre-event",
        posts: [{ shortcode: "Cvwj8Ozon-t", type: "post" }],
      },
      {
        label: "Event Day",
        posts: [
          { shortcode: "CvzGp5ZtslN", type: "post" },
          { shortcode: "CwAFpJsIplu", type: "post" },
          { shortcode: "CwKZcuVIEZ9", type: "post" },
          { shortcode: "CwcTWmVoGhs", type: "post" },
        ],
      },
    ],
  },
  {
    id: "event-07",
    title: "Club Creation",
    date: "Feb 2023",
    phases: [
      {
        label: "Pre-event",
        posts: [
          { shortcode: "Cofj7OzoRbu", type: "reel" },
          { shortcode: "Coj5TdtolZy", type: "post" },
        ],
      },
      {
        label: "Event Day",
        posts: [
          { shortcode: "Coz0gE6IxyH", type: "post" },
          { shortcode: "Cpi3u9bIpSc", type: "post" },
          { shortcode: "Cp3NWpbo-OD", type: "post" },
          { shortcode: "Cp-iGtbIxUP", type: "post" },
          { shortcode: "CqEMKVwI9OU", type: "post" },
        ],
      },
      {
        label: "After-event",
        posts: [{ shortcode: "CqGPiRCItw3", type: "post" }],
      },
    ],
  },
];

export const cryptoClubRandomPosts: RandomPost[] = [
  { shortcode: "CpqZVkKoZ_q", type: "post" },
  { shortcode: "CpvkYWPoxOl", type: "post" },
  { shortcode: "CqGx_cQIXJK", type: "post" },
  { shortcode: "CrJszKvt0il", type: "post" },
  { shortcode: "CrTLBnqIM6I", type: "post" },
  { shortcode: "C4WiJUlIJP6", type: "post" },
  { shortcode: "C8UPu7BoJRk", type: "post" },
];

