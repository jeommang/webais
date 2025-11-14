"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/app/types/portfolio";

type Props = {
  items: Portfolio[];
  /** 4열 × 2줄 = 8개가 기본 */
  pageSize?: number;
};

export default function PortfolioGrid({ items, pageSize = 8 }: Props) {
  const [page, setPage] = useState(0);

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const pageItems = useMemo(() => {
    const start = page * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  // 페이지 바뀌면 그리드 상단으로 스크롤(선택)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  const go = (p: number) => setPage(Math.min(Math.max(p, 0), totalPages - 1));

  return (
    <section className="pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* 4열 그리드 (모바일 1, 태블릿 2, 데스크탑 4) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pageItems.map((p) => {
            const label = p.categories?.[0] ?? ""; // 카테고리 첫 번째만 표시
            return (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group block"
              >
                {/* 썸네일 */}
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
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                </div>

                {/* 하단 텍스트: 고객사 / 카테고리 */}
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

        {/* 페이지네이션: 번호만 표시 (이전/다음 제거) */}
        {totalPages > 1 && (
          <nav
            aria-label="페이지 선택"
            className="mt-10 flex items-center justify-center gap-1"
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-current={i === page ? "page" : undefined}
                className={`w-9 h-9 rounded-lg border text-sm transition ${
                  i === page
                    ? "bg-gray-900 text-white border-gray-900"
                    : "hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
