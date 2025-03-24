"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import lydes from "../public/src/aboutme.jpg";
import { Facebook, Instagram, Mail, Linkedin, Twitter } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";

const titles = [
  "Financial Consultant",
  "Junior Unit Manager",
  "Certified Wealth Planner",
  "Certified Estate Planner",
  "Consistent National Achiever Club Awardee since 2021",
  "Million Producer Club",
  "Consistent Life Club Member",
];

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
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-12 md:gap-16 items-center justify-center text-center">
        {/* Image Section */}
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
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col text-center"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-3">About Me</h1>
          
          {/* Name Section */}
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            LYDELYN ROMERO QUITONG
          </p>

          {/* Scrolling Carousel */}
          <div className="overflow-hidden mt-3 w-full max-w-[600px] mx-auto">
            <motion.div
              className="flex space-x-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {titles.concat(titles).map((title, index) => (
                <div key={index} className="text-gray-700 text-sm md:text-base font-medium whitespace-nowrap">
                  {title}
                  {index !== titles.length - 1 && <span className="mx-3 text-lg">●</span>}
                </div>
              ))}
            </motion.div>
          </div>

          {/* About Me */}
          <p className="text-base md:text-lg w-full leading-relaxed text-gray-700 mt-4 text-justify">
            Lydes, a top financial consultant at Pru Life UK, is recognized nationwide for her expertise in strategic financial planning. 
            With a deep passion for helping individuals achieve financial security, she has built a strong reputation for guiding clients 
            toward long-term financial success with confidence and precision.
          </p>

          {/* Vision */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6">Vision</h1>
          <p className="text-base md:text-lg w-full leading-relaxed text-gray-700 mt-2 text-justify">
            To create a financially empowered community where individuals and families achieve lasting prosperity through smart, 
            strategic financial decisions. My vision is to be a trusted leader in financial consulting, transforming lives by providing 
            security, growth, and peace of mind for generations to come.
          </p>

          {/* Mission */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6">Mission</h1>
          <p className="text-base md:text-lg w-full leading-relaxed text-gray-700 mt-2 text-justify">
            To educate, guide, and empower every Filipino household with personalized financial solutions that ensure stability and growth. 
            Through Pru Life UK, I am committed to providing exceptional financial planning services that safeguard the future of my clients, 
            helping them achieve their dreams with confidence and security.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-10 justify-center">
            <a href="https://www.facebook.com/PRULydes" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2]">
              <Facebook className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
            <a href="https://www.instagram.com/lydesquitong" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C]">
              <Instagram className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
            <a href="mailto:lydes@example.com" className="hover:text-[#D44638]">
              <Mail className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
            <a href="https://www.linkedin.com/in/lydesquitong" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5]">
              <Linkedin className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
            <a href="https://twitter.com/lydesquitong" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2]">
              <Twitter className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;