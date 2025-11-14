import Image from "next/image";
import { getPortfolioBySlug } from "@/app/lib/repositories/portfolioRepo";

function join(arr?: string[] | string, sep = ", ") {
  if (!arr) return "-";
  const list = Array.isArray(arr) ? arr : [arr];
  return list.filter(Boolean).join(sep) || "-";
}

// 유튜브 URL -> embed URL 로 변환
function ytEmbed(url: string) {
  const id =
    url.match(/[?&]v=([^&]+)/)?.[1] || // https://www.youtube.com/watch?v=XXXX
    url.match(/youtu\.be\/([^?]+)/)?.[1] || // https://youtu.be/XXXX
    url.match(/youtube\.com\/embed\/([^?]+)/)?.[1] || // https://www.youtube.com/embed/XXXX
    "";
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

export default async function PortfolioDetail({
  params,
}: {
  params: { slug: string };
}) {
  const item = await getPortfolioBySlug(params.slug);
  if (!item) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        존재하지 않는 포트폴리오입니다.
      </div>
    );
  }

  // 상세 커버: detailCoverImageUrl가 있으면 우선 사용, 없으면 기존 coverImageUrl
  const cover = (item as any).detailCoverImageUrl || item.coverImageUrl;

  const images: string[] = Array.isArray(item.images) ? item.images : [];
  const videos: string[] = Array.isArray((item as any).videos)
    ? ((item as any).videos as string[])
    : [];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      {/* 상단: 좌(커버 정사각) / 우(메타) */}
      <div className="grid gap-8 lg:grid-cols-[340px_1fr] items-start">
        {/* 좌: 정사각형 썸네일 */}
        <div className="relative aspect-square rounded-2xl overflow-hidden ">
          <Image
            src={cover}
            alt={item.title || "cover"}
            fill
            className="object-cover"
            style={
              item.objectPosition
                ? { objectPosition: item.objectPosition }
                : undefined
            }
            sizes="(max-width:1024px) 100vw, 340px"
          />
        </div>

        {/* 우: 정보 패널 */}
        <div className="flex flex-col gap-6">
          <header>
            <p className="text-sm text-gray-500">Project</p>
            {/* Project = goal (없으면 title → client 순) */}
            <h1 className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight">
              {item.goal || item.title || item.client || "-"}
            </h1>
          </header>

          <dl className="grid grid-cols-[120px_1fr] gap-y-3 text-sm md:text-base">
            {/* Client = title 사용 */}
            <dt className="text-gray-500">Client</dt>
            <dd className="font-medium">{item.title || "-"}</dd>

            <dt className="text-gray-500">Project Type</dt>
            <dd className="font-medium">{join(item.categories)}</dd>

            <dt className="text-gray-500">Works</dt>
            <dd>
              {item.works?.length ? (
                <ul className="space-y-1">
                  {item.works.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-[6px] text-xs">•</span>
                      <span className="font-medium">{w}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="font-medium">-</span>
              )}
            </dd>
          </dl>
        </div>
      </div>

      {/* 하단: 이미지 섹션 */}
      {!!images.length && (
        <section className="mt-12">
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-lg font-semibold">대표 작업물</h2>
          </div>
          <div
            className="flex gap-4 overflow-x-auto pb-2 pr-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative w-[48vw] sm:w-[32vw] md:w-[24vw] lg:w-[18vw] xl:w-[16vw]
                           aspect-square rounded-xl overflow-hidden border bg-black shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <Image
                  src={src}
                  alt={`image-${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 48vw, (max-width:1024px) 32vw, (max-width:1280px) 24vw, 18vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 하단: 동영상 섹션 */}
      {!!videos.length && (
        <section className="mt-10">
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-lg font-semibold">영상</h2>
          </div>
          <div
            className="flex gap-4 overflow-x-auto pb-2 pr-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {videos.map((url, i) => (
              <div
                key={i}
                className="relative w-[72vw] sm:w-[56vw] md:w-[44vw] lg:w-[36vw]
                           aspect-video rounded-xl overflow-hidden border bg-black shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={ytEmbed(url)}
                  title={`video-${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
