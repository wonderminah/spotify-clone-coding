import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Album from "./pages/Album";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import Section from "./pages/Section";
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      {/* <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <Link to="/album" className="hover:text-green-500">앨범</Link>
        <Link to="/artist" className="hover:text-green-500">아티스트</Link>
        <Link to="/" className="hover:text-green-500">홈</Link>
        <Link to="/playlist" className="hover:text-green-500">플레이리스트</Link>
        <Link to="/search" className="hover:text-green-500">검색</Link>
        <Link to="/section" className="hover:text-green-500">섹션</Link>
      </nav> */}

      <Routes>
        {/* Layout을 부모로 지정 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/section" element={<Section />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
