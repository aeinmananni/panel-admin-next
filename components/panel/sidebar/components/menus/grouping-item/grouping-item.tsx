"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Circle } from "../../../icons/icon";
import { FloatTextIcon } from "../float-text-icon/index.";

type GroupingItemProps = {
  title: string;
  to?: string;
};

export default function GroupingItem({ title, to }: GroupingItemProps) {
  const pathname = usePathname();
  const isActive = pathname.replace("/", "") === to;

  return (
    <Link
      href={to ?? "/"}
      className={`p-2  w-full h-10 flex justify-center items-center group rounded-sm ${
        isActive ? "neon-button" : ""
      } `}
    >
      <FloatTextIcon
        title={title}
        icon={<Circle size={12} />}
        styles={{ parentClassName: `${isActive ? "!text-slate-600" : ""}` }}
      />
    </Link>
  );
}
