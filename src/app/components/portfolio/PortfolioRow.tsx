"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/app/types/portfolio";

type Props = {
  items: Portfolio[];
  /** 보이는 카드 개수: lg 기준 4개 */
  auto?: boolean;
  intervalMs?: number; // 자동 롤링 간격
};

export default function PortfolioRow({
  items,
  auto = true,
  intervalMs = 3000,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setPaused] = useState(false);

  // 자동 롤링
  useEffect(() => {
    if (!auto) return;
    const el = wrapRef.current;
    if (!el) return;

    let timer: any;

    const tick = () => {
      if (!el || isPaused) return;

      const card = el.querySelector<HTMLElement>("[data-card]");
      if (!card) return;

      // 카드 넓이 + gap(=16px) 만큼씩 이동 (gap은 아래 className의 gap-4 기준)
      const step = card.offsetWidth + 16;

      // 끝에 거의 다 오면 처음으로
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    timer = setInterval(tick, intervalMs);
    return () => clearInterval(timer);
  }, [auto, intervalMs, isPaused]);

  // 마우스 올리면 자동 멈춤/내리면 재개
  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <div
      ref={wrapRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="
        mt-6
        flex gap-4 overflow-x-auto scroll-smooth pb-2
        pr-12
        snap-x snap-mandatory
      "
      // 모바일에서 스와이프/휠로 수동 스크롤 가능
    >
      {items.map((p) => {
        const label = p.categories?.[0] ?? "";
        return (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="
              flex-none
              w-[85%] sm:w-1/2 lg:w-1/4
              snap-start
              group
            "
            data-card
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
                sizes="(max-width:640px) 85vw, (max-width:1024px) 50vw, 25vw"
              />
            </div>

            <div className="mt-3">
              <h3 className="text-[17px] font-semibold leading-snug">
                {p.client || p.title}
              </h3>
              {label && (
                <p className="text-sm text-neutral-500 mt-1">{label}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
