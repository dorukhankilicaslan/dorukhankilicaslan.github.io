"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingOverlay() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setFadeOut(true), 300);
        const removeTimeout = setTimeout(() => setVisible(false), 500);
        return () => {
            clearTimeout(timeout);
            clearTimeout(removeTimeout);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#1a1a1a", // Her zaman siyah
                color: "#d2d2d2",      // Her zaman açık gri
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: fadeOut ? "none" : "auto",
                // Dış div'e opacity animasyonu VERME!
            }}
        >
            <span
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    opacity: fadeOut ? 0 : 1,
                    transition: "opacity 400ms cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                <span className="logoBox">
                    <Image
                        src={"https://res.cloudinary.com/ds4suhwnb/image/upload/v1748902508/DK_LogoWhite_cgyafw.png"}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="logoImage"
                    />
                    <span className="logoText" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span>Dorukhan</span>
                        <span>KILIÇASLAN</span>
                    </span>
                </span>
                <span style={{ fontSize: 24, marginTop: 12 }}>Yükleniyor...</span>
            </span>
        </div>
    );
}