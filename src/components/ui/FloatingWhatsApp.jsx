"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phone = "+917385568102"; // ⚠️ no + sign
  const message = "Hey I want To know More About Bevichitra";

  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-5 right-5 z-50
        w-14 h-14 rounded-full
        bg-green-500 text-white
        flex items-center justify-center
        shadow-[0_6px_0_rgba(21,128,61,0.9)]
        transition duration-200
        hover:translate-y-[2px]
        hover:shadow-[0_3px_0_rgba(21,128,61,0.9)]
        active:translate-y-[4px]
        active:shadow-none animate-bounce
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </button>
  );
}