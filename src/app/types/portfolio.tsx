// src/app/types/portfolio.ts
export type Portfolio = {
  slug: string;
  title: string; // Client로 사용
  goal?: string; // Project 제목으로 사용
  works: string[]; // 점 목록으로 세로 나열
  period?: string;
  result?: string;
  client?: string; // (옵션) 과거 데이터 호환용

  coverImageUrl: string;
  detailCoverImageUrl?: string;
  images: string[];
  videos?: string[];

  categories: string[];
  order?: number;
  active: boolean;

  objectPosition?: string;
};
