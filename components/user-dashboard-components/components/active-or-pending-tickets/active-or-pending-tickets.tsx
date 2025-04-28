import { Header } from "../header";
import { TicketNotice } from "../ticket-notice";
import stopWatch from "@/public/icons/stopwatch.png";
import { Table } from "./components";
import { Empty } from "../empty";
import { UPCOMING_TRIPS } from "../data";
export default function ActiveOrPendingTickets() {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden gap-5 justify-between">
      <Header image={stopWatch.src} title={"ActiveOrPendingTicketsSubText"} />
      {UPCOMING_TRIPS.length > 0 ? (
        <Table />
      ) : (
        <Empty
          title={"شما هیچ سفری در آینده ندارید!"}
          textLink={"بلیط جدید بخرید"}
          href={"/user-dashboard/view-available-trips-and-purchase-tickets"}
        />
      )}

      <div className="flex items-center justify-center h-1/2 p-1">
        <TicketNotice />
      </div>
    </div>
  );
}
