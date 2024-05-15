import { WrapperProps } from '../../interfaces/WrapperProps';

const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={className}>{children}</div>;
};

export default Wrapper;
