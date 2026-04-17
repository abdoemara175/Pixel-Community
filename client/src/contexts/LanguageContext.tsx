import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  toggleLanguage?: () => void;
  switchable: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
  switchable?: boolean;
}

export function LanguageProvider({
  children,
  defaultLanguage = "ar",
  switchable = false,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (switchable) {
      const stored = localStorage.getItem("language");
      return (stored as Language) || defaultLanguage;
    }
    return defaultLanguage;
  });

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === "ar" ? "rtl" : "ltr";

    if (switchable) {
      localStorage.setItem("language", language);
    }
  }, [language, switchable]);

  const toggleLanguage = switchable
    ? () => {
        setLanguage(prev => (prev === "ar" ? "en" : "ar"));
      }
    : undefined;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, switchable }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
