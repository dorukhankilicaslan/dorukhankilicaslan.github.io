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
        <nav className="navbarNav">
            {/* Sol Logo (her zaman sabit) */}
            <Link href={"/"} className="logoBox">
                <Image
                    src={theme === "dark"
                        ? "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748902508/DK_LogoWhite_cgyafw.png"
                        : "https://res.cloudinary.com/ds4suhwnb/image/upload/v1748902163/DK_Logo_s3zf2g.png"}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="logoImage"
                />
                <span className="logoText">
                    <span>Dorukhan</span>
                    <span>KILIÇASLAN</span>
                </span>
            </Link>

            {/* Sağda hamburger ve menü */}
            <div className="navbarRight">
                {/* Hamburger Button (Mobile) */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    aria-label="Menüyü Aç/Kapat"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Menü ve Tema Butonu */}
                <div className={`navbarLinksWrapper ${menuOpen ? "open" : ""}`}>
                    <div className="navbarLinks">
                        <Link href="/"><span>Anasayfa</span></Link>
                        <Link href="/projects"><span>Projeler</span></Link>
                        <Link href="/about"><span>Hakkımda</span></Link>
                        <Link href="/contacts"><span>İletişim</span></Link>
                        <div className="themeButtonMobile">
                            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                        </div>
                    </div>
                </div>
                {/* Masaüstü ThemeButton */}
                <div className="themeButtonDesktop">
                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </nav>
    );
}
