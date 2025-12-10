"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Fotter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <style jsx>{`
        :global(.dark) .logo-dark {
          filter: brightness(0) invert(1);
        }
      `}</style>

      <div className="text-center">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2 logo-dark"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail" className="w-6" />
          greatstackdev@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 William Mark. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {["GitHub", "LinkedIn", "Twitter"].map((social, i) => (
            <motion.li
              key={social}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                target="_blank"
                href={`https://${social.toLowerCase()}.com/in/greatstackdev`}
                className="hover:text-rose-600 transition"
              >
                {social}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Fotter;
