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
      <div className="flex  w-full h-full">
        {UPCOMING_TRIPS.length > 0 ? (
          <Table />
        ) : (
          <Empty
            title={"شما هیچ سفری در آینده ندارید!"}
            textLink={"بلیط جدید بخرید"}
            href={"/user-dashboard/view-available-trips-and-purchase-tickets"}
          />
        )}

        <TicketNotice
          titlesGroup={{
            title1:
              "✅ بلیط تایید شده یعنی رزروش نهایی شده و میتونه استفاده بشه.",
            title2:
              "⏳ بلیط در انتظار تایید یعنی هنوز رزرو کامل نیست و باید منتظر تایید نهایی بمونه.",
            title3:
              "💡 بلیط‌های در انتظار تایید ممکن است در صورت عدم تایید لغو شوند",
          }}
        />
      </div>
    </div>
  );
}
