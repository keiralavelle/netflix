const Details = ({ selected, onClose }) => {
    if (!selected) return null;
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>
  
          <h2>{selected.title}</h2>
          <p><strong>{selected.match}% Match</strong> • {selected.rating} • {selected.genre}</p>
          <p>{selected.summary}</p>
  
          <p><strong>Cast:</strong> {selected.cast.join(", ")}</p>
        </div>
      </div>
    );
  };
  
  export default Details;