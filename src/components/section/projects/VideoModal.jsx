"use client";

export default function VideoModal({ videoId, close }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={close}
    >

      <div className="w-[90%] max-w-4xl aspect-video">

        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allowFullScreen
        />

      </div>

    </div>
  );
}