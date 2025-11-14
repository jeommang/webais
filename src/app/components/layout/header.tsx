"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavItem =
  | { title: "About us"; kind: "route"; href: string }
  | { title: string; kind: "section"; id: string };

const NAV: NavItem[] = [
  { title: "About us", kind: "route", href: "/about" },
  { title: "서비스", kind: "section", id: "services" },
  { title: "포트폴리오", kind: "section", id: "portfolio" },
  { title: "상담문의", kind: "section", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSectionClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="w-full px-3 md:px-6 lg:px-10 py-3 flex items-center">
        {/* 좌측 로고 */}
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          webais
        </Link>

        {/* 우측 메뉴 */}
        <nav className="ml-auto flex items-center gap-6">
          {NAV.map((item) => {
            if (item.kind === "route") {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={[
                    "text-sm transition-opacity",
                    active
                      ? "font-semibold opacity-100"
                      : "opacity-70 hover:opacity-100",
                  ].join(" ")}
                >
                  {item.title}
                </Link>
              );
            }

            return (
              <a
                key={item.title}
                href={`/#${item.id}`}
                onClick={(e) => handleSectionClick(item.id, e)}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
