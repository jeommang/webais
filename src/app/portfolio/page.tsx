import type { Metadata } from "next";
import PortfolioGrid from "@/app/components/portfolio/PortfolioGrid";
import { getActivePortfolios } from "@/app/lib/repositories/portfolioRepo";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "위베이스의 마케팅 프로젝트 포트폴리오를 확인해보세요. SNS 광고, 바이럴, 콘텐츠, 브랜드 마케팅 사례를 소개합니다.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default async function PortfolioPage() {
  const items = await getActivePortfolios();
  return <PortfolioGrid items={items} />;
}
