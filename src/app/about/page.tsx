// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About us — webais",
  description:
    "전략·크리에이티브·실행력을 한 번에. webais는 퍼포먼스와 브랜딩을 잇는 실용적인 마케팅 파트너입니다.",
};

// 👉 여기에 배너 이미지 URL만 바꿔서 쓰면 돼요.
const HERO_BANNER =
  "https://gi.esmplus.com/jjumang/webais/mainbanner/webaisabout_1.jpg";
const WHATWE_DO_BANNER =
  "https://gi.esmplus.com/jjumang/webais/mainbanner/webaisabout_2.jpg";
const HOWWE_WORK_BANNER =
  "https://gi.esmplus.com/jjumang/webais/mainbanner/webaisabout_3.jpg";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      {/* ========== 0) TOP 이미지 배너 (제목 영역 위) ========== */}
      <figure className="relative aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] rounded-2xl overflow-hidden shadow-sm">
        <Image
          src={HERO_BANNER}
          alt="webais banner"
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 100vw, 100vw"
          priority
        />
      </figure>

      {/* ========== 1) Hero ========== */}
      <section className="text-left mt-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          We build
          <br className="hidden sm:block" />
          <span className="text-gray-900"> practical marketing.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-gray-600 leading-relaxed">
          webais는 전략–크리에이티브–운영을 한 흐름으로 연결해
          <br className="hidden md:block" />
          “성과가 보이는” 실용적인 마케팅을 만듭니다.
        </p>
      </section>
      <section id="history" className="mt-10">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl md:text-3xl font-extrabold">HISTORY</h2>
          <span className="text-sm md:text-base text-gray-500">SINCE 2016</span>
        </div>

        {/* 가로 스크롤 래퍼 */}
        <div
          className="mt-6 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex gap-10 min-w-max">
            {[
              {
                year: "2022-25",
                items: [
                  "현대 글로비스 오토벨 SNS 연간 운영",
                  "BBF 하남/광명 SNS 운영",
                  "수아팜 카페 바이럴",
                  "시크 인앱 이벤트 연간 운영",
                  "케이뱅크 하이틴 선불카드 런칭 홍보",
                  "에이치벨벳스 이너 펫 다이어트 유튜브 제휴",
                  "딘딘 라이브 커머스 홍보",
                  "한국거래소(KRX) 공식 유튜브 광고",
                  "콜레마스 친환경 콤포넌트 OEM/홍보",
                  "매그넘 화장품 자사몰 제휴",
                  "네츄럴소버 자연유래 립밤 홍보",
                  "블로마커 공연 SNS 운영",
                  "노르르닷컴 임골룸 SNS 운영",
                  "박명수의 라디오 쇼 협찬 홍보",
                  "수산X 로컬 바이어 마케팅",
                  "현대글로비스 우뿌택 SNS 연간 운영",
                  "코튼클럽 쇼핑몰 연간 바이럴 마케팅",
                ],
              },
              {
                year: "2021",
                items: [
                  "브로 홍보 마케팅",
                  "노르르닷컴/브로트 SNS 운영",
                  "예술경영지원센터 더아트로 SNS 운영",
                  "360포토부스 론칭 홍보",
                  "SBS BIZ 바이낸스 홍보 컨설팅",
                  "롯데백화점 아울렛 SNS 연간 운영",
                  "코튼클럽 쇼핑몰 연간 바이럴 마케팅",
                ],
              },
              {
                year: "2020",
                items: [
                  "대상웰라이프 연간 홍보",
                  "일동제약 지루랩 SNS 연간 운영",
                  "율제 종합병원 홍보 마케팅",
                  "플러스 홍보 마케팅",
                  "롯데홈쇼핑 홍보 마케팅",
                  "라운지키 홍보 마케팅",
                  "롯데프리미엄아울렛 홍보 마케팅",
                  "맥도날드 캠페인",
                  "현대오토웰 SNS 연간 운영",
                  "밀키의 공식 유튜브 프로모션",
                  "이랜드 골택 유튜브 제휴",
                  "인포르트 취업박람회 SNS 광고 운영",
                  "항공취업박람회 유튜브 광고 운영",
                ],
              },
              {
                year: "2019",
                items: [
                  "대상웰라이프 연간 홍보",
                  "현대오토웰 SNS 연간 운영",
                  "한미SNS 연간 운영",
                  "SBS PLUS 홍보 마케팅",
                  "삼성화재다이렉트 SNS 광고",
                  "대림산업 IMC 마케팅",
                  "인포르트 채용박람회 홍보 운영",
                  "한국관광공사 해이안나발랄회 홍보",
                  "알트 P2P DA 광고 운영",
                  "오엑스 브랜드 IMC 마케팅",
                  "벅스 쇼케이스/오프라인 마케팅",
                ],
              },
              {
                year: "2018",
                items: [
                  "미스터피자 온라인 마케팅 운영",
                  "CJ E&M 틴트박스 온라인 마케팅",
                  "마쓰오엔터테인먼트(연간운영)",
                  "안나리나나나 SNS 운영대행",
                  "노트르담 드 파리 SNS 운영대행",
                  "세계보안엑스포 SNS 운영대행",
                  "평창올림픽 성화봉송 영상제작",
                  "SBS PLUS 여주플러스 PPL",
                  "KOTRA 채용박람회 광고",
                  "전통시장 활성화 온라인 마케팅",
                  "프랑스 극장 온라인/오프라인 특집",
                  "픽사 애니메이션 30주년 특별전",
                ],
              },
              {
                year: "2017–16",
                items: [
                  "MP기프팅 브랜드 PR 캠페인",
                  "켈로그 Pringles Challenge",
                  "콘래드 서울 코리아 마케팅",
                  "중앙일보 중앙 자동차 공식 블로그",
                  "대한제약 <장미란> 마케팅",
                  "펫시크릿/캣시크릿 SNS",
                  "홍학한품 ‘가지‘ 특화 SNS 마케팅",
                ],
              },
            ].map((col) => (
              <div
                key={col.year}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <h3 className="text-3xl font-extrabold text-indigo-600">
                  {col.year}
                </h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
                  {col.items.map((t, i) => (
                    <li key={i} className="relative pl-4">
                      <span className="absolute left-0 top-2 block w-1.5 h-1.5 rounded-full bg-gray-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-12 h-px bg-gray-100" />

      {/* ========== 2) Project / 사업영역 ========== */}
      <section className="mt-12">
        {/* 상단 타이틀(선택) */}

        {/* 아이템들 */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* 1) SNS/Viral/DA/SA 마케팅 전략 수립 */}
          <div className="text-center">
            <div className="mx-auto w-44 h-44 rounded-full border-4 border-teal-300 flex items-center justify-center">
              {/* 디바이스 아이콘 */}
              <svg
                width="84"
                height="64"
                viewBox="0 0 84 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="8"
                  width="52"
                  height="36"
                  rx="4"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <rect
                  x="60"
                  y="24"
                  width="22"
                  height="30"
                  rx="4"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <rect
                  x="10"
                  y="48"
                  width="36"
                  height="8"
                  rx="2"
                  fill="#2ED3B7"
                />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold">SNS/Viral/DA/SA</p>
            <p className="text-lg font-bold">마케팅 전략 수립</p>
          </div>

          {/* 2) 영상 및 이미지 광고 소재 제작 */}
          <div className="text-center">
            <div className="mx-auto w-44 h-44 rounded-full border-4 border-teal-300 flex items-center justify-center">
              {/* 플레이/영상 아이콘 */}
              <svg
                width="92"
                height="68"
                viewBox="0 0 92 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="6"
                  width="80"
                  height="50"
                  rx="6"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <polygon points="40,22 40,40 56,31" fill="#2ED3B7" />
                <rect
                  x="18"
                  y="58"
                  width="56"
                  height="6"
                  rx="3"
                  fill="#2ED3B7"
                />
                <circle cx="30" cy="61" r="4" fill="white" />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold">영상 및 이미지</p>
            <p className="text-lg font-bold">광고 소재 제작</p>
          </div>

          {/* 3) 스토어 활성화 마케팅 */}
          <div className="text-center">
            <div className="mx-auto w-44 h-44 rounded-full border-4 border-teal-300 flex items-center justify-center">
              {/* 별 리뷰/말풍선 아이콘 */}
              <svg
                width="92"
                height="72"
                viewBox="0 0 92 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  width="72"
                  height="36"
                  rx="6"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <path
                  d="M22 52v10l10-10"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 28l3-5 3 5h6l-4 4 2 6-7-4-7 4 2-6-4-4h6z"
                  fill="#2ED3B7"
                />
                <circle cx="64" cy="28" r="4" fill="#2ED3B7" />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold">스토어 활성화</p>
            <p className="text-lg font-bold">마케팅</p>
          </div>

          {/* 4) 인플루언서 제휴 */}
          <div className="text-center">
            <div className="mx-auto w-44 h-44 rounded-full border-4 border-teal-300 flex items-center justify-center">
              {/* 말풍선 + 사람 아이콘 */}
              <svg
                width="92"
                height="72"
                viewBox="0 0 92 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="12"
                  y="12"
                  width="68"
                  height="30"
                  rx="6"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <circle
                  cx="34"
                  cy="52"
                  r="8"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <rect
                  x="22"
                  y="60"
                  width="24"
                  height="6"
                  rx="3"
                  fill="#2ED3B7"
                />
                <rect
                  x="56"
                  y="18"
                  width="16"
                  height="10"
                  rx="3"
                  fill="#2ED3B7"
                />
                <rect
                  x="56"
                  y="32"
                  width="12"
                  height="4"
                  rx="2"
                  fill="#2ED3B7"
                />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold">인플루언서</p>
            <p className="text-lg font-bold">제휴</p>
          </div>

          {/* 5) 자사 페이지 제휴 */}
          <div className="text-center">
            <div className="mx-auto w-44 h-44 rounded-full border-4 border-teal-300 flex items-center justify-center">
              {/* 핸드폰 + 별 아이콘 */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="22"
                  y="8"
                  width="36"
                  height="64"
                  rx="8"
                  stroke="#2ED3B7"
                  strokeWidth="4"
                />
                <circle cx="40" cy="60" r="4" fill="#2ED3B7" />
                <path
                  d="M40 20l2.4 4.8 5.3.8-3.9 3.8.9 5.4-4.7-2.5-4.7 2.5.9-5.4-3.9-3.8 5.3-.8L40 20z"
                  fill="#2ED3B7"
                />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold">자사 페이지</p>
            <p className="text-lg font-bold">제휴</p>
          </div>
        </div>
      </section>

      {/* ========== 3) What we do 위 이미지 배너 ========== */}
      <figure className="relative mt-16 aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] rounded-2xl overflow-hidden shadow-sm">
        <Image
          src={WHATWE_DO_BANNER}
          alt="What we do banner"
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 100vw, 100vw"
        />
      </figure>

      {/* ========== 4) What we do ========== */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">퍼포먼스 마케팅</h3>
            <p className="mt-2 text-sm text-gray-600">
              검색/디스플레이/피드/숏폼 광고 세팅·집행·최적화.
              랜딩/크리에이티브까지 한 흐름으로 A/B 테스트합니다.
            </p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>네이버/구글/메타/틱톡/카카오 Ads</li>
              <li>랜딩 구조 설계 · 전환 추적</li>
              <li>소재 운영 가이드 & 리포트</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">브랜딩 & IMC</h3>
            <p className="mt-2 text-sm text-gray-600">
              브랜드 톤을 정리하고 캠페인을 설계합니다. 온/오프라인을 아우르는
              일관된 경험을 디자인합니다.
            </p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>캠페인 콘셉트 & 키 비주얼</li>
              <li>브랜드 가이드 · 카피라이팅</li>
              <li>온드미디어/이벤트/BTL 연계</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">콘텐츠 제작</h3>
            <p className="mt-2 text-sm text-gray-600">
              숏폼·피드·배너·랜딩 에셋까지. “성과 기준”의 제작 프로세스로 빠르게
              돌립니다.
            </p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>숏폼/리일스/쇼츠, 피드 & 배너</li>
              <li>랜딩 이미지/카피 모듈</li>
              <li>템플릿·가이드로 내부 확장</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">인플루언서 & 바이럴</h3>
            <p className="mt-2 text-sm text-gray-600">
              브랜드 톤에 맞는 크리에이터를 큐레이션하고 확산 동선을 설계합니다.
            </p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>크리에이터 매칭 & 운영</li>
              <li>카페/커뮤니티 바이럴</li>
              <li>체험단 · 리뷰 · 콜라보</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== 5) How we work 위 이미지 배너 ========== */}
      <figure className="relative mt-16 aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] rounded-2xl overflow-hidden shadow-sm">
        <Image
          src={HOWWE_WORK_BANNER}
          alt="How we work banner"
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 100vw, 100vw"
        />
      </figure>

      {/* ========== 6) How we work ========== */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">How we work</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          <li className="rounded-2xl border p-6">
            <h4 className="font-semibold">Discover</h4>
            <p className="mt-2 text-sm text-gray-600">
              목표·예산·환경을 짧고 명확하게 정리합니다. 경쟁/채널/콘텐츠를
              빠르게 스캔합니다.
            </p>
          </li>
          <li className="rounded-2xl border p-6">
            <h4 className="font-semibold">Build</h4>
            <p className="mt-2 text-sm text-gray-600">
              채널/캠페인/크리에이티브/랜딩을 한 흐름으로 구축하고 A/B 테스트를
              설계합니다.
            </p>
          </li>
          <li className="rounded-2xl border p-6">
            <h4 className="font-semibold">Operate</h4>
            <p className="mt-2 text-sm text-gray-600">
              주간 리포트로 가설–실행–학습을 반복합니다. 성과는 간결한 지표로
              공유합니다.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
