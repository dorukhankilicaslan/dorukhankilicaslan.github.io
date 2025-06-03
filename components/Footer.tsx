// components/Footer.tsx

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-title"></div>
                <div className="footer-contact">
                    <span>Telefon: +90 530 XX XX</span>
                    <span>E-posta: mail@ornek.com</span>
                </div>
                <div className="footer-copyright">
                    © {new Date().getFullYear()}
                </div>
            </div>

        </footer>
    );
}

/*
<div className="footer-section">
                <nav className="footer-nav">
                    <Link href="/"><span className="footer-nav-link">Anasayfa</span></Link>
                    <Link href="/projects"><span className="footer-nav-link">Projeler</span></Link>
                    <Link href="/about"><span className="footer-nav-link">Hakkımda</span></Link>
                    <Link href="/contacts"><span className="footer-nav-link">İletişim</span></Link>
                </nav>
            </div>
            */