"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import lydes from "../public/src/aboutme.jpg";
import { Briefcase, Facebook, Instagram, Target, UserCircle } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";

const About = () => {
  const sectionRef = useRef(null);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${poppins.className} min-h-screen flex flex-col items-center justify-center py-16 md:py-20`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-12 md:gap-16 items-center justify-center text-center md:text-left">
        {/* Image and Name Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center w-full relative"
        >
          <div className="w-[60vw] max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] relative">
            <Image
              src={lydes}
              alt="Lydelyn Romero Quitong"
              className="w-full h-full object-contain"
            />
            <p className="absolute top-[35%] left-[230px] transform -translate-y-1/2 rotate-90 text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">
              LYDELYN ROMERO QUITONG
            </p>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col text-left"
        >
          <UserCircle className="mx-auto mb-3 w-14 h-14 text-purple-600" /> {/* About Me Icon */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-3">About Me</h1>
          <p className="text-base md:text-lg w-full md:max-w-[85%] leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit iste odit sunt a fugiat, 
            ullam quos, odio minus nesciunt, nulla doloremque. Nobis ipsa rerum aspernatur quaerat molestias 
            vero consequuntur?
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-10">
            <a
              href="https://www.facebook.com/PRULydes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2]"
            >
              <Facebook className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>

            <a
              href="https://www.instagram.com/lydesquitong"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C]"
            >
              <Instagram className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
          </div>

          <div className="max-w-3xl mx-auto px-4">
            {/* Vision Section */}
            <div className="text-center">
              <Target className="mx-auto mb-4 w-12 h-12 text-blue-600" /> {/* Vision Icon */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-4 mb-4">Our Vision</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our mission is to be your most trusted financial partner, empowering you and your family with expert guidance
                and innovative solutions. We are committed to securing your financial future and helping you achieve lasting
                prosperity with confidence.
              </p>
            </div>

            {/* Mission Section */}
            <div className="text-center mt-10">
              <Briefcase className="mx-auto mb-4 w-12 h-12 text-green-600" /> {/* Mission Icon */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase mt-4 mb-4">Our Mission</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                My mission is to enhance and sustain the quality of life for every Filipino household through Pru Life UK,
                delivering a lifetime commitment to providing the best financial advice and guidance to my clients.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
