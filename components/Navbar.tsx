// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black-80 shadow py-4 px-8 flex justify-between">
            <span className="font-bold">Dorukhan KILIÇASLAN</span>
            <div className="space-x-4">
                <Link href="/" className="text-white"><span className="text-l">Anasayfa</span></Link>
                <Link href="/projects" className="text-white"><span className="text-l">Projeler</span></Link>
                <Link href="/about" className="text-white"><span className="text-l">Hakkımda</span></Link>
                <Link href="/contacts" className="text-white"><span className="text-l">İletişim</span></Link>
            </div>
        </nav>
    );
}