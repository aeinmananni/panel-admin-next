import { Form } from "../form";
import { RateTypes } from "../../../models";
import ratingForm from "@/public/icons/rating_form.png";
import Image from "next/image";
type RateProps = RateTypes;

export default function Rate({
  departureDate,
  departureTime,
  destination,
  origin,
}: RateProps) {
  return (
    <div className=" border border-dashed p-1 rounded-lg flex flex-col gap-2 relative">
      <Image
        src={ratingForm}
        alt="rating"
        width={50}
        height={50}
        className="absolute top-1 left-1"
      />
      <div className="flex flex-col gap-1 ">
        <h2 className="font-bold text-lg">✍️ ثبت نظر درباره سفر</h2>
        <p className="text-gray-600 text-sm font-bold">
          📍 {origin} → {destination} | 🕒 {departureDate} - {departureTime}
        </p>
      </div>
      <Form />
    </div>
  );
}
