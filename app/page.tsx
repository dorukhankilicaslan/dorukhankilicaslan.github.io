"use client";
import { useEffect, useRef, useState } from "react";

import SpotlightBackground from "@/components/SpotlightBackground";

import "./globals.css";

import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Sidebar from "@/components/Sidebar";
import ProjectsSection from "@/components/ProjectsSection";


export default function OnePageCV() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionRefs = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new window.IntersectionObserver(
      entries => {
        // Sadece intersect olanları al
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: sectionRefs.find(s => s.ref.current === entry.target)?.id,
            top: entry.boundingClientRect.top
          }))
          .filter(s => s.id);

        if (visibleSections.length > 0) {
          // En üstte olanı seç
          visibleSections.sort((a, b) => a.top - b.top);
          setActiveSection(visibleSections[0].id!);
        }
      },
      { threshold: 0.15 }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SpotlightBackground />
      <div className="container">
        <div className="split-layout">
          <Sidebar activeSection={activeSection} />
          <main className="main-content">
            <AboutSection aboutRef={aboutRef} />
            <ExperienceSection experienceRef={experienceRef} />
            <ProjectsSection projectsRef={projectsRef} />
          </main>
        </div>
      </div>
    </>
  );
}