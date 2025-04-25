import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <div
      className={`relative w-full h-460 min-h-screen ${montserrat.variable} ${roboto.variable}`}
      style={{
        background: "linear-gradient(to bottom, #E1B951,rgb(58, 46, 39))",
      }}
    >
      {/* Top-Centered Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col font-[Montserrat] items-center text-center pt-70 px-4 z-20 relative"
      >
        <h1 className="text-white font-bold text-5xl md:text-8xl mb-10">
          <span>
            Grow your wealth, <br /> <span className="text-[black]">secure</span> your tomorrow.
          </span>
        </h1>
        <p className="text-white/80 font-[Roboto] text-lg md:text-xl mb-6 max-w-6xl">
          With a proven track record, certified expertise, and a heart for
          helping others, Pru Lydes empowers clients to take control of their
          finances and secure a brighter future—one plan at a time.
        </p>

        {/* Fancy Email Input */}
        <div className="flex flex-col gap-2 items-center mt-10">
          <div className="flex bg-white rounded-full overflow-hidden inset-shadow-sm w-auto mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 pl-10 rounded-l-full font-semibold text-black outline-none font-[Roboto] text-2xl"
            />
            <button className="bg-[#d6a741] m-1 text-xl text-white px-9 py-2 rounded-full hover:bg-[#e1b951] transition">
              Send
            </button>
          </div>

          <label className="flex items-center text-white text-sm ml-2 font-[Montserrat]">
            <input type="checkbox" className="mr-2 w-4 h-4"/>
            <span>
              <span className="font-bold underline">I agree</span> to receive
              updates and promotional emails.
            </span>
          </label>
        </div>
      </motion.div>

      {/* Bottom-Centered Image and Info Side-by-Side */}
      <div className="absolute bottom-0 left-20 right-20 flex flex-col md:flex-row justify-center px-6 z-10">
        {/* Lydes Image */}
        <Image
          src="/src/lydes-hero.png"
          alt="Lydes"
          width={1000}
          height={1030}
          className="object-contain"
          priority
        />

        {/* Info Section */}
        <div className="flex flex-col items-center text-center justify-end ">
          <div className="text-white font-light text-4xl font-[Montserrat] mb-2">
            <div className="text-[#171513] font-[Roboto]">
              Get to know more about Lydes!
            </div>
            <a href="/components/about.tsx" className="inline-block bg-[#14110F]/80 font-semibold mb-30 text-white px-15 py-10 rounded-full mt-2 shadow-md">
              Hi, I’m Lydes!
            </a>
          </div>

          <div className="flex items-end gap-4 pb-10 text-7xl">
            <FaFacebookF className="text-[#1877F2]" />
            <FaInstagram className="text-[#E1306C]" />
            <FaXTwitter className="text-black" />
            <FaTelegram className="text-[#0088cc]" />
            <FaLinkedinIn className="text-[#0077B5]" />
            <FaFacebookMessenger className="text-[#00B2FF]" />
            <FaThreads className="text-black" />
          </div>

          <div className="flex items-center gap-2 text-[140px] mt-6 font-extrabold font-[Montserrat]">
            <span className="text-white">PRU</span>
            <span className="text-[#14110F]">LYDES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
