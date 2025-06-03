// app/layout.tsx
import type { Metadata } from "next";
import LoadingOverlay from "../components/LoadingOverlay";
import { ThemeProvider } from "../components/ThemeContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dorukhan Portfolio",
  description: "Grafik, 3D ve Yazılım Projeleri",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <ThemeProvider>
          <LoadingOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}