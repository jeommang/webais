import Image from "next/image";
import type { Service } from "@/app/types/service";

export default function Services({ items }: { items: Service[] }) {
  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-gray-500 font-medium">Online Marketing Services</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
          실전형 크리에이티브
        </h2>
        <h3 className="mt-2 text-2xl md:text-4xl font-extrabold leading-tight">
          <span className="text-orange-500">데이터 기반 퍼포먼스 파트너</span>{" "}
          디지털 통합 마케팅 컨설팅
        </h3>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl overflow-hidden border bg-black"
            >
              {s.imageUrl && (
                <Image
                  src={s.imageUrl}
                  alt={s.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-300"
                />
              )}

              <div className="absolute inset-0 bg-black/40" />

              {/* 상단 타이틀 (아이콘 제거) */}
              <div className="relative z-10 p-5 text-white">
                <div className="font-semibold text-sm md:text-base">
                  {s.title}
                </div>
              </div>

              {/* Hover 상세 패널 (가운데 정렬) */}
              <div
                className="
                  absolute inset-0 z-10
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-300
                  flex items-center
                "
              >
                <div className="m-5 rounded-xl bg-black/70 text-white p-4">
                  {s.description && (
                    <p className="text-sm text-white/90 leading-relaxed">
                      {s.description}
                    </p>
                  )}
                  {Array.isArray(s.bullets) && s.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-sm text-white/90">
                      {s.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 text-white/60">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="pointer-events-none invisible select-none aspect-[4/3]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
