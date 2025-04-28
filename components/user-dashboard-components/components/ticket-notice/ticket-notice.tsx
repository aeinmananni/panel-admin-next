const className = "underline underline-offset-8";
import Image from "next/image";
import Tip from "@/public/icons/tip.png";
export default function TicketNotice() {
  return (
    <div className="w-1/2 rounded-[50px/20px] border-dashed border-2 border-slate-500 flex flex-col gap-2 h-full p-3 justify-evenly ">
      <div className="flex items-center gap-2">
        <Image src={Tip.src} alt="tip" width={30} height={30} />
        <span className="font-bold">قابل توجه کاربر گرامی</span>
      </div>
      <div className="flex flex-col justify-evenly h-full px-3">
        <span className={className}>
          ✅ بلیط تایید شده یعنی رزروش نهایی شده و میتونه استفاده بشه.
        </span>
        <span className={className}>
          ⏳ بلیط در انتظار تایید یعنی هنوز رزرو کامل نیست و باید منتظر تایید
          نهایی بمونه.
        </span>
        <span className={className}>
          💡 بلیط‌های در انتظار تایید ممکن است در صورت عدم تایید لغو شوند
        </span>
      </div>
    </div>
  );
}
