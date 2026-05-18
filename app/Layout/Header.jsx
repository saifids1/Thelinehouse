"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaBars, FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/Pages/ContactUs" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-gray-950 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex flex-col lg:flex-row items-center justify-between gap-2">
          {/* Left */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="mailto:contact@linehouse.com"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaEnvelope className="text-green-400" />
              service@thelinenhouse.in
            </a>

            <span className="text-gray-600">|</span>

            <a
              href="tel:0000000"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              <FaPhoneAlt className="text-red-400" />
              +91 87885 92066 | +91 70833 11655
            </a>
          </div>

          {/* Right Social */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs tracking-wide uppercase">
              Follow Us
            </span>

            <Link
              href="https://www.facebook.com/share/1Ce5ic7eHG/"
              target="_blank"
              className="p-2 rounded-full hover:bg-white/10 hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-full hover:bg-white/10 hover:text-red-400 transition"
            >
              <FaYoutube />
            </Link>

            <Link
              href="https://www.instagram.com/thelinenhouse99?igsh=MXZvbzlrZXB1YzNpZw=="
              target="_blank"
              className="p-2 rounded-full hover:bg-white/10 hover:text-pink-400 transition"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-full hover:bg-white/10 hover:text-blue-500 transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-400">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Images/LH_Logo.png"
                alt="Linen House Logo"
                height={200}
                width={200}
                className="object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-black font-medium tracking-wide hover:text-green-700  transition relative"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <FaChevronDown className="text-xs opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                    )}

                    {/* underline effect */}
                    <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-green-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
                    {/* bg-gradient-to-r from-green-600 */}
                  </Link>

                  {/* Dropdown */}
                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      <div className="bg-white rounded-lg py-2 shadow-xl border border-gray-100 overflow-hidden">
                        {[
                          "Hospital Wears",
                          // "Industrial Wears",
                          "Separate Ophthalmology  linen ",
                          "Separate Gynecologist Linen",
                          "Separate Dental Linen",
                          "Corporate Wears",
                        ].map((subItem) => (
                          <Link
                            key={subItem}
                            href="/products/hospitalWears"
                            className="relative block px-5 py-3 pl-8 text-gray-600 font-medium transition-all duration-300
            hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1
            before:absolute before:left-0 before:top-0 before:h-full before:w-1
            before:bg-gradient-to-b before:from-green-600 before:to-red-500
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/Pages/ContactUs"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-red-600 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Get Quote
              </Link>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
            >
              <FaBars className="text-gray-700 text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-black font-medium hover:bg-gray-50 hover:text-green-700 transition"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:7385211655"
                  className="flex items-center gap-3 text-gray-600 hover:text-green-700 transition"
                >
                  <FaPhoneAlt className="text-green-600" />
                      +91 87885 92066 | +91 70833 11655 
                </a>

                <a
                  href="mailto:contact@feyrepharma.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition"
                >
                  <FaEnvelope className="text-red-600" />
                  contact@thelinehouse.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
