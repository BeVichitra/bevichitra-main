"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { Globe, ArrowRight, Info } from "lucide-react";

const links = [
  {
    title: "Website",
    desc: "Visit portfolio",
    icon: <Globe size={18} />,
    bg: "bg-purple-100",
    iconColor: "text-purple-500",
    color: "#a855f7",
    link: "https://www.bevichitra.com",
  },
  {
    title: "Twitter / X",
    desc: "Thoughts & updates",
    icon: <FaTwitter size={16} />,
    bg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    color: "#06b6d4",
    link: "https://x.com/BeVichitra",
  },
  {
    title: "Instagram",
    desc: "Follow for daily updates",
    icon: <FaInstagram size={16} />,
    bg: "bg-pink-100",
    iconColor: "text-pink-500",
    color: "#ec4899",
    link: "https://www.instagram.com/be.vichitra/",
  },
  {
    title: "Facebook",
    desc: "Join the community",
    icon: <FaFacebookF size={16} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-500",
    color: "#3b82f6",
    link: "https://www.facebook.com/profile.php?id=61586133304557",
  },
  {
    title: "LinkedIn",
    desc: "Connect professionally",
    icon: <FaLinkedinIn size={16} />,
    bg: "bg-teal-100",
    iconColor: "text-teal-500",
    color: "#14b8a6",
    link: "https://www.linkedin.com/in/be-vichitra-3bb2a9407",
  },
  {
    title: "YouTube",
    desc: "Watch videos",
    icon: <FaYoutube size={16} />,
    bg: "bg-orange-100",
    iconColor: "text-red-500",
    color: "#ef4444",
    link: "https://www.youtube.com/@bevichitra",
  },
  {
    title: "About Us",
    desc: "Learn who we are",
    icon: <Info size={18} />,
    bg: "bg-zinc-100",
    iconColor: "text-zinc-500",
    color: "#71717a",
    link: "https://www.bevichitra.com/about-us",
  },
  {
    title: "WhatsApp",
    desc: "Chat with me directly",
    icon: <FaWhatsapp size={18} />,
    bg: "bg-green-100",
    iconColor: "text-green-500",
    color: "#22c55e",
    link: "https://wa.me/917385568102?text=Hey%20I%20want%20to%20know%20more%20about%20Bevichitra",
  },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group
            relative
            overflow-hidden
            p-6 rounded-2xl
            ${item.bg}
            border border-black/5
            flex items-center justify-between
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            hover:shadow-[0_6px_30px_rgba(0,0,0,0.08)]
            hover:scale-[1.02]
            hover:-translate-y-1
            transition-all duration-300 ease-out
          `}
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 z-10">
            <div
              className={`
                w-10 h-10 rounded-lg
                flex items-center justify-center
                bg-white/70 shadow-sm
                ${item.iconColor}
                transition-transform duration-300 ease-out
                group-hover:rotate-45
              `}
            >
              <div className="transition-transform duration-300 ease-out group-hover:-rotate-45">
                {item.icon}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 text-md font-medium">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <div className="z-10 rounded-full p-2 group-hover:bg-white/40 transition-all duration-300">
            <ArrowRight
              className="text-gray-400 group-hover:text-gray-700 transition-colors duration-300"
              size={16}
            />
          </div>

          {/* FLOATING DOT 1 */}
          <div
            className="floating-dot"
            style={{
              "--dot-color": item.color,
              "--delay": `${i * 1.2}s`,
            }}
          />

          {/* FLOATING DOT 2 */}
          <div
            className="floating-dot-2"
            style={{
              "--dot-color": item.color,
              "--delay": `${i * 1.7}s`,
            }}
          />
        </a>
      ))}
    </div>
  );
}