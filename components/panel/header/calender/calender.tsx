"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { useTranslation } from "react-i18next";

const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});

export default function Home() {
  const [value, setValue] = useState(new Date());

  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  console.log(currentLanguage);  

  const calendar = currentLanguage === "fa" ? persian : gregorian;
  const locale = currentLanguage === "fa" ? persian_fa : gregorian_en;
  const format = currentLanguage === "fa" ? "YYYY/MM/DD" : "MM/DD/YYYY";

  return (
    <div className="flex flex-col items-center justify-center">
      <DatePicker
        value={value}
        onChange={setValue}
        calendar={calendar}
        locale={locale}
        format={format}
        calendarPosition="bottom-right"
      />
    </div>
  );
}
