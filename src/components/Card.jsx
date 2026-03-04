import styles from "../styles/Card.module.css";

const Card = ({
  title,
  image,
  match,
  rating,
  onClick,
  onRemove,
  onAddToList,
  inMyList,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>

      {onRemove && (
        <button
          className={styles.removeBtn}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          ✕
        </button>
      )}

      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>

        <div className={styles.meta}>
          <span className={styles.match}>{match}% Match</span>
          <span className={styles.rating}>{rating}</span>
        </div>

        {onAddToList && (
          <button
            className={styles.listBtn}
            onClick={(e) => {
              e.stopPropagation();
              onAddToList();
            }}
            disabled={inMyList}
          >
            {inMyList ? "✓ In My List" : "+ My List"}
          </button>
        )}
      </div>

    </div>
  );
};

export default Card;