export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide" | "normal";
};

export const galleryImages: GalleryImage[] = [
  { id: 1,  src: "/File6.jpg",   alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 2,  src: "/File8.jpg",   alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 3,  src: "/File11.jpg",  alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 4,  src: "/File12.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 5,  src: "/File15.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 6,  src: "/File17.jpg",  alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 7,  src: "/File34.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 8,  src: "/File48.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 9,  src: "/File52.jpg",  alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 10, src: "/File54.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 11, src: "/File55.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 12, src: "/File59.jpg",  alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 13, src: "/File60.jpg",  alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 14, src: "/File85.jpg",  alt: "Bridal portrait", category: "Weddings", span: "tall" },
  { id: 15, src: "/File89.jpg",  alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 16, src: "/File95.jpg",  alt: "Bridal portrait", category: "Weddings", span: "tall" },
  { id: 17, src: "/File99.jpg",  alt: "Bridal portrait", category: "Weddings", span: "tall" },
  { id: 18, src: "/File101.jpg", alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 19, src: "/File102.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 20, src: "/File103.jpg", alt: "Wedding portrait", category: "Weddings", span: "tall" },
  { id: 21, src: "/File142.jpg", alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 22, src: "/File154.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 23, src: "/File155.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 24, src: "/File156.jpg", alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 25, src: "/File165.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 26, src: "/File167.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 27, src: "/File169.jpg", alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 28, src: "/File171.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 29, src: "/File174.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 30, src: "/File189.jpg", alt: "Wedding moment", category: "Weddings", span: "normal" },
  { id: 31, src: "/File434.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
  { id: 32, src: "/File448.jpg", alt: "Wedding moment", category: "Weddings", span: "tall" },
];

export const galleryCategories = ["All", "Weddings", "Corporate", "Events", "Portraits"];
