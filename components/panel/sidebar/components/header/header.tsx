"use client";
import { usePanelAdminStore } from "@/store";
import { Menu } from "../../icons/icon";
import { useDelayedShowMenu } from "@/hooks/delayedShowMenu";
import Image from "next/image";
import taxiBoard from "@/public/icons/taxi-board.png";
export default function Header() {
  const currentColor = usePanelAdminStore((s) => s.currentColor);
  const isScroll = usePanelAdminStore((s) => s.isScroll);
  const setShowMenu = usePanelAdminStore((s) => s.setShowMenu);
  const showMenu = usePanelAdminStore((s) => s.showMenu);
  const { delayedShowMenu } = useDelayedShowMenu(showMenu);
  return (
    <div
      style={{
        boxShadow: isScroll ? `0px 19px 20px  white` : "0px 2px 2px  white",
      }}
      className={`flex p-2 overflow-hidden z-20 h-24 items-center  ${
        showMenu ? "justify-between" : "justify-between md:justify-center"
      }  transition-all duration-300  w-full`}
    >
      <Menu
        onClick={() => setShowMenu((c) => !c)}
        size={25}
        color={currentColor}
        cursor={"pointer"}
        // className={`${isScroll && !showMenu ? "mr-4" : "mr-0"}`}
      />
      <div
        className={` transition-all duration-300 ${
          delayedShowMenu ? "flex" : "flex md:hidden"
        }  items-center gap-2`}
      >
        <span style={{ color: currentColor }} className="text-lg font-semibold">
          سماسیر
        </span>
        <Image src={taxiBoard} alt="#" width={50} height={50} />
      </div>
    </div>
  );
}
