"use client";

import React from "react";

export const FlyingBirdsBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Burung 1 (Kanan ke Kiri) - Melintas di ruang sangat atas, jauh dari teks */}
      <div className="absolute top-[8%] w-[40px] h-[40px] text-slate-500/60 animate-fly-rtl-1">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M2 15c0 0 4-4 10-4s10 4 10 4-4-2-10-2-10 2-10 2z" />
        </svg>
      </div>

      {/* Burung 2 (Kiri ke Kanan) - Melintas di ruang atas */}
      <div className="absolute top-[15%] w-[32px] h-[32px] text-slate-400/50 animate-fly-ltr-1">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M2 15c0 0 4-4 10-4s10 4 10 4-4-2-10-2-10 2-10 2z" />
        </svg>
      </div>

      {/* Burung 3 (Kanan ke Kiri) - Melintas di ruang sangat bawah (area abu-abu) */}
      <div className="absolute top-[85%] w-[36px] h-[36px] text-slate-500/50 animate-fly-rtl-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M2 15c0 0 4-4 10-4s10 4 10 4-4-2-10-2-10 2-10 2z" />
        </svg>
      </div>
    </div>
  );
};

export const GrowingCubesBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Kubus Tumbuh Kiri Bawah - Menggunakan CSS Variable sesuai globals.css */}
      <div 
        className="absolute left-6 bottom-4 w-10 h-10 text-sky-400 animate-grow-cube"
        style={{ "--duration": "5s", "--delay": "0s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#7dd3fc" stroke="#0284c7" strokeWidth="4" />
          <path d="M50 10 L50 90 M50 50 L90 30 M50 50 L10 30" stroke="#0284c7" strokeWidth="4" />
        </svg>
      </div>

      {/* Kubus Tumbuh Kanan Bawah */}
      <div 
        className="absolute right-6 bottom-3 w-12 h-12 text-sky-400 animate-grow-cube"
        style={{ "--duration": "6s", "--delay": "1s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#7dd3fc" stroke="#0284c7" strokeWidth="4" />
          <path d="M50 10 L50 90 M50 50 L90 30 M50 50 L10 30" stroke="#0284c7" strokeWidth="4" />
        </svg>
      </div>
      
      <div 
        className="absolute right-20 bottom-8 w-10 h-10 text-sky-500 animate-grow-cube"
        style={{ "--duration": "4s", "--delay": "2s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#38bdf8" stroke="#0369a1" strokeWidth="4" />
          <path d="M50 10 L50 90 M50 50 L90 30 M50 50 L10 30" stroke="#0369a1" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
};