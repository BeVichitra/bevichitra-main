"use client";

export default function ShareButtons() {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="mt-10">

      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Share this article
      </h3>

      <div className="flex gap-4">

        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}target="_blank" className="text-sm text-orange-500 hover:underline">
          Twitter
        </a>

        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" className="text-sm text-orange-500 hover:underline">
          LinkedIn
        </a>

      </div>

    </div>
  );
}