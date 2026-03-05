import "../styles/navbar.css";

const Navbar = ({
  search,
  setSearch,
  genre,
  setGenre,
  genres = [],
  onGoMyList,
  onGoHome,
  theme,
  onToggleTheme,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={onGoHome}>
        <h2>Netflix</h2>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <button className="nav-btn" onClick={onGoMyList}>
          My List
        </button>

        {onToggleTheme && (
          <button className="nav-btn" onClick={onToggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        )}

        <div className="profile" title="Profile">
          👤
        </div>
      </div>
    </nav>
  );
};

export default Navbar;