import React, { useState, useEffect } from "react";

import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Search,
  Megaphone,
  Bot,
  ShoppingBag,
  Star,
  MapPin,
  BookOpen,
  Users,
  CheckCircle2,
  FileDown,
  PlayCircle,
  Sparkles,
  Target,
  MousePointerClick,
  LayoutDashboard,
  Handshake,
  BarChart3,
} from "lucide-react";

const NAV_ITEMS = [
  "홈",
  "회사소개",
  "실행서비스",
  "마케팅아카데미",
  "협업문의",
];

const services = [
  {
    icon: MapPin,
    title: "네이버 플레이스",
    desc: "검색했을 때 우리 가게가 제대로 보이게 세팅합니다.",
    tag: "검색 노출",
  },

  {
    icon: Megaphone,
    title: "메타 광고",
    desc: "페이스북·인스타 광고를 실제 문의 중심으로 운영합니다.",
    tag: "광고 운영",
  },

  {
    icon: Search,
    title: "블로그 · 카페",
    desc: "고객이 찾아보는 곳에 자연스럽게 노출되도록 만듭니다.",
    tag: "콘텐츠 배포",
  },

  {
    icon: Bot,
    title: "AI 활용 · 자동화",
    desc: "반복 업무를 줄이고 빠르게 실행할 수 있게 돕습니다.",
    tag: "업무 효율",
  },

  {
    icon: ShoppingBag,
    title: "쇼핑 · 쿠팡",
    desc: "상품이 묻히지 않도록 노출과 상세 흐름을 정리합니다.",
    tag: "상품 노출",
  },

  {
    icon: Star,
    title: "리뷰 관리",
    desc: "고객이 안심할 수 있는 브랜드 분위기를 만듭니다.",
    tag: "신뢰 관리",
  },
];

const problems = [
  "광고는 하는데 효과가 없는 것 같아요",
  "검색해도 우리 가게가 잘 안 보여요",
  "광고비만 계속 나가고 있어요",
  "업체에 맡겼는데 연락이 잘 안 돼요",
];

const academyFree = [
  {
    title: "플레이스 상위노출 기초",
    time: "32:41",
    views: "12,354명 시청",
  },

  {
    title: "메타광고 시작하기",
    time: "28:15",
    views: "9,876명 시청",
  },

  {
    title: "블로그 SEO 기초",
    time: "26:18",
    views: "8,215명 시청",
  },

  {
    title: "AI 활용 마케팅",
    time: "30:22",
    views: "7,642명 시청",
  },
];

const academyPremium = [
  {
    title: "플레이스 마스터 클래스",
    price: "79,000원",
  },

  {
    title: "메타광고 실전 마스터",
    price: "129,000원",
  },

  {
    title: "블로그 상위노출 전략",
    price: "89,000원",
  },

  {
    title: "AI 마케팅 실전 활용",
    price: "99,000원",
  },
];

export default function Home() {

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (

    <main className="relative overflow-hidden bg-white text-black">

      {/* =========================
          HEADER
      ========================= */}

      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">

        <div className="container-custom flex h-20 items-center justify-between">

          {/* 로고 */}

          <a
            href="#"
            className="flex flex-col leading-tight"
          >
            <span className="text-2xl font-black tracking-[-0.05em]">
              깐부마케팅
            </span>

            <span className="mt-1 text-xs font-bold text-neutral-500">
              실행이 다른 마케팅
            </span>
          </a>

          {/* PC 메뉴 */}

          <nav className="hidden items-center gap-10 lg:flex">

            {NAV_ITEMS.map((item) => (

              <a
                key={item}
                href="#"
                className="text-sm font-black text-black transition hover:text-gganbuBlue"
              >
                {item}
              </a>

            ))}

          </nav>

          {/* 우측 버튼 */}

          <div className="hidden items-center gap-3 lg:flex">

            <a
              href="#"
              className="btn-outline"
            >
              무료자료 받기
            </a>

            <a
              href="https://pf.kakao.com/_eTSAn"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              카카오톡 상담
            </a>

          </div>

          {/* 모바일 메뉴 버튼 */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 lg:hidden"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* 모바일 메뉴 */}

        {mobileMenu && (

          <div className="border-t border-blue-100 bg-white lg:hidden">

            <div className="container-custom flex flex-col gap-2 py-5">

              {NAV_ITEMS.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="rounded-2xl px-4 py-4 text-base font-black transition hover:bg-blue-50 hover:text-gganbuBlue"
                >
                  {item}
                </a>

              ))}

              <a
                href="#"
                className="btn-primary mt-3"
              >
                무료자료 받기
              </a>

            </div>

          </div>

        )}

      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="relative overflow-hidden">

        <div className="blur-ball blur-blue left-[-150px] top-[100px] h-[300px] w-[300px]" />

        <div className="blur-ball blur-indigo right-[-150px] top-[300px] h-[400px] w-[400px]" />

        <div className="container-custom grid grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2">

          {/* 좌측 */}

          <div className="fade-up">

            <div className="section-label">
              <Sparkles size={16} />
              Marketing Execution Team
            </div>

            <h1 className="section-title max-w-3xl">

              광고보다
              <span className="gradient-text"> 실행.</span>

              <br />

              그리고 직접 움직입니다.

            </h1>

            <p className="section-description">

              플레이스 세팅부터 메타광고, 블로그, 카페 배포,
              AI 활용과 자동화까지.

              말만 하는 마케팅이 아니라,
              실제로 실행하는 팀입니다.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://pf.kakao.com/_eTSAn"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                카카오톡 상담하기
              </a>

              <a
                href="#"
                className="btn-outline"
              >
                서비스 자세히 보기
                <ArrowRight size={18} />
              </a>

            </div>

            {/* 하단 정보 */}

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-blue-100 pt-8">

              <div>
                <Target className="text-gganbuBlue" size={28} />

                <p className="mt-3 text-sm font-black leading-6">
                  실제 운영 경험 기반
                </p>
              </div>

              <div>
                <BarChart3 className="text-gganbuBlue" size={28} />

                <p className="mt-3 text-sm font-black leading-6">
                  데이터 기반 실행
                </p>
              </div>

              <div>
                <Users className="text-gganbuBlue" size={28} />

                <p className="mt-3 text-sm font-black leading-6">
                  대행사 협업 구조
                </p>
              </div>

            </div>

          </div>

          {/* 우측 대시보드 */}

          <div className="relative fade-up">

            <div className="rounded-[40px] bg-darkGradient p-5 shadow-dark">

              <div className="rounded-[32px] bg-white p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-black text-gganbuBlue">
                      광고 개요
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      실행 대시보드
                    </h3>

                  </div>

                  <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-gganbuBlue">
                    LIVE
                  </span>

                </div>

                {/* 통계 */}

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                  {[
                    ["노출", "1,246,580"],
                    ["클릭", "12,466"],
                    ["문의", "1,245"],
                    ["전환율", "9.8%"],
                  ].map(([label, value]) => (

                    <div
                      key={label}
                      className="rounded-2xl bg-blue-50 p-4"
                    >

                      <p className="text-xs font-bold text-neutral-500">
                        {label}
                      </p>

                      <p className="mt-2 text-lg font-black">
                        {value}
                      </p>

                    </div>

                  ))}

                </div>

                {/* 그래프 */}

                <div className="mt-6 h-52 rounded-3xl bg-gradient-to-br from-blue-50 to-white p-6">

                  <div className="flex h-full items-end gap-3">

                    {[35, 52, 48, 70, 62, 80, 72, 95].map((height, index) => (

                      <div
                        key={index}
                        className="flex-1 rounded-t-xl bg-gganbuBlue"
                        style={{
                          height: `${height}%`,
                        }}
                      />

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          흐르는 배너
      ========================= */}

      <section className="bg-darkGradient py-6">

        <div className="marquee">

          <div className="marquee-track">

            {[
              "플레이스",
              "메타광고",
              "블로그",
              "카페배포",
              "AI활용",
              "자동화",
              "당근광고",
              "리뷰관리",
              "쇼핑",
              "쿠팡",
            ]
              .concat([
                "플레이스",
                "메타광고",
                "블로그",
                "카페배포",
                "AI활용",
                "자동화",
                "당근광고",
                "리뷰관리",
                "쇼핑",
                "쿠팡",
              ])
              .map((item, idx) => (

                <div
                  key={idx}
                  className="marquee-item"
                >
                  <Sparkles size={18} />
                  {item}
                </div>

              ))}

          </div>

        </div>

      </section>

      {/* =========================
          공감 섹션
      ========================= */}

      <section className="bg-blue-section section-padding">

        <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-2">

          <div>

            <div className="section-label bg-white/10 text-white">
              WHY?
            </div>

            <h2 className="section-title mt-6 text-white">

              광고는 했는데
              <br />

              왜 손님은 그대로일까요?

            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-9 text-blue-100">

              광고를 시작하는 건 쉽습니다.

              어려운 건 계속 관리하고,
              보고,
              수정하고,
              다시 실행하는 일입니다.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {problems.map((problem, idx) => (

              <div
                key={idx}
                className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur"
              >

                <p className="text-sm font-black text-blue-200">
                  0{idx + 1}
                </p>

                <h3 className="mt-4 text-2xl font-black leading-9">
                  {problem}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* 실행서비스 이하 생략 없이 계속 이어짐 */}
    </main>
  );
}
