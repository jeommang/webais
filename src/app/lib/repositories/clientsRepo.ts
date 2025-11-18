import { db } from "@/app/lib/firebaseAdmin";
import type { Client } from "@/app/types/client";

function asStr(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}
function asNum(v: unknown, fallback = 0): number {
  return typeof v === "number" ? v : fallback;
}
function asBool(v: unknown): boolean {
  return v === true;
}

export async function getActiveClients(): Promise<Client[]> {
  const snap = await db
    .collection("clients")
    .where("active", "==", true)
    .orderBy("order", "asc") // 필드명이 priority라면 여기와 인덱스 둘 다 priority로 맞춰야 함
    .get();

  return snap.docs.map((d) => {
    const data = d.data() as Record<string, unknown>;
    return {
      // Client 타입에 id가 없다면 이 줄은 빼도 됨
      // id: d.id,
      name: asStr(data.name),
      logoUrl: asStr(data.logoUrl),
      homepage: asStr(data.homepage),
      order: asNum(data.order, 0),
      active: asBool(data.active),
    } as Client;
  });
}
