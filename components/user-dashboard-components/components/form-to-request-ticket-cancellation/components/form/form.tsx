"use client";

import { Button, Input, Textarea } from "@/custom";

export default function Form() {
  return (
    <form className="formStyle">
      <div className="grid grid-cols-2 gap-2">
        <Input type="number" label="شماره بلیط" className="InputStyles" />
        <Input label="شماره موبایل" className="InputStyles" />
        <Textarea
          label="دلیل لغو بلیط"
          styles={{ parentClassName: "col-span-2" }}
          rows={7}
          className="InputStyles"
        />
        <Input
          type="radio"
          label="قوانین لغو بلیط را مطالعه کرده‌ام و قبول دارم."
          styles={{
            labelClassName: "!flex-row-reverse  !justify-end",
          }}
        />
      </div>
      <div className="flex items-end justify-end w-full h-full  gap-2">
        <Button className="w-1/6 border-2 border-yellow-500 rounded-md py-1">
          لغو
        </Button>
        <Button className="bg-yellow-500 w-1/6 py-1 rounded-md">
          ارسال درخواست
        </Button>
      </div>
    </form>
  );
}
