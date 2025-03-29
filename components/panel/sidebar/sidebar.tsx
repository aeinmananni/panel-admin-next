"use client";
import { usePanelAdminStore } from "@/store";
import { Menus, Header } from "./components";

export default function Sidebar() {
  const showMenu = usePanelAdminStore((s) => s.showMenu);
  return (
    <div
      className={` duration-300 ${
        showMenu ? "min-w-1/6" : "min-w-[6%]"
      }  h-full  flex flex-col bg-white relative gap-1 justify-end items-end`}
    >
      <Header />
      <Menus />
    </div>
  );
}
