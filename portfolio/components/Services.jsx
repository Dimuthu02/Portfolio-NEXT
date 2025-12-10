import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovoFont">What I offer</h4>
      <h2 className="text-center text-5xl ovoFont">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ovoFont">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group relative border border-gray-200 rounded-xl px-8 py-12 cursor-pointer transition-all duration-500 hover:duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 hover:border-transparent hover:scale-[1.02] overflow-hidden"
          >
            {/* Subtle background effect on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 
            group-hover:from-blue-50/30 group-hover:to-purple-50/20 transition-all duration-500"
            />

            {/* Icon with hover animation */}
            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center p-3 rounded-xl 
                bg-gradient-to-br from-gray-50 to-white group-hover:from-blue-50 
                group-hover:to-white shadow-sm group-hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold my-5 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 ovoFont">
                {title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 ovoFont">
                {description}
              </p>

              {/* Animated "Read more" link */}
              <a
                href={link}
                className="inline-flex items-center gap-2 text-sm mt-7 font-medium 
                    text-gray-700 group-hover:text-blue-600 transition-all duration-300 
                    group-hover:gap-3"
              >
                Read more
                <span
                  className="inline-flex items-center justify-center w-6 h-6 
                    rounded-full bg-gray-100 group-hover:bg-blue-100 transition-all duration-300"
                >
                  <Image
                    alt="Right arrow"
                    src={assets.right_arrow}
                    className="w-3 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </div>

            {/* Bottom border effect */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 
            bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-full 
            group-hover:w-3/4 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services