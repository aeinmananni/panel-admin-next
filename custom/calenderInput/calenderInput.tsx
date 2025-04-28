import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { CalendarProps } from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";

const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});

type CalendarInputProps = {
  label?: string;
  errors?: string;
} & Partial<CalendarProps>;
export default function CalendarInput({
  label,
  errors,
  ...props
}: CalendarInputProps) {
  const { i18n } = useChangeLanguage();
  const currentLanguage = i18n.language;
  const calendar = currentLanguage === "fa" ? persian : gregorian;
  const locale = currentLanguage === "fa" ? persian_fa : gregorian_en;
  const format = currentLanguage === "fa" ? "YYYY/MM/DD" : "MM/DD/YYYY";

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
      <DatePicker
        calendar={calendar}
        locale={locale}
        format={format}
        calendarPosition="bottom-right"
        {...props}
        className={`bg-red-500`}
        inputClass={props.className}
      />
      {errors && <small className="text-red-500">{errors}</small>}
    </div>
  );
}
