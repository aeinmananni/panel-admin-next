import { Header } from "../header";
import ticketAvalbe from "@/public/icons/tickets_available.png";
import { Tickets } from "./components";
import { TicketNotice } from "../ticket-notice";
export default function ViewAvailableTripsAndPurchaseTickets() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header image={ticketAvalbe.src} title={"لیست سفر های موجود"} />
      <div className="flex w-full h-full gap-2 p-2 overflow-hidden">
        <Tickets />
        <TicketNotice
          titlesGroup={{
            title1:
              "🛂 مدارک: داشتن کارت ملی یا گذرنامه برای تهیه بلیط الزامی است.",
            title2:
              "💳 پرداخت: هزینه بلیط باید به صورت کامل هنگام خرید پرداخت شود.",
            title3:
              "🔄 تغییرات: تغییر یا کنسلی بلیط بر اساس قوانین شرکت امکان‌پذیر است.",
          }}
        />
      </div>
    </div>
  );
}
