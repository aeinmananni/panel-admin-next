import { TripCarts } from "./components";
import { Header } from "../header";
export default function OverviewOfUpcomingTrips() {
  return (
    <div className="flex flex-col w-full  overflow-y-auto h-full">
      <Header />
      <TripCarts />
    </div>
  );
}
