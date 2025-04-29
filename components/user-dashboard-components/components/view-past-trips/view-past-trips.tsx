import { Header } from "../header";
import carIcon from "@/public/icons/car.png";
import { Views } from "./components";
export default function ViewPastTrips() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header image={carIcon.src} title={"مشاهده سفر های گذشته"} />
      <Views />
    </div>
  );
}
