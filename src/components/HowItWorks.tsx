"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, ClipboardList, PackageSearch, Truck, MapPin, Home } from "lucide-react";

export default function HowItWorks() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const steps = [
    {
      num: "1",
      title: "01. Book",
      desc: "Share your move details online or by phone.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      num: "2",
      title: "02. Survey",
      desc: "Free pre-move survey & accurate quote.",
      icon: <ClipboardList className="h-6 w-6" />,
    },
    {
      num: "3",
      title: "03. Packing",
      desc: "Multi-layer professional packing.",
      icon: <PackageSearch className="h-6 w-6" />,
    },
    {
      num: "4",
      title: "04. Loading",
      desc: "Trained crew safely loads your shipment.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      num: "5",
      title: "05. Transportation",
      desc: "GPS-tracked door-to-door transit.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      num: "6",
      title: "06. Delivery",
      desc: "Unloading, unpacking & reassembly.",
      icon: <Home className="h-6 w-6" />,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Six simple steps to your new place
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 w-full max-w-3xl mx-auto h-[1300px] sm:h-[1000px] lg:h-[800px]">
          {/* SVG Snake Pathway */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M 15 8 C 50 8, 50 24.8, 85 24.8 C 50 24.8, 50 41.6, 15 41.6 C 50 41.6, 50 58.4, 85 58.4 C 50 58.4, 50 75.2, 15 75.2 C 50 75.2, 50 92, 85 92"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="1 1"
              className="text-primary/40"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Nodes & Cards */}
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            // Calculate Y positions (8, 24.8, 41.6, 58.4, 75.2, 92)
            const yPos = 8 + idx * 16.8;
            const xPos = isLeft ? 15 : 85;

            return (
              <div
                key={idx}
                className={`absolute w-full transition-all duration-1000 ease-out ${
                  isInView ? "opacity-100" : "opacity-0 translate-y-8"
                }`}
                style={{
                  top: `${yPos}%`,
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* The Circle */}
                <div
                  className="absolute z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft"
                  style={{ left: `${xPos}%` }}
                >
                  {step.icon}
                  <span className="absolute -bottom-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground shadow-sm">
                    {step.num}
                  </span>
                </div>

                {/* The Card */}
                <div
                  className={`absolute -translate-y-1/2 w-[65%] sm:w-[70%] card-soft p-4 sm:p-5 ${
                    isLeft ? "left-[25%] sm:left-[20%]" : "right-[25%] sm:right-[20%] text-right"
                  }`}
                >
                  <h3 className="text-base sm:text-lg font-bold text-primary">{step.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-foreground/70">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
