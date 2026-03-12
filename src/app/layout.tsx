import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://webais.kr"),
  title: {
    default: "위베이스 | 마케팅 대행 · SNS 광고 · 퍼포먼스 마케팅",
    template: "%s | 위베이스",
  },
  description:
    "위베이스(Webais)는 SNS 광고, 퍼포먼스 마케팅, 바이럴, 블로그, 체험단, 키워드 광고를 운영하는 마케팅 전문 에이전시입니다.",
  keywords: [
    "위베이스",
    "Webais",
    "마케팅",
    "마케팅 대행",
    "온라인 마케팅",
    "퍼포먼스 마케팅",
    "SNS 광고",
    "바이럴 마케팅",
    "블로그 마케팅",
    "키워드 광고",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "위베이스 | 마케팅 대행 · SNS 광고 · 퍼포먼스 마케팅",
    description:
      "위베이스(Webais)는 SNS 광고, 퍼포먼스 마케팅, 바이럴, 블로그, 체험단, 키워드 광고를 운영하는 마케팅 전문 에이전시입니다.",
    url: "https://webais.kr",
    siteName: "위베이스",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "위베이스 | 마케팅 대행 · SNS 광고 · 퍼포먼스 마케팅",
    description:
      "위베이스(Webais)는 SNS 광고, 퍼포먼스 마케팅, 바이럴, 블로그, 체험단, 키워드 광고를 운영하는 마케팅 전문 에이전시입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="text-gray-900 antialiased">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
