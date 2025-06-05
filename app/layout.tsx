"use client";
import { useEffect, useState } from "react";
import SpotlightBackground from "@/components/SpotlightBackground";
import LoadingOverlay from "@/components/LoadingOverlay";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("onepage-body");
    return () => {
      document.body.classList.remove("onepage-body");
    };
  }, []);

  useEffect(() => {
    const handle = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handle);
      return () => window.removeEventListener("load", handle);
    }
  }, []);

  return (
    <html lang="tr" className="scroll-smooth">
      <body>
        <SpotlightBackground />
        {loading && <LoadingOverlay />}
        {children}
      </body>
    </html>
  );
}