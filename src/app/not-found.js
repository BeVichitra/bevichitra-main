"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
    <div className="h-auto w-full flex flex-col items-center justify-center bg-(--bg-main) px-6 overflow-hidden mt-35">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center w-full max-w-5xl"
      >
        
        <div className="mb-7">
          <Image
            src="/images/logoIcon.png"
            alt="BeVichitra"
            width={140}
            height={50}
            priority
            className="object-contain"
          />
        </div>

        <main className="flex flex-col items-center text-center">
        
          <span className="block font-bold tracking-wide mb-4 text-2xl md:text-4xl">
            404
          </span>

          {/* Forced Size for Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-(--text-primary) leading-none mb-8">
            Lost in the <span className="text-(--color-primary)">Odd?</span>
          </h1>

          {/* Description */}
          <p className="text-(--text-secondary) max-w-lg text-lg md:text-xl leading-relaxed mb-12">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to something meaningful with <span className="text-(--color-primary) font-semibold">BeVichitra</span>
          </p>

          
          <Link
            href="/"
            className="group relative flex items-center justify-center px-10 py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="text-sm font-semibold tracking-wide">Return to Home</span>
            <motion.span 
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </Link>
        </main>
      </motion.div>

      
    </div>
    
    </>
  );
}