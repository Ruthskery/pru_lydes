import React from "react";
import Image from "next/image";
import { Montserrat, Roboto, Ephesis } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTelegram,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaThreads,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ephesis",
  display: "swap",
});

const Hero = () => {
  return (
    <div className={`relative overflow-hidden w-full h-115 md:h-150 lg:h-screen xl:h-350 max-h-screen bg-[linear-gradient(to_right,_#AE851E,_#F3E3B9,_#AE851E)] ${montserrat.variable} ${roboto.variable}`}>
      {/* Two Columns Layout */}
      <div className="flex flex-col xl:flex-row h-full">
        {/* Lydes Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/src/lydes-hero.png"
            alt="Lydes"
            width={900}
            height={930}
            className="object-contain hidden xl:block"
            priority
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col items-center text-center justify-center px-6 md:mb-10 lg:mb-30 xl:mb-0">
          <div className="flex flex-col font-[Montserrat] items-center text-center z-20 relative">
            <h1 className="text-white dark:text-[#14110F] font-bold text-3xl md:text-6xl lg:text-7xl xl:text-[60px] mb-4">
              Grow your wealth, <br /> secure your tomorrow.
            </h1>
            <p className="text-white dark:text-[#14110F] font-[Roboto] text-sm md:text-lg lg:text-xl xl:text-lg mb-6 max-w-6xl lg:px-50 xl:px-0">
              With a proven track record, certified expertise, and a heart for
              helping others, Pru Lydes empowers clients to take control of their
              finances and secure a brighter future—one plan at a time.
            </p>
          </div>

          <motion.div
            animate={{
              opacity: 1,
              backgroundPosition: "100% 50%",
            }}
            transition={{
              opacity: { duration: 1.5, delay: 1 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className={`flex items-center gap-2 xl:h-28 text-2xl md:text-5xl lg:text-6xl xl:text-[90px] mb-6 font-extrabold ${ephesis.variable} bg-gradient-to-r from-[#E1B951] via-[#ffffff] to-[#96700f] dark:from-[#14110F] dark:via-[#E1B951] dark:to-[#14110F] bg-clip-text text-transparent bg-[length:200%_auto]`}
            style={{ fontFamily: 'Ephesis, cursive' }}
          >
            <span>Lydelyn</span>
            <span>Romero-Quitong</span>
          </motion.div>
          

          <div className="flex text-black items-end gap-4 mb-20 xl:mb-0 text-3xl md:text-5xl lg:text-5xl">
            <FaFacebookF className="hover:text-[#1877F2]" />
            <FaInstagram className="hover:text-[#E1306C]" />
            <FaXTwitter className="hover:text-black" />
            <FaTelegram className="hover:text-[#0088cc]" />
            <FaLinkedinIn className="hover:text-[#0077B5]" />
            <FaFacebookMessenger className="hover:text-[#00B2FF]" />
            <FaThreads className="hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;