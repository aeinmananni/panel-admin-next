import React, { useState, useEffect } from "react";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);

    if (storedDarkMode || isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <span className="cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? "🌞" : "🌙"}
    </span>
  );
}
