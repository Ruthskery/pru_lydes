import React from 'react';
import { motion } from 'framer-motion';

function Last() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  const buttonItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <div className='w-full min-h-[100vh] bg-[#14110F] dark:bg-[#FCF8EE] flex justify-center items-center'>
      <motion.div 
        className='flex flex-col gap-6 sm:gap-8 md:gap-10 text-center mx-4 sm:mx-10 md:mx-20 py-10'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        {/* Main Heading */}
        <motion.h1 
          variants={item}
          className='text-white dark:text-[#14110F] text-4xl sm:text-5xl md:text-7xl font-semibold'
        >
          With PruLydes, you&apos;re not just insured—you&apos;re <motion.span 
            className='text-[#E1B951]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            empowered
          </motion.span> to grow, protect, and thrive.
        </motion.h1>

        {/* Subheading */}
        <motion.h2 
          variants={item}
          className='text-white dark:text-[#14110F] text-2xl sm:text-3xl md:text-4xl mt-6'
        >
          Why choose PruLydes?
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={item}
          className='text-white dark:text-[#14110F] text-lg sm:text-xl font-light max-w-4xl mx-auto leading-relaxed'
        >
          At PruLydes, your financial future is our priority. Led by Lydelyn Romero Quitong, a top financial consultant at Pru Life UK, we offer more than just insurance—we provide guidance, clarity, and confidence. Whether you&apos;re planning for your family, your career, or your retirement, our commitment is to give you personalized financial solutions that grow with you.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className='flex flex-wrap gap-4 sm:gap-6 justify-center mt-8'
          variants={container}
        >
          <motion.button 
            variants={buttonItem}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(225, 185, 81, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className='bg-[#E1B951] dark:bg-[#14110F] text-black dark:text-[#FCF8EE] px-6 py-3 text-xl sm:text-2xl rounded-2xl font-bold cursor-pointer hover:bg-[#f8d776] dark:hover:bg-[#463B35] transition-colors'
          >
            Schedule an Appointment
          </motion.button>
          
          <motion.button 
            variants={buttonItem}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(225, 185, 81, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className='bg-[#E1B951] dark:bg-[#14110F] text-black dark:text-[#FCF8EE] px-6 py-3 text-xl sm:text-2xl rounded-2xl font-bold cursor-pointer hover:bg-[#f8d776] dark:hover:bg-[#463B35] transition-colors'
          >
            Inflation Calculator
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Last;