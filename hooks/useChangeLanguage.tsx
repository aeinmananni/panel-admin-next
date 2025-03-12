"use client";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "fa" | "ar") => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute(
      "dir",
      lng === "fa" || lng === "ar" ? "ltr" : " rtl"
    );
    document.documentElement.lang = lng;
  };

  useEffect(() => {
    const currentLang = i18n.language || "fa";
    document.documentElement.setAttribute(
      "dir",
      currentLang === "fa" || currentLang === "ar" ? "ltr" : "rtl"
    );
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  return { t, changeLanguage, i18n };
};
