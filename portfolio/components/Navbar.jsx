"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openmenu = () => setIsMenuOpen(true);
  const closemenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Background Header */}
      <div className="fixed top-0 right-0 w-11/12 -translate-y-[80%] -z-10">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
          width={600}
          height={200}
        />
      </div>

      <nav className="w-full fixed px-5 py-4 lg:px-8 xl:px-[8%] flex items-center justify-between z-50">
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            width={120}
            height={40}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 backdrop-blur-sm">
          <li>
            <a className="ovoFont hover:text-rose-600 transition" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="ovoFont hover:text-rose-600 transition" href="#About">
              About me
            </a>
          </li>
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition"
              href="#Services"
            >
              Services
            </a>
          </li>
          <li>
            <a className="ovoFont hover:text-rose-600 transition" href="#Work">
              My Work
            </a>
          </li>
          <li>
            <a
              className="ovoFont hover:text-rose-600 transition"
              href="#Contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Dark mode" className="w-6" />
          </button>

          <a
            href="#Contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ovoFont hover:bg-rose-600 hover:border-rose-600 hover:text-white transition"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openmenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* MOBILE SIDE MENU - Now fully controlled by state */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closemenu}
        />

        <ul
          className={`fixed top-0 right-0 bottom-0 w-64 h-screen bg-rose-50 z-50 flex flex-col gap-8 py-20 px-10 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button className="absolute right-6 top-6" onClick={closemenu}>
            <Image src={assets.close_black} alt="Close" className="w-6" />
          </button>

          {/* Mobile Nav Links */}
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition"
              href="#top"
            >
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition"
              href="#About"
            >
              About me
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition"
              href="#Services"
            >
              Services
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition"
              href="#Work"
            >
              My Work
            </a>
          </li>
          <li className="list-none">
            <a
              onClick={closemenu}
              className="ovoFont text-xl hover:text-rose-600 transition"
              href="#Contact"
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
