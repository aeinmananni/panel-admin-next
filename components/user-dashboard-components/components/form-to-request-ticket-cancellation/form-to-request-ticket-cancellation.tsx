import { Header } from "../header";
import { TicketNotice } from "../ticket-notice";
import cancleIcon from "@/public/icons/cancle.png";
import { Form } from "./components";
export default function FormToRequestTicketCancellation() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header image={cancleIcon.src} title={"فرم درخواست لغو بلیط"} />
      <div className="flex w-full h-full gap-2 p-2 overflow-hidden">
        <Form />
        <TicketNotice
          titlesGroup={{
            title1:
              "⏳ زمان: درخواست لغو باید حداقل ۲۴ ساعت قبل از حرکت ثبت شود.",
            title2:
              "💸 هزینه: در صورت لغو، هزینه‌ی لغو طبق قوانین کسر خواهد شد.",
            title3:
              "🏦 بازگشت وجه: مبلغ پرداختی طی ۷۲ ساعت کاری به حساب شما بازگردانده می‌شود.",
          }}
        />
      </div>
    </div>
  );
}
