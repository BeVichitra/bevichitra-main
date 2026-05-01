"use client";

import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappCTA() {
  const phone = "+917385568102";
  const message = "Hey I want To know More About Bevichitra";

  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 rounded-2xl bg-gradient-to-r from-green-400 to-green-500
      flex items-center justify-between cursor-pointer
      transition duration-200
      hover:translate-y-[2px]
      active:translate-y-[4px]"
      style={{
        boxShadow: "5px 8px 0px rgba(21,128,61,0.9)", // 🔥 darker green
      }}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* ICON BOX */}
        <div className="w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center text-white">
          <FaWhatsapp size={20} />
        </div>

        <div>
          <h3 className="text-white font-semibold">Reach Now</h3>
          <p className="text-sm text-white/80">Tap to chat on WhatsApp</p>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
        <ArrowRight size={18} />
      </div>
    </div>
  );
}
