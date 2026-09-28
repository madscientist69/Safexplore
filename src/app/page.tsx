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
    /* Wadah utama relative overflow-hidden */
    <div className="relative min-h-screen flex flex-col justify-between bg-[#f5f7f9] text-[#1c2a38] overflow-hidden">
      
      {/* Floating background berada di z-0 sepanjang halaman */}
      <FloatingBackground />

      {viewState === "scanning" && (
        <ScanModal
          targetUrl={targetUrl}
          onComplete={handleScanComplete}
          onCancel={handleBackToHome}
        />
      )}

      {viewState === "result" && (
        <ResultView
          targetUrl={targetUrl}
          scanData={scanResult}
          onBackToSearch={handleBackToHome}
        />
      )}

      {viewState === "home" && (
        <>
          {/* Main & Navbar di z-10 */}
          <div className="relative z-10 flex-1 flex flex-col">
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

          {/* Footer di z-10 dengan background solid menutup penuh FloatingBackground */}
          <div className="relative z-10 bg-white">
            <Footer />
          </div>
        </>
      )}

    </div>
  );
}