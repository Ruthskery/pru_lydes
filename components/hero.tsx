import React from "react";
import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTelegram,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaThreads,
} from "react-icons/fa6";

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

const Hero = () => {
  return (
    <div className={`relative w-full h-115 md:h-150 lg:h-350 max-h-screen bg-gradient-to-b from-[#E1B951] to-[#14110F] dark:to-[#AE851E] ${montserrat.variable} ${roboto.variable}`}>
      {/* Two Columns Layout */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Lydes Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/src/lydes-hero.png"
            alt="Lydes"
            width={1000}
            height={1030}
            className="object-contain hidden 2xl:block"
            priority
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col items-center text-center justify-center px-6">
          <div className="flex flex-col font-[Montserrat] items-center text-center z-20 relative">
            <h1 className="text-white dark:text-[#14110F] font-bold text-3xl md:text-5xl xl:text-8xl mb-4">
              Grow your wealth, <br /> secure your tomorrow.
            </h1>
            <p className="text-white dark:text-[#14110F] font-[Roboto] text-sm md:text-lg xl:text-xl mb-6 max-w-6xl">
              With a proven track record, certified expertise, and a heart for
              helping others, Pru Lydes empowers clients to take control of their
              finances and secure a brighter future—one plan at a time.
            </p>
          </div>

          <div className="flex items-center gap-2 text-5xl md:text-[110px] lg:text-[140px] mb-6 font-extrabold font-[Montserrat]">
            <span className="text-white">PRU</span>
            <span className="text-[#E1B951] lg:text-[#14110F]">LYDES</span>
          </div>

          <div className="flex items-end gap-4 mb-20 xl:mb-0 text-3xl md:text-5xl lg:text-7xl">
            <FaFacebookF className="text-[#1877F2]" />
            <FaInstagram className="text-[#E1306C]" />
            <FaXTwitter className="text-black" />
            <FaTelegram className="text-[#0088cc]" />
            <FaLinkedinIn className="text-[#0077B5]" />
            <FaFacebookMessenger className="text-[#00B2FF]" />
            <FaThreads className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;