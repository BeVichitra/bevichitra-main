"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function UniversalCarousel({
  items,
  renderItem,
  options = {
    align: "center",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  },
  slideClass = "flex-[0_0_100%]",
  showArrows = true
}) {

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
  if (!emblaApi) return;

  const handleResize = () => {
    emblaApi.reInit();
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);

}, [emblaApi]);

  return (
    <div className="relative">

      <div className="overflow-hidden touch-pan-y select-none" ref={emblaRef}>
       <div className="flex items-stretch gap-6">

          {items.map((item, index) => {

            const isActive = index === selectedIndex;

            return (
              <div key={index} className={slideClass}>
                {renderItem(item, index, isActive)}
              </div>
            );
          })}

        </div>
      </div>

     {showArrows && (
  <>
    <button
      onClick={() => emblaApi?.scrollPrev()}
      className="absolute left-0 top-1/2 -translate-y-1/2"
    >
      ←
    </button>

    <button
      onClick={() => emblaApi?.scrollNext()}
      className="absolute right-0 top-1/2 -translate-y-1/2"
    >
      →
    </button>
  </>
)}

    </div>
  );
}