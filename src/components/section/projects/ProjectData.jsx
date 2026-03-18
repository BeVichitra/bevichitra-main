"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Camera, Play, X } from "lucide-react";
import { projectVideos } from "@/data/projectVideos";
import { projectImages } from "@/data/projectImages";
import Image from "next/image";
export default function ProjectData() {
  const [view, setView] = useState("photos");
  const [playingVideo, setPlayingVideo] = useState(null);

  const router = useRouter();

  const playerRef = useRef({});

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-primary) py-40 px-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Projects</h1>

        <p className="max-w-2xl text-lg text-(--text-secondary)">
          Selected works from our recent architectural and design projects.
        </p>
      </header>

      {/* Toggle */}
      <div className="flex justify-center ">
        <div className="flex bg-(--bg-secondary) border border-(--border-color) rounded-full p-2">
          <button
            onClick={() => setView("photos")}
            className={`px-6 py-2 flex gap-2 items-center rounded-full ${
              view === "photos" ? "bg-(--color-accent) text-white" : ""
            }`}
          >
            <Camera size={18} /> Photos
          </button>

          <button
            onClick={() => setView("videos")}
            className={`px-6 py-2 flex gap-2 items-center rounded-full ${
              view === "videos" ? "bg-(--color-accent) text-white" : ""
            }`}
          >
            <Play size={18} /> Videos
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl  mx-auto mt-10">
        {/* PROJECTS */}
        {view === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((project) => (
              <div
                key={project.slug}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-(--border-color) transition hover:-translate-y-1 hover:shadow-xl "
              >
                <Image src={project.cover} alt={project.title} width={800} height={1200}/>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                  <p className="text-white font-semibold">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {view === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectVideos.map((video) => (
              <div
                key={video.id}
                className="relative aspect-video rounded-xl overflow-hidden border border-(--border-color)"
              >
                {/* Thumbnail */}
                {playingVideo !== video.youtubeId && (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      className="w-full h-full object-cover"
                    />

                    <button
                      onClick={() => setPlayingVideo(video.youtubeId)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-(--color-accent) flex items-center justify-center">
                        <Play fill="white" size={24} />
                      </div>
                    </button>
                  </>
                )}

                {/* Video Player */}
                {playingVideo === video.youtubeId && (
                  <div className="absolute inset-0">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={(e) => {
                        const iframe = e.target;

                        window.addEventListener("message", (event) => {
                          try {
                            const data = JSON.parse(event.data);
                            if (
                              data.event === "onStateChange" &&
                              data.info === 0
                            ) {
                              setPlayingVideo(null); // reset card when video ends
                            }
                          } catch {}
                        });

                        iframe.contentWindow.postMessage(
                          JSON.stringify({
                            event: "listening",
                            id: video.youtubeId,
                          }),
                          "*",
                        );
                      }}
                    />

                    <div className="absolute inset-0 pointer-events-none">
                      <button
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-3 right-3 pointer-events-auto w-10 h-10 flex items-center justify-center bg-black/80 text-white rounded-full hover:bg-black transition"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
