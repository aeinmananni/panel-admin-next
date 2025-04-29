"use client";

import { Button, Textarea } from "@/custom";
import { ViewPasteTravelType, columnViewPased } from "../../../models";
import Image from "next/image";
import cart_icon from "@/public/icons/taxi_pased.png";
export default function View({ ...props }: ViewPasteTravelType) {
  return (
    <div className="border border-slate-500   relative bg-white border-dashed flex shadow-sm p-1  flex-col">
      <div className="grid grid-cols-2 grid-flow-rows  gap-1 h-full  relative p-2 border-b border-dashed">
        {Object.keys(columnViewPased).map((col, colIndex) => (
          <div key={colIndex} className="flex items-center gap-2 w-max">
            <p className="font-bold text-sm">
              {columnViewPased[col as keyof Omit<ViewPasteTravelType, "id">]}
            </p>
            :
            <p className={` text-slate-600 `}>
              {props[col as keyof Omit<ViewPasteTravelType, "id">]}
            </p>
          </div>
        ))}
        <Image
          src={cart_icon}
          alt="car"
          width={30}
          height={30}
          className="absolute top-1 left-1"
        />
      </div>
      <Textarea className="InputStyles" label="ثبت نظر" rows={4} />
      <div className="flex w-full justify-start items-center">
        <Button className="bg-yellow-500  left-0 p-1 text-slate-100 rounded-md">
          ثبت نظر
        </Button>
      </div>
    </div>
  );
}
