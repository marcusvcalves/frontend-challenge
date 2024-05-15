import logo from '../../assets/logo.png';

const Logo = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h2>
        <img src={logo} alt="Logo da b2bit" />
      </h2>
    </div>
  );
};

export default Logo;
