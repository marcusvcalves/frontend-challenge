interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={className}>
      {text}
    </button>
  );
};

export default Button;
