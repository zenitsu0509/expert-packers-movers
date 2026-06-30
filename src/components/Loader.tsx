"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Fade out after 1.5 seconds, unmount after 2 seconds
    const fadeTimeout = setTimeout(() => setFade(true), 1500);
    const removeTimeout = setTimeout(() => setVisible(false), 2000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-64">
        <div style={{ transform: "translateX(-120px)" }}>
          <div className="animate-truck-bounce">
            <svg
              viewBox="0 0 360 160"
              className="w-full h-auto drop-shadow-[0_18px_18px_rgba(0,0,0,0.25)]"
              aria-hidden="true"
            >
              <ellipse
                cx="180"
                cy="148"
                rx="150"
                ry="6"
                fill="rgba(0,0,0,0.25)"
              />
              <defs>
                <radialGradient id="hl-loader" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#fff8c2" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#ffe27a" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffe27a" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="cabin-loader" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0B3C6D" />
                  <stop offset="100%" stopColor="#072847" />
                </linearGradient>
                <linearGradient id="box-loader" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e6ecf3" />
                </linearGradient>
                <linearGradient id="stripe-loader" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#ff9a3c" />
                </linearGradient>
              </defs>

              {/* Headlight cone */}
              <ellipse
                cx="332"
                cy="108"
                rx="46"
                ry="14"
                fill="url(#hl-loader)"
                className="animate-headlight"
              />

              {/* Cargo Box */}
              <rect
                x="30"
                y="40"
                width="200"
                height="86"
                rx="6"
                fill="url(#box-loader)"
                stroke="#cdd6e0"
              />
              <rect x="40" y="50" width="180" height="66" rx="3" fill="#f4f7fb" />
              <rect x="30" y="76" width="200" height="14" fill="url(#stripe-loader)" />
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

              {/* Cabin */}
              <path
                d="M230,126 L230,70 Q230,58 242,58 L286,58 L320,92 L320,126 Z"
                fill="url(#cabin-loader)"
              />
              {/* Window */}
              <path
                d="M244,68 L286,68 L310,90 L244,90 Z"
                fill="#a8d8ff"
                opacity="0.95"
              />
              <path
                d="M244,68 L286,68 L310,90 L244,90 Z"
                fill="url(#cabin-loader)"
                opacity="0.15"
              />

              <line x1="265" y1="92" x2="265" y2="120" stroke="#03192e" strokeWidth="1" />
              <rect x="258" y="100" width="6" height="2" fill="#FF7A00" />
              <rect x="318" y="116" width="10" height="10" fill="#0B3C6D" />
              <circle cx="328" cy="108" r="3.2" fill="#fff8c2" />

              {/* Wheel 1 */}
              <g>
                <circle cx="80" cy="128" r="16" fill="#0c0c0c" />
                <circle cx="80" cy="128" r="11" fill="#2a2a2a" />
                <g className="animate-wheel" style={{ transformOrigin: "80px 128px" }}>
                  <circle cx="80" cy="128" r="7" fill="#cfd6df" />
                  <rect x="79" y="121" width="2" height="14" fill="#7a8493" />
                  <rect x="73" y="127" width="14" height="2" fill="#7a8493" />
                </g>
              </g>

              {/* Wheel 2 */}
              <g>
                <circle cx="170" cy="128" r="16" fill="#0c0c0c" />
                <circle cx="170" cy="128" r="11" fill="#2a2a2a" />
                <g className="animate-wheel" style={{ transformOrigin: "170px 128px" }}>
                  <circle cx="170" cy="128" r="7" fill="#cfd6df" />
                  <rect x="169" y="121" width="2" height="14" fill="#7a8493" />
                  <rect x="163" y="127" width="14" height="2" fill="#7a8493" />
                </g>
              </g>

              {/* Wheel 3 */}
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
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary animate-pulse">
        Expert Packers &amp; Movers
      </p>
    </div>
  );
}
