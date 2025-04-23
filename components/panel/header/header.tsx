"use client";

import  { useState } from "react";
import { Icons } from "./Icons/Icons";
import UserProfile from "./user-profile";
import { NotificationIconProps } from "./model";
import avatar from "@/public/images/user.jpg";
import DatePickerComponent from "./calender/calender";
import ChangeLanguage from "@/components/language/Languages";
import DarkMode from "@/components/darkmode";

interface CustomNotificationIconProps extends NotificationIconProps {
  message?: string;
}
    
const NotificationIcon: React.FC<CustomNotificationIconProps> = ({
  Icon,
  count,
  color,
  message,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={`w-5 h-5 text-${color}`} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
      {isHovered && (
        <div className="absolute right-0 mt-2 w-44 h-12 bg-red shadow-md rounded-md p-2 z-10">
          <p className="text-gray-700 ">{message || "سبد خرید خالیست . . ."}</p>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-3  bg-white shadow-sm h-full dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
        <div className="flex items-center gap-2 text-gray-700 sm:font-semibold dark:text-white">
          <UserProfile role="admin" avatar={avatar.src} name="John Doe" />
          <ChangeLanguage />
          <input
            type="text"
            placeholder=". . . Search"
            className="px-2 py-1 border rounded-xl border-gray-300 text-left dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-600 relative mt-4 md:mt-0">
        <DarkMode />

        <NotificationIcon
          Icon={Icons.ShoppingCart}
          count={0}
          color="blue-600"
        />
        <NotificationIcon
          Icon={Icons.Mail}
          count={0}
          color="gray-600"
          message="پیامی ندارید . . . "
        />
        <div className="relative">
          <Icons.Calendar
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          />
          {isCalendarOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 z-10">
              <DatePickerComponent />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
