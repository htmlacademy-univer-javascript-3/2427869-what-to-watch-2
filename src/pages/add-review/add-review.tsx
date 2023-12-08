import { useParams } from 'react-router-dom';
import FormSendComment from '../../components/form-send-comment/form-send-comment';
import Header from '../../components/header/header';
import { useAppSelector } from '../../store/hooks';

function AddReview() {
  const { id } = useParams();
  const movie = useAppSelector((state) => state.films.film);

  return (
    id && (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__poster film-card__poster--small">
            <img
              src={movie.posterImage}
              alt={movie.name}
              width={218}
              height={327}
            />
          </div>
        </div>
        <div className="add-review">
          <FormSendComment id={id} />
        </div>
      </section>
    )
  );
}

export default AddReview;
