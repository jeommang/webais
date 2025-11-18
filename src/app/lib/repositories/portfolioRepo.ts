// src/app/lib/repositories/portfolioRepo.ts
import { db } from "@/app/lib/firebaseAdmin";
import type { Portfolio } from "@/app/types/portfolio";

/** ---------- type-safe helpers ---------- */
const toStr = (v: unknown, fallback = ""): string => {
  if (typeof v === "string") return v;
  if (v == null) return fallback;
  try {
    return String(v);
  } catch {
    return fallback;
  }
};

const toStringArray = (v: unknown): string[] => {
  if (Array.isArray(v)) {
    return v.map((x) => toStr(x)).filter(Boolean);
  }
  const s = toStr(v);
  return s ? [s] : [];
};

function mapDocToPortfolio(x: Record<string, unknown>): Portfolio {
  return {
    slug: toStr(x.slug),
    title: toStr(x.title),
    goal: toStr(x.goal),

    // task(문자/배열) 또는 works(배열) → works(배열)로 통일
    works: toStringArray(x.task ?? x.works),

    period: toStr(x.period),
    result: toStr(x.result),

    coverImageUrl: toStr(x.coverImageUrl),
    images: toStringArray(x.images),
    videos: toStringArray(x.videos),

    categories: toStringArray(x.categories),
    order: typeof x.order === "number" ? x.order : 0,
    active: x.active === true,

    objectPosition: toStr(x.objectPosition),
  };
}

/** ---------- queries ---------- */
export async function getActivePortfolios(): Promise<Portfolio[]> {
  const snap = await db
    .collection("portfolios")
    .where("active", "==", true)
    .get();

  const rows = snap.docs.map((d) =>
    mapDocToPortfolio(d.data() as Record<string, unknown>)
  );
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
  return mapDocToPortfolio(snap.docs[0].data() as Record<string, unknown>);
}
