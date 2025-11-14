"use client";

import { useState } from "react";

type Props = {
  title?: string;
  address: string; // 지번/도로명 주소
  detail?: string; // 층/호 등
  tel?: string; // 전화 연결
  email?: string;
  hours?: string; // 운영 시간
  mapQuery?: string; // 지도 검색어 (기본: address)
};

export default function Location({
  title = "오시는 길",
  address,
  detail,
  tel,
  email,
  hours,
  mapQuery,
}: Props) {
  const [copied, setCopied] = useState(false);
  const query = encodeURIComponent(mapQuery || address);
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  const copyAddress = async () => {
    await navigator.clipboard.writeText(
      detail ? `${address} ${detail}` : address
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const openDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${query}`,
      "_blank"
    );
  };

  const callTel = () => {
    if (tel) window.location.href = `tel:${tel.replace(/-/g, "")}`;
  };

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {/* 지도 */}
          <div className="rounded-2xl overflow-hidden border bg-white">
            <iframe
              src={mapSrc}
              className="w-full aspect-[4/3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* 정보/버튼 */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-sm text-gray-500">주소</div>
              <div className="mt-1 font-semibold text-lg">
                {address}{" "}
                {detail && <span className="text-gray-600">{detail}</span>}
              </div>
            </div>

            {tel && (
              <div>
                <div className="text-sm text-gray-500">전화</div>
                <div className="mt-1 font-medium">{tel}</div>
              </div>
            )}

            {email && (
              <div>
                <div className="text-sm text-gray-500">메일</div>
                <div className="mt-1">{email}</div>
              </div>
            )}

            {hours && (
              <div>
                <div className="text-sm text-gray-500">운영시간</div>
                <div className="mt-1">{hours}</div>
              </div>
            )}

            <div className="mt-2 flex flex-wrap gap-3">
              <button
                onClick={copyAddress}
                className="rounded-xl border px-4 py-2 hover:bg-gray-50"
              >
                {copied ? "복사 완료!" : "주소 복사"}
              </button>
              <button
                onClick={openDirections}
                className="rounded-xl border px-4 py-2 hover:bg-gray-50"
              >
                길찾기
              </button>
              {tel && (
                <button
                  onClick={callTel}
                  className="rounded-xl border px-4 py-2 hover:bg-gray-50"
                >
                  전화하기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
