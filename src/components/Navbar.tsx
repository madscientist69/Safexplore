"use client";

import React from "react";
import { Globe2 } from "lucide-react";

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  onResetToHome?: () => void;
}

export default function Navbar({ onNavigate, onResetToHome }: NavbarProps) {
  const handleScroll = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full flex justify-center pt-0">
  
      <div className="w-full bg-[#f15a24] text-white flex justify-center items-center relative shadow-md">
        <div className="max-w-4xl w-full flex items-center px-2 sm:px-4 md:px-8 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold tracking-wide relative">

          <div className="flex-1 flex justify-start">
            <button
              onClick={() => handleScroll("observatory")}
              className="flex items-center gap-1 sm:gap-1.5 hover:text-orange-100 transition-all font-medium py-1 px-2 sm:px-3 rounded-full hover:bg-white/15 cursor-pointer text-xs sm:text-sm"
              aria-label="Observatory"
            >
              <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden min-[380px]:inline">Observatory</span>
              <span className="min-[380px]:hidden">Obs</span>
            </button>
          </div>

          <div
            onClick={onResetToHome}
            className="absolute left-1/2 -translate-x-1/2 top-0 translate-y-[-2px] bg-[#0b3c61] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-b-xl sm:rounded-b-2xl shadow-lg border-2 border-t-0 border-[#f15a24]/50 flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:bg-[#082a44] transition-all group select-none z-50"
          >
            <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/favicon.ico"
                alt="Safexplore Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold tracking-wider text-xs sm:text-base md:text-lg text-white font-mono">
              Safexplore
            </span>
          </div>

          <div className="flex-1 flex justify-end right-4">
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-orange-100 transition-all font-medium py-1 px-2 sm:px-3 rounded-full hover:bg-white/15 cursor-pointer text-xs sm:text-sm"
              aria-label="About Us"
            >
              <span>About Us</span>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}