import React, { useState, useRef, useEffect } from "react";
import "./ImageModal.css";

interface ImageModalProps {
    open: boolean;
    src: string;
    alt?: string;
    onClose: () => void;
}

const MAX_SCALE = 10;

export default function ImageModal({ open, src, alt, onClose }: ImageModalProps) {
    const [scale, setScale] = useState(1);
    const [drag, setDrag] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const [minScale, setMinScale] = useState(1);

    // Ekrana sığacak scale'ı hesapla
    useEffect(() => {
        const updateMinScale = () => {
            const img = imgRef.current;
            const modal = modalContentRef.current;
            if (!img || !modal) return;
            const naturalWidth = img.naturalWidth;
            const naturalHeight = img.naturalHeight;
            const modalWidth = modal.clientWidth;
            const modalHeight = modal.clientHeight;
            const scaleW = modalWidth / naturalWidth;
            const scaleH = modalHeight / naturalHeight;
            const fitScale = Math.min(scaleW, scaleH, 1);
            setMinScale(fitScale);
            setScale(fitScale);

            // --- Her zaman ortala ---
            const displayWidth = naturalWidth * fitScale;
            const displayHeight = naturalHeight * fitScale;
            setDrag({
                x: (modalWidth - displayWidth) / 2,
                y: (modalHeight - displayHeight) / 2,
            });
        };

        if (open && imgRef.current && modalContentRef.current) {
            if (imgRef.current.complete) {
                updateMinScale();
            } else {
                imgRef.current.onload = updateMinScale;
            }
        }

        window.addEventListener("resize", updateMinScale);
        return () => window.removeEventListener("resize", updateMinScale);
    }, [open, src]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Mouse wheel ile zoom (pivot: mouse pozisyonu)
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();

        const img = imgRef.current;
        const modal = modalContentRef.current;
        if (!img || !modal) return;

        const rect = modal.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        let newScale = scale;
        const zoomIntensity = 0.1;
        if (e.deltaY < 0) {
            newScale = Math.min(MAX_SCALE, scale + zoomIntensity);
        } else if (e.deltaY > 0) {
            newScale = Math.max(minScale, scale - zoomIntensity);
        }
        if (newScale === scale) return;

        let newDrag;
        if (newScale === minScale) {
            const naturalWidth = img.naturalWidth;
            const naturalHeight = img.naturalHeight;
            const displayWidth = naturalWidth * minScale;
            const displayHeight = naturalHeight * minScale;
            newDrag = {
                x: (modal.clientWidth - displayWidth) / 2,
                y: (modal.clientHeight - displayHeight) / 2,
            };
        } else {
            // --- EN DOĞRU PİVOT FORMÜLÜ ---
            const imgX = (mouseX - drag.x) / scale;
            const imgY = (mouseY - drag.y) / scale;
            newDrag = {
                x: mouseX - imgX * newScale,
                y: mouseY - imgY * newScale,
            };
        }

        setScale(newScale);
        setDrag(newDrag);
    };

    // Drag işlemleri
    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale === minScale) return;
        setDragging(true);
        lastPos.current = { x: e.clientX - drag.x, y: e.clientY - drag.y };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging) return;
        setDrag({
            x: e.clientX - lastPos.current.x,
            y: e.clientY - lastPos.current.y,
        });
    };

    const handleMouseUp = () => setDragging(false);

    if (!open) return null;

    const style: React.CSSProperties = {
        transform: `translate(${drag.x}px, ${drag.y}px) scale(${scale})`,
        transition: dragging ? "none" : "transform 0.2s",
        maxWidth: "none",
        maxHeight: "none",
        cursor: scale === minScale ? "zoom-in" : dragging ? "grabbing" : "grab",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        display: "block",
        background: "#0f172a",
    };

    return (
        <div
            className="image-modal-overlay image-modal-fullscreen"
            onClick={onClose}
            tabIndex={-1}
        >
            <div
                ref={modalContentRef}
                className="image-modal-content image-modal-fullscreen-content"
                onClick={e => e.stopPropagation()}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
            >
                <button
                    className="image-modal-close"
                    onClick={onClose}
                    aria-label="Kapat"
                >
                    &#10005;
                </button>
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt || "Proje görseli"}
                    className="image-modal-img"
                    style={style}
                    onMouseDown={handleMouseDown}
                    draggable={false}
                />
            </div>
        </div>
    );
}