import styles from "../styles/Card.module.css";

const Card = ({ title, image, match, rating, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.meta}>
          <span className={styles.match}>{match}% Match</span>
          <span className={styles.rating}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;