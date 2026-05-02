import Image from "next/image";
import Link from "next/link";

export default function CardHero() {
  return (
    <div className="text-center mb-10">
      {/* Logo */}
      <div
        className=" mx-auto rounded-2xl 
        flex items-center justify-center"
      >
        <Link href="/" className="group flex items-center gap-1 cursor-pointer">
          <div className="transition-transform duration-300 group-hover:-rotate-90">
            
            <Image
              src="/images/logoIcon.webp"
              alt="BeVichitra"
              width={60}
              height={60}
              priority
              className="w-11 h-10 md:w-[60px] md:h-[55px]"
            />
          </div>

          <h2
            style={{ fontFamily: "var(--font-logo)" }}
            className="text-4xl sm:text-5xl tracking-wider"
          >
            vichitra
          </h2>
        </Link>
      </div>

      {/* Subtitle */}
      <p className="text-gray-500 mt-2 text-sm sm:text-md">Think Vichitra. Be Vichitra</p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        <span className="w-2 h-2 bg-pink-300 rounded-full" />
        <span className="w-2 h-2 bg-yellow-300 rounded-full" />
        <span className="w-2 h-2 bg-cyan-300 rounded-full" />
        <span className="w-2 h-2 bg-purple-300 rounded-full" />
      </div>
    </div>
  );
}
