"use client";
import WrapperCard from "@/components/ui/WrapperCard";
import { useState, useRef, useEffect } from "react";
import { services } from "@/data/services";

export default function ServiceCard() {

  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const shouldScroll = useRef(false);

  const handleToggle = () => {

    if (expanded) {
      shouldScroll.current = true;
    }

    setExpanded(!expanded);
  };

  useEffect(() => {

    if (!expanded && shouldScroll.current) {

      sectionRef.current?.scrollIntoView({
        block: "start"
      });

      shouldScroll.current = false;
    }

  }, [expanded]);

  const visibleServices = expanded
    ? services
    : services.slice(0, 3);

  return (
    <div ref={sectionRef} className="w-full max-w-md">
      <WrapperCard>

        <div className="flex flex-col gap-8 transition-all duration-500">

          {visibleServices.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 p-6 bg-(--bg-main) rounded-xl shadow-sm"
            >

              <div className="flex justify-between items-center border-b border-(--border-color) pb-3">
                <h2 className="text-xl font-semibold text-(--text-primary)">
                  {item.title}
                </h2>

                <div className="bg-(--bg-tertiary) h-10 w-10 rounded-lg"></div>
              </div>

              <p className="text-(--text-secondary) text-sm">
                {item.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {item.tags.map((tag, i) => (
                  <span
                    key={`${item.id}-${i}`}
                    className="bg-(--bg-tertiary) text-(--text-primary) px-4 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

          <button
            onClick={handleToggle}
            className="text-(--color-primary) text-center font-medium hover:underline "
          >
            {expanded ? "Show less ↑" : "View all services ↓"}
          </button>

        </div>

      </WrapperCard>
    </div>
  );
}