"use client";

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20" ref={ref}>
      <style jsx>{`
        :global(.dark) .service-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        :global(.dark) .service-card:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-2 text-lg ovoFont"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-center text-5xl ovoFont"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 ovoFont"
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {serviceData.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="service-card group border border-gray-200 rounded-xl px-8 py-12 cursor-pointer transition-all bg-white hover:shadow-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm"
            >
              <Image
                src={service.icon}
                alt={service.title}
                className="w-10 h-10"
              />
            </motion.div>

            <h3 className="text-xl font-semibold my-5 text-gray-800 ovoFont">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed ovoFont">
              {service.description}
            </p>

            <motion.a
              whileHover={{ x: 5 }}
              href={service.link}
              className="inline-flex items-center gap-2 text-sm mt-7 font-medium text-gray-700 hover:text-blue-600 transition-all"
            >
              Read more
              <Image alt="Arrow" src={assets.right_arrow} className="w-3" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
