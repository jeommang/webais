"use client";

import Link from "next/link";

const navServices = [
  { name: "SNS 마케팅", href: "/#services" },
  { name: "인플루언서 마케팅", href: "/#services" },
  { name: "체험단 마케팅", href: "/#services" },
  { name: "카페 바이럴", href: "/#services" },
  { name: "키워드 광고", href: "/#services" },
];

const navQuick = [
  { name: "About us", href: "/about" },
  { name: "포트폴리오", href: "/portfolio" },
  { name: "고객사", href: "/#clients" }, // id를 clients 섹션에 달면 좋아요
  { name: "오시는 길", href: "/#location" }, // Location 컴포넌트 섹션 id
  { name: "상담문의", href: "/#contact" }, // ContactForm 섹션 id
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      {/* CTA Bar */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold">
            프로젝트/마케팅 상담이 필요하신가요?
          </h3>
          <div className="flex gap-3">
            <Link
              href="/#contact"
              className="rounded-xl bg-black text-white px-5 py-3 text-sm font-semibold"
            >
              상담 문의하기
            </Link>
            <a
              href="tel:021234567" // 실제 번호로 교체
              className="rounded-xl border px-5 py-3 text-sm hover:bg-gray-100"
            >
              02-6952-9052
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand / About */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-extrabold">webais</span>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            데이터와 크리에이티브로 성과를 만드는 마케팅 파트너, 위베이스.
            SNS/인플루언서/바이럴/키워드 광고까지 한 곳에서.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {/* 소셜은 필요 없으면 빼도 됩니다 */}
            <a
              href="https://www.instagram.com/cangoroo.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border hover:bg-gray-50"
              aria-label="Instagram"
            >
              {/* 심플 아이콘(이모지) – 추후 SVG로 교체해도 OK */}
              <span>📷</span>
            </a>
            <a
              href="https://www.youtube.com/@캔고루"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border hover:bg-gray-50"
              aria-label="YouTube"
            >
              <span>▶️</span>
            </a>
            <a
              href="mailto:commerce@ringcross.com"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border hover:bg-gray-50"
              aria-label="Email"
            >
              <span>✉️</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="font-semibold mb-4">서비스</div>
          <ul className="space-y-2 text-sm">
            {navServices.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-4">바로가기</div>
          <ul className="space-y-2 text-sm">
            {navQuick.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Company */}
        <div className="text-sm text-gray-600 space-y-2">
          <div className="font-semibold text-gray-900 mb-2">Contact</div>
          <div>서울특별시 송파구 법원로 9길 26, H비즈니스파크 D동 110호</div>
          <div>대표: 강혜민 | 사업자등록번호: 283-87-01226</div>
          <div>Tel. 02-6952-9052</div>
          <div>Email. commerce@ringcross.com</div>
          <div className="pt-2">
            <a
              href="https://www.google.com/maps?q=서울특별시 송파구 법원로 9길 26, H비즈니스파크 D동 110호"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-gray-900"
            >
              지도에서 보기
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <div>© {year} webais. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-900">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              이용약관
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full border bg-white shadow-sm hover:bg-gray-50"
        aria-label="맨 위로"
      >
        ↑
      </button>
    </footer>
  );
}
