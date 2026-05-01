import Image from "next/image";

export default function CardHero() {
  return (
    <div className="text-center">
      {/* Avatar */}
      <div className="relative mx-auto w-24 h-24">
        <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
          <Image
            src="/images/logoIcon.webp"
            alt="BeVichitra"
            width={78}
            height={78}
            priority
          />
        </div>

        <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse" />
      </div>

      {/* Name */}
      <h1
        className="mt-6 text-4xl md:text-5xl font-extrabold text-white tracking-wide"
        style={{ fontFamily: "var(--font-logo)" }}
      >
        Bevichitra
      </h1>

      {/* Subtitle */}
      <p className="text-yellow-400 mt-2 text-sm tracking-widest">
        Think Vichitra. Be Vichitra
      </p>

      {/* Availability */}
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur">
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        <span className="text-sm text-green-300">
          Available for opportunities
        </span>
      </div>
    </div>
  );
}
