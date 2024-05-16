export interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  prefix?: boolean;
}