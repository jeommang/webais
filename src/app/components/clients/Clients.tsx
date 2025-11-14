"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Client } from "@/app/types/client";

type Props = {
  items: Client[];
  // 5열일 때는 15개(5 x 3줄)가 보기 좋아서 기본값을 15로 권장
  perPage?: number;
};

export default function Clients({ items, perPage = 10 }: Props) {
  const [page, setPage] = useState(0);

  const total = items?.length ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const pageItems = useMemo(() => {
    const start = page * perPage;
    return items.slice(start, start + perPage);
  }, [items, page, perPage]);

  const prev = () => setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const next = () => setPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* 타이틀 */}
        <p className="text-gray-500 font-medium">Our Client</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
          국내외 다양한 <span className="text-orange-500">기업 & 브랜드</span>와
          <br className="hidden md:block" /> 함께 하고 있습니다.
        </h2>

        {/* 로고 그리드 */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {pageItems.map((c) => (
            <div
              key={c.name}
              className="group block rounded-2xl border border-gray-200 bg-white p-6 h-28 md:h-32
                         flex items-center justify-center hover:shadow-sm hover:border-gray-300
                         transition-shadow cursor-default"
            >
              {/* 로고는 잘리지 않도록 contain */}
              <div className="relative w-full h-full">
                <Image
                  src={c.logoUrl}
                  alt={c.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  // 1열(모바일) → 3열(small) → 5열(large)에 맞춘 sizes
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 페이징 */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:bg-gray-50"
              aria-label="이전"
            >
              <span className="-translate-x-0.5">‹</span>
            </button>

            <div className="text-gray-600 text-sm">
              <span className="font-medium">{page + 1}</span> / {totalPages}
            </div>

            <button
              onClick={next}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:bg-gray-50"
              aria-label="다음"
            >
              <span className="translate-x-0.5">›</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
