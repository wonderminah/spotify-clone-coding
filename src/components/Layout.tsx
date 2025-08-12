import { Outlet } from "react-router-dom";
import GlobalNavBar from "./GlobalNavBar";
import LeftSidebar from "./LeftSidebar";
import NowPlayingBar from "./NowPlayingBar";
import NowPlayingView from "./NowPlayingView";
import "./layout.css";

export default function Layout() {
    return (
        <div className="app-shell">
            {/* 상단 네비게이션 */}
            <header className="global-nav-bar">
                <GlobalNavBar />
            </header>

            {/* 왼쪽 사이드바 */}
            <aside className="left-sidebar">
                <LeftSidebar />
            </aside>

            {/* 메인 뷰 */}
            <main className="main-view">
                <Outlet />
            </main>

            {/* 우측 재생 뷰 */}
            <aside className="now-playing-view">
                <NowPlayingView />
            </aside>

            {/* 하단 재생 바 */}
            <footer className="now-playing-bar">
                <NowPlayingBar />
            </footer>
        </div>
    );
}
