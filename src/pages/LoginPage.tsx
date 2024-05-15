import { useAuthContext } from '../contexts/AuthContext';
import { useFormik } from 'formik';
import Button from '../components/Button';
import Card from '../components/Card';
import Forms from '../components/Form';
import InputField from '../components/InputField';
import Image from '../components/Logo';
import Wrapper from '../components/Wrapper';
import { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const { user, handleLogin } = useAuthContext();

  if (user) {
    return <Navigate to="/user-page" replace />;
  }

  return (
    <Wrapper className="bg-greyish-white h-screen flex items-center justify-center">
      <Card className="bg-white shadow-login-card rounded-3xl h-[534px] w-[438px]  pt-14">
        <Image className="flex items-center justify-center" />
        <Forms onSubmit={formik.handleSubmit} className="px-6">
          <InputField
            ref={emailInputRef}
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
          <Button
            text="Sign In"
            type="submit"
            className="bg-primary-blue text-white h-14 mt-10 rounded-lg  font-semibold text-lg"
          ></Button>
        </Forms>
      </Card>
    </Wrapper>
  );
};

export default LoginPage;
