import TimePicker, { TimePickerProps } from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

type TimePickerInputProps = {
  label?: string;
  errors?: string;
} & TimePickerProps;

export default function TimePickerInput({
  label,
  errors,
  className,
  ...props
}: TimePickerInputProps) {
  return (
    <div className="w-full flex flex-col gap-1 relative p-1">
      {label && (
        <label
          className={`${
            errors ? "text-red-500" : "text-slate-400"
          } text-[15px] font-bold`}
        >
          {label}
        </label>
      )}
      <TimePicker
        disableClock
        format="HH:mm"
        {...props}
        className={`${className} text-center [direction:ltr]`}
      />
      {errors && <small className="text-red-500">{errors}</small>}
    </div>
  );
}
