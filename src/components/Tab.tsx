import styles from './Tab.module.scss';

interface TabProps {
  clickEventTab1: () => void;
  clickEventTab2: () => void;
  tabActive: string;
}

export const Tab = ({
  clickEventTab1,
  clickEventTab2,
  tabActive,
}: TabProps) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles['tab-list']}>
        <li>
          <button
            onClick={clickEventTab1}
            className={
              tabActive === 'all'
                ? `${styles.tab} ${styles.all} ${styles.active}`
                : `${styles.tab} ${styles.all}`
            }
          >
            All Products
          </button>
        </li>
        <li>
          <button
            onClick={clickEventTab2}
            className={
              tabActive === 'available'
                ? `${styles.tab} ${styles.available} ${styles.active}`
                : `${styles.tab} ${styles.available}`
            }
          >
            Available Now
          </button>
        </li>
      </ul>
    </div>
  );
};
