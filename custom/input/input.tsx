import { InputHTMLAttributes } from "react";

type Styles = {
  labelClassName?: string;
};

type InputProps = {
  label?: string;
  errors?: string;
  styles?: Styles;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ errors, styles, label, ...props }: InputProps) {
  return (
    <div
      className={`w-full flex flex-col gap-1 relative p-1 ${styles?.labelClassName}`}
    >
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
