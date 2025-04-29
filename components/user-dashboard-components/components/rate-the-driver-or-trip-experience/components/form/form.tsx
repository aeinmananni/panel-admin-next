"use client";
import { Button, StarRating, Textarea } from "@/custom";

export default function Form() {
  return (
    <form className="w-full p-2">
      <div className="flex flex-col gap-2">
        <StarRating label={"امتیاز به راننده"} name="driver" />
        <StarRating label={"کیفیت وسیله نقلیه"} name="vehicle" />
      </div>
      <Textarea label="نظر شما" className="InputStyles" rows={4} />
      <Button className="bg-yellow-500 p-1">ارسال نظر</Button>
    </form>
  );
}
