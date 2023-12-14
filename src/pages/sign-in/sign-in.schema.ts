import * as Yup from 'yup';

/* eslint-disable */
export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный email').required('Email обязателен'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/,
      'Пароль должен содержать минимум одну букву и одну цифру'
    )
    .required('Пароль обязателен'),
});
