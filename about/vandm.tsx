import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { montserrat, roboto } from '../styles/font';
import vandm from '../public/src/vandm.jpg';

const Vandm = () => {
  // Animation variants
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
    <div className="w-full min-h-[70vh] flex justify-center items-center bg-[#14110F] dark:bg-[#FCF8EE] px-4 py-16">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row items-center gap-6 md:gap-10 md:mt-10 max-w-7xl w-full"
      >
        {/* Mission Card */}
        <motion.div
          variants={item}
          className="flex-1 bg-gradient-to-bl from-[#E1B951] to-[#222] p-6 md:p-10 rounded-xl md:rounded-l-xl md:rounded-r-none shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          whileHover={{ 
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
          }}
        >
          <motion.h2 
            className={`${montserrat.className} text-4xl md:text-6xl font-black text-white text-center mb-4`}
            whileHover={{ color: "#E1B951" }}
          >
            Mission
          </motion.h2>
          <motion.p 
            className={`${roboto.className} text-base md:text-xl text-white text-center font-light`}
            whileHover={{ scale: 1.02 }}
          >
            To empower Filipino families through personalized financial guidance that promotes stability, growth, and long-term security. Through Pru Life UK, I am dedicated to delivering exceptional service that helps clients achieve their goals with confidence.
          </motion.p>
        </motion.div>

        {/* Image Card */}
        <motion.div
          variants={imageItem}
          className="flex-1 w-full max-w-[400px] h-[300px] md:h-[500px] relative rounded-xl overflow-hidden shadow-2xl"
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
          className="flex-1 bg-gradient-to-br from-[#E1B951] to-[#222] p-6 md:p-10 rounded-xl md:rounded-r-xl md:rounded-l-none shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          whileHover={{ 
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
          }}
        >
          <motion.h2 
            className={`${montserrat.className} text-4xl md:text-6xl font-black text-white text-center mb-4`}
            whileHover={{ color: "#E1B951" }}
          >
            Vision
          </motion.h2>
          <motion.p 
            className={`${roboto.className} text-base md:text-xl text-white text-center font-light`}
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