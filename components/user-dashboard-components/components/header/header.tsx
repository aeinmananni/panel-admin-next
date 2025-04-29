"use client";

import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import Image from "next/image";
import taxiArm from "@/public/icons/taxi-arm.png";

type HeaderProps = {
  image: string;
  title: string;
};

export default function Header({ title, image }: HeaderProps) {
  const { t } = useChangeLanguage();
  return (
    <div className="flex items-center justify-between gap-2 px-2">
      <div className="flex items-center gap-1">
        <Image src={image} alt="taxi-icon" width={50} height={50} />
        <h1 className="text-lg font-bold text-yellow-500 text-shadow-gray">
          {t(title)}
        </h1>
      </div>
      <Image src={taxiArm} alt="icon" width={80} height={80} />
    </div>
  );
}
