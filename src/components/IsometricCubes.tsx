"use client";

import React from "react";

interface IsometricCubesProps {
  className?: string;
  variant?: "left" | "right" | "stacked";
  colorMode?: "orange-blue" | "all-blue" | "leaf-green";
}

export default function IsometricCubes({
  className = "",
  variant = "right",
  colorMode = "orange-blue",
}: IsometricCubesProps) {

  let topFill = "#f15a24";   
  let leftFill = "#0b3c61"; 
  let rightFill = "#0284c7"; 
  
  if (colorMode === "all-blue") {
    topFill = "#38bdf8";
    leftFill = "#0c4a6e";
    rightFill = "#0284c7";
  } else if (colorMode === "leaf-green") {
    topFill = "#4ade80";   
    leftFill = "#064e3b";  
    rightFill = "#166534"; 
  }

  // Variant "left" 
  if (variant === "left") {
    return (
      <div className={`pointer-events-none select-none ${className}`}>
        <svg viewBox="0 0 220 220" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[
            "translate(85, 5)",
            "translate(35, 55)",
            "translate(85, 105)"
          ].map((transform, idx) => (
            <g key={idx} transform={transform}>
              <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={topFill} opacity="0.9" stroke="none" />
              <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={leftFill} opacity="0.95" stroke="none" />
              <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={rightFill} opacity="0.85" stroke="none" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Variant "stacked" (Animasi Escalator Linear)
  if (variant === "stacked") {
    return (
      <div 
        className={`pointer-events-none select-none w-full h-full ${className}`}
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' 
        }}
      >
        <style>
          {`
            @keyframes escalator {
              0% { transform: translateY(0); }
              100% { transform: translateY(-70px); }
            }
            .anim-escalator {
              animation: escalator 2s linear infinite; 
            }
          `}
        </style>
        <svg
          viewBox="0 0 120 1400" 
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="anim-escalator">
            {Array.from({ length: 25 }).map((_, idx) => {
              const y = -70 + (idx * 70); 
              return (
                <g key={idx} transform={`translate(10, ${y})`}>
                  <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={topFill} opacity="0.9" stroke="none" />
                  <path d="M0 28 L50 56 L50 84 L0 56 Z" fill={leftFill} opacity="0.95" stroke="none" />
                  <path d="M50 56 L100 28 L100 56 L50 84 Z" fill={rightFill} opacity="0.85" stroke="none" />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    );
  }

  // Variant "right"
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 220 220" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[
          "translate(35, 5)",
          "translate(85, 55)",
          "translate(35, 105)"
        ].map((transform, idx) => (
          <g key={idx} transform={transform}>
            <path d="M50 0 L100 28 L50 56 L0 28 Z" fill={topFill} opacity="0.9" stroke="none" />
            <path d="M0 28 L50 56 L50 110 L0 82 Z" fill={leftFill} opacity="0.95" stroke="none" />
            <path d="M50 56 L100 28 L100 82 L50 110 Z" fill={rightFill} opacity="0.85" stroke="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}