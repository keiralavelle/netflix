import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Details from "./components/Details";
import { titles } from "./data/titles";

const App = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState(null);

  const genres = useMemo(() => {
    return Array.from(new Set(titles.map((t) => t.genre)));
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return titles.filter((t) => {
      const matchesSearch = t.title.toLowerCase().includes(q);
      const matchesGenre = genre === "All" ? true : t.genre === genre;
      return matchesSearch && matchesGenre;
    });
  }, [search, genre]);

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
      />

      <main style={{ padding: "1.5rem 3rem" }}>
        <h2 style={{ color: "white" }}>Recommended</h2>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {filtered.map((t) => (
            <Card
              key={t.id}
              title={t.title}
              image={t.image}
              match={t.match}
              rating={t.rating}
              onClick={() => setSelected(t)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "#aaa" }}>No results found.</p>
        )}
      </main>

      <Details selected={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default App;