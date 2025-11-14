export type Client = {
  name: string; // 고객사명
  logoUrl: string; // 로고 이미지 URL (SVG/PNG 권장)
  homepage?: string; // 클릭시 이동 URL (옵션)
  order?: number; // 정렬
  active?: boolean; // 노출 여부
};
