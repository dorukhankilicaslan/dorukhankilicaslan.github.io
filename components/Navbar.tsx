// components/Navbar.tsx
"use client";

export default function Navbar() {
    return (
        <nav className="bg-black-80 shadow py-8 px-8 flex justify-between">
            <span className="font-bold">Dorukhan KILIÇASLAN</span>
            <div className="space-x-4">
                <a href="/">Ana Sayfa</a>
                <a href="/cv">CV</a>
                <a href="#projects">Projeler</a>
                <a href="#about">Hakkımda</a>
                <a href="#contact">İletişim</a>
                <a href="#blog">Blog</a>
            </div>
        </nav>
    );
}