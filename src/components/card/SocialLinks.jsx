"use client";

import { Globe, ArrowRight, Info } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const links = [
  {
    title: "My Website",
    desc: "Visit my portfolio",
    icon: <Globe size={20} />,
    color: "bg-gradient-to-r from-red-500 to-red-600",
    shadow: "rgba(185,28,28,0.8)", // darker red
    link: "/",
    isExternal: false,
    box: "bg-black/20",
  },
  {
    title: "LinkedIn",
    desc: "Connect professionally",
    icon: <FaLinkedinIn size={18} />,
    color: "bg-[#0077B5]",
    shadow: "rgba(0,87,133,0.8)",
    link: "https://www.linkedin.com/in/be-vichitra-3bb2a9407?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    isExternal: true,
    box: "bg-black/20",
  },
  {
    title: "Instagram",
    desc: "Follow me on Instagram",
    icon: <FaInstagram size={18} />,
    color: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    shadow: "rgba(129,52,175,0.8)",
    link: "https://www.instagram.com/be.vichitra",
    isExternal: true,
    box: "bg-black/20",
  },
  {
    title: "Facebook",
    desc: "Follow on Facebook",
    icon: <FaFacebookF size={18} />,
    color: "bg-[#1877F2]",
    shadow: "rgba(10,60,150,0.8)",
    link: "https://facebook.com",
    isExternal: true,
    box: "bg-black/20",
  },
  {
    title: "YouTube",
    desc: "Watch my videos",
    icon: <FaYoutube size={18} />,
    color: "bg-[#FF0000]",
    shadow: "rgba(153,0,0,0.8)",
    link: "https://youtube.com",
    isExternal: true,
    box: "bg-black/20",
  },
  {
    title: "Twitter",
    desc: "Follow on Twitter",
    icon: <FaTwitter size={18} />,
    color: "bg-black",
    shadow: "rgba(10,10,10,0.8)",
    link: "https://x.com/BeVichitra",
    isExternal: true,
    box: "bg-white/10",
  },
  {
    title: "About Us",
    desc: "Learn more about us",
    icon: <Info size={18} />,
    color: "bg-gradient-to-r from-cyan-400 to-cyan-500",
    shadow: "rgba(6,182,212,0.8)", // darker cyan
    link: "/about-us",
    isExternal: false,
    box: "bg-black/20",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-12 space-y-5 w-full max-w-md mx-auto">
      {links.map((item, i) => (
        <a
          key={i}
          className={`p-5 rounded-2xl  ${item.color}
          flex items-center justify-between cursor-pointer
          transition duration-200
          hover:translate-y-[2px]
          active:translate-y-[4px]`}
          style={{
            boxShadow: `5px 8px 0px ${item.shadow}`,
          }}
          href={item.link}
          target={item.isExternal ? "_blank" : undefined}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            {/* ICON BOX */}
            <div
              className={`w-12 h-12 rounded-xl ${item.box}  flex items-center justify-center text-white`}
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
            <ArrowRight size={18} />
          </div>
        </a>
      ))}
    </div>
  );
}
