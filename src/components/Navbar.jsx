import "../styles/navbar.css";

const Navbar = ({ search, setSearch, genre, setGenre, genres }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Netflix Lite</h2>
      </div>

      <div className="navbar-search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search titles..."
        />
      </div>

      <div className="navbar-actions">
        <select
          className="nav-select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <button className="nav-btn">My List</button>
        <div className="profile">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;