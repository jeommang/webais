import type { MetadataRoute } from "next";
import { getActivePortfolios } from "@/app/lib/repositories/portfolioRepo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.webais.kr";
  const portfolios = await getActivePortfolios();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolios
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${baseUrl}/portfolio/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...portfolioPages];
}
