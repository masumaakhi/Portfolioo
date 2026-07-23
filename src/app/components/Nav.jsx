"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null); // 👈 track hover

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/#about" },
    { label: "Tech Stack", path: "/#tech" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="bg-[#334155] text-white pt-2 fixed top-0 w-full z-50">
      <div className="max-w-[83rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href={"/"}><Image  src={assets.logo3} alt="logo" width={90} height={90} /></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:mr-[3rem] lg:mr-0 items-center space-x-[3rem] text-[1.2rem] ps-10">
          {navItems.map((item) => {
            const isHovered = hovered === item.label;
            const textColor =
              isHovered
                ? "text-[#38BDF8]"
                : hovered
                ? "text-white"
                : item.label === "Home"
                ? "text-[#38BDF8]"
                : "text-white";

            return (
              <li
                key={item.label}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.path}
                  className={`transition-all ${textColor}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden mr-[2rem]">
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 pb-6 flex flex-col space-y-4 px-4 text-[1.2rem]">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`transition-all ${
                  item.label === "Home"
                    ? "text-[#38BDF8]"
                    : "hover:text-[#38BDF8]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
