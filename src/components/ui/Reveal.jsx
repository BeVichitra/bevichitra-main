"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  immediate = false,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🚫 Disable all animations on mobile OR reduced motion
  if (isMobile || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const baseProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
    className,
  };

  // 🚀 Immediate = normal animation
  if (immediate) {
    return <motion.div {...baseProps}>{children}</motion.div>;
  }

  // 🚀 No whileInView → no heavy observer
  return <motion.div {...baseProps}>{children}</motion.div>;
}