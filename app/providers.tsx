"use client"; // Ensure it's a client component

import { I18nextProvider } from "react-i18next";
import i18next from "@/lib/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
