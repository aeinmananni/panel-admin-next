import { Header } from "../header";

import rating from "@/public/icons/rating.png";
import { Rates } from "./components";
export default function RateTheDriverOrTripExperience() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header image={rating.src} title={"امتیاز دهی به راننده یا تجربه سفر"} />
      <Rates />
    </div>
  );
}
