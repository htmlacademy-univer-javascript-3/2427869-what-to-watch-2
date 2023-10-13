import { Link } from 'react-router-dom';
import styles from './not-found-404.module.css';

function NotFound404() {
  return (
    <main className={`page-content ${styles.page}`}>
      <h1>404 NOT FOUND</h1>
      <Link to="/">на Главную страницу</Link>
    </main>
  );
}

export default NotFound404;
