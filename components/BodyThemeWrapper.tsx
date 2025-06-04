"use client";
import { useTheme } from "../components/ThemeContext";

export default function BodyThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <body className={theme === "light" ? "light" : "dark"}>
      {children}
    </body>
  );
}