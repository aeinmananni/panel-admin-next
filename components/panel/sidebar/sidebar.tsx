"use client";
import { usePanelAdminStore } from "@/store";
import { Menus, Header } from "./components";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";

export default function Sidebar() {
  const showMenu = usePanelAdminStore((s) => s.showMenu);
  const { i18n } = useChangeLanguage();
  return (
    <div
      className={` duration-300   absolute md:relative ${
        i18n.language === "en" ? "left-0" : "right-0"
      }  top-0 ${
        showMenu
          ? "md:min-w-1/5 translate-x-0 "
          : `min-w-1/6 md:min-w-[6%] ${
              i18n.language === "en" ? "-translate-x-full" : "translate-x-full"
            }  md:translate-x-0`
      }  h-full  flex flex-col bg-white  gap-1 justify-end items-end`}
    >
      <Header />
      <Menus />
    </div>
  );
}
