"use client";

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    { title: "Apartment move — Mumbai", color: "#0B3C6D", h: 220 },
    { title: "Office relocation — Pune", color: "#FF7A00", h: 320 },
    { title: "Car transport — Delhi", color: "#1e5a9e", h: 260 },
    { title: "Warehouse storage", color: "#2c2f36", h: 200 },
    { title: "Premium packing crew", color: "#FF9A3C", h: 300 },
    { title: "Villa shifting — Bangalore", color: "#0B3C6D", h: 240 },
    { title: "Interstate fleet", color: "#1a1c20", h: 280 },
    { title: "Bike transport", color: "#FF7A00", h: 220 },
  ];

  return (
    <section ref={sectionRef} id="gallery" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            On the road with our crews
          </h2>
        </div>

        {/* Masonry Columns */}
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              type="button"
              className={`group mb-4 block w-full overflow-hidden rounded-2xl border border-border shadow-card cursor-pointer focus:outline-none transition-all duration-700 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
              }`}
              style={{
                height: `${item.h}px`,
                transitionDelay: `${idx * 75}ms`,
              }}
              aria-label={item.title}
            >
              <div
                className="relative h-full w-full transition-transform duration-500 group-hover:scale-110 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                }}
              >
                {/* Visual texture radial gradient */}
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none"
                  aria-hidden="true"
                />

                {/* Micro zoom icon indicator on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 bg-white/25 rounded-full p-2.5 backdrop-blur-sm">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>

                {/* Caption bar */}
                <span className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/40 px-3 py-1.5 text-left text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in-0 duration-300"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
            style={{
              background: `linear-gradient(135deg, ${items[selectedIdx].color}, ${items[selectedIdx].color}cc)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Radial glow background */}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Text Content */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Gallery Showcase
              </span>
              <p className="mt-1 text-2xl md:text-3xl font-extrabold text-white">
                {items[selectedIdx].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
