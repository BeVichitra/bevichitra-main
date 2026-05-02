"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { social } from "@/data/social";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* MAIN */}
        <div className="relative rounded-3xl mb-8 border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -left-20 w-[250px] h-[250px] bg-[var(--glow-blue)] blur-[120px] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 relative z-10">
            {/* BRAND */}
            <div className="space-y-6">
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-1 cursor-pointer"
              >
                <Image
                  src="/images/logoIcon.webp"
                  alt="Bevichitra Logo"
                  width={28}
                  height={28}
                  priority
                />

                <h2
                  style={{ fontFamily: "var(--font-logo)" }}
                  className="text-xl tracking-wider"
                >
                  vichitra
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-sm">
                Crafting modern digital products that help brands grow, scale,
                and stand out with clarity and purpose.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3 pt-2">
                {social.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className={`
          w-9 h-9 flex items-center justify-center rounded-xl
          border border-[var(--glass-border)]
          bg-[var(--glass-bg)] backdrop-blur-md
          ${item.color}
          transition
          ${item.bgHover}
          hover:text-white
          hover:shadow-[0_0_12px_currentColor]
        `}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* SERVICES (NOT CLICKABLE) */}
            <FooterColumn
              title="Services"
              items={[
                "Brand Strategy",
                "Content Writing",
                "Website Creation",
                "Video Production",
                "Social Content",
                "Social Handling",
              ]}
            />

            {/* COMPANY */}
            <FooterColumn
              title="Company"
              items={[
                { name: "About Us", link: "/about-us" },
                { name: "Our Work", link: "/our-work" },
                { name: "Blogs", link: "/blogs" },
                { name: "Contact Us", link: "/contact-us" },
              ]}
            />

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[var(--text-primary)] mb-5">
                Contact
              </h3>

              <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                <li className="flex gap-3 items-start">
                  <Mail size={16} />
                  <a
                    href="mailto:hello@bevichitra.com"
                    className="hover:text-[var(--color-yellow)] transition"
                  >
                    hello@bevichitra.com
                  </a>
                </li>

                <li className="flex gap-3 items-start">
                  <Phone size={16} />
                  <a
                    href="tel:+917385568102"
                    className="hover:text-[var(--color-yellow)] transition"
                  >
                    +91 73855 68102
                  </a>
                </li>

                <li className="flex gap-3 items-start">
                  <MapPin size={16} />
                  India
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-[var(--border)] my-12 relative z-10" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[var(--text-secondary)] relative z-10">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-[var(--text-primary)] font-medium">
                Bevichitra
              </span>
              . All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-[var(--color-blue)] transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[var(--color-blue)] transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= COLUMN ================= */
function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide uppercase text-[var(--text-primary)] mb-5">
        {title}
      </h3>

      <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
        {items.map((item, i) => {
          if (typeof item === "string") {
            // Non-clickable (correct UX)
            return (
              <li key={i}>
                <span className="cursor-default">{item}</span>
              </li>
            );
          }

          return (
            <li key={i}>
              <Link
                href={item.link}
                className="hover:text-[var(--color-blue)] transition"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
