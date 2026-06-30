"use client";

import { useEffect, useRef, useState } from "react";
import {
  Home,
  Building2,
  Car,
  Bike,
  Package,
  Truck,
  Warehouse,
  Plane,
  MapPin,
  ShieldCheck,
  Wallet,
  Users,
  PackageCheck,
  Headphones,
  DoorOpen,
} from "lucide-react";

export default function Services() {
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

  const services = [
    {
      title: "House Shifting",
      desc: "Door-to-door home relocation with expert packing.",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Office Relocation",
      desc: "Plan, pack, and move offices with zero downtime.",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Car Transport",
      desc: "Enclosed carriers and GPS-tracked vehicle moves.",
      icon: <Car className="h-6 w-6" />,
    },
    {
      title: "Bike Transport",
      desc: "Custom crating and insured two-wheeler shipping.",
      icon: <Bike className="h-6 w-6" />,
    },
    {
      title: "Packing Services",
      desc: "Premium multi-layer packing for fragile items.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "Loading & Unloading",
      desc: "Trained crew with lifting equipment included.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "Warehousing",
      desc: "Short & long-term secure storage facilities.",
      icon: <Warehouse className="h-6 w-6" />,
    },
    {
      title: "International Moving",
      desc: "Custom-cleared global door-to-door shipping.",
      icon: <Plane className="h-6 w-6" />,
    },
  ];

  const values = [
    {
      title: "Live GPS Tracking",
      desc: "Track every shipment from pickup to delivery.",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      title: "Full Transit Insurance",
      desc: "Comprehensive cover on every move.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges, ever.",
      icon: <Wallet className="h-5 w-5" />,
    },
    {
      title: "Professional Staff",
      desc: "Background-verified, trained crew.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Premium Packing",
      desc: "5-layer protection on fragile items.",
      icon: <PackageCheck className="h-5 w-5" />,
    },
    {
      title: "24×7 Support",
      desc: "Real humans, any hour.",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      title: "Door-to-Door",
      desc: "We handle every step, end to end.",
      icon: <DoorOpen className="h-5 w-5" />,
    },
  ];

  return (
    <div ref={sectionRef} className="w-full">
      {/* 1. Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              What we move
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
              End-to-end relocation services
            </h2>
            <p className="mt-4 text-foreground/70">
              From single items to entire homes and offices — one expert team handles it all.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`card-soft group relative overflow-hidden p-6 transition-all duration-750 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {/* Glow Overlay */}
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{service.desc}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="bg-surface py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
              Built for safe, on-time deliveries
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`card-soft flex items-start gap-4 p-5 transition-all duration-500 ease-out ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary">{val.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
