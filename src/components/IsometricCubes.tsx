"use client";

import React from "react";

interface IsometricCubesProps {
  className?: string;
  variant?: "left" | "right" | "stacked";
  colorMode?: "orange-blue" | "all-blue";
}

export default function IsometricCubes({
  className = "",
  variant = "right",
  colorMode = "orange-blue",
}: IsometricCubesProps) {
  // Exact design specs from Figma:
  // Fill: #064E7A
  // Border: 3px solid #F2692E / #0ea5e9
  const strokeColor = colorMode === "orange-blue" ? "#F2692E" : "#0ea5e9";
  const fillColor = "#064E7A";
  const strokeWidth = "3";

  // Variant "left" (3 Stepped Cubes - Simetris Presisi)
  if (variant === "left") {
    return (
      <div className={`pointer-events-none select-none ${className}`}>
        <svg
          viewBox="0 0 220 220"
          className="w-full h-auto drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back/Top Cube */}
          <g transform="translate(80, 12)">
            <path
              d="M50 0 L100 28 L50 56 L0 28 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M0 28 L50 56 L50 110 L0 82 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M50 56 L100 28 L100 82 L50 110 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>

          {/* Middle/Left Cube */}
          <g transform="translate(40, 52)">
            <path
              d="M50 0 L100 28 L50 56 L0 28 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M0 28 L50 56 L50 110 L0 82 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M50 56 L100 28 L100 82 L50 110 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>

          {/* Front/Right Cube */}
          <g transform="translate(80, 92)">
            <path
              d="M50 0 L100 28 L50 56 L0 28 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M0 28 L50 56 L50 110 L0 82 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M50 56 L100 28 L100 82 L50 110 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Variant "stacked" (Vertical column of 4 cubes)
  if (variant === "stacked") {
    return (
      <div className={`pointer-events-none select-none ${className}`}>
        <svg
          viewBox="0 0 120 310"
          className="w-full h-auto drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[10, 80, 150, 220].map((y, idx) => (
            <g key={idx} transform={`translate(10, ${y})`}>
              <path
                d="M50 0 L100 28 L50 56 L0 28 Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M0 28 L50 56 L50 84 L0 56 Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M50 56 L100 28 L100 56 L50 84 Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Variant "right" (3 Stepped Cubes - Simetris Presisi)
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 220 220"
        className="w-full h-auto drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back/Top Cube */}
        <g transform="translate(40, 12)">
          <path
            d="M50 0 L100 28 L50 56 L0 28 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M0 28 L50 56 L50 110 L0 82 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M50 56 L100 28 L100 82 L50 110 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>

        {/* Middle/Right Cube */}
        <g transform="translate(80, 52)">
          <path
            d="M50 0 L100 28 L50 56 L0 28 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M0 28 L50 56 L50 110 L0 82 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M50 56 L100 28 L100 82 L50 110 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>

        {/* Front/Left Cube */}
        <g transform="translate(40, 92)">
          <path
            d="M50 0 L100 28 L50 56 L0 28 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M0 28 L50 56 L50 110 L0 82 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M50 56 L100 28 L100 82 L50 110 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}