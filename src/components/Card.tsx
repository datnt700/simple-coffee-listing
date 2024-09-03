import starNoFill from '../assets/Star.svg';
import starFill from '../assets/Star_fill.svg';
import styles from './Card.module.scss';

interface CardProps {
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
  available: boolean;
}

export const Card = ({
  image,
  name,
  popular,
  price,
  rating,
  votes,
  available,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={image} alt="photo" />
        {popular ? <span className={styles.label}>Popular</span> : <></>}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price}</span>
      </div>
      <div className={styles.review}>
        {rating !== null ? (
          <>
            <div className={styles.rate}>
              <img src={starFill} alt="icon" />
              <span className={styles.rating}>{rating}</span>
              <span className={styles.vote}>({votes} votes)</span>
            </div>
            {!available ? (
              <p className={styles['sold-out']}>Sold Out</p>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <div className={styles.rate}>
              <img src={starNoFill} alt="icon" />
              <span className={styles.vote}>No Rating</span>
            </div>
            {!available ? (
              <p className={styles['sold-out']}>Sold Out</p>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};
