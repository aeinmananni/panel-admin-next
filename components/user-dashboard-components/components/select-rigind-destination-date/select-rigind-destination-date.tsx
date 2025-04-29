import { Header } from "../header";
import route from "@/public/icons/route.png";
import { Form } from "./components";
import { TicketNotice } from "../ticket-notice";
export default function SelectRigindDestinationDate() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header image={route.src} title={"مبدأ، مقصد، تاریخ  را انتخاب کنید"} />
      <div className="flex w-full h-full p-2 gap-3">
        <Form />
        <TicketNotice
          isLinked={{
            text: "برو سفر های موجود",
            href: "/user-dashboard/view-available-trips-and-purchase-tickets",
          }}
          titlesGroup={{
            title1: "🏠 مبدأ: شهری که از آن سفر می‌کنید را انتخاب کنید",
            title2: "🎯 مقصد: شهری که قصد دارید به آن بروید را مشخص کنید.",
            title3: "📅 تاریخ: زمان سفرتان را تعیین کنید",
          }}
        />
      </div>
    </div>
  );
}
