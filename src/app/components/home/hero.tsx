"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Banner } from "@/app/types/banner";

export default function HeroCarousel({
  items,
  intervalMs = 5000,
}: {
  items: Banner[];
  intervalMs?: number;
}) {
  const slides = useMemo(() => items.filter((b) => b.active), [items]);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // 자동 롤링
  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [paused, slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[65vh] md:h-[80vh] overflow-hidden">
        {slides.map((banner, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            {/* 배경 (이미지/영상) */}
            {banner.mediaType === "image" && banner.imageUrl && (
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                priority={i === idx}
                className="object-cover object-center"
              />
            )}
            {banner.mediaType === "video" && banner.videoUrl && (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={banner.videoUrl}
              />
            )}

            {/* 오버레이 */}
            <div
              className="absolute inset-0"
              style={{ background: `rgba(0,0,0,${banner.overlay ?? 0.45})` }}
            />

            {/* 텍스트/버튼 (너가 쓰던 레이아웃 그대로) */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 md:px-12">
                <div className="max-w-6xl mx-auto pb-12 md:pb-3">
                  {banner.subtitle && (
                    <p className="text-white/85 text-base md:text-xl lg:text-2xl drop-shadow">
                      {banner.subtitle}
                    </p>
                  )}
                  {(() => {
                    const [top, bottom] = (banner.title || "").split(
                      /\r?\n|\\n/
                    );
                    return (
                      <h1 className="mt-3 text-white leading-tight drop-shadow">
                        {top && (
                          <span className="block text-2xl md:text-3xl lg:text-5xl font-semibold">
                            {top}
                          </span>
                        )}
                        {bottom && (
                          <span className="block mt-1 text-4xl md:text-6xl lg:text-7xl font-extrabold">
                            {bottom}
                          </span>
                        )}
                      </h1>
                    );
                  })()}
                  <div className="mt-7 flex gap-3">
                    {banner.ctaPrimary && (
                      <Link
                        href={banner.ctaPrimary.href}
                        className="rounded-xl bg-white text-black px-4 py-3 text-sm font-semibold"
                      >
                        {banner.ctaPrimary.label}
                      </Link>
                    )}
                    {banner.ctaSecondary && (
                      <Link
                        href={banner.ctaSecondary.href}
                        className="rounded-xl border border-white/70 text-white px-4 py-3 text-sm"
                      >
                        {banner.ctaSecondary.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 인디케이터 점 */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 rounded-full ${
                  i === idx ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
