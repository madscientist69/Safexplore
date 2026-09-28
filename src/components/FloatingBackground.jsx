import React from "react";

const CubeShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="6">
    <rect x="25" y="25" width="50" height="50" rx="8" />
  </svg>
);

const BirdShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
    <path d="M10,50 Q35,15 50,42 Q65,15 90,50 Q60,38 50,58 Q40,38 10,50 Z" />
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
  const items = [
    { Shape: CubeShape, top: "8%", left: "10%", size: "w-10 h-10", duration: "14s", delay: "0s" },
    { Shape: BirdShape, top: "18%", left: "80%", size: "w-12 h-12", duration: "16s", delay: "-2s" },
    { Shape: DHSHeadShape, top: "35%", left: "15%", size: "w-14 h-14", duration: "18s", delay: "-4s" },
    { Shape: ShieldShape, top: "42%", left: "85%", size: "w-11 h-11", duration: "13s", delay: "-1s" },
    { Shape: CubeShape, top: "58%", left: "8%", size: "w-12 h-12", duration: "15s", delay: "-5s" },
    { Shape: BirdShape, top: "68%", left: "75%", size: "w-10 h-10", duration: "17s", delay: "-3s" },
    { Shape: DHSHeadShape, top: "82%", left: "88%", size: "w-12 h-12", duration: "19s", delay: "-6s" },
    { Shape: ShieldShape, top: "88%", left: "12%", size: "w-14 h-14", duration: "14s", delay: "-2s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] select-none">
      {items.map((item, idx) => {
        const Shape = item.Shape;
        return (
          <div
            key={idx}
            className="absolute opacity-25 dark:opacity-35 text-gray-700 dark:text-gray-200 animate-float-elements"
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