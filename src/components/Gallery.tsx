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
    { title: "Apartment move — Mumbai", image: "/box1.jpg", h: 220 },
    { title: "Office relocation — Pune", image: "/box2.jpg", h: 320 },
    { title: "Car transport — Delhi", image: "/box3.jpg", h: 260 },
    { title: "Warehouse storage", image: "/box4.jpg", h: 200 },
    { title: "Premium packing crew", image: "/box5.avif", h: 300 },
    { title: "Villa shifting — Bangalore", image: "/box6.jpg", h: 240 },
    { title: "Interstate fleet", image: "/box7.avif", h: 280 },
    { title: "Bike transport", image: "/generated_moving_box.png", h: 220 },
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
                className="relative h-full w-full transition-transform duration-500 group-hover:scale-110 flex items-center justify-center bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

                {/* Micro zoom icon indicator on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 bg-black/50 rounded-full p-2.5 backdrop-blur-sm">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in-0 duration-300"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[selectedIdx].image}
              alt={items[selectedIdx].title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute right-6 top-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition cursor-pointer border border-white/20 shadow-xl"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
