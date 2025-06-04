// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeContext";
import BodyThemeWrapper from "../components/BodyThemeWrapper";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dorukhan Portfolio",
  description: "Grafik, 3D ve Yazılım Projeleri",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head />
      <ThemeProvider>
        <BodyThemeWrapper>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </BodyThemeWrapper>
      </ThemeProvider>
    </html>
  );
}