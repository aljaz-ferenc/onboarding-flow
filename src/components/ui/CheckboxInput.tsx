import React from "react";
import { UseFormRegister } from "react-hook-form";

type CheckboxInputProps = {
  register: UseFormRegister<any>;
  name: string;
  label: string | React.ReactNode;
  error?: string;
};

export default function CheckboxInput({
  register,
  label,
  error,
  name,
}: CheckboxInputProps) {
  return (
    <div className="flex flex-col">
      <div>
        <input type="checkbox" {...register(name)} id={name} />
        <label className="ml-1" htmlFor={name}>
          {label}
        </label>
      </div>

      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
