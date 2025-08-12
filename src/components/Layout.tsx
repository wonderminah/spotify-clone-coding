import { Outlet } from "react-router-dom";
import GlobalNav from "./GlobalNav";
import LeftSidebar from "./LeftSidebar";
import NowPlayingBar from "./NowPlayingBar";
import RightSidebar from "./RightSidebar";
import "./layout.css";

export default function Layout() {
    return (
        <div className="app-shell">
            {/* 상단 네비게이션 */}
            <header className="global-nav">
                <GlobalNav />
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
            <aside className="right-sidebar">
                <RightSidebar />
            </aside>

            {/* 하단 재생 바 */}
            <footer className="now-playing-bar">
                <NowPlayingBar />
            </footer>
        </div>
    );
}
