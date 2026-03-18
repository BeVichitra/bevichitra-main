"use client";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import BookCallCard from "../ui/BookCallCard";

export default function Footer() {
  return (

    <>

    <footer className="relative overflow-hidden mt-20 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-main)]">
        {/* GRID PATTERN */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:44px_44px]" />

        {/* BRAND GLOW */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#ff6321]/15 blur-[160px]" />

        {/* SECONDARY GLOW */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-orange-300/20 blur-[140px]"/>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* BRAND */}
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                BeVichitra
              </h2>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
                Crafting modern digital products that help brands grow faster on
                the web.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4 pt-2">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Facebook, label: "Facebook" },
                ].map(({ Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={label}
                    className="p-2 rounded-lg border border-[var(--border-color)] hover:-translate-y-1 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200" >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-semibold mb-5 text-[var(--text-primary)]">
                Services
              </h3>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Brand Identity",
                  "SEO Optimization",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-semibold mb-5 text-[var(--text-primary)]">
                Company
              </h3>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  { name: "About Us", link: "/aboutUs" },
                  { name: "Projects", link: "/projects" },
                  { name: "Blogs", link: "/blogs" },
                  { name: "Contact", link: "/contactUs" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold mb-5 text-[var(--text-primary)]">
                Contact
              </h3>

              <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Mail size={16} />
                  <a
                    href="mailto:bevichitra1@gmail.com"
                    className="hover:text-[var(--color-primary)] transition break-all"
                  >
                    bevichitra1@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Phone size={16} />
                  <a
                    href="tel:+917385568102"
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    +91 73855 68102
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={16} />
                  India
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-[var(--border-color)] my-12" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[var(--text-muted)] text-center md:text-left">
              © {new Date().getFullYear()} BeVichitra. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
              <Link
                href="#"
                className="hover:text-[var(--color-primary)] transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="hover:text-[var(--color-primary)] transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    
    </>

      

  );
}
