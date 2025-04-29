"use client";
import {
  Select,
  TimePickerInput,
  CalendarInput,
  Button,
  Textarea,
} from "@/custom";
import { CITIESE } from "../../../data";

export default function Form() {
  return (
    <form className="formStyle">
      <div className="grid grid-cols-2 gap-3 w-full">
        <TimePickerInput className="InputStyles" label="ساعت حرکت" />
        <CalendarInput
          className={`InputStyles text-center`}
          label="تاریخ حرکت"
        />
        <Select OPTIONS={CITIESE} className="InputStyles" label="مبدا" />
        <Select OPTIONS={CITIESE} className="InputStyles" label="مقصد" />
        <Textarea
          className="InputStyles"
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
