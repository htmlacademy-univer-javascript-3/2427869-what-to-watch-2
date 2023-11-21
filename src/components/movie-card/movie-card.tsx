import { Link } from 'react-router-dom';
import { IMocksMovies } from '../../mocks/films';
import styles from './movie-card.module.css';
import { useRef, useState } from 'react';
import VideoPlayer from '../video-player/video-player';

interface IMovieCardProps {
  movie: IMocksMovies;
  setActiveMovie?: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieCard(props: IMovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    setTimeout(() => {
      setIsHovered(true);
      videoRef.current?.play();
    }, 1000);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  return (
    <Link className={styles.link} to={`/films/${props.movie.id}/overview`}>
      <article
        className={`small-film-card catalog__films-card ${styles.article}`}
        onMouseEnter={() => {
          props.setActiveMovie?.(props.movie.id);
          handleMouseOver();
        }}
        onMouseLeave={() => {
          props.setActiveMovie?.(null);
          handleMouseOut();
        }}
      >
        <div className="small-film-card__image">
          {isHovered ? (
            <VideoPlayer src={props.movie.playerUrl} />
          ) : (
            <img
              src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
              alt="Fantastic Beasts: The Crimes of Grindelwald"
              width={280}
              height={175}
            />
          )}
        </div>
        <h3 className="small-film-card__title">{props.movie.filmName}</h3>
      </article>
    </Link>
  );
}

export default MovieCard;
