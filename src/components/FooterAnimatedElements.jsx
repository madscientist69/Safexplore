import React from "react";

const SideProfileBirdSVG = ({ className = "" }) => (
  <svg viewBox="-30 -30 160 160" className={`w-full h-full fill-current overflow-visible ${className}`}>
    <path
      className="animate-wing-back opacity-60"
      d="M 50,48 Q 45,20 65,10 Q 75,30 60,48 Z"
    />
    <path
      d="M 15,55 C 30,58 50,55 75,45 C 85,41 90,42 95,47 C 90,52 80,60 65,65 C 40,70 20,60 15,55 Z"
    />
    <circle cx="85" cy="45" r="3.5" />
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
  /* Full width container di margin atas kosong */
  <div className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10 overflow-hidden">
    <div
      className="absolute top-2 w-8 h-8 text-slate-600/70 animate-fly-rtl"
      style={{ "--duration": "14s", "--delay": "0s" }}
    >
      <SideProfileBirdSVG />
    </div>

    <div
      className="absolute top-4 w-7 h-7 text-slate-500/60 animate-fly-ltr"
      style={{ "--duration": "18s", "--delay": "-6s" }}
    >
      <SideProfileBirdSVG />
    </div>

    <div
      className="absolute top-1 w-6 h-6 text-slate-400/50 animate-fly-rtl"
      style={{ "--duration": "22s", "--delay": "-11s" }}
    >
      <SideProfileBirdSVG />
    </div>
  </div>
);

export const GrowingCubesBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute left-3 sm:left-6 bottom-3 flex items-end gap-2">
      <div className="w-8 h-8 sm:w-12 sm:h-12 animate-grow-cube drop-shadow-md" style={{ "--duration": "3.5s", "--delay": "0s" }}>
        <IsometricCubeSVG />
      </div>
      <div className="w-6 h-6 sm:w-9 sm:h-9 animate-grow-cube drop-shadow-md hidden sm:block" style={{ "--duration": "4s", "--delay": "-1.5s" }}>
        <IsometricCubeSVG />
      </div>
    </div>
    <div className="absolute right-3 sm:right-6 bottom-3 flex items-end gap-2">
      <div className="w-6 h-6 sm:w-9 sm:h-9 animate-grow-cube drop-shadow-md hidden sm:block" style={{ "--duration": "4.2s", "--delay": "-0.8s" }}>
        <IsometricCubeSVG />
      </div>
      <div className="w-8 h-8 sm:w-12 sm:h-12 animate-grow-cube drop-shadow-md" style={{ "--duration": "3.8s", "--delay": "-2s" }}>
        <IsometricCubeSVG />
      </div>
    </div>
  </div>
);