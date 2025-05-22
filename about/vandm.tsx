import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { montserrat, roboto } from '../styles/font';
import vandm from '../public/src/vandm.jpg';

const Vandm = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#14110F] dark:bg-[#FCF8EE] px-4 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl w-full"
      >
        {/* Mission Card */}
        <motion.div
          variants={item}
          className="min-h-[350px] bg-gradient-to-bl from-[#E1B951] to-[#222] p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-center"
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
          }}
        >
          <motion.h2
            className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center mb-4`}
            whileHover={{ color: "#E1B951" }}
          >
            Mission
          </motion.h2>
          <motion.p
            className={`${roboto.className} text-sm sm:text-base md:text-lg lg:text-xl text-white text-center font-light`}
            whileHover={{ scale: 1.02 }}
          >
            To empower Filipino families through personalized financial guidance that promotes stability, growth, and long-term security. Through Pru Life UK, I am dedicated to delivering exceptional service that helps clients achieve their goals with confidence.
          </motion.p>
        </motion.div>

        {/* Image Card */}
        <motion.div
          variants={imageItem}
          className="w-full max-w-full h-hidden sm:h-[300px] md:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-2xl"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 25px 50px -12px rgba(225, 185, 81, 0.3)"
          }}
        >
          <Image
            src={vandm}
            alt="Main Achievement"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Vision Card */}
        <motion.div
          variants={item}
          className="min-h-[350px] bg-gradient-to-br from-[#E1B951] to-[#222] p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-center"
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
          }}
        >
          <motion.h2
            className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center mb-4`}
            whileHover={{ color: "#E1B951" }}
          >
            Vision
          </motion.h2>
          <motion.p
            className={`${roboto.className} text-sm sm:text-base md:text-lg lg:text-xl text-white text-center font-light`}
            whileHover={{ scale: 1.02 }}
          >
            To build a financially empowered community by being a trusted leader in financial consulting—helping individuals and families create lasting prosperity, peace of mind, and a secure future for generations.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Vandm;
