export const IsometricCubeSVG = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
    <polygon points="60,10 105,35 60,60 15,35" fill="#f15a24" opacity="0.9" />
    <polygon points="15,35 60,60 60,110 15,85" fill="#0b3c61" opacity="0.95" />
    <polygon points="60,60 105,35 105,85 60,110" fill="#0284c7" opacity="0.85" />
  </svg>
);

export const GrowingCubesBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    
    <div className="absolute left-2 bottom-2 -translate-y-2 sm:hidden flex items-end gap-1">
      <div className="w-8 h-8 animate-grow-cube drop-shadow-md origin-bottom" style={{ "--duration": "3.5s", "--delay": "0s" }}>
        <IsometricCubeSVG />
      </div>
    </div>
    <div className="absolute right-2 bottom-2 -translate-y-2 sm:hidden flex items-end gap-1">
      <div className="w-8 h-8 animate-grow-cube drop-shadow-md origin-bottom" style={{ "--duration": "4.2s", "--delay": "-0.8s" }}>
        <IsometricCubeSVG />
      </div>
    </div>

    <div className="hidden sm:flex absolute left-8 bottom-1 -translate-y-1 items-end gap-2">
      <div className="w-20 h-20 animate-grow-cube drop-shadow-md origin-bottom" style={{ "--duration": "3.5s", "--delay": "0s" }}>
        <IsometricCubeSVG />
      </div>
      <div className="w-14 h-14 animate-grow-cube drop-shadow-md origin-bottom" style={{ "--duration": "4s", "--delay": "-1.5s" }}>
        <IsometricCubeSVG />
      </div>
    </div>
    
    <div className="hidden sm:flex absolute right-8 bottom-1 -translate-y-1 items-end gap-2">
      <div className="w-14 h-14 animate-grow-cube drop-shadow-md origin-bottom" style={{ "--duration": "4.2s", "--delay": "-0.8s" }}>
        <IsometricCubeSVG />
      </div>
      <div className="w-20 h-20 animate-grow-cube drop-shadow-md origin-bottom" style={{ "--duration": "3.8s", "--delay": "-2s" }}>
        <IsometricCubeSVG />
      </div>
    </div>

  </div>
);