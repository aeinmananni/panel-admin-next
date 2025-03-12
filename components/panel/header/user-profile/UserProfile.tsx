"use client";

import React, { useState, useRef, useEffect } from "react";
import { UserProfileProps } from "../model";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";

const UserProfile: React.FC<UserProfileProps> = ({ role, avatar, name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full"
          layout="intrinsic"
          width={48}
          height={48}
        />

        <div className="flex flex-col">
          <span className="text-lg font-semibold">{name}</span>
          <span className="text-sm text-gray-500">{role}</span>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
        >
          <div className="flex justify-between cursor-pointer">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">
              پروفایل
            </a>
            <CgProfile className="mx-2 mt-2 cursor-pointer" />
          </div>

          <div className="flex justify-between cursor-pointer">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
            >
              تنظیمات
            </a>
            <IoSettingsOutline className="mx-2 mt-2 cursor-pointer" />
          </div>
          <div className="flex justify-between cursor-pointer">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">
              خروج
            </a>
            <RiLogoutCircleRLine className="mx-2 mt-2 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
