import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 py-4 lg:px-8 xl:px-[8%] flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            width={120}
            height={40}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a className="ovoFont" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="ovoFont" href="#About">
              About me
            </a>
          </li>
          <li>
            <a className="ovoFont" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="ovoFont" href="#Work">
              My Work
            </a>
          </li>
          <li>
            <a className="ovoFont" href="#Contact">
              Contact me
            </a>
          </li>
        </ul>

        <div>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ovoFont"
            href="#Contact"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              width={12}
              height={12}
              className="w-3"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
