import type { MetadataRoute } from "next";
import { getActivePortfolios } from "@/app/lib/repositories/portfolioRepo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://webais.kr";
  const portfolios = await getActivePortfolios();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolios
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${baseUrl}/portfolio/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...portfolioPages];
}
