import React from "react";

const OutlineCubeShape = () => (
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

export const FloatingBackground = ({ isDark = false }) => {
  // Hanya 3 elemen per section seperti tampilan semula
  const items = [
    { Shape: OutlineCubeShape, top: "20%", left: "10%", size: "40px", anim: "animate-float-1", colorLight: "text-slate-700/35", colorDark: "text-cyan-400/30" },
    { Shape: ShieldShape, top: "55%", left: "82%", size: "44px", anim: "animate-float-2", colorLight: "text-slate-800/35", colorDark: "text-orange-400/30" },
    { Shape: DHSHeadShape, top: "75%", left: "20%", size: "48px", anim: "animate-float-1", colorLight: "text-slate-700/35", colorDark: "text-white/25" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {items.map((item, idx) => {
        const Shape = item.Shape;
        const colorClass = isDark ? item.colorDark : item.colorLight;
        return (
          <div
            key={idx}
            className={`absolute ${colorClass} ${item.anim}`}
            style={{
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size
            }}
          >
            <Shape />
          </div>
        );
      })}
    </div>
  );
};