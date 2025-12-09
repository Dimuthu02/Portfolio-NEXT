import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {

  const sidemenuref=useRef()
const openmenu=()=>{
  sidemenuref.current.style.transform="translateX(-16rem)"
}
const closemenu=()=>{
  sidemenuref.current.style.transform = "translateX(-16rem)";
}

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full"></Image>
      </div>

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

        <ul className=" hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 ">
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

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Menu" className="w-6" />
          </button>
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

          <button className="block md:hidden ml-3" onClick={openmenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        <ul
          ref={sidemenuref}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6 " onClick={closemenu}>
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="ovoFont" onClick={closemenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="ovoFont" onClick={closemenu} href="#About">
              About me
            </a>
          </li>
          <li>
            <a className="ovoFont" onClick={closemenu} href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="ovoFont" onClick={closemenu} href="#Work">
              My Work
            </a>
          </li>
          <li>
            <a className="ovoFont" onClick={closemenu} href="#Contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
