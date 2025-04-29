"use client";

import calender from "@/public/icons/calendar.png";
import Image from "next/image";
import { columnPurchased, PurchasedTicketsType } from "../../../models";
import { Button } from "@/custom";
export default function PurchasedTicket({ ...props }: PurchasedTicketsType) {
  return (
    <div className=" flex flex-col border  bg-yellow-50 rounded-md  shadow-md relative">
      <div className="flex flex-col justify-center items-center">
        <Image src={calender} alt="calender" width={30} height={30} />
        <small className="font-bold">سماسیر</small>
      </div>
      <div className="grid grid-cols-2 grid-flow-rows  gap-1 h-full  relative p-2">
        {Object.keys(columnPurchased).map((col, colIndex) => (
          <div key={colIndex} className="flex items-center gap-2 w-max">
            <p className="font-bold text-sm">
              {columnPurchased[col as keyof Omit<PurchasedTicketsType, "id">]}
            </p>
            :
            <p className={` text-slate-600 `}>
              {props[col as keyof Omit<PurchasedTicketsType, "id">]}
            </p>
          </div>
        ))}
      </div>
      <Button className="bg-red-500 absolute bottom-0 left-0 p-1 text-slate-100 text-sm">
        حذف تاریخچه
      </Button>
    </div>
  );
}
