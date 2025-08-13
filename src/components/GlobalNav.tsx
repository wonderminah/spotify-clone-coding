import { Link } from "react-router-dom";

export default function GlobalNav() {
  return (
    <nav className="text-white p-3 flex gap-4">
      <Link to="/album" className="hover:text-green-500">Album</Link>
      <Link to="/artist" className="hover:text-green-500">Artist</Link>
      <Link to="/" className="hover:text-green-500">Home</Link>
      <Link to="/playlist" className="hover:text-green-500">Playlist</Link>
      <Link to="/search" className="hover:text-green-500">Search</Link>
      <Link to="/section" className="hover:text-green-500">Section</Link>
    </nav>
  );
}
