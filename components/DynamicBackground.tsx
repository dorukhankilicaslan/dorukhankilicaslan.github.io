"use client";
import { useEffect, useState } from "react";

const images = [
    "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748996438/503b174d539eb6e6a2a8ceca6ced9b04_ztnhtj.jpg",
    "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748996424/chernyy-fon-uzory-svet_i0elfy.jpg",
    "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748996414/black-wide-technology-background-scaled_mppvl4.jpg",
    "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748996405/4668f327cce98aaaef6f9ea05f6b2537_mb8uvr.jpg",
];

export default function DynamicBackground({ onBgLoaded }: { onBgLoaded?: () => void }) {
    const [index, setIndex] = useState(() => Math.floor(Math.random() * images.length));

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                let idx = prev;
                while (idx === prev && images.length > 1) {
                    idx = Math.floor(Math.random() * images.length);
                }
                return idx;
            });
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const img = new window.Image();
        img.src = images[index];
        img.onload = () => {
            document.body.style.setProperty("--dynamic-bg", `url('${images[index]}')`);
            onBgLoaded && onBgLoaded();
        };
    }, [index, onBgLoaded]);

    return null;
}