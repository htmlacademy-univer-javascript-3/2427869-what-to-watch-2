import { useParams } from 'react-router-dom';
import NotFound404 from '../not-found-404/not-found-404';

interface IPlayer {
  id: string;
  filmName: string;
  duration: string;
}

interface IPlayerProps {
  movies: IPlayer[];
}

function Player(props: IPlayerProps) {
  const {id} = useParams();

  const player = props.movies.find((item) => item.id === id);

  if (!player) {
    return <NotFound404 />;
  }

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg" />
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
          <div className="player__time-value">{player?.duration}</div>
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
    </div>);
}

export default Player;
