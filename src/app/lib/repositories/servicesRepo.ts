import { db } from "@/app/lib/firebaseAdmin";
import type { Service } from "@/app/types/service";

export async function getActiveServices(): Promise<Service[]> {
  const snap = await db
    .collection("services")
    .where("active", "==", true)
    .get(); // 인덱스 만들기 전 임시

  const rows = snap.docs.map((d) => d.data() as Service);
  rows.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return rows;
}
