const className = "underline underline-offset-8";
import Image from "next/image";
import Tip from "@/public/icons/tip.png";
import Link from "next/link";
type TitlesGroup = {
  title1: string;
  title2: string;
  title3: string;
};

type IsLinkedType = {
  href: string;
  text: string;
};

type TicketNoticeProps = {
  titlesGroup: TitlesGroup;
  isLinked?: IsLinkedType;
};

export default function TicketNotice({
  titlesGroup,
  isLinked,
}: TicketNoticeProps) {
  return (
    <div className="w-1/2 rounded-[50px/20px] border-dashed border-2 border-slate-500 flex flex-col gap-2 h-full p-3 justify-evenly ">
      <div className="flex items-center gap-2">
        <Image src={Tip.src} alt="tip" width={30} height={30} />
        <span className="font-bold">قابل توجه کاربر گرامی</span>
      </div>
      <hr />
      <div className="flex flex-col justify-evenly h-full px-3">
        <span className={className}>{titlesGroup?.title1}</span>
        <span className={className}>{titlesGroup?.title2}</span>
        <span className={className}>{titlesGroup?.title3}</span>
      </div>
      {isLinked?.text && (
        <Link className="linkedButton !text-center" href={isLinked?.href}>
          {isLinked?.text}
        </Link>
      )}
    </div>
  );
}
