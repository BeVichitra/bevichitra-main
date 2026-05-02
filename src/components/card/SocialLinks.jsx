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
    title: "Instagram",
    desc: "Follow for daily updates",
    icon: <FaInstagram />,
    bg: "bg-pink-100",
    iconColor: "text-pink-500",
    link: "https://www.instagram.com/be.vichitra/",
  },
  {
    title: "Facebook",
    desc: "Join the community",
    icon: <FaFacebookF />,
    bg: "bg-blue-100",
    iconColor: "text-blue-500",
    link: "https://www.facebook.com/profile.php?id=61586133304557",
  },
  {
    title: "Twitter / X",
    desc: "Thoughts & updates",
    icon: <FaTwitter />,
    bg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    link: "https://x.com/BeVichitra",
  },
  {
    title: "Website",
    desc: "Visit portfolio",
    icon: <Globe />,
    bg: "bg-purple-100",
    iconColor: "text-purple-500",
    link: "https://www.bevichitra.com",
  },
  {
    title: "YouTube",
    desc: "Watch videos",
    icon: <FaYoutube />,
    bg: "bg-orange-100",
    iconColor: "text-red-500",
    link: "https://www.youtube.com/@bevichitra",
  },
  {
    title: "LinkedIn",
    desc: "Connect professionally",
    icon: <FaLinkedinIn />,
    bg: "bg-teal-100",
    iconColor: "text-blue-500",
    link: "https://www.linkedin.com/in/be-vichitra-3bb2a9407",
  },
  {
    title: "WhatsApp",
    desc: "Chat with me directly",
    icon: <FaWhatsapp />,
    bg: "bg-green-100",
    iconColor: "text-green-500",
    link: "https://wa.me/917385568102?text=Hey%20I%20want%20to%20know%20more%20about%20Bevichitra",
  },
  {
    title: "About Us",
    desc: "Learn who we are",
    icon: <Info />,
    bg: "bg-yellow-100", // 🔥 replace mauve (not default)
    iconColor: "text-yellow-600",
    link: "https://www.bevichitra.com/about-us",
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
            p-6 rounded-2xl
            ${item.bg}
            border border-black/3
            flex items-center justify-between
            hover:scale-[1.02]
            transition
            ${item.span || ""}
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            hover:shadow-[0_6px_30px_rgba(0,0,0,0.08)]
            hover:scale-[1.02] hover:-translate-y-1
            transition-all duration-300 ease-out
            
          `}
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                bg-white/70 shadow-sm
                ${item.iconColor}
                transition-transform duration-300 ease-out
                group-hover:rotate-45
                
                
              `}
            >
              <div className="transition-transform duration-200 ease-out group-hover:-rotate-45">
                {item.icon}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 text-md font-medium">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
          <div className=" group-hover:bg-white/40 rounded-full p-2">
            <ArrowRight
              className="text-gray-400 group-hover:text-grey-600"
              size={16}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
