"use client";

import Image from "next/image";
import { useRef } from "react";

export default function HorizontalGallery({
  images,
  itemRatio = "aspect-[4/3]", // 필요하면 "aspect-[3/4]" 로 교체 가능
}: {
  images: string[];
  itemRatio?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dx: number) =>
    ref.current?.scrollBy({ left: dx, behavior: "smooth" });

  if (!images || images.length === 0) return null;

  return (
    <div className="relative">
      {/* 좌/우 버튼 (md 이상에서만) */}
      <button
        onClick={() => scrollBy(-500)}
        aria-label="이전"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 items-center justify-center rounded-full border bg-white/90
                   shadow-sm hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={() => scrollBy(500)}
        aria-label="다음"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 items-center justify-center rounded-full border bg-white/90
                   shadow-sm hover:bg-white"
      >
        ›
      </button>

      {/* 가로 스크롤 영역 */}
      <div
        ref={ref}
        className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex gap-4 pr-4">
          {images.map((src, i) => (
            <div
              key={i}
              className={`shrink-0 w-[80vw] md:w-[520px] ${itemRatio}
                          snap-start relative rounded-xl overflow-hidden border bg-black`}
            >
              <Image
                src={src}
                alt={`portfolio-image-${i}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 80vw, 520px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
