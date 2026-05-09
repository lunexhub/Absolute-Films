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
    title: "Absolute Films Showreel",
    tag: "Featured",
    youtubeId: "pKkj-0fSkLs",
    year: "2024",
    client: "Absolute Films",
  },
  {
    id: "v1",
    title: "PBF Annual Colloquium 2024",
    tag: "Live Event",
    youtubeId: "aez-OBFGobI",
    year: "2024",
    client: "PBF",
  },
  {
    id: "v2",
    title: "PBF Annual Presidential Golf Day 2024",
    tag: "Live Event",
    youtubeId: "TFGFyYwVqNE",
    year: "2024",
    client: "PBF",
  },
  {
    id: "v3",
    title: "Annual Presidential Gala Dinner 2024",
    tag: "Live Event",
    youtubeId: "XC71GOsk8Mg",
    year: "2024",
    client: "PBF",
  },
  {
    id: "v4",
    title: "WFC 2015",
    tag: "Documentary",
    youtubeId: "HQLHyvsX6JA",
    year: "2015",
    client: "WFC",
  },
  {
    id: "v5",
    title: "JW Final View",
    tag: "Commercial",
    youtubeId: "zqfa3Ginjms",
    year: "2023",
    client: "JW",
  },
  {
    id: "v6",
    title: "Liquor License Online Presso",
    tag: "Corporate",
    youtubeId: "ZRQkyQtlG6c",
    year: "2022",
    client: "Liquor License Online",
  },
  {
    id: "v7",
    title: "SAHIF",
    tag: "Corporate",
    youtubeId: "hwBHqeeN_DE",
    year: "2021",
    client: "SAHIF",
  },
  {
    id: "v8",
    title: "SAHIF Covid 19 Stay Safe Campaign",
    tag: "Public Service",
    youtubeId: "B_odzuRU6kA",
    year: "2020",
    client: "SAHIF",
  },
  {
    id: "v9",
    title: "Brand Story",
    tag: "Commercial",
    youtubeId: "Mts1RUPxVEE",
    year: "2023",
  },
  {
    id: "v10",
    title: "Corporate Feature",
    tag: "Corporate",
    youtubeId: "32HlevNjeN4",
    year: "2023",
  },
];

export const getPoster = (id: string) => yt(id);
export const getVideo = (id: string) => videos.find((v) => v.id === id);
