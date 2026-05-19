import { useEffect } from "react";

import Home from "./pages/Home.jsx";

function App() {

  // 페이지 진입 시 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 브라우저 타이틀 관리
  useEffect(() => {
    document.title = "깐부마케팅 | 실행이 다른 마케팅";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "플레이스 세팅부터 메타광고, 블로그, AI활용, 자동화까지. 실행 중심 마케팅팀 깐부마케팅."
      );
    }
  }, []);

  // 모바일 높이 대응
  useEffect(() => {
    const setScreenSize = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setScreenSize();

    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  // 페이지 로딩 클래스
  useEffect(() => {
    document.body.classList.add("loaded");

    return () => {
      document.body.classList.remove("loaded");
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white text-black">

      {/* 배경 블러 */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[-120px] top-[600px] h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute bottom-[-150px] left-[30%] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />

      </div>

      {/* 메인 홈페이지 */}
      <Home />

    </div>
  );
}

export default App;
