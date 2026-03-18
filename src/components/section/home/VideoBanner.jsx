"use client";
import { useEffect, useState, useRef } from "react";
import { useMenu } from "@/context/NavContext";

export default function VideoBanner() {
  const sectionRef = useRef(null);   // scroll animation ke liye
  const videoRef = useRef(null);     // video control ke liye
  const [visible, setVisible] = useState(false);
   const { menuOpen } = useMenu();

  // Scroll Reveal Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Pause / Play Effect
  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  let timer;

  if (menuOpen) {
    timer = setTimeout(() => {
      video.pause();
    }, 300);
  } else {
    video.play().catch(() => {});
  }

  return () => {
    if (timer) clearTimeout(timer);
  };
}, [menuOpen]);

  return (
    <section className="w-full bg-[#e5e5e5]">
      <div
        ref={sectionRef}
        className={`relative w-full  aspect-video overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <video
          ref={videoRef}
          src="/videos/intro1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </section>
  );
}