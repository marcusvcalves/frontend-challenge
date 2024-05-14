type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col pt-6">
      <label htmlFor={name}>
        <span className="font-bold">{label}</span>
      </label>
      <input
        className="bg-input-grey h-14 rounded-lg mt-2 px-4"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
