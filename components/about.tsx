import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import lydes from '../public/src/lydes.png';
import { Facebook, Instagram } from "lucide-react"; 
import { poppins } from '@/public/fonts/fonts';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Start hidden & off-screen left
      whileInView={{ opacity: 1, x: 0 }} // Animate when visible
      viewport={{ once: true }} // Ensures it runs once
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className={`${poppins.className} bg-gray-100 min-h-screen flex items-center justify-center pb-12 pt-16 md:pt-20`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto gap-16 items-center justify-center text-center md:text-center">
        
        {/* Image - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Image slides in from the left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Slight delay for stagger effect
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={lydes}
              alt="Lydes Romero Quitong"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* About Me - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Content slides in from the right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Stagger effect
          viewport={{ once: true }}
          className="flex flex-col items-left text-left"
        >
          <h1 className="text-lg font-bold uppercase text-black mb-3">
            ABOUT ME
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug mb-4">
            Who is Lydes Quitong?
          </h2>
          <div className="flex flex-col items-center w-full">
            {/* Line Separator */}
            <span className="w-[80px] h-[4px] bg-black rounded-sm mb-3"></span>

            {/* Text Content */}
            <p className="text-base md:text-lg text-black w-full md:max-w-[85%] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              suscipit iste odit sunt a fugiat, ullam quos, odio minus
              nesciunt, nulla doloremque. Nobis ipsa rerum aspernatur quaerat
              molestias vero consequuntur?
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-10">
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#1877F2]" 
            >
              <Facebook size={50} />
            </a>

            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#E1306C]" 
            >
              <Instagram size={50} />
            </a>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;
