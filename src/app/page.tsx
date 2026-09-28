"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ObservatorySection from "@/components/ObservatorySection";
import ScanModal from "@/components/ScanModal";
import ResultView from "@/components/ResultView";
import Footer from "@/components/Footer";
import { FloatingBackground } from "@/components/FloatingBackground";

export default function Home() {
  const [viewState, setViewState] = useState<"home" | "scanning" | "result">("home");
  const [targetUrl, setTargetUrl] = useState("smansatu.sch.id");
  const [scanResult, setScanResult] = useState<any>(null);
  const [scanCount, setScanCount] = useState(0);

  const handleStartScan = (url: string) => {
    setTargetUrl(url);
    setViewState("scanning");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScanComplete = (data: any) => {
    setScanResult(data);
    setScanCount(prev => prev + 1);
    setViewState("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setViewState("home");
    setScanResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f5f7f9] text-[#1c2a38] overflow-x-hidden">
      
      {/* Floating Background Ditempatkan Langsung di Sini dengan z-[1] */}
      <FloatingBackground />

      {viewState === "scanning" && (
        <div className="relative z-50">
          <ScanModal
            targetUrl={targetUrl}
            onComplete={handleScanComplete}
            onCancel={handleBackToHome}
          />
        </div>
      )}

      {viewState === "result" && (
        <div className="relative z-50">
          <ResultView
            targetUrl={targetUrl}
            scanData={scanResult}
            onBackToSearch={handleBackToHome}
          />
        </div>
      )}

      {viewState === "home" && (
        <>
          {/* Komponen Utama harus di atas z-index FloatingBackground (z-10) */}
          <div className="relative z-10 flex-1 flex flex-col w-full">
            <Navbar
              onNavigate={(id) => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onResetToHome={handleBackToHome}
            />

            <main className="flex-1 flex flex-col">
              <HeroSection onStartScan={handleStartScan} />
              <AboutSection />
              <ObservatorySection refreshTrigger={scanCount} />
            </main>
          </div>

          {/* Footer diberi lapisan solid agar menutupi floating elements yang jatuh ke bawah */}
          <div className="relative z-20 bg-white">
            <Footer />
          </div>
        </>
      )}

    </div>
  );
}