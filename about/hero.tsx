import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import lydes from '../public/src/aboutme.jpg';
import { montserrat, roboto } from '../styles/font';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaFacebookMessenger } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="bg-[#14110F] dark:bg-[#FCF8EE] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-14 lg:py-30 text-white">
      
      {/* Title */}
      <div className="text-center mb-10 sm:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#E1B951] to-[#96700f] bg-clip-text text-transparent`}
        >
          About Me
        </motion.h1>
      </div>

      <hr className="border-t-2 border-white dark:border-[#14110F] mb-8 sm:mb-10 w-full" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src={lydes}
            alt="Lydelyn Romero Quitong"
            className="rounded-lg object-cover"
            width={400}
            height={400}
            priority
          />
        </motion.div>

        {/* Right - Content */}
        <div className="space-y-5 md:space-y-6">
          
          {/* Name Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className={`${montserrat.className} text-white dark:text-[#14110F] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center md:text-left`}>
              <Typewriter
                words={["Lydelyn Romero Quitong"]}
                typeSpeed={70}
                deleteSpeed={50}
                cursor
                cursorStyle="."
              />
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
            animate={{ 
              opacity: 1, 
              backgroundPosition: "100% 50%",
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 1 }, 
              backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
            }}
            className={`${roboto.className} text-base sm:text-lg md:text-xl xl:text-3xl font-medium italic text-center md:text-left 
              bg-gradient-to-r from-[#E1B951] via-[#ffffff] to-[#96700f] dark:from-[#14110F] dark:via-[#E1B951] dark:to-[#14110F] 
              bg-clip-text text-transparent bg-[length:200%_auto]`}
          >
            Trusted Financial Consultant | Pru Life UK
          </motion.h3>

          {/* Description */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className={`${roboto.className} text-sm sm:text-base lg:text-lg xl:text-xl text-white dark:text-[#14110F] leading-relaxed text-justify mb-4`}
            >
              Lydes, a top financial consultant at Pru Life UK, is recognized nationwide for her expertise in strategic financial planning. With years of experience and a deep passion for empowering others, she has helped countless individuals and families take control of their finances and build secure, meaningful futures.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={`${roboto.className} text-sm sm:text-base lg:text-lg xl:text-xl text-white dark:text-[#14110F] leading-relaxed text-justify`}
            >
              Beyond her professional accolades, Lydes believes in the power of education and connection. She takes pride in making financial planning simple, accessible, and meaningful.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-6 flex items-start gap-4"
          >
            <div className="w-[2px] bg-white dark:bg-[#14110F] rounded-sm h-[50px] sm:h-[60px] xl:h-[70px]" />
            <div>
              <p className={`${roboto.className} italic text-sm sm:text-base xl:text-lg text-[#D9D9D9] dark:text-[#14110F]`}>
                “Your dreams matter. Let’s turn them into a plan—and that plan into peace of mind.”
              </p>
              <p className={`${roboto.className} text-xs sm:text-sm xl:text-base mt-1 text-[#D9D9D9] dark:text-[#14110F]`}>
                — Lydelyn Romero Quitong
              </p>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start"
          >
            {[FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaFacebookMessenger].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: "#E1B951" }}
              >
                <Icon className="text-white dark:text-[#14110F] text-2xl sm:text-3xl md:text-4xl xl:text-5xl transition duration-200" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <hr className="border-t-2 border-white dark:border-[#14110F] mt-12 sm:mt-14" />
    </section>
  );
};

export default Hero;
