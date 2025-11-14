import { db } from "@/app/lib/firebaseAdmin";
import type { Banner } from "@/app/types/banner";

export async function getActiveBanners(): Promise<Banner[]> {
  const snap = await db
    .collection("banners")
    .where("active", "==", true)
    .orderBy("order", "asc")
    .get();

  return snap.docs.map((d) => d.data() as Banner);
}
