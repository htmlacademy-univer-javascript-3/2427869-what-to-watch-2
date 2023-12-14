import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sendComment } from '../../store/slices/fimls.thunks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/consts';

interface IFormSendCommentProps {
  id: string;
}

function FormSendCommentComponent({ id }: IFormSendCommentProps) {
  const stars = useAppSelector((state) => state.films.film.rating);
  const error = useAppSelector((state) => state.films.error);
  const [textareaValue, setTextareaValue] = useState('');
  const [starsValue, setStarsValue] = useState(Math.round(stars));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeTextArea = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(evt.target.value);
  };

  const onChangeStars = (value: number) => {
    setStarsValue(value);
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(sendComment(id, textareaValue, starsValue));

    navigate(AppRoutes.Main);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={submitHandler}>
      <div className="rating">
        <div className="rating__stars">
          <input
            className="rating__input"
            id="star-10"
            type="radio"
            name="rating"
            defaultValue={10}
            defaultChecked={starsValue === 10}
            onChange={() => onChangeStars(10)}
          />
          <label className="rating__label" htmlFor="star-10">
            Rating 10
          </label>
          <input
            className="rating__input"
            id="star-9"
            type="radio"
            name="rating"
            defaultValue={9}
            defaultChecked={starsValue === 9}
            onChange={() => onChangeStars(9)}
          />
          <label className="rating__label" htmlFor="star-9">
            Rating 9
          </label>
          <input
            className="rating__input"
            id="star-8"
            type="radio"
            name="rating"
            defaultValue={8}
            defaultChecked={starsValue === 8}
            onChange={() => onChangeStars(8)}
          />
          <label className="rating__label" htmlFor="star-8">
            Rating 8
          </label>
          <input
            className="rating__input"
            id="star-7"
            type="radio"
            name="rating"
            defaultValue={7}
            defaultChecked={starsValue === 7}
            onChange={() => onChangeStars(7)}
          />
          <label className="rating__label" htmlFor="star-7">
            Rating 7
          </label>
          <input
            className="rating__input"
            id="star-6"
            type="radio"
            name="rating"
            defaultValue={6}
            defaultChecked={starsValue === 6}
            onChange={() => onChangeStars(6)}
          />
          <label className="rating__label" htmlFor="star-6">
            Rating 6
          </label>
          <input
            className="rating__input"
            id="star-5"
            type="radio"
            name="rating"
            defaultValue={5}
            defaultChecked={starsValue === 5}
            onChange={() => onChangeStars(5)}
          />
          <label className="rating__label" htmlFor="star-5">
            Rating 5
          </label>
          <input
            className="rating__input"
            id="star-4"
            type="radio"
            name="rating"
            defaultValue={4}
            defaultChecked={starsValue === 4}
            onChange={() => onChangeStars(4)}
          />
          <label className="rating__label" htmlFor="star-4">
            Rating 4
          </label>
          <input
            className="rating__input"
            id="star-3"
            type="radio"
            name="rating"
            defaultValue={3}
            defaultChecked={starsValue === 3}
            onChange={() => onChangeStars(3)}
          />
          <label className="rating__label" htmlFor="star-3">
            Rating 3
          </label>
          <input
            className="rating__input"
            id="star-2"
            type="radio"
            name="rating"
            defaultValue={2}
            defaultChecked={starsValue === 2}
            onChange={() => onChangeStars(2)}
          />
          <label className="rating__label" htmlFor="star-2">
            Rating 2
          </label>
          <input
            className="rating__input"
            id="star-1"
            type="radio"
            name="rating"
            defaultValue={1}
            defaultChecked={starsValue === 1}
            onChange={() => onChangeStars(1)}
          />
          <label className="rating__label" htmlFor="star-1">
            Rating 1
          </label>
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(evt) => onChangeTextArea(evt)}
          defaultValue={textareaValue}
        />
        <div>{error}</div>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

const FormSendComment = memo(FormSendCommentComponent);
export default FormSendComment;
