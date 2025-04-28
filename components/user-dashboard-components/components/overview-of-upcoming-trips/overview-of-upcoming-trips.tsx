import { TripCarts } from "./components";
import { Header } from "../header";
import destinationIcon from "@/public/icons/destination.png";
export default function OverviewOfUpcomingTrips() {
  return (
    <div className="flex flex-col w-full  overflow-hidden h-full">
      <Header image={destinationIcon.src} title={"subtext"} />
      <TripCarts />
    </div>
  );
}
