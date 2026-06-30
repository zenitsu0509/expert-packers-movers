import { Truck, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "#",
      label: "Facebook",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      href: "#",
      label: "Instagram",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      href: "#",
      label: "Twitter",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        {/* Main Footer Content */}
        <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-4">
          {/* Logo & Pitch */}
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Truck className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                Expert
                <span className="block text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Packers &amp; Movers
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
              India&apos;s trusted relocation partner since 2009 — safe, fast and affordable door-to-door moving services.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-secondary hover:text-secondary-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Quick links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">About</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-secondary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">House Shifting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Office Relocation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Car Transport</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Bike Transport</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Warehousing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">International Moving</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>+91 99999 99999</li>
              <li>hello@expertmovers.in</li>
              <li>
                Plot 21, Logistics Park,
                <br />
                Mumbai, MH 400001
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-white/10">
          <p className="container mx-auto px-6 py-5 text-center text-xs text-primary-foreground/70">
            © 2026 Expert Packers &amp; Movers. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:-translate-y-0.5 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919999999999"
          aria-label="Call"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-glow transition hover:-translate-y-0.5 hover:scale-105"
        >
          <Phone className="h-5 w-5 fill-current" />
        </a>
      </div>
    </>
  );
}
