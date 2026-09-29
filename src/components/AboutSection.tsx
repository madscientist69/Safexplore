"use client";

import React from "react";
import IsometricCubes from "./IsometricCubes";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#171d22] bg-grid-blueprint-dark text-white py-12 md:py-20 px-2 sm:px-4 overflow-hidden border-b border-gray-800 z-10"
    >
      {/* Mengurangi opacity & ukuran di mobile (w-12, -left-3) agar tidak terlalu mendominasi */}
      <div className="absolute top-1/2 -left-3 sm:-left-6 md:-left-8 -translate-y-1/2 w-12 sm:w-28 md:w-32 lg:w-40 opacity-40 sm:opacity-100 pointer-events-none z-10">
        <IsometricCubes variant="stacked" colorMode="orange-blue" />
      </div>
      <div className="absolute top-1/2 -right-3 sm:-right-6 md:-right-8 -translate-y-1/2 w-12 sm:w-28 md:w-32 lg:w-40 opacity-40 sm:opacity-100 pointer-events-none z-10">
        <IsometricCubes variant="stacked" colorMode="orange-blue" />
      </div>

      {/* Menambahkan px-10 (padding horizontal) pada mobile agar teks berada di ruang aman */}
      <div className="max-w-3xl mx-auto text-center relative z-20 flex flex-col items-center px-10 sm:px-0">
        
        {/* Teks diperkecil di tampilan mobile */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Tahukah <span className="text-[#f15a24]">Kalian?</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm text-gray-300 max-w-xl leading-relaxed">
          Tiap tahun, ribuan situs sekolah (<span className="text-orange-300 font-mono">.sch.id</span>), kampus (<span className="text-cyan-300 font-mono">.ac.id</span>), dan instansi publik di Indonesia disusupi peretas (<span className="italic">SEO hijacking / web defacement</span>) untuk mempromosikan situs terlarang dan judi online.
        </p>

        <h3 className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl font-bold">
          Dan <span className="text-[#00d2ff]">Kami</span> memiliki solusinya disini.
        </h3>
        <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-400 font-medium">
          Dengan landasan :
        </p>

        <div className="mt-5 sm:mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-24 h-24 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:scale-105 active:scale-95 active:shadow-inner transition-all duration-300 cursor-pointer border border-white/10 hover:shadow-orange-500/30 bg-[#f36d25] [-webkit-tap-highlight-color:transparent]">
            <img src="/sdg9.svg" alt="SDG 9" className="w-full h-full object-cover select-none pointer-events-none" />
          </div>
          <div className="w-24 h-24 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:scale-105 active:scale-95 active:shadow-inner transition-all duration-300 cursor-pointer border border-white/10 hover:shadow-sky-500/30 bg-[#00689d] [-webkit-tap-highlight-color:transparent]">
            <img src="/sdg16.svg" alt="SDG 16" className="w-full h-full object-cover select-none pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}