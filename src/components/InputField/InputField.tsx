import { forwardRef } from 'react';
import { InputFieldProps } from '../../interfaces/InputFieldProps';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      type,
      name,
      value,
      placeholder,
      onChange,
      onBlur,
      readOnly = false,
      prefix = false,
    },
    ref
  ) => {
    const inputId = `${name}-input`;

    return (
      <div className="flex flex-col pt-6">
        <label htmlFor={inputId}>
          {prefix ? <span>Your </span> : null}
          <span className="font-bold">{label}</span>
        </label>
        <input
          ref={ref}
          id={inputId}
          className="bg-inputfield-background h-14 rounded-lg mt-2 px-4"
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          autoComplete="on"
          readOnly={readOnly}
        />
      </div>
    );
  }
);

export default InputField;
