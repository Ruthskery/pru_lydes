import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { montserrat, roboto } from "../styles/font";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-[#E1B951] to-[#826312] text-white py-10 relative">
      <div className="px-6 max-w-screen mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-32 xl:ml-20 xl:mt-10">
        <button
          onClick={scrollToTop}
          className="absolute right-4 top-[-20px] bg-black rounded-full p-3 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Go to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        {/* About */}
        <div>
            <h2 className={`${montserrat.className} text-2xl md:text-3xl font-semibold mb-3 border-b-4 border-[#E1B951] inline-block`}>
            About
            </h2>
            <p className={`${roboto.className} text-base md:text-lg text-white/90 mt-2`}>
            We provide reliable and comprehensive insurance solutions tailored
            to your needs. Our goal is to protect what matters most to you.
            </p>
        </div>

        {/* Insurance & Legal */}
        <div>
          <h2 className="font-[Montserrat] text-2xl md:text-3xl font-semibold mb-3 border-b-4 border-[#E1B951] inline-block">
            Insurance & Legal
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-2">
            We maintain professional liability insurance to ensure quality
            service and protect both our clients and ourselves.
          </p>
          <ul className="text-base md:text-lg text-white/90 space-y-2">
            <li>
              <Link
                href="/#"
                className="relative inline-block hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:left-0"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="relative inline-block hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:left-0"
              >
                Terms & Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Insurance Services */}
        <div>
          <h2 className="font-[Montserrat] text-2xl md:text-3xl font-semibold mb-3 border-b-4 border-[#E1B951] inline-block">
            Insurance Services
          </h2>
          <ul className="text-base md:text-lg text-white/90 space-y-2">
            <li>
              <Link
                href="/#"
                className="relative inline-block hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:left-0"
              >
                Protection & Savings
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="relative inline-block hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:left-0"
              >
                Health Insurance
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="relative inline-block hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:left-0"
              >
                Investment
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="relative inline-block hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:left-0"
              >
                Accident
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="font-[Montserrat] text-base md:text-lg text-white mt-12 pt-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mx-19">
          {/* Left - Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-5xl text-blue-500 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-5xl text-black hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-5xl text-blue-400 hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Logo - Center */}
            <Image src="/src/bcdq.png" alt="Logo" width={120} height={120} className="w-30" />
        {/* Right - Copyright */}
        <p className="font-[Roboto] text-white/90 text-center md:text-right">
          © Copyright CSPC 2025 — All rights reserved
        </p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;


