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

  console.log(pathname);
  return (
    <Link
      href={to ?? "/"}
      className={`p-2 group rounded-md ${isActive ? "neon-button" : ""} `}
    >
      <FloatTextIcon
        title={title}
        icon={<Circle size={12} />}
        styles={{ parentClassName: `${isActive ? "!text-slate-600" : ""}` }}
      />
    </Link>
  );
}
