"use client";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
type DashbaordProps = {
  children?: React.ReactNode;
};

export default function Dashbaord({ children }: DashbaordProps) {
  const { i18n } = useChangeLanguage();
  return (
    <div className="flex items-center w-full h-full ">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-24">
          <Header />
        </div>
        <div className="w-full h-full  p-3 overflow-hidden">
          <div
            style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
            className="w-full h-full border-2 border-yellow-500 rounded-lg shadow-lg flex flex-col overflow-y-auto"
          >
            {children}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
