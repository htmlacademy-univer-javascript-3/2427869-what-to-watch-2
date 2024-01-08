import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppRoutes } from '../../constants/consts';
import { signOut } from '../../store/slices/fimls.thunks';
import styles from './header.module.css';

function Header() {
  const profileData = useAppSelector((state) => state.films.profile);
  const token = localStorage.getItem('wtw-token');
  const dispatch = useAppDispatch();
  const location = useLocation();
  const movies = useAppSelector((state) => state.films.myListMovies);

  const onSignOutLinkClick = () => {
    if (token) {
      dispatch(signOut(token));
    }
  };

  return (
    <header className={`${'page-header film-card__head'} ${styles.header}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <ul className={`${'user-block'} ${styles.list}`}>
        <li className={`${styles['mylist-info']} ${styles.list__item}`}>
          {location.pathname === '/mylist' ? (
            <h1 className={`${'page-title'} ${styles['mylist-info']}`}>
              <span>My list</span>
              <span
                className={`${'user-page__film-count'} ${
                  styles['count-films']
                }`}
              >
                {movies.length}
              </span>
            </h1>
          ) : null}
        </li>
        <li className="user-block__item">
          {profileData ? (
            <Link to={AppRoutes.MyList}>
              <div className="user-block__avatar">
                <img
                  src={profileData.avatarUrl}
                  alt="User avatar"
                  width={63}
                  height={63}
                />
              </div>
            </Link>
          ) : null}
        </li>

        {location.pathname === '/login' ? null : (
          <li className="user-block__item">
            {!token ? (
              <Link to={AppRoutes.Login} className="user-block__link">
                Sign in
              </Link>
            ) : (
              <Link
                to={AppRoutes.Main}
                className="user-block__link"
                onClick={onSignOutLinkClick}
              >
                Sign out
              </Link>
            )}
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
