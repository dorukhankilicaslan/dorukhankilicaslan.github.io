"use client";
import "./onePage.css";
import { useEffect, useRef } from "react";
import { FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const sections = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function OnePageCV() {
    // Intersection Observer ile scroll animasyonu
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.3 }
        );
        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="onepage-root">
            <aside className="onepage-sidebar">
                <div className="onepage-sidebar-header">
                    <div className="onepage-sidebar-title">Dorukhan KILIÇASLAN</div>
                    <div className="onepage-sidebar-subtitle">Grafik/Web Tasarım</div>
                </div>
                <nav>
                    <ul>
                        {sections.map(sec => (
                            <li key={sec.id}>
                                <a href={`#${sec.id}`}>{sec.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="onepage-main">
                <section
                    id="about"
                    className="onepage-section"
                    ref={el => (sectionRefs.current[0] = el)}
                >
                    <h2>About</h2>
                    <p>
                        Hi, I'm Dorukhan KILIÇASLAN. I design and build things for the web and brands.<br />
                        I love creating visually appealing and user-friendly experiences.
                    </p>
                </section>
                <section
                    id="experience"
                    className="onepage-section"
                    ref={el => (sectionRefs.current[1] = el)}
                >
                    <h2>Experience</h2>
                    <ul>
                        <li>
                            <strong>Freelance</strong> – Grafik/Web Designer<br />
                            <span>2021 - Present</span>
                        </li>
                        <li>
                            <strong>XYZ Studio</strong> – Creative Designer<br />
                            <span>2018 - 2021</span>
                        </li>
                    </ul>
                </section>
                <section
                    id="projects"
                    className="onepage-section"
                    ref={el => (sectionRefs.current[2] = el)}
                >
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <strong>Modern Portfolio</strong> – Kişisel portföy sitesi
                        </li>
                        <li>
                            <strong>Brand Identity</strong> – Marka kimliği çalışmaları
                        </li>
                    </ul>
                </section>
                <section
                    id="contact"
                    className="onepage-section"
                    ref={el => (sectionRefs.current[3] = el)}
                >
                    <h2>Contact</h2>
                    <p>
                        Email: dorukhankilicaslan@example.com
                    </p>
                </section>
            </main>
        </div>
    );
}