"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import lydes from "../public/src/lydes.png";
import { Facebook, Instagram } from "lucide-react";
import { poppins } from "@/public/fonts/fonts";
import building from "../public/src/buildingbg.png";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  const bubbleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      bubbleControls.start({ opacity: 1, y: 0 });
    } else {
      bubbleControls.start({ opacity: 0, y: -50 });
    }
  }, [isInView, bubbleControls]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${poppins.className} min-h-screen flex items-center justify-center py-16 md:py-20 relative`}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${building.src})`,
          }}
        ></div>

        {/* ✅ Separate Overlay for Transparency (Doesn't Affect Text) */}
        <div className="absolute inset-0 bg-white opacity-40"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-12 md:gap-16 items-center justify-center text-center md:text-left">
        {/* Image Section with Bubbles */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row justify-center items-center w-full"
        >
          {/* Image */}
          <div className="relative w-[60vw] max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
            <Image
              src={lydes}
              alt="Lydes Romero Quitong"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>

          {/* Bubble Container */}
          <div className="absolute w-full h-full flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {[
              { text: "#LifeInsuranceMatters", top: "-top-7 left-0 md:left-[-60px]", delay: 0 },
              { text: "#LifeInsurance", top: "top-10 right-0 md:right-[30px]", delay: 0.2 },
              { text: "#PRULifeUK", top: "top-20 left-20", delay: 0.4 },
              { text: "#AlagangLydes", top: "bottom-16 left-[-10px]", delay: 0.6 },
              { text: "#LegacyPlanning", top: "bottom-12 right-[-20px]", delay: 0.8 },
              { text: "#FinancialFreedom", top: "bottom-[-8px] left-[10px]", delay: 1 },
            ].map(({ text, top, delay }, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                className={`absolute ${top} bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-2xl shadow-lg text-xs sm:text-sm md:text-base font-semibold text-center`}
              >
                <span className="text-black font-bold">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-left text-left relative z-20"
        >
          <h1 className="text-lg font-bold uppercase text-black mb-3">ABOUT ME</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug mb-4">
            Who is Lydes Quitong?
          </h2>
          <div className="flex flex-col items-center w-full">
            {/* Line Separator */}
            <span className="w-[80px] h-[4px] bg-black rounded-sm mb-3"></span>

            {/* Text Content */}
            <p className="text-base md:text-lg text-black w-full md:max-w-[85%] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              suscipit iste odit sunt a fugiat, ullam quos, odio minus nesciunt,
              nulla doloremque. Nobis ipsa rerum aspernatur quaerat molestias
              vero consequuntur?
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-10">
            <a
              href="https://www.facebook.com/PRULydes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#1877F2]"
            >
              <Facebook className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>

            <a
              href="https://www.instagram.com/lydesquitong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#E1306C]"
            >
              <Instagram className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
