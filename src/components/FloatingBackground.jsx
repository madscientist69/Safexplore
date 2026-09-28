import React from "react";

const CubeShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="6">
    <rect x="25" y="25" width="50" height="50" rx="8" />
  </svg>
);

const DHSHeadShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="5">
    <circle cx="50" cy="50" r="40" />
    <path d="M 30 38 L 42 50 M 42 38 L 30 50" strokeLinecap="round" strokeWidth="6" />
    <path d="M 58 38 L 70 50 M 70 38 L 58 50" strokeLinecap="round" strokeWidth="6" />
    <path d="M 38 62 Q 50 76 62 62 Z" fill="currentColor" />
  </svg>
);

const ShieldShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="6" strokeLinejoin="round">
    <path d="M50,15 L80,25 C80,60 50,85 50,85 C50,85 20,60 20,25 Z" />
  </svg>
);

export const FloatingBackground = () => {
  // Distribusi elemen menyebar dari atas ke bawah halaman
  const items = [
    // Area Atas (Hero)
    { Shape: CubeShape, top: "4%", left: "8%", size: "w-10 h-10", duration: "11s", delay: "0s", anim: "animate-float-1" },
    { Shape: ShieldShape, top: "12%", left: "88%", size: "w-12 h-12", duration: "14s", delay: "-2s", anim: "animate-float-2" },
    
    // Area Tengah Atas (About)
    { Shape: DHSHeadShape, top: "28%", left: "6%", size: "w-14 h-14", duration: "16s", delay: "-4s", anim: "animate-float-1" },
    { Shape: CubeShape, top: "36%", left: "84%", size: "w-9 h-9", duration: "12s", delay: "-1s", anim: "animate-float-2" },
    
    // Area Tengah Bawah (Observatory)
    { Shape: ShieldShape, top: "54%", left: "10%", size: "w-13 h-13", duration: "15s", delay: "-3s", anim: "animate-float-2" },
    { Shape: DHSHeadShape, top: "68%", left: "90%", size: "w-11 h-11", duration: "13s", delay: "-5s", anim: "animate-float-1" },
    
    // Area Bawah (Sebelum Footer)
    { Shape: CubeShape, top: "82%", left: "12%", size: "w-12 h-12", duration: "14s", delay: "-2s", anim: "animate-float-1" },
  ];

  return (
    /* Menggunakan absolute h-full w-full agar menyatu dengan scroll halaman & z-0 di bawah konten */
    <div className="absolute inset-0 h-full w-full pointer-events-none z-0 overflow-hidden select-none">
      {items.map((item, idx) => {
        const Shape = item.Shape;
        return (
          <div
            key={idx}
            className={`absolute opacity-20 text-gray-600 dark:text-gray-300 ${item.anim}`}
            style={{
              top: item.top,
              left: item.left,
              "--duration": item.duration,
              "--delay": item.delay,
            }}
          >
            <div className={item.size}>
              <Shape />
            </div>
          </div>
        );
      })}
    </div>
  );
};