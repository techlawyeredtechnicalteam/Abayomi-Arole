"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-gray-50 fixed w-full z-20 text-[#230562] shadow-lg py-4 px-8 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo and Name */}
        <Link href="/" className="">
          <img
            src="/logo.png"
            alt="Honoredge Legal Practice Logo"
            className="h-28 md:h-32 object-cover"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {["About", "Attorneys", "Practice Areas", "Blog", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={
                  item === "Practice Areas"
                    ? "/#practice-areas"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="relative group font-semibold tracking-wide"
              >
                {item}
                {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#230562] transition-all group-hover:w-full"></span> */}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#230562] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 py-4 bg-gray-50 rounded-lg text-[#230562] space-y-4 transition-all">
          <Link href="/" className="font-semibold block">
            Home
          </Link>
          {["About", "Attorneys", "Practice Areas", "Blog", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={
                  item === "Practice Areas"
                    ? "/#practice-areas"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="block font-semibold"
                onClick={closeMenu}
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
