"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20" ref={ref}>
      <style jsx>{`
        :global(.dark) .card-hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        :global(.dark) .card-hover:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-2 text-lg ovoFont"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-center text-5xl ovoFont"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
            width={320}
            height={320}
          />
        </motion.div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-10 max-w-2xl ovoFont"
          >
            Passionate full-stack developer from Sri Lanka crafting modern web
            applications. I specialize in React, Next.js, and Node.js to build
            scalable, user-focused solutions that deliver exceptional digital
            experiences.
          </motion.p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-hover border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-white hover:bg-amber-50 shadow-sm hover:shadow-lg transition-all"
              >
                <Image src={item.icon} alt={item.title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.li>
            ))}
          </ul>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="my-6 text-gray-700 ovoFont"
          >
            Tools I use
          </motion.h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.05 }}
                whileHover={{ y: -5, rotate: 5 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
