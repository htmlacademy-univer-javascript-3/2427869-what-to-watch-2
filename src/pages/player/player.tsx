import { useEffect, useRef, useState } from 'react';
import NotFound404 from '../not-found-404/not-found-404';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMovie } from '../../store/slices/fimls.thunks';

function Player() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.films.film);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    if (video) {
      video.addEventListener('timeupdate', updateTime);

      if (film) {
        video.play();
        setIsPlaying(true);
      }

      return () => {
        video.removeEventListener('timeupdate', updateTime);
      };
    }
  }, [film]);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement;
    if (video) {
      video.controls = false;
    }
  }, []);

  return (
    <div className="player">
      {film ? (
        <>
          <video
            ref={videoRef}
            src={film.videoLink}
            className="player__video"
            autoPlay
          />
          <button type="button" className="player__exit">
            Exit
          </button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress
                  className="player__progress"
                  value={currentTime}
                  max={duration || 1}
                />
                <div
                  className="player__toggler"
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                >
                  Toggler
                </div>
              </div>
              <div className="player__time-value">{`0:${film.runTime / 10
              }`}
              </div>
            </div>
            <div className="player__controls-row">
              <button
                type="button"
                className="player__play"
                onClick={handlePlayPause}
              >
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref={isPlaying ? '#pause' : '#play-s'} />
                </svg>
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <div className="player__name">{film.name}</div>
              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width={27} height={27}>
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <NotFound404 />
      )}
    </div>
  );
}

export default Player;
