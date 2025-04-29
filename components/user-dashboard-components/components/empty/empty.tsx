import emptyIcon from "@/public/icons/gauge.png";
import Image from "next/image";
import Link from "next/link";

type Styles = {
  linkClassName?: string;
};

type EmptyType = {
  title: string;
  textLink: string;
  href: string;
  styles?: Styles;
};

export default function Empty({ title, href, textLink }: EmptyType) {
  return (
    <div className="flex flex-col items-center w-full h-full gap-2 col-span-3">
      <Image src={emptyIcon} alt="?" width={250} height={250} />
      <span className="text-lg font-bold text-slate-500 text-shadow-yellow">
        {title}
      </span>
      <Link className="linkedButton" href={href}>
        {textLink}
      </Link>
    </div>
  );
}
