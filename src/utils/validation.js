import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('An email is required.'),
  password: Yup.string().required('A password is required.'),
});

export default validationSchema;