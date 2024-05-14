import { useFormik } from 'formik';
import InputField from '../InputField';
import { useAuthContext } from '../../contexts/AuthContext';

const LoginForm = () => {
  const { handleLogin } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <div className="px-6">
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <InputField
          label="E-mail"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="@gmail.com"
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="****************"
        />

        <button
          type="submit"
          className="bg-primary-blue h-14 mt-10 rounded-lg text-white font-semibold text-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
