"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/app/types/portfolio";

type Props = {
  items: Portfolio[];
  auto?: boolean;
  intervalMs?: number;
};

export default function PortfolioRow({
  items,
  auto = false,
  intervalMs = 2000,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 수동 스크롤
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!wrapRef.current) return;
    wrapRef.current.scrollLeft += e.deltaY;
  };

  // 자동 롤링
  useEffect(() => {
    if (!auto || !wrapRef.current) return;

    const el = wrapRef.current;
    timerRef.current = setInterval(() => {
      if (!el) return;
      // 마지막에 도달하면 처음으로
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth / 4, behavior: "smooth" });
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [auto, intervalMs]);

  return (
    <div
      ref={wrapRef}
      className="mt-6 flex gap-6 overflow-x-auto pb-3"
      onWheel={onWheel}
    >
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/portfolio/${p.slug}`}
          className="group shrink-0 w-[260px] sm:w-[280px] lg:w-[300px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={p.coverImageUrl}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              style={
                p.objectPosition
                  ? { objectPosition: p.objectPosition }
                  : undefined
              }
              sizes="(max-width:640px) 260px, (max-width:1024px) 280px, 300px"
            />
          </div>
          <div className="mt-3">
            <h3 className="text-[17px] font-semibold leading-snug">
              {p.client || p.title}
            </h3>
            {p.categories?.[0] && (
              <p className="text-sm text-neutral-500 mt-1">{p.categories[0]}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
