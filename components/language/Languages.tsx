/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import usa from "@/public/images/usa.jpg";
import iran from "@/public/images/iran.jpg";
import arabic from "@/public/images/arabic.jpg";
import Image from "next/image";

const languageOptions = [
  { label: "English", value: "en", flag: usa },
  { label: "فارسی", value: "fa", flag: iran },
  { label: "العربية", value: "ar", flag: arabic },
];

const ChangeLanguage: React.FC = () => {
  const { changeLanguage } = useChangeLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[1]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (option: any) => {
    setSelectedLanguage(option);
    changeLanguage(option.value);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md"
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          className="w-5 h-5"
        />
        {selectedLanguage.label}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-full">
          {languageOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleLanguageChange(option)}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
            >
              <Image src={option.flag} alt={option.label} className="w-5 h-5" />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
