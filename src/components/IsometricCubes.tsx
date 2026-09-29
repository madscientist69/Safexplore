"use client";

import React from "react";

interface IsometricCubesProps {
  className?: string;
  variant?: "left" | "right" | "stacked";
  colorMode?: "orange-blue" | "all-blue" | "leaf-green"; // Tambahkan leaf-green
}

export default function IsometricCubes({
  className = "",
  variant = "right",
  colorMode = "orange-blue",
}: IsometricCubesProps) {
  
  // Konfigurasi Warna Dinamis
  let strokeColor = "#F2692E"; // Default Orange
  let fillColor = "#064E7A";   // Default Dark Blue
  
  if (colorMode === "all-blue") {
    strokeColor = "#0ea5e9";
  } else if (colorMode === "leaf-green") {
    strokeColor = "#4ade80"; // Hijau Daun Cerah
    fillColor = "#064e3b";   // Hijau Gelap
  }

  const strokeWidth = "3";

  // Variant "left" 
  if (variant === "left") {
    return (
      <div className={`pointer-events-none select-none ${className}`}>
        <svg viewBox="0 0 220 220" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(85, 5)">
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          </g>
          <g transform="translate(35, 55)">
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          </g>
          <g transform="translate(85, 105)">
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // Variant "stacked" (Animasi Escalator Linear)
  if (variant === "stacked") {
    return (
      <div 
        className={`pointer-events-none select-none w-full h-full ${className}`}
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' 
        }}
      >
        <style>
          {`
            @keyframes escalator {
              0% { transform: translateY(0); }
              100% { transform: translateY(-70px); }
            }
            .anim-escalator {
              animation: escalator 2s linear infinite; 
            }
          `}
        </style>
        <svg
          viewBox="0 0 120 1400" 
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="anim-escalator">
            {Array.from({ length: 25 }).map((_, idx) => {
              const y = -70 + (idx * 70); 
              return (
                <g key={idx} transform={`translate(10, ${y})`}>
                  <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M0 28 L50 56 L50 84 L0 56 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M50 56 L100 28 L100 56 L50 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    );
  }

  // Variant "right"
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 220 220" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(35, 5)">
          <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
        </g>
        <g transform="translate(85, 55)">
          <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
        </g>
        <g transform="translate(35, 105)">
          <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}