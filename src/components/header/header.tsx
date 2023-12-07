import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { AppRoutes } from '../../constants/consts';

function Header() {
  const authStatus = useAppSelector((state) => state.films.authorizationStatus);
  const token = localStorage.getItem('token');

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <ul className="user-block">
        <li className="user-block__item">
          {authStatus || token ? (
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          ) : null}
        </li>
        <li className="user-block__item">
          {!token ? (
            <Link to={AppRoutes.Login} className="user-block__link">
              Login
            </Link>
          ) : (
            <Link to={AppRoutes.Main} className="user-block__link">
              Sign out
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
