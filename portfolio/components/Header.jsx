import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-2 py-25 px-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Header Image"
          className="rounded-full w-32 h-32 object-cover"
          width={128}
          height={128}
        />
      </div>
      <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-1 ovoFont flex-wrap">
        Hi! I'm Dimuthu Karunarathna{" "}
        <Image
          src={assets.hand_icon}
          alt="Waving hand icon"
          className="w-6 h-6"
          width={24}
          height={24}
        ></Image>
      </h3>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] ovoFont leading-tight">
        Full Stack developer based in Sri Lanka.
      </h1>
      <p className="max-w-2xl mx-auto ovoFont text-lg sm:text-xl -mt-1">
        Full-stack developer from Sri Lanka crafting modern, user-centered web
        applications with React and Next.js.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          className="px-8 sm:px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition-colors duration-200"
          href="#contact"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </a>

        <a
          href="#sample-resume.pdf"
          download
          className="px-8 sm:px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
