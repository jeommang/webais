import Hero from "./components/home/hero";
import Services from "./components/home/Services";
import PortfolioRow from "./components/portfolio/PortfolioRow";
import Clients from "./components/clients/Clients";
import Location from "./components/location/Location";
import ContactForm from "./components/contact/ContactForm";
import ScrollToHashOnMount from "./components/ScrollToHashOnMount";

import { getActiveBanners } from "./lib/repositories/bannersRepo";
import { getActiveServices } from "./lib/repositories/servicesRepo";
import { getActivePortfolios } from "./lib/repositories/portfolioRepo";
import { getActiveClients } from "./lib/repositories/clientsRepo";

export default async function HomePage() {
  const [banners, services, portfolios, clients] = await Promise.all([
    getActiveBanners(),
    getActiveServices(),
    getActivePortfolios(),
    getActiveClients(),
  ]);

  return (
    <>
      {/* 주소창에 #hash로 들어온 경우 해당 섹션으로 부드럽게 이동 */}
      <ScrollToHashOnMount />

      {banners.length > 0 && <Hero items={banners} />}

      {/* 서비스 섹션 */}
      <section
        id="services"
        className="py-16 border-t border-gray-100 scroll-mt-24"
      >
        <Services items={services} />
      </section>

      {/* 포트폴리오 프리뷰 (가로 1줄, 자동 롤링) */}
      <section
        id="portfolio"
        className="py-16 border-t border-gray-100 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">포트폴리오</h2>
            <a
              href="/portfolio"
              className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
            >
              전체 보기
            </a>
          </div>

          <PortfolioRow
            items={portfolios.slice(0, 30)}
            auto
            intervalMs={1800}
          />
        </div>
      </section>

      {/* 고객사 */}
      <section id="clients" className="scroll-mt-24">
        <Clients items={clients} />
      </section>

      {/* 오시는 길 */}
      <section id="location" className="scroll-mt-24">
        <Location
          address="서울특별시 송파구 법원로 9길 26"
          detail="H비즈니스파크 D동 110호"
          tel="02-6952-9052"
          email="commerce@ringcross.com"
          hours="평일 09:00–17:00 (주말/공휴일 휴무)"
        />
      </section>

      {/* 상담문의 */}
      <section id="contact" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}
