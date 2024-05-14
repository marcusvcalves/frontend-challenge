import { ReactNode } from 'react';

type LoginCardProps = {
  children: ReactNode;
  className?: string;
};

const LoginCard = ({ children, className }: LoginCardProps) => {
  return <div className={className}>{children}</div>;
};

export default LoginCard;
