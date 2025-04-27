"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "../../../icons/icon";
import Button from "../../../../../../custom/button";
import { FloatTextIcon } from "../float-text-icon/index.";
import useToggleHeight from "@/hooks/useToggleHeight";
import { useTranslation } from "next-i18next";
import { usePanelAdminStore } from "@/store";

// import { usePanelAdminStore } from "../../../../../../store";
type ItemProps = {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
};

export default function ClassificationItem({
  title,
  icon,
  children,
  isOpen,
}: ItemProps) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(isOpen);
  const containerDivRef = useRef<HTMLDivElement | null>(null);
  const showMenu = usePanelAdminStore((s) => s.showMenu);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  useToggleHeight(open, Object(containerDivRef));
  return (
    <div className={`flex  flex-col transition-all duration-300 `}>
      <Button
        type="button"
        onClick={() => setOpen((c) => !c)}
        className={`${children && open ? "bg-slate-100" : ""} MenuItemsStyle  ${
          showMenu && "group"
        } `}
      >
        {children && (
          <ChevronDown
            size={16}
            className={`${
              open
                ? "rotate-0"
                : i18n.language === "en"
                ? "-rotate-90"
                : "rotate-90"
            } transition-all duration-300 text-slate-600 ${
              showMenu ? "flex" : "md:hidden"
            }`}
          />
        )}
        <FloatTextIcon title={title} icon={icon} rols="classification" />
      </Button>
      {children && (
        <div
          ref={containerDivRef}
          className={`flex flex-col rounded-md items-end ${
            showMenu ? "px-2" : "px-0"
          }   overflow-hidden transition-all duration-300 `}
        >
          {children}
        </div>
      )}
    </div>
  );
}
