"use client";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const MultiDatePickerComponent = () => {
  const [dates, setDates] = useState<DateObject[]>([]);

  return (
    <div className="p-4">
      <label className="block mb-2 text-lg font-semibold">
        انتخاب تاریخ‌ها:
      </label>
      <DatePicker
        value={dates}
        onChange={setDates}
        multiple
        placeholder="تاریخ‌های مورد نظر را انتخاب کنید"
      />
      <div className="mt-4">
        <strong>تاریخ‌های انتخاب‌شده:</strong> {JSON.stringify(dates)}
      </div>
    </div>
  );
};

export default MultiDatePickerComponent;
