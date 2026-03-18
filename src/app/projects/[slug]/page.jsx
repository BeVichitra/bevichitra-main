"use client";

import { projectImages } from "@/data/projectImages";
import { notFound } from "next/navigation";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { use } from "react";
import Navbar from "@/components/layout/Navbar";

export default function ProjectPage({ params }) {
  const { slug } = use(params);

  const project = projectImages.find((p) => p.slug === slug);
  if (!project) return notFound();

  const breakpoints = {
    default: 5,
    1536: 2,
    1280: 2,
    768: 2,
    500: 1,
  };

  return (
    <>
      <Navbar />

      <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-24">

        {/* PROJECT INTRO */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
            {project.description}
          </p>
        </div>

        {/* MASONRY GRID */}
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {project.images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={img}
                alt={project.title}
                width={800}
                height={1200}
                placeholder="blur"
                blurDataURL={img}
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
              />

              
            </div>
          ))}
        </Masonry>

      </div>
    </>
  );
}