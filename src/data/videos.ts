export type VideoItem = {
  id: string;
  title: string;
  tag: string;
  youtubeId: string;
  year: string;
  client?: string;
};

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const videos: VideoItem[] = [
  {
    id: "showreel",
    title: "GROW GREAT STORY",
    tag: "Featured",
    youtubeId: "pKkj-0fSkLs",
    year: "2024",
    client: "Grow Great",
  },
  {
    id: "v1",
    title: "INVEST SA AFRICA ENERGY INDABA",
    tag: "Live Event",
    youtubeId: "aez-OBFGobI",
    year: "2024",
    client: "Invest SA",
  },
  {
    id: "v2",
    title: "BONGANI & MALEBO SIBIYA WEDDING HIGHLIGHTS DAY 1",
    tag: "Wedding",
    youtubeId: "TFGFyYwVqNE",
    year: "2024",
    client: "Sibiya",
  },
  {
    id: "v3",
    title: "Ria Ledwaba Foundation Golf Day Promo",
    tag: "Corporate",
    youtubeId: "XC71GOsk8Mg",
    year: "2024",
    client: "Ria Ledwaba Foundation",
  },
  {
    id: "v4",
    title: "ANNUAL PRESIDENTIAL GALA DINNER 2024",
    tag: "Live Event",
    youtubeId: "HQLHyvsX6JA",
    year: "2024",
    client: "PBF",
  },
  {
    id: "v5",
    title: "PBF ANC COLLOQUIUM",
    tag: "Live Event",
    youtubeId: "zqfa3Ginjms",
    year: "2024",
    client: "PBF",
  },
  {
    id: "v6",
    title: "PBF ANNUAL PRESIDENTIAL GOLF DAY 2024",
    tag: "Live Event",
    youtubeId: "ZRQkyQtlG6c",
    year: "2024",
    client: "PBF",
  },
  {
    id: "v7",
    title: "SAFPA 2025 ELECTIVE CONFERENCE",
    tag: "Live Event",
    youtubeId: "hwBHqeeN_DE",
    year: "2025",
    client: "SAFPA",
  },
  {
    id: "v8",
    title: "BUSA VIDEO",
    tag: "Corporate",
    youtubeId: "B_odzuRU6kA",
    year: "2024",
    client: "BUSA",
  },
  {
    id: "v9",
    title: "MHLONTLO LEGACY FESTIVAL",
    tag: "Live Event",
    youtubeId: "Mts1RUPxVEE",
    year: "2023",
  },
  {
    id: "v10",
    title: "RAMKIKI PROFILE",
    tag: "Corporate",
    youtubeId: "32HlevNjeN4",
    year: "2023",
  },
];

export const getPoster = (id: string) => yt(id);
export const getVideo = (id: string) => videos.find((v) => v.id === id);
