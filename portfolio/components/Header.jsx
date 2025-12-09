import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image
          src={assets.profile_img}
          alt="Header Image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 ovoFont">
        Hi! I'm Dimuthu Karunarathna{" "}
        <Image
          src={assets.hand_icon}
          alt="Header Image"
          className="w-6"
        ></Image>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] ovoFont">
        Full Stack developer based in Sri Lanka.
      </h1>
      <p className="max-w-2xl mx-auto ovoFont">
        I am a passionate and dedicated full-stack developer with expertise in
        building dynamic and responsive web applications. I love to create
        innovative solutions that make a difference.
      </p>

      <div>
        <a href="#contact">
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="Header Image"
            className="w-4"
          />
        </a>

        <a href="#sample">
          my resume
          <Image
            src={assets.download_icon}
            alt="Header Image"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Header
