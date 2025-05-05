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
    <div className={`relative w-full md:h-350 min-h-screen bg-gradient-to-b from-[#E1B951] to-[#14110F] dark:to-[#AE851E] ${montserrat.variable} ${roboto.variable}`}>
      {/* Top-Centered Text */}
      <div className="flex flex-col font-[Montserrat] items-center text-center pt-30 md:pt-40 px-4 z-20 relative">
        <h1 className="text-white dark:text-[#14110F] font-bold text-3xl md:text-8xl mb-4">
          Grow your wealth, <br /> secure your tomorrow.
        </h1>
        <p className="text-white dark:text-[#14110F] font-[Roboto] text-sm md:text-xl mb-6 max-w-6xl">
          With a proven track record, certified expertise, and a heart for
          helping others, Pru Lydes empowers clients to take control of their
          finances and secure a brighter future—one plan at a time.
        </p>

        {/* Fancy Email Input */}
        <div className="flex bg-white dark:text-[#14110F] rounded-full overflow-hidden inset-shadow-sm w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 pl-10 rounded-l-full font-semibold text-black outline-none font-[Roboto] text-md md:text-2xl"
          />
          <button className="bg-[#d6a741] m-1 text-base md:text-xl text-white dark:text-[#14110F] px-9 py-2 rounded-full hover:bg-[#e1b951] transition">
            Send
          </button>
        </div>
      </div>

      {/* Bottom-Centered Image and Info Side-by-Side */}
      <div className="absolute bottom-0 left-20 right-20 flex flex-col md:flex-row justify-center px-6 z-10">
        {/* Lydes Image */}
        <Image
          src="/src/lydes-hero.png"
          alt="Lydes"
          width={1000}
          height={1030}
          className="object-contain hidden md:block"
          priority
        />

        {/* Info Section */}
        <div className="flex flex-col items-center text-center justify-end ">
          <div className="text-white font-light text-xl md:text-4xl font-[Montserrat] mb-2">
            <div className="text-[#171513] font-[Roboto] whitespace-nowrap">
              Get to know more about Lydes!
            </div>
            <p className="inline-block bg-[#14110F]/80 font-semibold mb-30 text-white px-8 py-5 md:px-15 md:py-10 rounded-full mt-2 shadow-md">
              Hi, I’m Lydes!
            </p>
          </div>

          <div className="flex items-center gap-2 text-5xl md:text-[140px] mb-6 font-extrabold font-[Montserrat]">
            <span className="text-white">PRU</span>
            <span className="text-[#E1B951] md:text-[#14110F]">LYDES</span>
          </div>

          <div className="flex items-end gap-4 mb-20 text-3xl md:text-7xl">
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