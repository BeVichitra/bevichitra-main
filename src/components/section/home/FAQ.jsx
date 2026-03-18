"use client";
import { useState,useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import WrapperCard from "@/components/ui/WrapperCard";
import { faqs } from "@/data/Faqs";

export default function FAQ() {

  const [visibleFaqs, setVisibleFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const ITEMS_TO_SHOW = 5;

  useEffect(() => {
    const shuffled = [...faqs].sort(() => 0.5 - Math.random());
    setVisibleFaqs(shuffled.slice(0, ITEMS_TO_SHOW));
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-(--bg-main) flex flex-col items-center justify-center">

      <SectionHeader label={"Got Questions?"} title={"We've got answers"}/>

      <WrapperCard>
        <div className="max-w-5xl mx-auto px-2">

          <div className="space-y-3 sm:space-y-4 ">
            {visibleFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-(--bg-main) rounded-2xl border border-(--border-color) overflow-hidden transition-all duration-300"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-4 px-6 sm:p-6 text-left"
                >
                  <div className="flex">

                    <div className="text-(--text-muted) font-medium text-sm mt-1 pr-4">
                      {String(index + 1).padStart(2, "0")+"."}
                    </div>

                    <span className="text-md sm:text-lg font-medium text-(--text-primary)">
                      {faq.question}
                    </span>

                  </div>

                  <span
                    className={`text-xl sm:text-2xl text-(--text-primary) transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "grid-rows-[1fr] opacity-100 p-6 pt-0"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden bg-(--bg-main)">

                    <p className="text-(--text-secondary) text-sm sm:text-lg leading-relaxed">
                      {faq.answer}
                    </p>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </WrapperCard>

    </section>
  );
}