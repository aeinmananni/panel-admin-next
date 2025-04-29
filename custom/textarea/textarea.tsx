import { TextareaHTMLAttributes } from "react";

type Styles = {
  parentClassName?: string;
};

type TextareaProps = {
  label?: string;
  errors?: string;
  styles?: Styles;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  styles,
  label,
  errors,
  ...props
}: TextareaProps) {
  return (
    <div
      className={`w-full flex flex-col gap-1 relative p-1 ${styles?.parentClassName}`}
    >
      <label
        className={`${
          errors ? "text-red-500" : "text-slate-400"
        } text-[15px] font-bold`}
      >
        {label}
      </label>
      <textarea {...props} />
      {errors && <small className="text-red-500">{errors}</small>}
    </div>
  );
}
