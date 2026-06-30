"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
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

  const plans = [
    {
      title: "Basic",
      sub: "1 BHK • within city",
      price: "₹6,999",
      features: [
        "Standard packing",
        "Loading & unloading",
        "Local transport",
        "Basic insurance",
      ],
      popular: false,
      ctaClass:
        "border border-primary/20 bg-background text-primary hover:bg-primary hover:text-primary-foreground",
    },
    {
      title: "Standard",
      sub: "2-3 BHK • intercity",
      price: "₹14,999",
      features: [
        "Premium 5-layer packing",
        "Loading + unloading + reassembly",
        "GPS tracking",
        "Full transit insurance",
        "Priority support",
      ],
      popular: true,
      ctaClass: "btn-accent",
    },
    {
      title: "Premium",
      sub: "Villa • office • luxury",
      price: "₹29,999",
      features: [
        "White-glove packing",
        "Dedicated move manager",
        "Climate-controlled transport",
        "Comprehensive insurance",
        "Unpacking + arrangement",
      ],
      popular: false,
      ctaClass:
        "border border-primary/20 bg-background text-primary hover:bg-primary hover:text-primary-foreground",
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="bg-surface py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Honest pricing for every move
          </h2>
          <p className="mt-4 text-foreground/70">
            Starting prices. Get an exact quote in under 2 minutes.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`card-soft relative flex flex-col p-7 transition-all duration-700 ease-out ${
                plan.popular
                  ? "border-secondary/60 shadow-glow lg:-translate-y-3"
                  : ""
              } ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}

              <h3 className="text-lg font-bold text-primary">{plan.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {plan.sub}
              </p>
              <p className="mt-4 text-4xl font-extrabold text-primary">
                {plan.price}
                <span className="ml-1 text-sm font-medium text-muted-foreground">
                  / starting
                </span>
              </p>

              <ul className="mt-6 space-y-3 text-sm flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plan.ctaClass}`}
              >
                Get this plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
