"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/NavContext";
import { NavItems } from "@/data/NavData";
import Button from "../ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen } = useMenu();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl transition-all duration-500 ${showNav ? "top-6 opacity-100" : "-top-32 opacity-0"}`}>
        <div className="bg-(--bg-main) backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
          <div className="flex justify-between items-center px-5 py-3 border-b border-(--border-color)">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <div className="p-1 bg-(--bg-main) mr-2 rounded-xl border-3 border-(--logo-border)">
                <Image
                  src="/images/logoIcon.png"
                  alt="Logo"
                  width={35}
                  height={35}
                />
              </div>

              <Image
                src="/images/logoName.png"
                alt="Logo"
                width={100}
                height={100}
                className="pb-2"
              />
            </div>

            {/* Menu Button */}
            <div className="border-l border-r px-8 py-2 border-(--border-color)">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`absolute text-3xl text-(--text-primary) transition-all duration-500 ${
                    menuOpen
                      ? "opacity-0 scale-75 rotate-90"
                      : "opacity-100 scale-100 rotate-0"
                  }`}
                >
                  ☰
                </span>

                <span
                  className={`absolute text-2xl text-(--text-primary) transition-all duration-500 ${
                    menuOpen
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 -rotate-90"
                  }`}
                >
                  ✕
                </span>
              </button>
            </div>

            <Button className="hidden sm:block" variant="dark">
              Get started
            </Button>
          </div>

          {/* Expanded Menu */}
          <div
            className={`px-5 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen ? "max-h-[600px] py-5" : "max-h-0 py-0"
            }`}
          >
            <div className="space-y-5">
              {/* Links */}
              <div className="space-y-4 text-xl text-(--text-primary)">
                {NavItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-(--border-color) pb-3 transition-colors duration-200 hover:text-(--color-primary) ${
                      pathname === item.link ? "text-(--color-primary)" : ""
                    } stagger-item ${menuOpen ? "show" : ""}`}
                    style={{ animationDelay: `${item.id * 0.05}s` }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Bottom */}
              <div className="flex justify-between items-end pt-3">
                {/* Social */}
                <div className="flex gap-2 text-(--text-primary)">
                  {["f", "ig", "in", "x"].map((icon, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 bg-(--bg-tertiary) rounded-lg flex items-center justify-center stagger-item ${
                        menuOpen ? "show" : ""
                      }`}
                      style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Copyright */}
                <p className="text-sm text-(--text-muted) flex flex-col items-start sm:flex-row sm:items-center sm:gap-1">
                  <span>© 2026</span>
                  <span>beVichitra</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible z-40" : "opacity-0 invisible"
        }`}
      />
    </>
  );
}
