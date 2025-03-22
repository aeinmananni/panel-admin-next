 "use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});

export default function Home() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h1>انتخاب تاریخ شمسی</h1>
      <DatePicker
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        calendarPosition="bottom-right"
      />
    </div>
  );
}