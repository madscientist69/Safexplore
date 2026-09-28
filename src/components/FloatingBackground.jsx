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

export const FloatingBackground = () => {
  // Warna disesuaikan agar kontras tinggi & terlihat jelas di area terang maupun gelap
  const items = [
    { Shape: OutlineCubeShape, top: "4%", left: "18%", size: "42px", duration: "11s", delay: "0s", anim: "animate-float-1", color: "text-slate-600/40 dark:text-cyan-400/40" },
    { Shape: ShieldShape, top: "11%", left: "78%", size: "48px", duration: "14s", delay: "-2s", anim: "animate-float-2", color: "text-slate-600/40 dark:text-orange-400/40" },
    { Shape: DHSHeadShape, top: "19%", left: "26%", size: "50px", duration: "16s", delay: "-4s", anim: "animate-float-1", color: "text-slate-600/40 dark:text-slate-300/40" },
    { Shape: OutlineCubeShape, top: "27%", left: "72%", size: "38px", duration: "12s", delay: "-1s", anim: "animate-float-2", color: "text-slate-600/40 dark:text-cyan-400/40" },
    { Shape: ShieldShape, top: "35%", left: "22%", size: "46px", duration: "15s", delay: "-3s", anim: "animate-float-2", color: "text-slate-600/40 dark:text-orange-400/40" },
    { Shape: DHSHeadShape, top: "43%", left: "80%", size: "44px", duration: "13s", delay: "-5s", anim: "animate-float-1", color: "text-slate-600/40 dark:text-slate-300/40" },
    { Shape: OutlineCubeShape, top: "52%", left: "16%", size: "40px", duration: "14s", delay: "-2s", anim: "animate-float-1", color: "text-slate-600/40 dark:text-cyan-400/40" },
    { Shape: ShieldShape, top: "62%", left: "76%", size: "52px", duration: "17s", delay: "-1s", anim: "animate-float-2", color: "text-slate-600/40 dark:text-orange-400/40" },
    { Shape: DHSHeadShape, top: "71%", left: "24%", size: "48px", duration: "15s", delay: "-4s", anim: "animate-float-1", color: "text-slate-600/40 dark:text-slate-300/40" },
    { Shape: OutlineCubeShape, top: "80%", left: "82%", size: "42px", duration: "12s", delay: "-3s", anim: "animate-float-2", color: "text-slate-600/40 dark:text-cyan-400/40" },
    { Shape: ShieldShape, top: "88%", left: "20%", size: "45px", duration: "16s", delay: "-5s", anim: "animate-float-1", color: "text-slate-600/40 dark:text-orange-400/40" },
    { Shape: DHSHeadShape, top: "95%", left: "70%", size: "50px", duration: "13s", delay: "-2s", anim: "animate-float-2", color: "text-slate-600/40 dark:text-slate-300/40" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1] overflow-hidden select-none">
      {items.map((item, idx) => {
        const Shape = item.Shape;
        return (
          <div
            key={idx}
            className={`absolute ${item.color} ${item.anim}`}
            style={{
              top: item.top,
              left: item.left,
              "--duration": item.duration,
              "--delay": item.delay,
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