import { Link, useLocation, useParams } from 'react-router-dom';

function Tabs() {
  const location = useLocation();
  const { id } = useParams();

  return (
    id && (
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${
              location.pathname === `/films/${id}`
                ? 'film-nav__item--active'
                : ''
            }`}
          >
            <Link to={`/films/${id}`} className="film-nav__link">
              Overview
            </Link>
          </li>
          <li
            className={`film-nav__item ${
              location.pathname.includes('details')
                ? 'film-nav__item--active'
                : ''
            }`}
          >
            <Link to="details" className="film-nav__link">
              Details
            </Link>
          </li>
          <li
            className={`film-nav__item ${
              location.pathname.includes('review')
                ? 'film-nav__item--active'
                : ''
            }`}
          >
            <Link to="reviews" className="film-nav__link">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
}

export default Tabs;
