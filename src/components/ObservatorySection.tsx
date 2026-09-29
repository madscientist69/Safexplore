"use client";

import React, { useState, useEffect } from "react";
import IndonesiaMap, { DomainFilter } from "./IndonesiaMap";
import IsometricCubes from "./IsometricCubes";

interface ObservatoryProps {
  refreshTrigger?: number;
}

export default function ObservatorySection({ refreshTrigger = 0 }: ObservatoryProps) {
  const [filter, setFilter] = useState<DomainFilter>("all");
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchObservatoryData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/observatory?filter=${filter}`;
        const response = await fetch(url, {
          next: { revalidate: 60 }
        });
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Gagal terhubung ke database backend", error);
      }
    };
    fetchObservatoryData();
  }, [refreshTrigger, filter]); 

  const displayStats = stats || {
    national_index: "-",
    total_scanned: 0,
    threat_percentage: "-",
    provinces_alert: "-"
  };

  return (
    <section
      id="observatory"
      className="relative w-full bg-grid-blueprint pt-10 pb-16 md:pt-14 md:pb-20 px-3 sm:px-4 overflow-hidden border-b border-gray-200"
    >
      <div className="absolute bottom-0 left-0 w-24 sm:w-40 md:w-60 lg:w-64 opacity-70 sm:opacity-100 pointer-events-none z-10">
        <IsometricCubes variant="left" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 sm:w-40 md:w-60 lg:w-64 opacity-70 sm:opacity-100 pointer-events-none z-10">
        <IsometricCubes variant="right" />
      </div>

      <div className="hidden sm:block absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-400/50 text-xs font-mono font-bold tracking-wider select-none z-10">
        Footer
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-20">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#1b2a38] tracking-tight px-2">
          Data statistik agregat web kampus/sekolah di Indonesia{" "}
          <span className="block text-xs sm:text-sm md:text-base font-semibold text-gray-600 mt-1 font-mono">
            (National Cyber-Hygiene Index)
          </span>
        </h2>

        {/* METRICS CARD */}
        <div className="w-full max-w-4xl mt-4 sm:mt-5 bg-white rounded-2xl border-2 border-[#f15a24] p-4 sm:p-5 shadow-lg relative z-30 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-left text-xs sm:text-sm font-sans">
            <div className="flex items-center justify-between sm:justify-start gap-2">
              <span className="text-gray-700 font-bold">Rata-rata Index Nasional :</span>
              <span className="font-extrabold text-[#1a2530] font-mono">
                {displayStats.national_index !== "-" ? `${displayStats.national_index}/100` : "- /100"}
                {displayStats.national_index !== "-" && (
                  <span className={`ml-1 font-semibold ${displayStats.national_index >= 80 ? 'text-green-700' : displayStats.national_index >= 60 ? 'text-amber-700' : 'text-red-700'}`}>
                    ({displayStats.national_index >= 80 ? 'Aman' : displayStats.national_index >= 60 ? 'Waspada' : 'Bahaya'})
                  </span>
                )}
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-2 md:border-l md:border-gray-200 md:pl-6">
              <span className="text-gray-700 font-bold">Total Domain Dipindai :</span>
              <span className="font-extrabold text-[#1a2530] font-mono">
                {displayStats.total_scanned > 0 ? displayStats.total_scanned.toLocaleString("id-ID") : "0"} Domains
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-2">
              <span className="text-gray-700 font-bold">Ancaman Domain :</span>
              <span className="font-extrabold text-red-600 font-mono">
                {displayStats.threat_percentage !== "-" ? `${displayStats.threat_percentage}%` : "-%"} SEO Poisoning (Judi)
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-2 md:border-l md:border-gray-200 md:pl-6">
              <span className="text-gray-700 font-bold">Provinsi Domain Merah :</span>
              <span className="font-extrabold text-red-700 font-mono">
                {displayStats.provinces_alert !== "-" ? `${displayStats.provinces_alert}/38` : "-/38"} Provinsi.
              </span>
            </div>
          </div>
        </div>

        {/* CONTAINER PETA */}
        <div className="w-full mt-2 sm:mt-3 relative z-20 flex justify-center items-center">
          <div className="w-full max-w-full flex justify-center">
            <IndonesiaMap filter={filter} apiData={stats} />
          </div>
        </div>

        {/* FILTER BUTTONS - Dinaikkan posisinya & dirapatkan jaraknya ke peta */}
        <div className="mt-1 sm:mt-2 mb-6 sm:mb-8 flex flex-col items-center gap-1.5 z-30 relative">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider font-mono">
            Filter
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-xs cursor-pointer ${filter === "all" ? "bg-[#16a34a] text-white ring-2 ring-[#16a34a]/30 scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}`}
            >
              Semua Web
            </button>
            <button
              onClick={() => setFilter("ac_id")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-xs cursor-pointer ${filter === "ac_id" ? "bg-[#f15a24] text-white ring-2 ring-[#f15a24]/30 scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}`}
            >
              Kampus (.ac.id)
            </button>
            <button
              onClick={() => setFilter("sch_id")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-xs cursor-pointer ${filter === "sch_id" ? "bg-[#ea580c] text-white ring-2 ring-[#ea580c]/30 scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}`}
            >
              Sekolah (.sch.id)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}