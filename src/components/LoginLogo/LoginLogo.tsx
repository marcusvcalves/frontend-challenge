import Logo from '../../assets/logo.png';

const LoginLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <h2>
        <img src={Logo} height={300} width={300} alt="Logo da b2bit" />
      </h2>
    </div>
  );
};

export default LoginLogo;
