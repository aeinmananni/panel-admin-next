import { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  errors?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ errors, label, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1 relative p-1">
      <label
        className={`${
          errors ? "text-red-500" : "text-slate-400"
        } text-[15px] font-bold`}
      >
        {label}
      </label>
      <input {...props} />
      {errors && <small className="text-red-500">{errors}</small>}
    </div>
  );
}
