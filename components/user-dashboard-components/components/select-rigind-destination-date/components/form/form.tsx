"use client";
import {
  Select,
  TimePickerInput,
  CalendarInput,
  Button,
  Textarea,
} from "@/custom";
import { CITIESE } from "../../../data";

const className =
  "border border-slate-500 rounded-md outline-none focus:ring-2 ring-offset-2 ring-yellow-500 py-1 px-2 w-full";
export default function Form() {
  return (
    <form className="formStyle">
      <div className="grid grid-cols-2 gap-3 w-full">
        <TimePickerInput className={`${className}`} label="ساعت حرکت" />
        <CalendarInput
          className={`${className} text-center`}
          label="تاریخ حرکت"
        />
        <Select OPTIONS={CITIESE} className={className} label="مبدا" />
        <Select OPTIONS={CITIESE} className={className} label="مقصد" />
        <Textarea
          className={`${className}`}
          rows={5}
          label="توضیحات"
          styles={{ parentClassName: "col-span-2 " }}
        />
      </div>
      <div className="flex items-end justify-end w-full h-full  gap-2">
        <Button className="w-1/6 border-2 border-yellow-500 rounded-md py-1">
          لغو
        </Button>
        <Button className="bg-yellow-500 w-1/6 py-1 rounded-md">ذخیره</Button>
      </div>
    </form>
  );
}
