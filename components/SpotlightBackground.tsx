"use client";
import { useEffect, useRef } from "react";

export default function SpotlightBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
        }

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        function draw(x: number, y: number) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0a192f";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Brittany tarzı: açık mavi, geniş ve yumuşak spotlight
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300);
            gradient.addColorStop(0, "rgba(26, 67, 128, 0.1)");
            gradient.addColorStop(0.5, "rgba(18,45,85,0.05)");
            gradient.addColorStop(1, "rgba(10,25,47,0)");
            ctx.globalCompositeOperation = "lighter";
            ctx.fillStyle = gradient;
            ctx.fillRect(x - 600, y - 600, 1200, 1200);
            ctx.globalCompositeOperation = "source-over";
        }

        function handleMouseMove(e: MouseEvent) {
            draw(e.clientX, e.clientY);
        }

        draw(window.innerWidth / 2, window.innerHeight / 2);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                pointerEvents: "none",
                width: "100vw",
                height: "100vh",
                /* filter: "blur(60px)",  // KALDIR! */
            }}
        />
    );
}