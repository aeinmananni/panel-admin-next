"use client";
import { usePanelAdminStore } from "@/store";
import { BookOpenCheck, Pin } from "../../icons/icon";

export default function Header() {
  const currentColor = usePanelAdminStore((s) => s.currentColor);
  const isScroll = usePanelAdminStore((s) => s.isScroll);
  return (
    <div
      style={{
        boxShadow: isScroll ? `0px 19px 20px  white` : "0px 2px 2px  white",
      }}
      className="flex p-2 overflow-hidden z-20 h-24 items-center justify-between transition-all duration-300 "
    >
      <Pin size={20} color={currentColor} cursor={"pointer"} />
      <div className="flex items-center gap-2">
        <span style={{ color: currentColor }} className="text-lg font-semibold">
          PAdmin
        </span>
        <BookOpenCheck size={36} color={currentColor} />
      </div>
    </div>
  );
}
