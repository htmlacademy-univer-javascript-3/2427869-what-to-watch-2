import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles['loader-wrapper']}>
      <div className={styles.loader}>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
