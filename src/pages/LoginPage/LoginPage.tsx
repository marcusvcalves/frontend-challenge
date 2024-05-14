import LoginCard from '../../components/LoginCard';
import LoginForm from '../../components/LoginForm';
import LoginLogo from '../../components/LoginLogo';

const LoginPage = () => {
  return (
    <div className="bg-greyish-white h-screen flex items-center justify-center">
      <LoginCard className="bg-white shadow-login-card rounded-3xl md:h-[534px] md:w-[438px] h-[400.5px] w-[328.5px] pt-14">
        <LoginLogo />
        <LoginForm />
      </LoginCard>
    </div>
  );
};

export default LoginPage;
