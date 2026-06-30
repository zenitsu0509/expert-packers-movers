"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone, Award, Users, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-20 flex flex-col justify-between">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[oklch(86%_0.07_235)] via-[oklch(92%_0.04_230)] to-[oklch(96%_0.02_220)]" />

      {/* Sun Blur */}
      <div className="absolute right-[12%] top-[10%] -z-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,_#fff5c2_0%,_#ffd97a_40%,_transparent_70%)] blur-md" />

      {/* Floating Clouds */}
      <div className="absolute inset-x-0 top-0 -z-20 h-1/2 pointer-events-none">
        <div className="absolute cloud-drift-1" style={{ top: "12%", opacity: 0.95 }}>
          <svg width="110" height="66" viewBox="0 0 100 60" aria-hidden="true" fill="#ffffff">
            <ellipse cx="30" cy="40" rx="22" ry="14" />
            <ellipse cx="55" cy="34" rx="26" ry="18" />
            <ellipse cx="78" cy="42" rx="18" ry="12" />
          </svg>
        </div>
        <div className="absolute cloud-drift-2" style={{ top: "22%", opacity: 0.8 }}>
          <svg width="70" height="42" viewBox="0 0 100 60" aria-hidden="true" fill="#ffffff">
            <ellipse cx="30" cy="40" rx="22" ry="14" />
            <ellipse cx="55" cy="34" rx="26" ry="18" />
            <ellipse cx="78" cy="42" rx="18" ry="12" />
          </svg>
        </div>
        <div className="absolute cloud-drift-3" style={{ top: "8%", opacity: 0.85 }}>
          <svg width="140" height="84" viewBox="0 0 100 60" aria-hidden="true" fill="#ffffff">
            <ellipse cx="30" cy="40" rx="22" ry="14" />
            <ellipse cx="55" cy="34" rx="26" ry="18" />
            <ellipse cx="78" cy="42" rx="18" ry="12" />
          </svg>
        </div>
        <div className="absolute cloud-drift-4" style={{ top: "30%", opacity: 0.7 }}>
          <svg width="60" height="36" viewBox="0 0 100 60" aria-hidden="true" fill="#ffffff">
            <ellipse cx="30" cy="40" rx="22" ry="14" />
            <ellipse cx="55" cy="34" rx="26" ry="18" />
            <ellipse cx="78" cy="42" rx="18" ry="12" />
          </svg>
        </div>
        <div className="absolute cloud-drift-5" style={{ top: "18%", opacity: 0.75 }}>
          <svg width="90" height="54" viewBox="0 0 100 60" aria-hidden="true" fill="#ffffff">
            <ellipse cx="30" cy="40" rx="22" ry="14" />
            <ellipse cx="55" cy="34" rx="26" ry="18" />
            <ellipse cx="78" cy="42" rx="18" ry="12" />
          </svg>
        </div>
      </div>

      {/* SVG Mountain Ridges */}
      <svg
        className="absolute inset-x-0 bottom-[28%] -z-20 w-full h-[120px]"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,180 L160,90 L260,150 L380,60 L520,170 L640,100 L780,160 L920,70 L1080,150 L1220,90 L1440,170 L1440,220 L0,220 Z"
          fill="#94a8c4"
          opacity="0.55"
        />
        <path
          d="M0,200 L120,140 L240,180 L360,120 L500,190 L640,150 L800,200 L960,130 L1120,190 L1280,150 L1440,200 L1440,220 L0,220 Z"
          fill="#7b91b0"
          opacity="0.75"
        />
      </svg>

      {/* SVG Skyline Silhouette & Windows */}
      <svg
        className="absolute inset-x-0 bottom-[22%] -z-10 w-full h-[100px]"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="#0B3C6D" opacity="0.85">
          <rect x="40" y="60" width="60" height="80" />
          <rect x="110" y="40" width="40" height="100" />
          <rect x="160" y="70" width="70" height="70" />
          <rect x="240" y="20" width="30" height="120" />
          <rect x="280" y="50" width="55" height="90" />
          <rect x="345" y="35" width="45" height="105" />
          <rect x="400" y="65" width="80" height="75" />
          <rect x="490" y="45" width="35" height="95" />
          <rect x="540" y="25" width="55" height="115" />
          <rect x="610" y="60" width="65" height="80" />
          <rect x="690" y="40" width="40" height="100" />
          <rect x="740" y="55" width="70" height="85" />
          <rect x="820" y="30" width="35" height="110" />
          <rect x="865" y="55" width="60" height="85" />
          <rect x="935" y="40" width="45" height="100" />
          <rect x="990" y="65" width="75" height="75" />
          <rect x="1075" y="35" width="40" height="105" />
          <rect x="1125" y="55" width="60" height="85" />
          <rect x="1195" y="25" width="35" height="115" />
          <rect x="1240" y="50" width="70" height="90" />
          <rect x="1320" y="65" width="55" height="75" />
          <rect x="1385" y="40" width="40" height="100" />
        </g>
        <g fill="#FF7A00" opacity="0.7">
          <rect x="50" y="80" width="3" height="3" />
          <rect x="67" y="92" width="3" height="3" />
          <rect x="84" y="104" width="3" height="3" />
          <rect x="101" y="116" width="3" height="3" />
          <rect x="118" y="80" width="3" height="3" />
          <rect x="135" y="92" width="3" height="3" />
          <rect x="152" y="104" width="3" height="3" />
          <rect x="169" y="116" width="3" height="3" />
          <rect x="186" y="80" width="3" height="3" />
          <rect x="203" y="92" width="3" height="3" />
          <rect x="220" y="104" width="3" height="3" />
          <rect x="237" y="116" width="3" height="3" />
          <rect x="254" y="80" width="3" height="3" />
          <rect x="271" y="92" width="3" height="3" />
          <rect x="288" y="104" width="3" height="3" />
          <rect x="305" y="116" width="3" height="3" />
          <rect x="322" y="80" width="3" height="3" />
          <rect x="339" y="92" width="3" height="3" />
          <rect x="356" y="104" width="3" height="3" />
          <rect x="373" y="116" width="3" height="3" />
          <rect x="390" y="80" width="3" height="3" />
          <rect x="407" y="92" width="3" height="3" />
          <rect x="424" y="104" width="3" height="3" />
          <rect x="441" y="116" width="3" height="3" />
          <rect x="458" y="80" width="3" height="3" />
          <rect x="475" y="92" width="3" height="3" />
          <rect x="492" y="104" width="3" height="3" />
          <rect x="509" y="116" width="3" height="3" />
          <rect x="526" y="80" width="3" height="3" />
          <rect x="543" y="92" width="3" height="3" />
          <rect x="560" y="104" width="3" height="3" />
          <rect x="577" y="116" width="3" height="3" />
          <rect x="594" y="80" width="3" height="3" />
          <rect x="611" y="92" width="3" height="3" />
          <rect x="628" y="104" width="3" height="3" />
          <rect x="645" y="116" width="3" height="3" />
          <rect x="662" y="80" width="3" height="3" />
          <rect x="679" y="92" width="3" height="3" />
          <rect x="696" y="104" width="3" height="3" />
          <rect x="713" y="116" width="3" height="3" />
          <rect x="730" y="80" width="3" height="3" />
          <rect x="747" y="92" width="3" height="3" />
          <rect x="764" y="104" width="3" height="3" />
          <rect x="781" y="116" width="3" height="3" />
          <rect x="798" y="80" width="3" height="3" />
          <rect x="815" y="92" width="3" height="3" />
          <rect x="832" y="104" width="3" height="3" />
          <rect x="849" y="116" width="3" height="3" />
          <rect x="866" y="80" width="3" height="3" />
          <rect x="883" y="92" width="3" height="3" />
          <rect x="900" y="104" width="3" height="3" />
          <rect x="917" y="116" width="3" height="3" />
          <rect x="934" y="80" width="3" height="3" />
          <rect x="951" y="92" width="3" height="3" />
          <rect x="968" y="104" width="3" height="3" />
          <rect x="985" y="116" width="3" height="3" />
          <rect x="1002" y="80" width="3" height="3" />
          <rect x="1019" y="92" width="3" height="3" />
          <rect x="1036" y="104" width="3" height="3" />
          <rect x="1053" y="116" width="3" height="3" />
          <rect x="1070" y="80" width="3" height="3" />
          <rect x="1087" y="92" width="3" height="3" />
          <rect x="1104" y="104" width="3" height="3" />
          <rect x="1121" y="116" width="3" height="3" />
          <rect x="1138" y="80" width="3" height="3" />
          <rect x="1155" y="92" width="3" height="3" />
          <rect x="1172" y="104" width="3" height="3" />
          <rect x="1189" y="116" width="3" height="3" />
          <rect x="1206" y="80" width="3" height="3" />
          <rect x="1223" y="92" width="3" height="3" />
          <rect x="1240" y="104" width="3" height="3" />
          <rect x="1257" y="116" width="3" height="3" />
          <rect x="1274" y="80" width="3" height="3" />
          <rect x="1291" y="92" width="3" height="3" />
          <rect x="1308" y="104" width="3" height="3" />
          <rect x="1325" y="116" width="3" height="3" />
          <rect x="1342" y="80" width="3" height="3" />
          <rect x="1359" y="92" width="3" height="3" />
          <rect x="1376" y="104" width="3" height="3" />
          <rect x="1393" y="116" width="3" height="3" />
        </g>
      </svg>

      {/* SVG Pine Trees */}
      <div className="absolute inset-x-0 bottom-[22%] -z-10 h-24 overflow-hidden pointer-events-none">
        <div className="flex gap-16 pl-10">
          {[...Array(12)].map((_, i) => {
            const colors = ["#2f7a3f", "#3a8a4a", "#266a35"];
            const color = colors[i % 3];
            return (
              <svg key={i} width="60" height="90" viewBox="0 0 60 90" aria-hidden="true" className="shrink-0">
                <rect x="26" y="55" width="8" height="30" fill="#5c3a1e" />
                <polygon points="30,5 8,55 52,55" fill={color} />
                <polygon points="30,20 12,60 48,60" fill={color} opacity="0.85" />
              </svg>
            );
          })}
        </div>
      </div>

      {/* Hero Content Column */}
      <div className="container mx-auto px-6 pt-10 pb-40 lg:pt-20 flex-grow flex items-center">
        <div className="max-w-3xl">
          {/* Booking badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            Now booking moves across India
          </span>

          {/* Heading */}
          <h1
            className="mt-5 text-4xl font-extrabold leading-[1.05] text-primary md:text-6xl lg:text-7xl transition-all duration-700 delay-100"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
            }}
          >
            India's Trusted{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Packers</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-secondary/40"></span>
            </span>{" "}
            &amp; Movers
          </h1>

          {/* Description */}
          <p
            className="mt-5 max-w-xl text-base text-foreground/75 md:text-lg transition-all duration-700 delay-200"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Safe, fast &amp; affordable relocation services — homes, offices, vehicles, and cargo handled by trained
            professionals with insurance and live GPS tracking.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <a href="#contact" className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition hover:bg-white"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          {/* Badges Grid */}
          <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { text: "15+ Years Experience", icon: <Award className="h-4 w-4 text-secondary" /> },
              { text: "5000+ Happy Customers", icon: <Users className="h-4 w-4 text-secondary" /> },
              { text: "24×7 Support", icon: <Clock className="h-4 w-4 text-secondary" /> },
              { text: "100% Safe Delivery", icon: <ShieldCheck className="h-4 w-4 text-secondary" /> },
            ].map((badge, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 rounded-xl glass px-3 py-2 text-xs font-semibold text-primary transition-all duration-500"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${400 + idx * 50}ms`,
                }}
              >
                {badge.icon}
                {badge.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Road Highway and Running Truck at the bottom */}
      <div className="absolute inset-x-0 bottom-0 -z-0">
        {/* Grass Verge */}
        <div className="h-10 bg-gradient-to-b from-[#8bc28a] to-[#5fa063]" />

        {/* Asphalt Road */}
        <div className="relative h-32 bg-gradient-to-b from-[#2c2f36] to-[#1a1c20]">
          {/* Dashed White Lanes (Animated) */}
          <div className="road-lanes absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 opacity-90" />

          {/* Running Truck */}
          <div
            className="absolute bottom-6 left-0 w-[260px] md:w-[340px] lg:w-[400px]"
            style={{ transform: "translateX(15%)" }} // Position it on screen
          >
            <div className="relative animate-truck-bounce">
              <svg
                viewBox="0 0 360 160"
                className="w-full h-auto drop-shadow-[0_18px_18px_rgba(0,0,0,0.25)]"
                aria-hidden="true"
              >
                <ellipse cx="180" cy="148" rx="150" ry="6" fill="rgba(0,0,0,0.25)" />
                <defs>
                  <radialGradient id="hl-hero" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#fff8c2" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#ffe27a" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ffe27a" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="cabin-hero" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0B3C6D" />
                    <stop offset="100%" stopColor="#072847" />
                  </linearGradient>
                  <linearGradient id="box-hero" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e6ecf3" />
                  </linearGradient>
                  <linearGradient id="stripe-hero" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#FF7A00" />
                    <stop offset="100%" stopColor="#ff9a3c" />
                  </linearGradient>
                </defs>

                <ellipse
                  cx="332"
                  cy="108"
                  rx="46"
                  ry="14"
                  fill="url(#hl-hero)"
                  className="animate-headlight"
                />

                <rect
                  x="30"
                  y="40"
                  width="200"
                  height="86"
                  rx="6"
                  fill="url(#box-hero)"
                  stroke="#cdd6e0"
                />
                <rect x="40" y="50" width="180" height="66" rx="3" fill="#f4f7fb" />
                <rect x="30" y="76" width="200" height="14" fill="url(#stripe-hero)" />
                <text
                  x="130"
                  y="68"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="800"
                  fill="#0B3C6D"
                  fontFamily="Poppins, sans-serif"
                >
                  EXPERT MOVERS
                </text>
                <text
                  x="130"
                  y="108"
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="600"
                  fill="#0B3C6D"
                  fontFamily="Poppins, sans-serif"
                  opacity="0.7"
                >
                  SAFE • FAST • TRUSTED
                </text>

                <path
                  d="M230,126 L230,70 Q230,58 242,58 L286,58 L320,92 L320,126 Z"
                  fill="url(#cabin-hero)"
                />
                <path
                  d="M244,68 L286,68 L310,90 L244,90 Z"
                  fill="#a8d8ff"
                  opacity="0.95"
                />
                <path
                  d="M244,68 L286,68 L310,90 L244,90 Z"
                  fill="url(#cabin-hero)"
                  opacity="0.15"
                />

                <line x1="265" y1="92" x2="265" y2="120" stroke="#03192e" strokeWidth="1" />
                <rect x="258" y="100" width="6" height="2" fill="#FF7A00" />
                <rect x="318" y="116" width="10" height="10" fill="#0B3C6D" />
                <circle cx="328" cy="108" r="3.2" fill="#fff8c2" />

                {/* Wheels */}
                <g>
                  <circle cx="80" cy="128" r="16" fill="#0c0c0c" />
                  <circle cx="80" cy="128" r="11" fill="#2a2a2a" />
                  <g className="animate-wheel" style={{ transformOrigin: "80px 128px" }}>
                    <circle cx="80" cy="128" r="7" fill="#cfd6df" />
                    <rect x="79" y="121" width="2" height="14" fill="#7a8493" />
                    <rect x="73" y="127" width="14" height="2" fill="#7a8493" />
                  </g>
                </g>
                <g>
                  <circle cx="170" cy="128" r="16" fill="#0c0c0c" />
                  <circle cx="170" cy="128" r="11" fill="#2a2a2a" />
                  <g className="animate-wheel" style={{ transformOrigin: "170px 128px" }}>
                    <circle cx="170" cy="128" r="7" fill="#cfd6df" />
                    <rect x="169" y="121" width="2" height="14" fill="#7a8493" />
                    <rect x="163" y="127" width="14" height="2" fill="#7a8493" />
                  </g>
                </g>
                <g>
                  <circle cx="290" cy="128" r="16" fill="#0c0c0c" />
                  <circle cx="290" cy="128" r="11" fill="#2a2a2a" />
                  <g className="animate-wheel" style={{ transformOrigin: "290px 128px" }}>
                    <circle cx="290" cy="128" r="7" fill="#cfd6df" />
                    <rect x="289" y="121" width="2" height="14" fill="#7a8493" />
                    <rect x="283" y="127" width="14" height="2" fill="#7a8493" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
