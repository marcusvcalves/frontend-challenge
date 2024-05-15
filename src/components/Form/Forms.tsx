import { WrapperProps } from '../../interfaces/WrapperProps';

const Forms = ({ children, className, onSubmit }: WrapperProps) => {
  return (
    <div className={className}>
      <form onClick={onSubmit} className="flex flex-col">
        {children}
      </form>
    </div>
  );
};

export default Forms;
