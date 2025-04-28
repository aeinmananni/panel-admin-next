"use client";

import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import destinationIcon from "@/public/icons/destination.png";
import Image from "next/image";

export default function Header() {
  const { t } = useChangeLanguage();
  return (
    <div className="flex items-center gap-2 p-2">
      <Image src={destinationIcon} alt="taxi-icon" width={50} height={50} />
      <h1 className="text-lg font-bold text-yellow-500 text-shadow-gray">
        {t("subtext")}
      </h1>
    </div>
  );
}
