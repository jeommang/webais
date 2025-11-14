// src/app/lib/repositories/portfolioRepo.ts
import { db } from "@/app/lib/firebaseAdmin";
import type { Portfolio } from "@/app/types/portfolio";

const toStr = (v: any) => (v == null ? "" : String(v));
const toArr = (v: any): string[] =>
  Array.isArray(v) ? v.filter(Boolean).map(String) : v ? [String(v)] : [];

function mapDocToPortfolio(x: any): Portfolio {
  return {
    slug: toStr(x.slug),
    title: toStr(x.title),
    goal: toStr(x.goal),

    // 핵심: task(문자열/배열 가능) → works(배열)로 통일
    works: toArr(x.task ?? x.works),

    period: toStr(x.period),
    result: toStr(x.result),

    coverImageUrl: toStr(x.coverImageUrl),
    images: toArr(x.images),
    videos: Array.isArray(x.videos) ? x.videos : [],

    categories: toArr(x.categories),
    order: typeof x.order === "number" ? x.order : 0,
    active: !!x.active,

    objectPosition: toStr(x.objectPosition),
  };
}

export async function getActivePortfolios(): Promise<Portfolio[]> {
  const snap = await db
    .collection("portfolios")
    .where("active", "==", true)
    .get();

  const rows = snap.docs.map((d) => mapDocToPortfolio(d.data()));
  rows.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return rows;
}

export async function getPortfolioBySlug(
  slug: string
): Promise<Portfolio | null> {
  const snap = await db
    .collection("portfolios")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snap.empty) return null;
  return mapDocToPortfolio(snap.docs[0].data());
}
