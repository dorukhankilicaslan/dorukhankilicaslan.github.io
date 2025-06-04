"use client";
import { useState } from "react";
import DynamicBackground from "./DynamicBackground";
import LoadingOverlay from "./LoadingOverlay";
import SpotlightBackground from "./SpotlightBackground";


export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [bgLoaded, setBgLoaded] = useState(false);

    return (
        <>
            <DynamicBackground onBgLoaded={() => setBgLoaded(true)} />
            {!bgLoaded && <LoadingOverlay />}
            {bgLoaded && children}
        </>
    );
}