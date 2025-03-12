"use client";
import { useTranslation } from "next-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "fa" | "ar") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col">
      <button onClick={() => changeLanguage("fa")}>🇮🇷 فارسی</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
      <button onClick={() => changeLanguage("ar")}>🇸🇦 العربية</button>
    </div>
  );
};

export default ChangeLanguage;
