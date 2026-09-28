import React from "react";

// Komponen Burung Baru dengan Animasi Mengepak Sayap
const FlappingBirdSVG = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full fill-current">
    {/* Sayap Kiri */}
    <path
      className="animate-wing-left"
      d="M 32 34 C 20 18 8 16 2 24 C 12 28 22 32 32 34 Z"
    />
    {/* Sayap Kanan */}
    <path
      className="animate-wing-right"
      d="M 32 34 C 44 18 56 16 62 24 C 52 28 42 32 32 34 Z"
    />
    {/* Badan & Ekor Burung */}
    <path d="M 32 30 C 30 35 28 45 25 50 C 30 47 34 47 39 50 C 36 45 34 35 32 30 Z" />
  </svg>
);

const IsometricCubeSVG = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
    <polygon points="60,10 105,35 60,60 15,35" fill="#f15a24" opacity="0.9" />
    <polygon points="15,35 60,60 60,110 15,85" fill="#0b3c61" opacity="0.95" />
    <polygon points="60,60 105,35 105,85 60,110" fill="#0284c7" opacity="0.85" />
  </svg>
);

export const FlyingBirdsBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Burung 1 (Terbang Kanan ke Kiri) */}
    <div
      className="absolute top-1 right-0 w-8 h-8 text-gray-700/60 animate-fly-rtl"
      style={{ "--duration": "14s", "--delay": "0s" }}
    >
      <FlappingBirdSVG />
    </div>

    {/* Burung 2 (Terbang Kanan ke Kiri, Lebih Kecil) */}
    <div
      className="absolute top-7 right-0 w-6 h-6 text-gray-600/50 animate-fly-rtl"
      style={{ "--duration": "18s", "--delay": "-6s" }}
    >
      <FlappingBirdSVG />
    </div>

    {/* Burung 3 (Terbang Kiri ke Kanan) */}
    <div
      className="absolute top-3 left-0 w-7 h-7 text-gray-700/60 animate-fly-ltr"
      style={{ "--duration": "16s", "--delay": "-3s" }}
    >
      <FlappingBirdSVG />
    </div>
  </div>
);

export const GrowingCubesBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute left-2 sm:left-6 bottom-4 flex items-end gap-2">
      <div className="w-10 h-10 sm:w-16 sm:h-16 animate-grow-cube drop-shadow-md" style={{ "--duration": "3.5s", "--delay": "0s" }}>
        <IsometricCubeSVG />
      </div>
      <div className="w-7 h-7 sm:w-11 sm:h-11 animate-grow-cube drop-shadow-md hidden sm:block" style={{ "--duration": "4s", "--delay": "-1.5s" }}>
        <IsometricCubeSVG />
      </div>
    </div>
    <div className="absolute right-2 sm:right-6 bottom-4 flex items-end gap-2">
      <div className="w-7 h-7 sm:w-11 sm:h-11 animate-grow-cube drop-shadow-md hidden sm:block" style={{ "--duration": "4.2s", "--delay": "-0.8s" }}>
        <IsometricCubeSVG />
      </div>
      <div className="w-10 h-10 sm:w-16 sm:h-16 animate-grow-cube drop-shadow-md" style={{ "--duration": "3.8s", "--delay": "-2s" }}>
        <IsometricCubeSVG />
      </div>
    </div>
  </div>
);