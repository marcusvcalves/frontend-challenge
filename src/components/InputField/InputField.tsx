type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
};

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  readOnly = false,
}: InputFieldProps) => {
  const inputId = `${name}-input`;

  return (
    <div className="flex flex-col pt-6">
      <label htmlFor={inputId}>
        <span className="font-bold">{label}</span>
      </label>
      <input
        id={inputId}
        className="bg-inputfield-background h-14 rounded-lg mt-2 px-4"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete="on"
        readOnly={readOnly}
      />
    </div>
  );
};
export default InputField;
