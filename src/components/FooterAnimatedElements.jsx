import React from "react";

const BirdSVG = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`fill-current ${className}`}>
    <path d="M10,50 Q35,15 50,42 Q65,15 90,50 Q60,38 50,58 Q40,38 10,50 Z" />
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
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-2 right-0 w-8 h-8 text-gray-600/60 animate-fly-rtl" style={{ "--duration": "14s", "--delay": "0s" }}>
      <BirdSVG />
    </div>
    <div className="absolute top-8 right-0 w-6 h-6 text-gray-600/50 animate-fly-rtl" style={{ "--duration": "18s", "--delay": "-5s" }}>
      <BirdSVG />
    </div>
    <div className="absolute top-4 left-0 w-7 h-7 text-gray-600/60 animate-fly-ltr" style={{ "--duration": "16s", "--delay": "-2s" }}>
      <BirdSVG />
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