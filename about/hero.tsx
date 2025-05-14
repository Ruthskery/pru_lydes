import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import lydes from '../public/src/aboutme.jpg';
import { montserrat, roboto } from '../styles/font';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaFacebookMessenger } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="bg-[#14110F] dark:bg-[#FCF8EE] px-6 py-14 pt-12 md:px-20 md:pt-35 text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#E1B951] to-[#96700f] bg-clip-text text-transparent`}
        >
          About Me
        </motion.h1>
      </div>

      <hr className="border-t-2 border-white dark:border-[#14110F] mb-10 w-full" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center md:pr-20">
        {/* Left - Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl p-4 flex justify-center"
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
        <div className="space-y-5 md:pl-6">
          {/* Name with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className={`${montserrat.className} text-white dark:text-[#14110F] text-3xl sm:text-4xl md:text-[50px] font-extrabold mb-0 text-center sm:text-left`}>
              <Typewriter
                words={["Lydelyn Romero Quitong"]}
                typeSpeed={70}
                deleteSpeed={50}
                cursor
                cursorStyle="_"
              />
            </h2>
          </motion.div>

          {/* Subtitle with Gradient Fade-In */}
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
            className={`${roboto.className} text-m sm:text-xl md:text-[30px] font-medium italic text-center sm:text-left 
              bg-gradient-to-r from-[#E1B951] via-[#ffffff] to-[#96700f] dark:from-[#14110F] dark:via-[#E1B951] dark:to-[#14110F] bg-clip-text text-transparent bg-[length:200%_auto]`}
          >
            Trusted Financial Consultant | Pru Life UK
          </motion.h3>

          <div className='md:pl-6 md:pr-15'>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className={`${roboto.className} text-white dark:text-[#14110F] text-base md:text-[20px] leading-relaxed text-justify md:mb-3`}
            >
              Lydes, a top financial consultant at Pru Life UK, is recognized nationwide for her expertise in strategic financial planning. With years of experience and a deep passion for empowering others, she has helped countless individuals and families take control of their finances and build secure, meaningful futures.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={`${roboto.className} text-white dark:text-[#14110F] text-base md:text-[20px] leading-relaxed text-justify`}
            >
              Beyond her professional accolades, Lydes believes in the power of education and connection. She takes pride in making financial planning simple, accessible, and meaningful. With every client, her mission remains the same: to guide, to inspire, and to deliver a future that feels secure and well-prepared.
            </motion.p>
          </div>

          {/* Quote Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-6 flex items-start gap-4"
          >
            <div className="w-[2px] bg-white dark:bg-[#14110F] rounded-sm h-[70px]" />
            <div>
              <p className={`${roboto.className} italic text-base md:text-lg text-[#D9D9D9] dark:text-[#14110F]`}>
                “Your dreams matter. Let’s turn them into a plan—and that plan into peace of mind.”
              </p>
              <p className={`${roboto.className} text-sm md:text-base mt-1 text-[#D9D9D9] dark:text-[#14110F]`}>
                — Lydelyn Romero Quitong
              </p>
            </div>
          </motion.div>

         {/* Social Icons with Staggered Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-6 mt-10 cursor-pointer justify-center md:justify-start"
          >
            {[
              { Icon: FaFacebookF, href: 'https://facebook.com' },
              { Icon: FaInstagram, href: 'https://instagram.com' },
              { Icon: FaTelegramPlane, href: 'https://telegram.org' },
              { Icon: FaLinkedinIn, href: 'https://linkedin.com' },
              { Icon: FaFacebookMessenger, href: 'https://messenger.com' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <a 
                  href={item.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition duration-200"
                >
                  <item.Icon 
                    className="text-white dark:text-[#14110F] text-3xl sm:text-4xl md:text-5xl 
                    hover:text-[#E1B951]"  // Apply gold color on hover
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <hr className="border-t-2 border-white dark:border-[#14110F] mt-14" />
    </section>
  );
};

export default Hero;