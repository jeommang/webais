import { db } from "@/app/lib/firebaseAdmin"; // 이미 쓰고 있는 admin 인스턴스
import type { Client } from "@/app/types/client";

export async function getActiveClients(): Promise<Client[]> {
  const snap = await db
    .collection("clients")
    .where("active", "==", true)
    .orderBy("order", "asc")
    .get();

  return snap.docs.map((d) => {
    const x = d.data() as any;
    return {
      name: x.name ?? "",
      logoUrl: x.logoUrl ?? "",
      homepage: x.homepage ?? "",
      order: x.order ?? 0,
      active: !!x.active,
    } as Client;
  });
}
