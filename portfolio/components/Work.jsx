"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20" ref={ref}>
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-2 text-lg ovoFont"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-center text-5xl ovoFont"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 ovoFont"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {workData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              className="absolute inset-0 bg-black transition-opacity"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between z-10"
            >
              <div>
                <h2 className="font-semibold ovoFont">{project.title}</h2>
                <p className="text-sm text-gray-700 ovoFont">
                  {project.description}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300"
              >
                <Image src={assets.send_icon} alt="send" className="w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#work"
        className="mx-auto mt-20 flex w-max items-center gap-2 rounded-full border border-gray-700 px-10 py-3 text-gray-700 hover:shadow-lg ovoFont"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Arrow"
          width={16}
          height={16}
          className="w-4"
        />
      </motion.a>
    </div>
  );
};

export default Work;
