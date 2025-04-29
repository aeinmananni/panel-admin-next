import { SelectHTMLAttributes } from "react";
import { SelectOptionsType } from "../models";

type SelectProps = {
  label?: string;
  errors?: string;
  OPTIONS: SelectOptionsType[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  errors,
  label,
  OPTIONS,
  ...props
}: SelectProps) {
  return (
    <div className="w-full h-max flex flex-col gap-1 relative p-1">
      <label
        className={`${
          errors ? "text-red-500" : "text-slate-400"
        } text-[15px] font-bold`}
      >
        {label}
      </label>
      <select {...props}>
        {OPTIONS.map((it, index) => (
          <option key={index} value={it.value}>
            {it.label}
          </option>
        ))}
      </select>
      {errors && <small className="text-red-500">{errors}</small>}
    </div>
  );
}
