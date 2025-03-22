// "use client";
// import { useState } from "react";
// import DatePicker, { DateObject } from "react-multi-date-picker";

// const MultiDatePickerComponent = () => {
//   const [dates, setDates] = useState<DateObject[]>([]);

//   return (
//     <div className="p-4">
//       {/* <label className="block mb-2 text-lg font-semibold">
//         انتخاب تاریخ‌ها:
//       </label> */}
//       <DatePicker
//         value={dates}
//         onChange={setDates}
//         multiple
//         // placeholder="تاریخ‌های مورد نظر را انتخاب کنید"
//       />
//       {/* <div className="mt-4">
//         <strong>تاریخ‌های انتخاب‌شده:</strong> {JSON.stringify(dates)}
//       </div> */}
//     </div>
//   );
// };

// export default MultiDatePickerComponent;


// "use client"; // این خط را در بالای فایل اضافه کنید تا مشخص شود این کامپوننت سمت کلاینت است

// import React, { useState } from "react";
// import DatePicker from "react-multi-date-picker";

// export default function DatePickerComponent() {
//   const [value, setValue] = useState(new Date());

//   return (
//     <div>
//       <h1>انتخاب تاریخ</h1>
//       <DatePicker value={value} onChange={setValue} format="YYYY/MM/DD" />
//     </div>
//   );
// }

import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

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
        calendarPosition="bottom-right" // برای راست‌چین کردن موقعیت تقویم
      />
    </div>
  );
}