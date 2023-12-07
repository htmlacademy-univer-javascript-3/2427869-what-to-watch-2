import NotFound404 from '../not-found-404/not-found-404';
import { IMocksMovies } from '../../mocks/films';
import { useAppSelector } from '../../store/hooks';

interface IPlayerProps {
  movies: IMocksMovies[];
}

function Player(props: IPlayerProps) {
  // const movie = props.movies.find((item) => item.id === id);
  const movie = useAppSelector((state) => state.films.film);

  if (!movie) {
    return <NotFound404 />;
  }

  return (
    <div className="player">
      <video src={movie.videoLink} className="player__video" autoPlay />
      <button type="button" className="player__exit">
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{movie.runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
