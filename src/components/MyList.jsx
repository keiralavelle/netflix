import Card from "./Card";

const MyList = ({ items, onOpenDetails, onRemoveFromList, onBack }) => {
  return (
    <main className="page">
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button className="secondaryBtn" onClick={onBack}>
          ← Back
        </button>
        <h2 className="sectionTitle" style={{ margin: 0 }}>
          My List
        </h2>
      </div>

      {items.length === 0 ? (
        <p style={{ color: "#aaa", marginTop: "16px" }}>
          Your list is empty. Add some titles from Home.
        </p>
      ) : (
        <div className="grid" style={{ marginTop: "16px" }}>
          {items.map((t) => (
            <Card
              key={t.id}
              title={t.title}
              image={t.image}
              match={t.match}
              rating={t.rating}
              onClick={() => onOpenDetails(t)}
              onRemove={() => onRemoveFromList(t.id)}
              removeLabel="Remove from My List"
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default MyList;