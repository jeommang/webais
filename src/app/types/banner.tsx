export type Banner = {
  title: string;
  subtitle?: string;
  mediaType: "image" | "video";
  imageUrl?: string;
  videoUrl?: string;
  overlay?: number; // 0~1
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  order: number;
  active: boolean;
};
