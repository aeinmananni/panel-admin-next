import TripCart from "../trip-cart/trip-cart";
import { UPCOMING_TRIPS } from "../../data";
import { Empty } from "../../../empty";

export default function TripCarts() {
  return (
    <div className="w-full h-full  p-2 grid grid-cols-3  gap-8 overflow-y-auto justify-items-center">
      {UPCOMING_TRIPS.length > 0 ? (
        <>
          {UPCOMING_TRIPS.map((item, index) => (
            <TripCart key={index} {...item} />
          ))}
        </>
      ) : (
        <Empty
          title={"شما هیچ سفری در آینده ندارید!"}
          textLink={"بلیط جدید بخرید"}
          href={"/user-dashboard/view-available-trips-and-purchase-tickets"}
        />
      )}
    </div>
  );
}
