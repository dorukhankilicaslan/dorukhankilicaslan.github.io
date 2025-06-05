import React from "react";
import "./Sidebar.css";

interface SidebarProps {
    activeSection: string;
    setActiveSection?: (section: string) => void;
}

export default function Sidebar({ activeSection }: SidebarProps) {
    return (
        <aside className="onepage-sidebar">
            <div>
                <h1 className="sidebar-hero">Dorukhan KILIÇASLAN</h1>
                <h2 className="sidebar-role">Grafik / Web Tasarım</h2>
                <div className="sidebar-contact">
                    <a href="mailto:drkhn.dk@gmail.com" className="contact-email">
                        drkhn.dk@gmail.com
                    </a>
                    <a
                        href="/dk_resume.pdf"
                        className="contact-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Özgeçmişi Görüntüle
                    </a>
                </div>
                <p className="sidebar-desc">
                    “Çok disiplinli bir tasarımcı olarak, netlik ve kullanıcı deneyimini ön planda tutuyorum.”
                </p>

                <nav className="sidebar-nav" aria-label="In-page jump links">
                    <ul>
                        <li>
                            <a
                                className={`group flex items-center py-3${activeSection === "about" ? " active" : ""}`}
                                href="#about"
                            >
                                <span className="nav-indicator mr-4 h-px bg-slate-600 transition-all"></span>
                                <span
                                    className={`nav-text text-xs font-bold uppercase tracking-widest
                                      ${activeSection === "about" ? "text-slate-200" : "text-slate-500"}
                                      group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                                >
                                    Hakkımda
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`group flex items-center py-3${activeSection === "experience" ? " active" : ""}`}
                                href="#experience"
                            >
                                <span
                                    className={`nav-indicator mr-4 h-px bg-slate-600 transition-all
                                      ${activeSection === "experience" ? "w-16 bg-slate-200" : "w-8"}
                                      group-hover:w-16 group-hover:bg-slate-200
                                      group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                      motion-reduce:transition-none`}
                                ></span>
                                <span
                                    className={`nav-text text-xs font-bold uppercase tracking-widest
                                      ${activeSection === "experience" ? "text-slate-200" : "text-slate-500"}
                                      group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                                >
                                    Deneyimlerim
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`group flex items-center py-3${activeSection === "projects" ? " active" : ""}`}
                                href="#projects"
                            >
                                <span
                                    className={`nav-indicator mr-4 h-px bg-slate-600 transition-all
                                      ${activeSection === "projects" ? "w-16 bg-slate-200" : "w-8"}
                                      group-hover:w-16 group-hover:bg-slate-200
                                      group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                      motion-reduce:transition-none`}
                                ></span>
                                <span
                                    className={`nav-text text-xs font-bold uppercase tracking-widest
                                      ${activeSection === "projects" ? "text-slate-200" : "text-slate-500"}
                                      group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                                >
                                    Projelerim
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
