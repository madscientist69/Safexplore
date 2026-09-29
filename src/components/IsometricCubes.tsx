"use client";

import React from "react";

interface IsometricCubesProps {
  className?: string;
  variant?: "left" | "right" | "stacked";
  colorMode?: "orange-blue" | "all-blue";
}

export default function IsometricCubes({
  className = "",
  variant = "right",
  colorMode = "orange-blue",
}: IsometricCubesProps) {
  // Fill: #064E7A
  // Border: 3px solid #F2692E / #0ea5e9
  const strokeColor = colorMode === "orange-blue" ? "#F2692E" : "#0ea5e9";
  const fillColor = "#064E7A";
  const strokeWidth = "3";

  // Variant "left" (3 Stepped Cubes - Kiri)
  if (variant === "left") {
    return (
      <div className={`pointer-events-none select-none ${className}`}>
        <svg viewBox="0 0 220 220" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back/Top Cube */}
          <g transform="translate(85, 5)">
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          </g>
          {/* Middle/Left Cube */}
          <g transform="translate(35, 55)">
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          </g>
          {/* Front/Right Cube */}
          <g transform="translate(85, 105)">
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // Variant "stacked" (Animasi Tangga dari Bawah ke Atas)
  if (variant === "stacked") {
    return (
      <div className={`pointer-events-none select-none ${className}`}>
        <style>
          {`
            @keyframes buildStairs {
              0% { opacity: 0; transform: translateY(20px); }
              15%, 85% { opacity: 1; transform: translateY(0); }
              100% { opacity: 0; transform: translateY(-15px); }
            }
            .anim-stair-cube {
              animation: buildStairs 4s infinite ease-out forwards;
              opacity: 0; /* Awal tersembunyi */
            }
          `}
        </style>
        <svg
          viewBox="0 0 120 310"
          className="w-full h-auto drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Koordinat Y dari Atas (10) ke Bawah (220) */}
          {[10, 80, 150, 220].map((y, idx) => {
            // Logika delay: (3 - idx) membuat index ke-3 (paling bawah, y=220) muncul di detik 0s.
            // Index ke-0 (paling atas, y=10) akan muncul paling terakhir (delay terbesar).
            const delay = (3 - idx) * 0.4;
            
            return (
              <g key={idx} transform={`translate(10, ${y})`}>
                <g className="anim-stair-cube" style={{ animationDelay: `${delay}s` }}>
                  <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M0 28 L50 56 L50 84 L0 56 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M50 56 L100 28 L100 56 L50 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  // Variant "right" (3 Stepped Cubes - Kanan)
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 220 220" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back/Top Cube */}
        <g transform="translate(35, 5)">
          <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
        </g>
        {/* Middle/Right Cube */}
        <g transform="translate(85, 55)">
          <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
        </g>
        {/* Front/Left Cube */}
        <g transform="translate(35, 105)">
          <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}