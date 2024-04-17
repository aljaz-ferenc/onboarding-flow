import { UseFormRegister } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  label: string;
  error?: string | null;
  required?: boolean;
};

export default function TextInput({
  register,
  name,
  placeholder,
  label,
  error,
  required,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${error ? "text-red-500" : ""} form-label`}
        htmlFor={name}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className="form-input"
      />
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
