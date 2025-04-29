import Image from "next/image";
import timeIcon from "@/public/icons/time.png";
export default function ChatOrSupportTicketSystem() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <Image src={timeIcon} alt="time" width={300} height={300} />
      <span className="text-2xl font-bold">
        بازگشایی سیستم پشتیبانی در اینده ای نزیک
      </span>
    </div>
  );
}
