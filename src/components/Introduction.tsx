import styles from './Introduction.module.scss';
import vector from '../assets/vector.svg';

export const Introduction = () => {
  return (
    <div className={styles.intro}>
      <img src={vector} alt="vector" />
      <h1 className={styles.title}>Our Collection</h1>
      <p className={styles.description}>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </div>
  );
};
