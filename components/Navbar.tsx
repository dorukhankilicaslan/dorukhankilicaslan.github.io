// components/Navbar.tsx
"use client";

import "./Navbar.css";

import Link from "next/link";
import Image from "next/image";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'], // ihtiyacına göre ayarla
    variable: '--font-poppins', // CSS değişkeni tanımlarsan globalde kullanırsın
});


export default function Navbar() {
    return (
        <nav className="bg-black-80 shadow py-4 px-8 flex justify-between">
            <span className="logoBox">
                <Image
                    src="https://res.cloudinary.com/ds4suhwnb/image/upload/v1748902508/DK_LogoWhite_cgyafw.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="logoImage"
                />
                <span className="logoText">Dorukhan KILIÇASLAN</span>
            </span>
            <div className="space-x-4 flex items-center">
                <Link href="/" className="text-white"><span className="text-l">Anasayfa</span></Link>
                <Link href="/projects" className="text-white"><span className="text-l">Projeler</span></Link>
                <Link href="/about" className="text-white"><span className="text-l">Hakkımda</span></Link>
                <Link href="/contacts" className="text-white"><span className="text-l">İletişim</span></Link>
            </div>
        </nav>
    );
}