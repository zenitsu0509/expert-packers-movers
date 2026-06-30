"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: "How do you calculate the moving quote?",
      a: "Pricing depends on distance, volume, floor, packing material and any special items. After a free pre-move survey (in-person or video), you get a final, all-inclusive quote — no surprises.",
    },
    {
      q: "Is my shipment insured?",
      a: "Yes. Every move includes transit insurance, with comprehensive cover available on Standard and Premium plans.",
    },
    {
      q: "Do you provide packing materials?",
      a: "Absolutely. We bring 5-layer protective packing — bubble wrap, corrugated sheets, wooden crates for fragile items — included in all plans.",
    },
    {
      q: "Can I track my shipment?",
      a: "Yes — every truck has live GPS. You get a tracking link from pickup until delivery, plus updates from your dedicated move manager.",
    },
    {
      q: "Do you move vehicles?",
      a: "Yes — cars and two-wheelers in enclosed, GPS-tracked carriers across India.",
    },
    {
      q: "What cities do you serve?",
      a: "We operate door-to-door across all major Indian cities and offer international moves with full customs handling.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Questions, answered
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <ul className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <li
                key={idx}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-primary">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth collapse container */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <p className="px-5 pb-5 text-sm text-foreground/75 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
