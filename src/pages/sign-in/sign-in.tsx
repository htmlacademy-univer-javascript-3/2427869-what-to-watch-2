import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/fimls.thunks';
import { AppRoutes } from '../../constants/consts';
import { validationSchema } from '../../pages/sign-in/sign-in.schema';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../components/header/header';

interface IDefaultFormValues {
  email: string;
  password: string;
}

function SignIn() {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.films.loginError);
  const token = useAppSelector((state) => state.films.profile?.token);
  const authStatus = useAppSelector((state) => state.films.authorizationStatus);
  const navigate = useNavigate();

  const defaultValues: IDefaultFormValues = {
    email: '',
    password: '',
  };

  /* eslint-disable */
  const { handleSubmit, control, setValue } = useForm<IDefaultFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onInputEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue('email', evt.target.value);
  };

  const onInputPasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue('password', evt.target.value);
  };

  useEffect(() => {
    if (authStatus) {
      navigate(AppRoutes.Main);
    }
  }, [authStatus]);

  const onSubmitButton = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    await handleSubmit((data) => {
      dispatch(login(data.email, data.password));
    })();
  };

  return (
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitButton}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      className="sign-in__input"
                      type="email"
                      value={field.value}
                      placeholder="Email address"
                      name="user-email"
                      id="user-email"
                      onChange={onInputEmailChange}
                    />
                    <div>{error?.message}</div>
                  </>
                )}
              />

              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      className="sign-in__input"
                      type="password"
                      placeholder="Password"
                      value={field.value}
                      name="user-password"
                      id="user-password"
                      onChange={onInputPasswordChange}
                    />
                    <div>{error?.message}</div>
                  </>
                )}
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
