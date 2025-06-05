import React from "react";
import Image from "next/image";
import "./ProjectCard.css";

interface ProjectCardProps {
    gallery: string[]; // Tüm görseller (en az 1 olmalı)
    title: string;
    description: string;
    onGalleryClick?: (index: number) => void;
}

export default function ProjectCard({
    gallery,
    title,
    description,
    onGalleryClick,
}: ProjectCardProps) {
    const mainImage = gallery[0];
    const gallerySlots = gallery.slice(1, 7); // İlk görsel hariç 6 slot

    return (
        <div className="project-card">
            <div className="project-card-inner">
                <div className="project-card-image-large">
                    <button
                        className="project-main-image-btn"
                        type="button"
                        onClick={() => onGalleryClick && onGalleryClick(0)}
                        tabIndex={0}
                        aria-label={`Proje ana görseli: ${title}`}
                    >
                        <Image
                            src={mainImage}
                            alt={`Proje ana görseli: ${title}`}
                            width={400}
                            height={300}
                            style={{ width: "100%", height: "auto" }}
                            priority
                        />
                    </button>
                </div>
                <div className="project-card-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-desc">{description}</p>
                    <div className="project-gallery">
                        <button
                            className="project-main-image-btn"
                            type="button"
                            onClick={() => onGalleryClick && onGalleryClick(0)}
                            tabIndex={0}
                            aria-label={`Proje ana görseli: ${title}`}
                        >
                            <Image
                                src={mainImage}
                                alt={`Proje ana görseli: ${title}`}
                                width={80}
                                height={60}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </button>
                        {gallerySlots.map((img, i) => (
                            <button
                                key={i + 1}
                                className="project-gallery-slot"
                                type="button"
                                onClick={() => onGalleryClick && onGalleryClick(i + 1)}
                                tabIndex={0}
                                aria-label={`Proje görseli ${i + 2}`}
                            >
                                {img ? (
                                    <Image
                                        src={img}
                                        alt={`Proje görseli ${i + 2}`}
                                        width={80}
                                        height={60}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                ) : (
                                    <span className="project-gallery-placeholder" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}