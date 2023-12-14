import { Link } from 'react-router-dom';
import styles from './movie-card.module.css';
import { memo, useRef, useState } from 'react';
import VideoPlayer from '../video-player/video-player';
import { IMovies } from '../../types/types';

interface IMovieCardProps {
  movie: IMovies;
  setActiveMovie?: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieCardComponent(props: IMovieCardProps) {
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
            <VideoPlayer
              src={props.movie.previewVideoLink}
              srcImage={props.movie.previewImage}
            />
          ) : (
            <img
              src={props.movie.previewImage}
              alt={props.movie.name}
              width={280}
              height={175}
            />
          )}
        </div>
        <h3 className="small-film-card__title">{props.movie.name}</h3>
      </article>
    </Link>
  );
}

const MovieCard = memo(MovieCardComponent);

export default MovieCard;
