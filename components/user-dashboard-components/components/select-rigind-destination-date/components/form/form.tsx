"use client";
import { Select, TimePickerInput, CalendarInput, Button } from "@/custom";
import { CITIESE, PROVINSE } from "../../../data";

const className =
  "border border-slate-500 rounded-md outline-none focus:ring-2 ring-offset-2 ring-yellow-500 py-1 px-2 w-full";
export default function Form() {
  return (
    <form className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3 w-full">
        <TimePickerInput className={`${className}`} />
        <CalendarInput className={`${className} text-center`} />
        <Select
          OPTIONS={CITIESE}
          className={className}
          label="شهر مورد نظر را انتخاب کنید"
        />
        <Select
          OPTIONS={PROVINSE}
          className={className}
          label="استان مورد نظر را انتخاب کنید"
        />
      </div>
      <div className="flex items-center justify-end w-full  gap-2">
        <Button className="w-1/6 border-2 border-yellow-500 rounded-md py-1">
          لغو
        </Button>
        <Button className="bg-yellow-500 w-1/6 py-1 rounded-md">ذخیره</Button>
      </div>
    </form>
  );
}
