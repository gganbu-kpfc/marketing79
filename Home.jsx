import React, { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  ArrowRight,
  Search,
  BarChart3,
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
} from "lucide-react";

const NAV_ITEMS = ["홈", "회사소개", "실행서비스", "마케팅아카데미", "협업문의"];

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
    desc: "반복 업무를 줄이고, 빠르게 실행할 수 있게 돕습니다.",
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
    desc: "고객이 봤을 때 안심되는 브랜드 분위기를 만듭니다.",
    tag: "신뢰 관리",
  },
];

const problems = [
  "광고는 하는데 효과가 없는 것 같아요",
  "업체에 맡겼는데 연락이 잘 안 돼요",
  "검색해도 우리 가게가 잘 안 보여요",
  "광고비는 계속 나가는데 매출은 그대로예요",
];

const academyFree = [
  { title: "플레이스 상위노출 기초", time: "32:41", views: "12,354명 시청" },
  { title: "메타광고 시작하기", time: "28:15", views: "9,876명 시청" },
  { title: "블로그 글쓰기 SEO 기초", time: "26:18", views: "8,215명 시청" },
  { title: "AI를 활용한 마케팅", time: "30:22", views: "7,642명 시청" },
];

const academyPremium = [
  { title: "플레이스 마스터 클래스", price: "79,000원" },
  { title: "메타광고 실전 마스터", price: "129,000원" },
  { title: "블로그 상위노출 전략", price: "89,000원" },
  { title: "AI 마케팅 실전 활용", price: "99,000원" },
];

const workItems = [
  { title: "메타 광고 관리자", desc: "광고 세팅 및 성과 분석" },
  { title: "플레이스 관리", desc: "상위 노출 키워드와 리뷰 관리" },
  { title: "블로그 콘텐츠 작성", desc: "검색 유입을 위한 콘텐츠 기획" },
  { title: "AI 활용 업무", desc: "GPT 기반 마케팅 업무 효율화" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-2xl font-black tracking-[-0.04em] text-black">깐부마케팅</span>
          <span className="mt-1 text-xs font-semibold text-neutral-500">실행이 다른 마케팅</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item === "홈" ? "home" : item}`}
              className="text-sm font-bold text-neutral-800 transition hover:text-blue-700"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#free-material"
            className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-black"
          >
            무료자료 받기
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 text-black lg:hidden"
          aria-label="메뉴 열기"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-blue-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item === "홈" ? "home" : item}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-black text-neutral-900 hover:bg-blue-50 hover:text-blue-700"
              >
                {item}
              </a>
            ))}
            <a
              href="#free-material"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-center text-base font-black text-white"
            >
              무료자료 받기
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-blue-700">Marketing Execution Team</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-[-0.06em] text-black md:text-6xl lg:text-7xl">
            광고보다 <span className="text-blue-700">실행.</span>
            <br />그리고 직접 움직입니다.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-neutral-700">
            플레이스 세팅부터 메타광고, 블로그, 카페 배포, AI 활용과 자동화까지.
            말이 아닌 실제 결과로 증명하는 마케팅 실행팀입니다.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://pf.kakao.com/_eTSAn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-base font-black text-white shadow-xl shadow-blue-700/20 transition hover:bg-black"
            >
              <MessageCircle size={19} /> 카카오톡 상담하기
            </a>
            <a
              href="#실행서비스"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-4 text-base font-black text-black transition hover:border-blue-700 hover:text-blue-700"
            >
              서비스 자세히 보기 <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5 border-t border-blue-100 pt-8">
            {[
              [Target, "실제 운영 경험 기반"],
              [BarChart3, "데이터 기반 실행"],
              [Users, "대행사 협업 파트너"],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-start gap-3">
                <Icon className="text-blue-700" size={28} />
                <span className="text-xs font-black leading-5 text-neutral-700 md:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#06152E] p-5 shadow-2xl shadow-blue-900/20">
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-blue-700">광고 개요</p>
                  <h3 className="text-xl font-black text-black">실행 대시보드</h3>
                </div>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700">LIVE</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  ["노출", "1,246,580"],
                  ["클릭", "12,466"],
                  ["문의", "1,245"],
                  ["전환율", "9.8%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-3">
                    <p className="text-[11px] font-bold text-neutral-500">{label}</p>
                    <p className="mt-1 text-sm font-black text-black md:text-lg">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-44 rounded-2xl bg-gradient-to-br from-blue-50 to-white p-4">
                <div className="flex h-full items-end gap-2">
                  {[30, 45, 38, 55, 62, 50, 76, 66, 84, 79, 95, 88].map((h, idx) => (
                    <div key={idx} className="flex-1 rounded-t-lg bg-blue-700" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-4 hidden rounded-2xl bg-white p-4 shadow-2xl shadow-blue-900/20 lg:block">
            <p className="text-sm font-black text-black">공고 게시 & 데이터</p>
            <p className="mt-1 text-xs font-bold text-blue-700">실제 운영하는 화면 기반</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemBand() {
  return (
    <section className="bg-[#06152E] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-14 lg:grid-cols-[0.9fr_1.5fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-300">Why?</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
            광고는 했는데
            <br />왜 손님은 그대로일까요?
          </h2>
          <p className="mt-5 max-w-md text-base font-medium leading-7 text-blue-100">
            광고를 시작하는 건 쉽습니다. 어려운 건 계속 관리하고, 보고, 고치고, 다시 실행하는 일입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {problems.map((text, idx) => (
            <div key={text} className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur">
              <p className="text-sm font-black text-blue-300">0{idx + 1}</p>
              <p className="mt-3 text-xl font-black leading-8 text-white">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSummary() {
  return (
    <section id="실행서비스" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">Our Service</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-black md:text-5xl">깐부마케팅이 실행하는 서비스</h2>
            <p className="mt-4 text-base font-medium text-neutral-700">전략만 제안하지 않고, 직접 실행하고 관리합니다.</p>
          </div>
          <a href="#" className="inline-flex w-fit items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-sm font-black text-black transition hover:border-blue-700 hover:text-blue-700">
            서비스 전체 보기 <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{service.tag}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-black">{service.title}</h3>
                <p className="mt-3 min-h-[56px] text-sm font-medium leading-7 text-neutral-700">{service.desc}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                  자세히 보기 <ArrowRight size={16} />
                </button>
                <div className="absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-blue-600/8 transition group-hover:bg-blue-600/15" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RealWork() {
  return (
    <section className="overflow-hidden bg-[#030A17] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-300">Real Work</p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
            실제로 이렇게
            <br />작업하고 있습니다.
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-blue-100">
            깐부마케팅은 눈에 보이는 결과로 이야기합니다. 실제 화면, 실제 관리, 실제 피드백을 기준으로 움직입니다.
          </p>
          <button className="mt-8 rounded-xl border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-black">
            실제 작업 사례 더보기
          </button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {workItems.map((item, idx) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur">
              <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-700/40 via-white/10 to-black p-4">
                <div className="mb-3 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-2/3 rounded-full bg-white/30" />
                  <div className="h-4 w-full rounded-full bg-white/20" />
                  <div className="h-4 w-5/6 rounded-full bg-white/20" />
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {[40, 70, 55, 90, 75].map((h, i) => (
                      <div key={i} className="rounded-t-md bg-blue-400" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreeMaterialBanner() {
  return (
    <section id="free-material" className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/15">
            <FileDown size={32} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">Free Material</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] md:text-4xl">사장님도 바로 써먹을 수 있는 마케팅 기초자료 무료배포</h2>
            <p className="mt-3 text-base font-medium text-blue-50">플레이스 세팅 가이드, 블로그 작성 템플릿, 광고 체크리스트를 받아보세요.</p>
          </div>
        </div>
        <a href="https://pf.kakao.com/_eTSAn" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-black text-blue-700 shadow-xl transition hover:bg-black hover:text-white">
          무료자료 받기 <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function AcademyPreview() {
  return (
    <section id="마케팅아카데미" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">Academy</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-black md:text-5xl">마케팅, 제대로 배우고 싶다면?</h2>
          <p className="mt-4 text-base font-medium text-neutral-700">무료 기초강의부터 프리미엄 실전강의까지. 바로 써먹을 수 있게 구성합니다.</p>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-black tracking-[-0.04em] text-black">기초 무료강의</h3>
          <button className="rounded-xl border border-blue-200 px-4 py-2 text-sm font-black text-black hover:border-blue-700 hover:text-blue-700">모든 무료강의 보기</button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {academyFree.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
              <div className="relative h-40 bg-gradient-to-br from-blue-100 via-white to-blue-50">
                <div className="absolute left-4 top-4 rounded-lg bg-blue-700 px-3 py-1 text-xs font-black text-white">무료</div>
                <div className="absolute bottom-4 right-4 rounded-lg bg-black/80 px-2 py-1 text-xs font-black text-white">{course.time}</div>
                <PlayCircle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700" size={44} />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-black text-black">{course.title}</h4>
                <p className="mt-3 text-sm font-bold text-neutral-500">▶ {course.views}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-black tracking-[-0.04em] text-black">프리미엄 유료강의</h3>
          <button className="rounded-xl border border-blue-200 px-4 py-2 text-sm font-black text-black hover:border-blue-700 hover:text-blue-700">모든 유료강의 보기</button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {academyPremium.map((course) => (
            <article key={course.title} className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <BookOpen size={28} />
              </div>
              <h4 className="text-xl font-black text-black">{course.title}</h4>
              <p className="mt-3 text-sm font-medium leading-6 text-neutral-600">실행 경험을 바탕으로 만든 바로 써먹는 강의입니다.</p>
              <p className="mt-5 text-2xl font-black text-blue-700">{course.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartupClassBanner() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] bg-[#06152E] text-white shadow-2xl shadow-blue-900/20 lg:grid-cols-[0.9fr_1fr_0.9fr]">
          <div className="p-8 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Premium Class</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">마케팅 창업반</h2>
            <p className="mt-5 text-base font-medium leading-7 text-blue-100">
              마케팅으로 수익을 만드는 가장 빠른 실행 구조를 알려드립니다.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-bold text-blue-50">
              {[
                "마케팅 기초부터 수익화까지 올인원 커리큘럼",
                "실전 운영 노하우와 템플릿 제공",
                "그룹 코칭 & 실전 피드백",
                "수료 후에도 지속적인 자료 업데이트",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="shrink-0 text-blue-300" size={18} /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center border-y border-white/10 p-8 text-center lg:border-x lg:border-y-0">
            <p className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-100">100명 한정 특가</p>
            <p className="mt-6 text-2xl font-black text-white/40 line-through">5,000,000원</p>
            <p className="mt-2 text-5xl font-black tracking-[-0.06em] text-white">3,000,000원</p>
            <div className="mt-6 w-full max-w-sm rounded-full bg-white/10 p-1">
              <div className="h-4 w-[68%] rounded-full bg-blue-500" />
            </div>
            <p className="mt-3 text-lg font-black"><span className="text-blue-300">68</span> / 100명</p>
          </div>

          <div className="bg-white p-8 text-black lg:p-10">
            <h3 className="text-2xl font-black tracking-[-0.04em]">이런 분들께 추천합니다</h3>
            <ul className="mt-6 space-y-4 text-sm font-bold leading-6 text-neutral-700">
              {[
                "마케팅으로 창업을 준비하는 분",
                "마케팅 실행으로 수익을 만들고 싶은 분",
                "대행사 또는 1인 마케팅 사업을 꿈꾸는 분",
                "실행 팀으로 성장하고 싶은 분",
              ].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="shrink-0 text-blue-700" size={18} /> {item}</li>
              ))}
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-base font-black text-white transition hover:bg-black">
              특가로 수강하기 <ArrowRight size={18} />
            </a>
            <p className="mt-3 text-center text-xs font-bold text-neutral-500">클릭 시 스마트스토어 결제페이지로 이동합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCta() {
  return (
    <section id="협업문의" className="bg-gradient-to-br from-blue-700 to-[#06152E] py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-200">Partnership</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
            영업은 대행사에서.
            <br />실행은 저희가 움직입니다.
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-blue-100">
            화이트라벨, 외주 협업, 실행 파트너 구조로 함께할 수 있습니다. 고객을 뺏는 팀이 아니라, 대행사를 편하게 만드는 실행팀입니다.
          </p>
          <a href="https://pf.kakao.com/_eTSAn" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FEE500] px-6 py-4 text-base font-black text-black transition hover:bg-white">
            카카오톡 상담하기 <MessageCircle size={18} />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            [Handshake, "화이트라벨 가능", "대행사 브랜드로 제공 가능합니다."],
            [MousePointerClick, "빠른 피드백", "신속한 커뮤니케이션과 우선 대응."],
            [LayoutDashboard, "전문 실행팀", "각 분야 전문가가 직접 실행합니다."],
            [Sparkles, "장기 협업", "지속 가능한 파트너십을 지원합니다."],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <Icon size={30} className="text-blue-200" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-blue-100">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="text-2xl font-black tracking-[-0.04em] text-black">깐부마케팅</p>
          <p className="mt-2 text-sm font-bold text-neutral-500">실행이 다른 마케팅</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold text-neutral-600 lg:text-right">
          <p>대표번호 1588-9097</p>
          <p>카카오톡 상담 가능</p>
          <p>© GGanbu Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function KakaoFloatingButton() {
  return (
    <a
      href="https://pf.kakao.com/_eTSAn"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#FEE500] text-black shadow-2xl shadow-black/20 transition hover:scale-105"
      aria-label="카카오톡 상담"
    >
      <MessageCircle size={30} />
      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-black text-white">1</span>
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <Header />
      <Hero />
      <ProblemBand />
      <ServicesSummary />
      <RealWork />
      <FreeMaterialBanner />
      <AcademyPreview />
      <StartupClassBanner />
      <PartnerCta />
      <Footer />
      <KakaoFloatingButton />
    </main>
  );
}
