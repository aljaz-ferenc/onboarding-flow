import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  label: string;
  error?: string | null;
  required?: boolean;
};

export default function PasswordInput({
  register,
  name,
  placeholder,
  label,
  error,
  required,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className={`${error ? "text-red-500" : ""} form-label`}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`flex form-input items-center justify-between border px-2 py-3 rounded w-full pl-1 ${
          isFocused && "outline outline-blue-500"
        }`}
      >
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          placeholder={placeholder}
          className="w-full outline-none px-5"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <span
          className="cursor-pointer mx-2"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Hide" : "Show"}
        </span>
      </div>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
