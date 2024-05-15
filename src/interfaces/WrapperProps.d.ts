export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
}