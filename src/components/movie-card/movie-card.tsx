import { Link } from 'react-router-dom';
import { IMocksMovies } from '../../mocks/films';
import styles from './movie-card.module.css';

interface IMovieCardProps {
  movie: IMocksMovies;
  setActiveMovie: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieCard(props: IMovieCardProps) {
  return (
    <Link className={styles.link} to={`/films/${props.movie.id}`}>
      <article className={`small-film-card catalog__films-card ${styles.article}`} onMouseEnter={() => props.setActiveMovie(props.movie.id)} onMouseLeave={() => props.setActiveMovie(null)}>
        <div className="small-film-card__image">
          <img
            src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
            alt="Fantastic Beasts: The Crimes of Grindelwald"
            width={280}
            height={175}
          />
        </div>
        <h3 className="small-film-card__title">
          {props.movie.filmName}
        </h3>
      </article>
    </Link>);
}

export default MovieCard;
