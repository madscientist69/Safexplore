"use client";

import React, { useEffect, useState } from "react";

export const FlyingBirdsBackground = () => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    // Burung hanya terbang di ruang aman (atas banget atau bawah banget)
    const generateSafeTopPosition = (index) => {
      if (index % 2 === 0) {
        return `${2 + (index * 3) % 10}%`; // Zona Atas (2% - 12%)
      } else {
        return `${82 + (index * 3) % 10}%`; // Zona Bawah (82% - 92%)
      }
    };

    const birdList = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      top: generateSafeTopPosition(i),
      duration: `${14 + i * 3}s`,
      delay: `${i * 2.5}s`,
      size: `${16 + (i % 3) * 4}px`,
    }));

    setBirds(birdList);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="absolute text-slate-500/70 animate-fly flex items-center justify-center"
          style={{
            top: bird.top,
            left: "-10vw",
            width: bird.size,
            height: bird.size,
            animationDuration: bird.duration,
            animationDelay: bird.delay,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M2 15c0 0 4-4 10-4s10 4 10 4-4-2-10-2-10 2-10 2z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export const GrowingCubesBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute left-4 bottom-2 w-10 h-10 text-sky-400/80 animate-grow-cube">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#7dd3fc" stroke="#0284c7" strokeWidth="4" />
          <path d="M50 10 L50 90 M50 50 L90 30 M50 50 L10 30" stroke="#0284c7" strokeWidth="4" />
        </svg>
      </div>

      <div className="absolute right-6 bottom-3 flex gap-2 items-end">
        <div className="w-8 h-8 text-sky-400/80 animate-grow-cube" style={{ animationDelay: "1s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#7dd3fc" stroke="#0284c7" strokeWidth="4" />
            <path d="M50 10 L50 90 M50 50 L90 30 M50 50 L10 30" stroke="#0284c7" strokeWidth="4" />
          </svg>
        </div>
        <div className="w-12 h-12 text-sky-500/90 animate-grow-cube" style={{ animationDelay: "0.5s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#38bdf8" stroke="#0369a1" strokeWidth="4" />
            <path d="M50 10 L50 90 M50 50 L90 30 M50 50 L10 30" stroke="#0369a1" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
};