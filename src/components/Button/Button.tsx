import { ButtonProps } from '../../interfaces/ButtonProps';

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={className}>
      {text}
    </button>
  );
};

export default Button;
