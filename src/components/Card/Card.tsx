import { WrapperProps } from '../../interfaces/WrapperProps';

const Card = ({ children, className }: WrapperProps) => {
  return <div className={className}>{children}</div>;
};

export default Card;
