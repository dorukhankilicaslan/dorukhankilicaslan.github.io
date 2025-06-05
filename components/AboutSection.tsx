import React from "react";
import { useLocalization } from "./LocalizationProvider";

export default function AboutSection({ aboutRef }: { aboutRef: React.RefObject<HTMLElement | null> }) {
    const { db, locale } = useLocalization();

    return (
        <section id="about" ref={aboutRef} className="onepage-section">
            <p style={{ margin: 0, whiteSpace: "pre-line" }}>
                {db?.about?.[locale]?.description || ""}
            </p>
        </section>
    );
}