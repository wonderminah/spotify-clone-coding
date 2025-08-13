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
