"use client";

import { useState, useEffect, useCallback } from "react";

export default function useCarousel(total, delay = 4000) {

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {

    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);

  }, []);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  /* autoplay only tablet + desktop */

  useEffect(() => {

    if (isMobile) return;

    const interval = setInterval(next, delay);

    return () => clearInterval(interval);

  }, [next, delay, isMobile]);

  return {
    index,
    next,
    prev,
    isMobile,
    isTablet,
    isDesktop
  };
}