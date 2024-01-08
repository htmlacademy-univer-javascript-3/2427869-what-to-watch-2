import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  rating: Yup.string().required('A star rating is required'),
  comment: Yup.string().min(50).max(400).required('A comment is required'),
});
