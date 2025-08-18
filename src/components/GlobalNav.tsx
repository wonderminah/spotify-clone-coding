import { Link } from "react-router-dom";

export default function GlobalNav() {
  return (
    // <nav className="text-white p-3 flex gap-4">
    //   <Link to="/album" className="hover:text-green-500">Album</Link>
    //   <Link to="/artist" className="hover:text-green-500">Artist</Link>
    //   <Link to="/" className="hover:text-green-500">Home</Link>
    //   <Link to="/playlist" className="hover:text-green-500">Playlist</Link>
    //   <Link to="/search" className="hover:text-green-500">Search</Link>
    //   <Link to="/section" className="hover:text-green-500">Section</Link>
    // </nav>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* 홈버튼 */}
      {/* <div>홈버튼
        <a href="/">
          <svg></svg>
        </a>
      </div> */}
      {/* 검색창 */}
      {/* <div>검색창
        <button></button>
        <div>
          <form>
            <div></div>
            <div></div>
            <div></div>
          </form>
        </div>
      </div> */}
      {/* 우측 버튼모음 */}
      {/* <div>우측 버튼모음
        <a></a>
        <div style={{ display: 'flex' }}>
          <button></button>
          <button></button>
        </div>
        <button></button>
      </div> */}
    </div>
  );
}
