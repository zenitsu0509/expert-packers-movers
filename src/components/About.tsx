"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  suffix: string;
}

function CountUp({ value, suffix }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // 1.8s
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * value);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 5000, suffix: "+", label: "Happy Customers" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Trained Employees" },
    { value: 100, suffix: "%", label: "Safe Delivery" },
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-surface py-24 overflow-hidden">
      <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Graphic Illustration */}
        <div
          className={`relative transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-card">
            <svg viewBox="0 0 500 360" className="h-auto w-full rounded-2xl">
              <defs>
                <linearGradient id="aboutBg" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0B3C6D" />
                  <stop offset="100%" stopColor="#1e5a9e" />
                </linearGradient>
              </defs>
              <rect width="500" height="360" fill="url(#aboutBg)" />

              {/* Warehouse/Building */}
              <rect x="60" y="160" width="380" height="160" fill="#f5f7fb" />
              <polygon points="60,160 250,80 440,160" fill="#FF7A00" />

              {/* Bay Doors */}
              <rect x="100" y="200" width="80" height="120" fill="#0B3C6D" />
              <rect x="200" y="200" width="80" height="120" fill="#0B3C6D" />
              <rect x="300" y="200" width="80" height="120" fill="#0B3C6D" />

              {/* Moving Boxes Graphic */}
              <g fill="#caa676" stroke="#7a5a30" strokeWidth="1">
                <rect x="80" y="280" width="40" height="40" />
                <rect x="120" y="290" width="35" height="30" />
                <rect x="380" y="280" width="40" height="40" />
              </g>
            </svg>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-secondary p-5 text-secondary-foreground shadow-glow md:block">
            <p className="text-3xl font-extrabold leading-none">15+</p>
            <p className="text-xs font-semibold uppercase tracking-widest">Years on the road</p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div
          className={`transition-all duration-1000 ease-out delay-100 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            About Expert Movers
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Moving families, offices and businesses across India — safely.
          </h2>
          <p className="mt-5 text-foreground/75">
            Since 2009, Expert Packers &amp; Movers has delivered over 5,000 successful relocations with zero compromise
            on safety. From single-room apartments to multi-floor offices and vehicles, our trained crews, owned fleet,
            GPS tracking, and full transit insurance keep your belongings in expert hands — end to end.
          </p>

          {/* Stats Grid */}
          <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                <dt className="text-2xl font-extrabold text-primary md:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
