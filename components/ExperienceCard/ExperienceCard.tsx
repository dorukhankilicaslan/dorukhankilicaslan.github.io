import React from "react";
import "./ExperienceCard.css";

interface ExperienceCardProps {
    position: string;
    company: string;
    companyUrl?: string;
    date: string;
    description: string;
    technologies?: string[];
    isActive?: boolean;
    isInactive?: boolean;
    onHover?: () => void;
    onBlur?: () => void;
}

export default function ExperienceCard({
    position,
    company,
    companyUrl,
    date,
    description,
    technologies = [],
    isActive = false,
    isInactive = false,
    onHover,
    onBlur,
}: ExperienceCardProps) {
    return (
        <div
            className={`experience-card${isActive ? " active" : ""}${isInactive ? " inactive" : ""}`}
            onMouseEnter={onHover}
            onMouseLeave={onBlur}
            onFocus={onHover}
            onBlur={onBlur}
            tabIndex={0}
        >
            <div className="experience-card-inner">
                <div className="experience-card-date">
                    <span>{date}</span>
                </div>
                <div className="experience-card-content">
                    <h3 className="experience-title">
                        {position}{" "}
                        <span className="experience-company">
                            •{" "}
                            {companyUrl ? (
                                <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                                    {company}
                                </a>
                            ) : (
                                company
                            )}
                        </span>
                    </h3>
                    <p className="experience-desc">{description}</p>
                    {technologies.length > 0 && (
                        <ul className="experience-tech-list">
                            {technologies.map((tech) => (
                                <li key={tech} className="experience-tech-pill">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}