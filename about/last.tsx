import React from 'react';
import { motion } from 'framer-motion';

function Last() {
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

  return (
    <div className="w-full min-h-screen bg-[#14110F] dark:bg-[#FCF8EE] flex justify-center items-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <motion.div
        className="flex flex-col gap-6 sm:gap-8 md:gap-10 text-center py-10 w-full max-w-[1440px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-white dark:text-[#14110F] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
        >
          With PruLydes, youre not just insured — youre{' '}
          <motion.span
            className="text-[#E1B951]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            empowered
          </motion.span>{' '}
          to grow, protect, and thrive.
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          variants={item}
          className="text-white dark:text-[#14110F] text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-6"
        >
          Why choose PruLydes?
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-white dark:text-[#14110F] text-base sm:text-lg md:text-xl font-light max-w-5xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          At PruLydes, your financial future is our priority. Led by Lydelyn Romero Quitong, a top financial consultant at Pru Life UK, we offer more than just insurance—we provide guidance, clarity, and confidence. Whether youre planning for your family, your career, or your retirement, our commitment is to give you personalized financial solutions that grow with you.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Last;
