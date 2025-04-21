import React from 'react';
import Image from 'next/image';
import lydes from '../public/src/aboutme.jpg';
import { montserrat, roboto } from '../styles/font';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaFacebookMessenger } from 'react-icons/fa';

const Hero = () => {
  return (
      <section className="bg-[#14110F] px-6 py-14 pt-35 md:px-20 md:pt-35 text-white">
     
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#E1B951] to-[#96700f] bg-clip-text text-transparent`}>
          About Me
        </h1>
      </div>

      <hr className="border-t-2 border-white mb-10 w-full" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center md:pr-20">
        {/* Left - Image Container */}
        <div className="rounded-xl p-4 flex justify-center">
          <Image
            src={lydes}
            alt="Lydelyn Romero Quitong"
            className="rounded-lg object-cover"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* Right - Content */}
        <div className="space-y-5 md:pl-6">
          <h2 className={`${montserrat.className} text-3xl sm:text-4xl md:text-[60px] font-extrabold mb-0 text-center sm:text-left`}>
            Lydelyn Romero Quitong
          </h2>
          <h3 className={`${roboto.className} text-m sm:text-xl md:text-[30px] font-medium text-[#E1B951] italic text-center sm:text-left`}>
            Trusted Financial Consultant | Pru Life UK
          </h3>
          <div className='md:pl-6 md:pr-15'>
            <p className={`${roboto.className} text-base md:text-[20px] leading-relaxed text-justify md:mb-3`}>
              Lydes, a top financial consultant at Pru Life UK, is recognized nationwide for her expertise in strategic financial planning. With years of experience and a deep passion for empowering others, she has helped countless individuals and families take control of their finances and build secure, meaningful futures.
            </p>
            <p className={`${roboto.className} text-base md:text-[20px] leading-relaxed text-justify`}>
              Beyond her professional accolades, Lydes believes in the power of education and connection. She takes pride in making financial planning simple, accessible, and meaningful. With every client, her mission remains the same: to guide, to inspire, and to deliver a future that feels secure and well-prepared.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-4">
            {/* Vertical Line */}
            <div className="w-[2px] bg-white rounded-sm h-[70px]" />

            {/* Quote Text */}
            <div>
              <p className={`${roboto.className} italic text-base md:text-lg text-[#D9D9D9]`}>
                “Your dreams matter. Let’s turn them into a plan—and that plan into peace of mind.”
              </p>
              <p className={`${roboto.className} text-sm md:text-base mt-1`}>
                — Lydelyn Romero Quitong
              </p>
            </div>
          </div>


          {/* Social Icons */}
          <div className="flex space-x-10 mt-15 cursor-pointer justify-center md:justify-start">
            <FaFacebookF className="text-white text-5xl hover:text-[#E1B951] transition duration-200" />
            <FaInstagram className="text-white text-5xl hover:text-[#E1B951] transition duration-200" />
            <FaTelegramPlane className="text-white text-5xl hover:text-[#E1B951] transition duration-200" />
            <FaLinkedinIn className="text-white text-5xl hover:text-[#E1B951] transition duration-200" />
            <FaFacebookMessenger className="text-white text-5xl hover:text-[#E1B951] transition duration-200" />
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-white mt-14" />
    </section>
  );
};

export default Hero;
