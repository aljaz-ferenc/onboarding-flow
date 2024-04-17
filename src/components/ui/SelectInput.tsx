import { UseFormRegister } from "react-hook-form";

type SelectInputProps = {
  options: { text: string | number | Date; value: any }[];
  required?: boolean;
  label: string;
  error?: string;
  name: string;
  register: UseFormRegister<any>;
};

export default function SelectInput({
  options,
  required = true,
  label,
  error,
  name,
  register,
}: SelectInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${error ? "text-red-500" : ""} form-label`}
        htmlFor={name}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select className="form-input" {...register(name)}>
        <optgroup label="Country">
          <option value="" className="text-gray">
            Please select
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.text.toString()}
            </option>
          ))}
        </optgroup>
      </select>
      {error && <small className="text-red-500">{"Required"}</small>}
    </div>
  );
}
