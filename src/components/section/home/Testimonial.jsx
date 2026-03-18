"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonial";
import WrapperCard from "@/components/ui/WrapperCard";
import UniversalCarousel from "@/components/ui/UniversalCarousel";

export default function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <>
      <SectionHeader label="testimonials" title="what clients say" />

      <div className="relative bg-(--bg-main)">
        <WrapperCard>
          <div className="max-w-7xl mx-auto px-1 sm:px-6 ">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((content, index) => {
                  const isActive = index === selectedIndex;

                  return (
                    <div
                      key={content.id}
                      className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-5 py-17">
                      <div
                        className={`relative  transition-all  duration-500  rounded-2xl pt-11 pb-8 px-8 text-center bg-(--bg-main) backdrop-blur-md 
                      shadow-md
                      ${isActive ? "scale-[1.1] z-10" : "scale-95"}
                      `}
                      >
                        {/* profile */}
                        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                          <div className="w-22 h-22 sm:w-28 sm:h-28 rounded-full border-9 border-(--bg-secondary) overflow-hidden  ">
                            <Image
                              src={content.image}
                              alt={content.name}
                              width={112}
                              height={112}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-2xl font-semibold text-(--text-primary) -mt-2 sm:mt-4">
                          {content.name}
                        </h3>

                        <p className="text-xs sm:text-base text-(--text-muted) mb-4">
                          {content.role}
                        </p>

                        <p className="text-(--text-secondary) text-xs sm:text-base leading-relaxed mb-6">
                          {content.text}
                        </p>

                        <div className="flex justify-center gap-1 text-yellow-500">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* arrows */}

            <button
              onClick={scrollPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 transition hidden sm:block"
            >
              ←
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 transition hidden sm:block"
            >
              →
            </button>

            {/* dots */}

            <div className="flex justify-center gap-3 mt-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`
                w-3 h-3 rounded-full transition
                ${
                  selectedIndex === i
                    ? "bg-[var(--color-primary)] scale-125"
                    : "bg-gray-300"
                }
                `}
                />
              ))}
            </div>
          </div>
        </WrapperCard>
      </div>
    </>
  );
}




