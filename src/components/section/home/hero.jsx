"use client";
import { useEffect, useState } from "react";
import BackgroundLines from "@/components/ui/BackgroundLines";
import Button from "@/components/ui/Button";
import ArrowCall from "@/components/ui/ArrowCall";
import MainBadge from "@/components/ui/MainBadge";

export default function Hero() {
  const [textVisible, setTextVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 200);

    const buttonTimer = setTimeout(() => {
      setButtonsVisible(true);
    }, 600);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="relative bg-(--bg-main) min-h-screen flex items-center pt-32 py-24 overflow-hidden">
      
      {/* Optional Background Pattern */}
      <div className="hidden sm:block"><BackgroundLines/></div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* TEXT BLOCK */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >

          {/* Badge */}
          <MainBadge>
            Digital Agency
          </MainBadge>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] md:leading-tight text-(--text-primary) tracking-tight">
            We craft brands <br />
            that spark{" "}
            <span className="text-(--color-primary)">
              minds!
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            We blend curiosity, design and technology to help ambitious brands
            stand apart and build unforgettable digital moments.
          </p>
        </div>

        {/* BUTTON GROUP */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            buttonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative mt-10 flex justify-center gap-4 flex-col sm:flex-row w-full sm:w-auto">

            {/* PRIMARY CTA */}
            <div className="relative inline-block">
              <Button>
                Discuss your idea
              </Button>

              <ArrowCall
                className="absolute w-full -translate-x-32 -translate-y-6 hidden md:flex"
              />
            </div>

            {/* SECONDARY CTA */}
            <Button variant="dark">
              View services
            </Button>

          </div>
        </div>

      </div>
    </section>
  );
}