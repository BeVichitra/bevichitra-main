"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { steps } from '@/data/process';

export default function CollaborativeApproach() {
  const [activeStep, setActiveStep] = useState(0);

  const RADIUS = 480;
  const CENTER_X = 500;
  const CENTER_Y = 670; 
  const ANGLE_GAP = 55; 

  return (
    <div className="flex flex-col items-center bg-(--bg-main) min-h-screen py-20 px-4 overflow-hidden font-sans">
      <SectionHeader label={"Process"} title={"Collaborative Approach"} />

      <div className="relative w-full max-w-6xl aspect-[2/1.1]">
        <svg viewBox="0 100 1000 500" className="overflow-visible w-full h-full">
          
          <defs>

            <linearGradient id="arcFillGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--bg-secondary)" />
              <stop offset="100%" stopColor="var(--bg-main)" />
            </linearGradient>

            <filter id="depthStrokeFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="-1" stdDeviation="0.8" floodColor="#b8b8b8" floodOpacity="0.65" />
              <feDropShadow dx="0" dy="2" stdDeviation="0.1" floodColor="#ffffff" floodOpacity="0.4" />
            </filter>

            <linearGradient id="strokeGradientFade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--arc-fill-bottom)" stopOpacity="0" />
              <stop offset="5%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="10%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="20%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="80%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="90%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="95%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--arc-fill-bottom)" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="whiteLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--arc-fill-bottom)" stopOpacity="0" />
              <stop offset="5%" stopColor="var(--arc-stroke)" stopOpacity="0" />
              <stop offset="10%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="20%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="80%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="90%" stopColor="var(--arc-stroke)" stopOpacity="1" />
              <stop offset="95%" stopColor="var(--arc-stroke)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--arc-stroke)" stopOpacity="0" />
            </linearGradient>

          </defs>

          <path
            d="M 50,500 A 480,480 0 0 1 950,500"
            fill="url(#arcFillGradient)"
            stroke="url(#whiteLine)"
          />

          <path
            d="M 50,500 A 480,480 0 0 1 950,500"
            fill="none"
            stroke="url(#strokeGradientFade)"
            strokeWidth="10"
            filter="url(#depthStrokeFilter)"
          />

          {steps.map((step, index) => {

            const isVisible = index >= activeStep - 1 && index <= activeStep + 1;
            const isActive = activeStep === index;

            const angle = 90 - (index - activeStep) * ANGLE_GAP;
            const rad = (angle * Math.PI) / 180;
            const targetX = CENTER_X + RADIUS * Math.cos(rad);
            const targetY = CENTER_Y - RADIUS * Math.sin(rad);

            const getRotation = () => {
              if (isActive) return 0;
              if (index > activeStep) return 60;
              return 300;
            };

            return (
              <motion.g
                key={step.id}
                initial={false}
                animate={{
                  x: targetX,
                  y: targetY,
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? (isActive ? 1.1 : 0.85) : 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1.2
                }}
                className="cursor-pointer"
                onClick={() => setActiveStep(index)}
              >

                <motion.rect
                  width="60"
                  height="60"
                  rx="14"
                  x="-30"
                  y="-30"
                  animate={{
                    rotate: getRotation(),
                    fill: isActive ? "var(--color-primary)" : "var(--bg-main)",
                    stroke: isActive ? "var(--color-primary)" : "var(--border-color)",
                    strokeWidth: isActive ? 0 : 1
                  }}
                />

                <motion.text
                  textAnchor="middle"
                  dy="5"
                  animate={{
                    fill: isActive ? "var(--bg-main)" : "var(--text-muted)",
                    rotate: getRotation()
                  }}
                  className="text-lg font-bold select-none pointer-events-none"
                >
                  {step.id}
                </motion.text>

                {isActive && (
                  <motion.text
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -45 }}
                    textAnchor="middle"
                    className="text-[10px] font-black fill-(--text-muted) tracking-[0.2em]"
                  >
                    STEP
                  </motion.text>
                )}

              </motion.g>
            );
          })}
        </svg>

        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-full max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl font-semibold text-(--text-primary) mb-5 tracking-tight">
                {steps[activeStep].title}
              </h2>

              <p className="text-(--text-secondary) text-md leading-relaxed mb-7 px-8">
                {steps[activeStep].description}
              </p>

              <div className="flex justify-center items-center gap-4 text-[10px] font-bold text-(--text-muted) tracking-[0.2em] mb-8 uppercase">
                {steps[activeStep].tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {i < steps[activeStep].tags.length - 1 && (
                      <span className="w-1.5 h-1.5 bg-(--bg-tertiary) rounded-full" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-(--color-primary) text-(--bg-main) px-7 py-4 rounded-2xl font-bold text-md"
              >
                Start your project
              </motion.button>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}