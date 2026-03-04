import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Details from "./components/Details";
import MyList from "./components/MyList";
import { titles } from "./data/titles";

const App = () => {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState(null);

  const [myListIds, setMyListIds] = useState([]);
  const [removedIds, setRemovedIds] = useState([]);

  const genres = useMemo(
    () => Array.from(new Set(titles.map((t) => t.genre))),
    []
  );

  const addToMyList = (id) => {
    setMyListIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromMyList = (id) => {
    setMyListIds((prev) => prev.filter((x) => x !== id));
  };

  const myListItems = useMemo(
    () => titles.filter((t) => myListIds.includes(t.id)),
    [myListIds]
  );

  const filteredHome = useMemo(() => {
    const q = search.toLowerCase().trim();

    return titles
      .filter((t) => !removedIds.includes(t.id))
      .filter((t) => {
        const matchesSearch = t.title.toLowerCase().includes(q);
        const matchesGenre = genre === "All" ? true : t.genre === genre;
        return matchesSearch && matchesGenre;
      });
  }, [search, genre, removedIds]);

  if (page === "home") {
    return (
      <>
        <Navbar
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
          genres={genres}
          onGoMyList={() => setPage("mylist")}
          onGoHome={() => setPage("home")}
        />

        <main className="page">
          <h2 className="sectionTitle">Recommended</h2>

          <div className="grid">
            {filteredHome.map((t) => (
              <Card
                key={t.id}
                title={t.title}
                image={t.image}
                match={t.match}
                rating={t.rating}
                onClick={() => setSelected(t)}
                onAddToList={() => addToMyList(t.id)}
                inMyList={myListIds.includes(t.id)}
                onRemove={() => setRemovedIds((prev) => [...prev, t.id])}
              />
            ))}
          </div>

          {filteredHome.length === 0 && (
            <p style={{ color: "#aaa" }}>No results found.</p>
          )}
        </main>

        <Details selected={selected} onClose={() => setSelected(null)} />
      </>
    );
  }

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
        onGoMyList={() => setPage("mylist")}
        onGoHome={() => setPage("home")}
      />

      <MyList
        items={myListItems}
        onOpenDetails={(t) => setSelected(t)}
        onRemoveFromList={removeFromMyList}
        onBack={() => setPage("home")}
      />

      <Details selected={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default App;