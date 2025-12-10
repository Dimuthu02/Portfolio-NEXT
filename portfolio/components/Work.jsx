import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovoFont">My portfolio</h4>
      <h2 className="text-center text-5xl ovoFont">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ovoFont">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
              <div>
                <h2 className="font-semibold ovoFont">{project.title}</h2>
                <p className="text-sm text-gray-700 ovoFont">
                  {project.description}
                </p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#work"
        className="mx-auto mt-20 flex w-max items-center justify-center gap-2 rounded-full border border-gray-700 bg-transparent px-10 py-3 text-gray-700 transition-all duration-500 hover:border-gray-900 hover:shadow-lg ovoFont text-lg font-medium"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          width={16}
          height={16}
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
