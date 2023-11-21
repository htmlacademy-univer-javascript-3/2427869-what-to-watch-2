import { Link } from 'react-router-dom';

function Tabs() {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to="overview" className="film-nav__link">
            Overview
          </Link>
        </li>
        <li className="film-nav__item">
          <Link to="details" className="film-nav__link">
            Details
          </Link>
        </li>
        <li className="film-nav__item">
          <Link to="review" className="film-nav__link">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
