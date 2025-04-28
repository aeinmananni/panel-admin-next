"use client";
import { useChangeColor } from "@/hooks/useChangeColor";
import tiketIcon from "@/public/icons/ticket.png";
import Image from "next/image";
type TripCartProps = {
  id?: number;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  status: "تایید شده" | "در انتظار تایید" | "لغو شده";
  ticketNumber?: string;
  seatCount: number;
};

const column: Record<keyof Omit<TripCartProps, "id">, string> = {
  origin: "مبدا",
  destination: "مقصد",
  departureDate: "تاریخ",
  departureTime: "ساعت",
  status: "وضعیت",
  ticketNumber: "شماره تیکت",
  seatCount: "تعداد صندلی",
};
export default function TripCart({ ...props }: TripCartProps) {
  const changeColor = useChangeColor(props.status);
  return (
    <div className="w-full border border-slate-500  rounded-md shadow-lg shadow-yellow-500 flex  p-1 relative justify-between">
      <div className="flex flex-col  gap-1 h-full  relative">
        {Object.keys(column).map((col, colIndex) => (
          <div key={colIndex} className="flex items-center gap-2">
            <p className="font-bold">
              {column[col as keyof Omit<TripCartProps, "id">]}
            </p>
            :
            <p
              style={{
                backgroundColor: (col === "status" && changeColor) || "",
              }}
              className={` text-slate-600 ${
                col === "status"
                  ? "text-white p-1 rounded-md text-sm"
                  : "text-slate-600"
              }`}
            >
              {props[col as keyof Omit<TripCartProps, "id">]}
            </p>
          </div>
        ))}
      </div>
      <Image
        src={tiketIcon}
        alt="ticket-icon"
        width={80}
        height={80}
        className="absolute -top-5 left-0"
      />
    </div>
  );
}
