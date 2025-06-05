"use client";

export default function LoadingOverlay() {
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 9999,
                inset: 0,
                background: "#0a192f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64ffda",
                fontSize: "2rem",
                fontFamily: "Calibre, Inter, sans-serif",
                transition: "opacity 0.4s",
            }}
            id="loading-overlay"
        >
            Loading...
        </div>
    );
}