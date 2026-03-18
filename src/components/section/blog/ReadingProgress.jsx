"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;
      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[100] backdrop-blur-sm">
      
      {/* background track */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* progress bar */}
      <div
        className="h-full transition-[width] duration-150 ease-out 
        bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
        shadow-[0_0_10px_rgba(249,115,22,0.7)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}