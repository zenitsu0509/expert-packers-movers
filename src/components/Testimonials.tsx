"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(false);

  const reviews = [
    {
      name: "Priya Sharma",
      city: "Mumbai → Bangalore",
      text: "Stress-free move from start to finish. Crew was punctual, professional and not a single scratch on our furniture.",
      initial: "P",
    },
    {
      name: "Rahul Verma",
      city: "Delhi NCR",
      text: "Best price among five quotes, with the best service. GPS tracking gave us total peace of mind.",
      initial: "R",
    },
    {
      name: "Anita Iyer",
      city: "Chennai → Hyderabad",
      text: "Their packing is on another level. Glassware, TV, art — everything arrived safe and on schedule.",
      initial: "A",
    },
    {
      name: "Mohammed Khan",
      city: "Pune",
      text: "Moved my 4 BHK office over a weekend with zero downtime. Highly recommended for businesses.",
      initial: "M",
    },
  ];

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleIndexChange((activeIdx + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIdx, reviews.length]);

  const handleIndexChange = (newIdx: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIdx(newIdx);
      setFade(false);
    }, 250); // half of transition time
  };

  return (
    <section id="testimonials" className="bg-surface py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Loved by 5,000+ families &amp; businesses
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
            <Quote className="h-10 w-10 text-secondary/40" />

            <blockquote
              className={`mt-4 transition-all duration-300 ease-in-out ${
                fade ? "opacity-0 translate-x-[20px]" : "opacity-100 translate-x-0"
              }`}
            >
              <p className="text-lg leading-relaxed text-foreground/90 md:text-xl italic">
                &quot;{reviews[activeIdx].text}&quot;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                {/* Avatar Icon */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground select-none">
                  {reviews[activeIdx].initial}
                </span>

                {/* Rating */}
                <div>
                  <p className="font-bold text-primary">{reviews[activeIdx].name}</p>
                  <p className="text-xs text-muted-foreground">{reviews[activeIdx].city}</p>
                  <div className="mt-1 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Dots Indicator Links */}
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleIndexChange(idx)}
                aria-label={`Show review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIdx ? "w-8 bg-secondary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
