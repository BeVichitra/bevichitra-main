"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import WrapperCard from "@/components/ui/WrapperCard";
import Button from "@/components/ui/Button";

export default function ProjectCards() {

  const total = projects.length;
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  /* ================= NAV LOGIC ================= */

  const nextManual = () => setIndex((prev) => Math.min(prev + 1, total - 1));
  const prevManual = () => setIndex((prev) => Math.max(prev - 1, 0));

  /* ================= AUTOPLAY ================= */

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 1024;

    if (!autoPlay || !isInView || isMobile) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [autoPlay, isInView, total]);

  /* ================= VARIANTS ================= */

  const variants = {
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 20,
      rotateY: 0,
    },

    left: {
      x: "-35%",
      scale: 0.9,
      opacity: 0.6,
      zIndex: 10,
      rotateY: 10,
    },

    right: {
      x: "35%",
      scale: 0.9,
      opacity: 0.6,
      zIndex: 10,
      rotateY: -10,
    },

    hidden: {
      scale: 0.7,
      opacity: 0,
      zIndex: 0,
    },
  };

  return (
    <WrapperCard ref={ref}>
      {/* ================= DESKTOP ================= */}

      <div className="hidden lg:block">
        <div className="relative h-[520px] flex items-center justify-center perspective-[1200px]">

          {projects.map((project, i) => {

            const pos =
              i === index
                ? "center"
                : i === (index - 1 + total) % total
                ? "left"
                : i === (index + 1) % total
                ? "right"
                : "hidden";

            return (
              <motion.div
                key={i}
                variants={variants}
                animate={pos}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 20,
                  mass: 0.8,
                }}
                className={`absolute w-full max-w-3xl p-10 rounded-3xl shadow-xl transform-gpu will-change-transform transition-colors
                ${pos === "center" ? "bg-(--bg-main)" : "bg-gray-100 grayscale"}`}
              >
                <CardContent data={project} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="lg:hidden relative w-full">

        <div className="overflow-hidden touch-pan-y">

          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragEnd={(e, info) => {

              const swipeThreshold = 50;

              if (info.offset.x < -swipeThreshold) nextManual();
              else if (info.offset.x > swipeThreshold) prevManual();
            }}
            animate={{ x: `calc(-${index * 100}%)` }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.9,
            }}
          >
            {projects.map((project, i) => (
              <div key={i} className="min-w-full px-1">

                <div className="bg-(--bg-main) rounded-2xl p-6 border border-(--border-color) shadow-sm">

                  <CardContent data={project} />

                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ================= BUTTONS ================= */}

      <div className="flex justify-center gap-5 mt-5">

        <button
          onClick={() => {
            setAutoPlay(false);
            prevManual();
          }}
          disabled={index === 0}
          className="py-2 px-3 rounded-full border bg-(--bg-main) disabled:opacity-30 shadow-sm"
        >
          ←
        </button>

        <button
          onClick={() => {
            setAutoPlay(false);
            nextManual();
          }}
          disabled={index === total - 1}
          className="py-2 px-3 rounded-full border bg-(--bg-main) disabled:opacity-30 shadow-sm"
        >
          →
        </button>

      </div>
    </WrapperCard>
  );
}

function CardContent({ data }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-stretch ">

      <div className="flex flex-col justify-between flex-1 text-center lg:text-left">

        <div className="flex flex-col gap-3">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {data.title}
          </h2>

          <div className="text-xs sm:text-sm space-y-1">

            <p>
              <span className="text-(--text-muted) uppercase text-xs mr-2">
                Industry
              </span>
              {data.industry}
            </p>

            <p>
              <span className="text-(--text-muted) uppercase text-xs mr-2">
                Scope
              </span>
              {data.scope}
            </p>

          </div>
        </div>

        <p className="text-(--text-secondary) text-sm sm:text-base mt-4 lg:mt-6">
          {data.description}
        </p>

        <Button>
          View project detail
        </Button>

      </div>

      <div className="relative w-full h-50 sm:h-65 lg:w-90 lg:h-90 rounded-2xl overflow-hidden">

        <Image
          src={data.icon}
          alt="Project"
          fill
          className="object-cover"
        />

      </div>
    </div>
  );
}