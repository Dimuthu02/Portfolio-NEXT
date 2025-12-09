"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const openmenu = () => setIsMenuOpen(true);
  const closemenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Header */}
      <div className="fixed top-0 right-0 w-11/12 -translate-y-[80%] -z-10">
        <Image
          src={assets.header_bg_color}
          alt="Background Header"
          className="w-full"
          width={600}
          height={200}
          priority
        />
      </div>

      <nav
        className={`w-full fixed px-5 py-4 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top" aria-label="Go to top">
          <Image
            src={assets.logo}
            width={120}
            height={40}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 backdrop-blur-sm shadow-sm border border-white/20">
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition-colors duration-200 px-2 py-1 rounded"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition-colors duration-200 px-2 py-1 rounded"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition-colors duration-200 px-2 py-1 rounded"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition-colors duration-200 px-2 py-1 rounded"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition-colors duration-200 px-2 py-1 rounded"
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <Image
              src={assets.moon_icon}
              alt="Dark mode"
              className="w-6"
              width={24}
              height={24}
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ovoFont hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              className="w-3"
              width={12}
              height={12}
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={openmenu}
            aria-label="Open menu"
          >
            <Image
              src={assets.menu_black}
              alt="Menu"
              className="w-6"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* MOBILE SIDE MENU - Now fully controlled by state */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closemenu}
          aria-hidden="true"
        />

        <ul
          className={`fixed top-0 right-0 bottom-0 w-64 h-screen bg-white z-50 flex flex-col gap-8 py-20 px-10 transition-transform duration-500 ease-in-out shadow-2xl ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={closemenu}
            aria-label="Close menu"
          >
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-6"
              width={24}
              height={24}
            />
          </button>

          {/* Mobile Nav Links */}
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition-colors duration-200 block py-2 px-3 rounded hover:bg-rose-50"
              href="#top"
            >
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition-colors duration-200 block py-2 px-3 rounded hover:bg-rose-50"
              href="#about"
            >
              About me
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition-colors duration-200 block py-2 px-3 rounded hover:bg-rose-50"
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition-colors duration-200 block py-2 px-3 rounded hover:bg-rose-50"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition-colors duration-200 block py-2 px-3 rounded hover:bg-rose-50"
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
