"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className="space-y-3 text-sm">
      {headings.map((heading, index) => (
        <li key={heading.id}>
          <button
            onClick={() => handleScroll(heading.id)}
            className={`flex gap-2 text-left transition ${
              activeId === heading.id
                ? "text-[var(--color-primary)] font-medium"
                : "text-[var(--text-secondary)] hover:text-[var(--color-primary)]"
            }`}
          >
            <span className="font-medium">{index + 1}.</span>
            <span>{heading.text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}