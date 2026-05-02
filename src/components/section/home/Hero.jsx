"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fix hydration mismatch (VERY IMPORTANT)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!mounted) return null;

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  // Select correct video
  const videoSrc = isMobile
    ? isDark
      ? "/videos/HeroMobileDark.webm"
      : "/videos/HeroMobileLight.webm"
    : isDark
    ? "/videos/HeroMain.webm"
    : "/videos/HeroMain.webm";

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        key={videoSrc} // forces reload when source changes
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      {/* Optional overlay content */}
      <div className="relative z-10">
        {/* Your hero text / CTA */}
      </div>
    </div>
  );
}