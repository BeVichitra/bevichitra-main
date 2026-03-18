"use client";
import { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import ServiceText from "../services/ServiceText";
import ServiceCardItem from "../services/ServiceCardItem";
import { services } from "@/data/services";
import WrapperCard from "@/components/ui/WrapperCard";

export default function ServiceMobile() {

  const perPage = 3;
  const totalPages = Math.ceil(services.length / perPage);

  const [page, setPage] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPage(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const next = () => emblaApi && emblaApi.scrollNext();
  const prev = () => emblaApi && emblaApi.scrollPrev();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !emblaApi) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        emblaApi.scrollTo(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="px-6 py-20 bg-(--bg-main)">

      {/* Text */}
      <div className="mb-10">
        <ServiceText />
      </div>

      <WrapperCard className="rounded-2xl">

        {/* Embla */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">

            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * perPage;
              const pageCards = services.slice(start, start + perPage);

              return (
                <div
                  key={pageIndex}
                  className="flex-[0_0_100%] px-1 space-y-6"
                >
                  {pageCards.map((item) => (
                    <ServiceCardItem key={item.id} services={item} />
                  ))}
                </div>
              );
            })}

          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8 mt-10">

          <button
            onClick={prev}
            disabled={page === 0}
            className={`text-xl text-(--text-muted) ${page === 0 ? "opacity-30" : ""}`}
          >
            &lt;
          </button>

          <p className="text-sm text-(--text-muted)">
            {page + 1}
          </p>

          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className={`text-xl text-(--text-muted) ${page === totalPages - 1 ? "opacity-30" : ""}`}
          >
            &gt;
          </button>

        </div>

      </WrapperCard>

    </section>
  );
}