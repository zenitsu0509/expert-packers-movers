"use client";

import { useState, useEffect } from "react";
import { Truck, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 py-3 shadow-soft backdrop-blur border-b border-border"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-extrabold text-primary">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
              <Truck className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base">Expert</span>
              <span className="block -mt-1 text-[10px] font-bold uppercase tracking-widest text-secondary">
                Packers &amp; Movers
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow md:inline-flex"
            >
              Get Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background lg:hidden text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-screen w-64 bg-background border-l border-border p-6 shadow-xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full justify-between pt-16">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-base font-semibold text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block rounded-xl bg-secondary px-5 py-3 text-base font-semibold text-secondary-foreground shadow-soft transition hover:bg-secondary/90"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
