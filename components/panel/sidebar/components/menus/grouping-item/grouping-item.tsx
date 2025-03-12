"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Circle } from "../../../icons/icon";
import { FloatTextIcon } from "../float-text-icon/index.";

type GroupingItemProps = {
  title: string;
  to?: string;
};

export default function GroupingItem({ title, to }: GroupingItemProps) {
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const checkRoutes = currentPath?.replace("/", "") === to;

  return (
    <Link
      href={to ?? "/"}
      className={`p-2 group ${checkRoutes ? "bg-yellow-500" : ""} `}
    >
      <FloatTextIcon
        title={title}
        icon={<Circle size={12} />}
        styles={{ parentClassName: `${checkRoutes ? "!text-slate-100" : ""}` }}
      />
    </Link>
  );
}
