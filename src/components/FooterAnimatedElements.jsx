import React from "react";

const SideProfileBirdSVG = ({ className = "" }) => (
  <svg viewBox="-30 -30 160 160" className={`w-full h-full fill-current overflow-visible ${className}`}>
    {/* Sayap Belakang */}
    <path
      className="animate-wing-back opacity-60"
      d="M 50,48 Q 45,20 65,10 Q 75,30 60,48 Z"
    />
    
    {/* Badan & Ekor Burung */}
    <path
      d="M 15,55 C 30,58 50,55 75,45 C 85,41 90,42 95,47 C 90,52 80,60 65,65 C 40,70 20,60 15,55 Z"
    />
    
    {/* Paruh / Kepala */}
    <circle cx="85" cy="45" r="3.5" />

    {/* Sayap Depan */}
    <path
      className="animate-wing-front"
      d="M 50,50 Q 35,15 60,5 Q 80,25 65,50 Z"
    />
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
  /* Container ditaruh khusus di area kanan kosong footer (mulai 42% lebar layar sampai paling kanan) */
  <div className="absolute top-2 right-0 left-[42%] h-24 pointer-events-none z-10 overflow-hidden">
    <div
      className="absolute top-2 right-0 w-10 h-10 text-slate-500/80 animate-fly-rtl"
      style={{ "--duration": "12s", "--delay": "0s" }}
    >
      <SideProfileBirdSVG />
    </div>
    <div
      className="absolute top-10 right-0 w-8 h-8 text-slate-400/60 animate-fly-rtl"
      style={{ "--duration": "16s", "--delay": "-4s" }}
    >
      <SideProfileBirdSVG />
    </div>
    <div
      className="absolute top-5 left-0 w-9 h-9 text-slate-500/70 animate-fly-ltr"
      style={{ "--duration": "14s", "--delay": "-2s" }}
    >
      <SideProfileBirdSVG />
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