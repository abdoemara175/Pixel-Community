import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type AccentColor = "blue" | "purple" | "pink" | "amber";

export interface AccentTheme {
  id: AccentColor;
  nameAr: string;
  nameEn: string;
  hex: string;
  primaryHex: string;
  gradient: string;
}

export const ACCENT_THEMES: Record<AccentColor, AccentTheme> = {
  blue: {
    id: "blue",
    nameAr: "الأزرق الملكي",
    nameEn: "Royal Blue",
    hex: "#4F46E5",
    primaryHex: "#3B82F6",
    gradient: "from-blue-600 to-indigo-600",
  },
  purple: {
    id: "purple",
    nameAr: "البنفسجي الزاهي",
    nameEn: "Vibrant Purple",
    hex: "#8B5CF6",
    primaryHex: "#8B5CF6",
    gradient: "from-purple-600 to-violet-600",
  },
  pink: {
    id: "pink",
    nameAr: "الوردي الكهربائي",
    nameEn: "Electric Pink",
    hex: "#EC4899",
    primaryHex: "#EC4899",
    gradient: "from-pink-600 to-rose-600",
  },
  amber: {
    id: "amber",
    nameAr: "الذهبي الدافئ",
    nameEn: "Warm Amber",
    hex: "#F59E0B",
    primaryHex: "#F59E0B",
    gradient: "from-amber-500 to-orange-600",
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [accent, setAccentState] = useState<AccentColor>(() => {
    const stored = localStorage.getItem("accentColor");
    return (stored as AccentColor) || "blue";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  // Update primary CSS variables dynamically when accent changes
  useEffect(() => {
    const root = document.documentElement;
    const currentAccent = ACCENT_THEMES[accent];
    if (currentAccent) {
      root.style.setProperty("--primary", currentAccent.primaryHex);
      root.style.setProperty("--primary-foreground", "#ffffff");
      root.style.setProperty("--ring", currentAccent.primaryHex);
      localStorage.setItem("accentColor", accent);
    }
  }, [accent]);

  // Keyboard shortcut for theme toggle (M key)
  useEffect(() => {
    if (!switchable) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'M' || e.key === 'm') && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setTheme(prev => (prev === "light" ? "dark" : "light"));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [switchable]);

  const toggleTheme = switchable
    ? () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      }
    : undefined;

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
