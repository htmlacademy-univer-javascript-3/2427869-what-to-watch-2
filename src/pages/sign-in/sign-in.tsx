import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/fimls.thunks';
import { AppRoutes } from '../../constants/consts';

function SignIn() {
  const dispatch = useAppDispatch();
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const errorMessage = useAppSelector((state) => state.films.loginError);
  const token = useAppSelector((state) => state.films.profile?.token);
  const navigate = useNavigate();

  const onInputEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(evt.target.value);
  };

  const onInputPasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordValue(evt.target.value);
  };

  useEffect(() => {
    if (token) {
      navigate(AppRoutes.Main);
    }
  }, [token]);

  const onSubmitButton = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(inputEmailValue, inputPasswordValue));
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoutes.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitButton}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={onInputEmailChange}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={onInputPasswordChange}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div>{errorMessage}</div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
