/* components/Navbar.css */
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../components/ThemeContext";
import ThemeButton from "../components/ThemeButton";
import "./Navbar.css";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbarNav flex items-center justify-between px-6 py-3 bg-[var(--background)] text-[var(--foreground)]">
            {/* Sol Logo */}
            <span className="logoBox flex items-center gap-2">
                <Image
                    src={theme === "dark"
                        ? "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748902508/DK_LogoWhite_cgyafw.png"
                        : "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748902163/DK_Logo_s3zf2g.png"}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="logoImage"
                />
                <span className="logoText flex flex-col items-center text-xs sm:text-base">
                    <span>Dorukhan</span>
                    <span>KILIÇASLAN</span>
                </span>
            </span>

            {/* Hamburger Button (Mobile) */}
            <button
                className="hamburger"
                aria-label="Menüyü Aç/Kapat"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className={`bar ${menuOpen ? "open" : ""}`}></span>
                <span className={`bar ${menuOpen ? "open" : ""}`}></span>
                <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            </button>

            {/* Menü ve Tema Butonu */}
            <div className={`navbarLinksWrapper ${menuOpen ? "open" : ""}`}>
                <div className="navbarLinks absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4 items-center
                sm:static sm:translate-x-0 sm:translate-y-0 sm:flex">
                    <Link href="/" className="text-white"><span className="text-l">Anasayfa</span></Link>
                    <Link href="/projects" className="text-white"><span className="text-l">Projeler</span></Link>
                    <Link href="/about" className="text-white"><span className="text-l">Hakkımda</span></Link>
                    <Link href="/contacts" className="text-white"><span className="text-l">İletişim</span></Link>
                </div>
                <div className="themeButtonMobile">
                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
            {/* Masaüstü Tema Butonu */}
            <div className="themeButtonDesktop">
                <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    );
}
