import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovoFont">Introduction</h4>
      <h2 className="text-center text-5xl ovoFont">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
            width={320}
            height={320}
          />
        </div>
        <div className="flex-1">
          {/* About content will go here */}

          <p className="mb-10 max-w-2xl ovoFont">
            Passionate full-stack developer from Sri Lanka crafting modern web
            applications. I specialize in React, Next.js, and Node.js to build
            scalable, user-focused solutions that deliver exceptional digital
            experiences.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-white hover:bg-amber-50 hover:-translate-y-1 duration-500 shadow-sm hover:shadow-lg transition-all ease-out active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 hover:border-amber-200"
                key={index}
                tabIndex={0}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 ovoFont">Tools | use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all ease-out hover:border-gray-300 active:scale-95"
                key={index}
              >
                <Image
                  src={tool}
                  alt="Tool"
                  className="w-5 sm:w-7"
                  
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About