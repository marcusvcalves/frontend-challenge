import { useAuthContext } from '../hooks/useAuthContext';
import { useFormik } from 'formik';
import Button from '../components/Button';
import Card from '../components/Card';
import Forms from '../components/Forms';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import { useCallback, useEffect, useRef } from 'react';
import validationSchema from '../utils/validation';
import Logo from '../components/Logo';

const LoginPage = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const { handleLogin, setLoginError, loginError } = useAuthContext();

  const clearLoginError = useCallback(() => {
    setLoginError(null);
  }, [setLoginError]);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
    clearLoginError();
  }, [clearLoginError]);

  return (
    <Wrapper className="bg-greyish-white h-screen flex items-center justify-center">
      <Card className="bg-white shadow-login-card rounded-3xl h-auto w-[438px] pt-14">
        <Logo className="flex justify-center w-[250px] sm:w-[100%] mx-auto" />
        <Forms onSubmit={formik.handleSubmit} className="px-6">
          <InputField
            ref={emailInputRef}
            label="E-mail"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="@gmail.com"
          />
          {formik.errors.email &&
            formik.touched.email &&
            formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="****************"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}

          {formik.errors.email || formik.errors.password
            ? null
            : loginError && <div className="text-red-500">{loginError}</div>}
          <Button
            text="Sign In"
            type="submit"
            className="bg-primary-blue text-white h-14 mt-10 rounded-lg  font-semibold text-lg mb-10"
          ></Button>
        </Forms>
      </Card>
    </Wrapper>
  );
};

export default LoginPage;
