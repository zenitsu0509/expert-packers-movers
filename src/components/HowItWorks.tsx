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
        <div className="relative mt-14">
          {/* Vertical central line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

          <ul className="grid gap-8 lg:gap-12">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <li
                  key={idx}
                  className={`grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] transition-all duration-700 ease-out ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Left Column (Left Card or empty desktop placeholder) */}
                  {isLeft ? (
                    <div className="card-soft p-5 lg:text-right">
                      <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                      <p className="mt-1 text-sm text-foreground/70">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}

                  {/* Middle Column (Icon Circle) */}
                  <div className="order-1 mx-auto lg:order-2">
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                      {step.icon}
                      <span className="absolute -bottom-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Right Column (Right Card or empty desktop placeholder) */}
                  {!isLeft ? (
                    <div className="card-soft p-5">
                      <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                      <p className="mt-1 text-sm text-foreground/70">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
