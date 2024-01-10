import { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sendComment } from '../../store/slices/fimls.thunks';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './form-send-comment.schema';

interface IFormSendCommentProps {
  id: string;
}

interface IDefaultFormValues {
  rating: string;
  comment: string;
}

function FormSendCommentComponent({ id }: IFormSendCommentProps) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const error = useAppSelector((state) => state.films.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValues: IDefaultFormValues = {
    rating: '',
    comment: '',
  };

  /* eslint-disable */
  const { handleSubmit, control, setValue, watch } =
    useForm<IDefaultFormValues>({
      defaultValues,
      resolver: yupResolver(validationSchema),
      mode: 'onChange',
    });

  const text = watch('comment');

  useEffect(() => {
    if (!(text.length >= 50 && text.length <= 400)) {
      setButtonDisabled(true);
      return;
    }

    setButtonDisabled(false);
  }, [text]);

  const handleLabelClick = (value: string) => {
    setValue('rating', value);
  };

  const onChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setValue('comment', evt.target.value);
  };

  const submitHandler = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    await handleSubmit((data) => {
      dispatch(sendComment(id, data.comment, +data.rating));
    })();

    navigate(`/films/${id}/review`);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={submitHandler}>
      <div className="rating">
        <div className="rating__stars">
          <Controller
            name="rating"
            control={control}
            defaultValue={'10'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-10"
                  type="radio"
                  defaultChecked={field.value === '10'}
                  value={field.value}
                />
                <label
                  className="rating__label"
                  htmlFor="star-10"
                  onClick={() => handleLabelClick('10')}
                >
                  Rating 10
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'9'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-9"
                  type="radio"
                  defaultChecked={field.value === '9'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-9"
                  onClick={() => handleLabelClick('9')}
                >
                  Rating 9
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'8'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-8"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '8'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-8"
                  onClick={() => handleLabelClick('8')}
                >
                  Rating 8
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'7'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-7"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '7'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-7"
                  onClick={() => handleLabelClick('7')}
                >
                  Rating 7
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'6'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-6"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '6'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-6"
                  onClick={() => handleLabelClick('6')}
                >
                  Rating 6
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'5'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-5"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '5'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-5"
                  onClick={() => handleLabelClick('5')}
                >
                  Rating 5
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'4'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-4"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '4'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-4"
                  onClick={() => handleLabelClick('4')}
                >
                  Rating 4
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'3'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-3"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '3'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-3"
                  onClick={() => handleLabelClick('3')}
                >
                  Rating 3
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'2'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-2"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '2'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-2"
                  onClick={() => handleLabelClick('2')}
                >
                  Rating 2
                </label>
              </>
            )}
          />

          <Controller
            name="rating"
            control={control}
            defaultValue={'1'}
            render={({ field }) => (
              <>
                <input
                  className="rating__input"
                  id="star-1"
                  type="radio"
                  value={field.value}
                  defaultChecked={field.value === '1'}
                />
                <label
                  className="rating__label"
                  htmlFor="star-1"
                  onClick={() => handleLabelClick('1')}
                >
                  Rating 1
                </label>
              </>
            )}
          />
        </div>
      </div>
      <div className="add-review__text">
        <Controller
          control={control}
          name="comment"
          render={({ field }) => (
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={field.value}
              onChange={onChangeComment}
            />
          )}
        />
        <div>{error}</div>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={buttonDisabled}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

const FormSendComment = memo(FormSendCommentComponent);
export default FormSendComment;
