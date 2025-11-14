import PortfolioGrid from "@/app/components/portfolio/PortfolioGrid";
import { getActivePortfolios } from "@/app/lib/repositories/portfolioRepo";

export default async function PortfolioPage() {
  const items = await getActivePortfolios();
  return <PortfolioGrid items={items} />;
}
