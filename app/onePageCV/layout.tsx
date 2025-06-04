"use client";
import { useEffect } from "react";
import SpotlightBackground from "@/components/SpotlightBackground";

export default function OnePageLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        document.body.classList.add("onepage-body");
        return () => {
            document.body.classList.remove("onepage-body");
        };
    }, []);
    return (
        <>
            <SpotlightBackground />
            {children}
        </>
    );
}