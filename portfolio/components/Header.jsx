"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-2 py-25 px-4">
      <style jsx>{`
        :global(.dark) div {
          color: white;
        }
        .button-primary {
          background-color: black;
          color: white;
        }
        :global(.dark) .button-primary {
          background-color: white;
          color: black;
        }
        .button-secondary {
          border-color: rgb(107, 114, 128);
        }
        :global(.dark) .button-secondary {
          border-color: rgba(255, 255, 255, 0.5);
        }
        :global(.dark) .button-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover"
          width={128}
          height={128}
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-1 ovoFont flex-wrap"
      >
        Hi! I'm Dimuthu Karunarathna
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        >
          <Image
            src={assets.hand_icon}
            alt="Wave"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </motion.span>
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] ovoFont leading-tight"
      >
        Full Stack developer based in Sri Lanka.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl mx-auto ovoFont text-lg sm:text-xl -mt-1"
      >
        Full-stack developer from Sri Lanka crafting modern, user-centered web
        applications with React and Next.js.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-primary px-8 sm:px-10 py-3 border border-white rounded-full flex items-center gap-2 transition-colors"
          href="#contact"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="Arrow"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#sample-resume.pdf"
          download
          className="button-secondary px-8 sm:px-10 py-3 border rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="Download"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
