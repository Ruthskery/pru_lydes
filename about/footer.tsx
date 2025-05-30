import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { montserrat } from '@/styles/font';
import InflationCalculatorModal from "../components/inflationcalcu";
import GoogleFormModal from "../components/googleformModal";

const Footer: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSurveyOpen, setSurveyOpen] = useState(false);


  useEffect(() => {
    if (isModalOpen || isSurveyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, isSurveyOpen]);

  return (
    <>
      <footer className={`${montserrat.className} bg-gradient-to-t from-[#E1B951] to-[#14110F] dark:to-[#FCF8EE] text-white dark:text-[#14110F] py-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">

          {/* Column 1: About */}
          <div>
            <h2 className="text-sm sm:text-base md:text-sm lg:text-base font-semibold mb-3 border-b-2 border-yellow-500 inline-block">About</h2>
            <p className="text-xs text-white dark:text-[#14110F] mb-2">
              We provide reliable and comprehensive insurance solutions tailored to your needs. Our goal is to protect what matters most to you.
            </p>
            <p className="text-xs text-white dark:text-[#14110F]">
              © 2025 Blue Chalcedony Diamond Quartz. All rights reserved.
            </p>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h2 className="text-sm sm:text-base md:text-sm lg:text-base font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Insurance & Legal</h2>
            <p className="text-xs text-white dark:text-[#14110F] mb-2">
              We maintain professional liability insurance to ensure quality service and protect both our clients and ourselves.
            </p>
            <ul className="text-xs text-white dark:text-[#14110F] space-y-2">
              <li><a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-yellow-500">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h2 className="text-sm sm:text-base md:text-sm lg:text-base font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Insurance Services</h2>
            <ul className="text-xs text-white dark:text-[#14110F] space-y-2">
              <li><a href="/savings" className="hover:text-yellow-500">Protection & Savings</a></li>
              <li><a href="/health" className="hover:text-yellow-500">Health Insurance</a></li>
              <li><a href="/investment" className="hover:text-yellow-500">Investment</a></li>
              <li><a href="/accident" className="hover:text-yellow-500">Accident</a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h2 className="text-sm sm:text-base md:text-sm lg:text-base font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Follow Us</h2>
            <div className="flex flex-wrap gap-3 mt-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-blue-600 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-blue-400 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-pink-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-blue-700 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 5: Actions */}
          <div>
            <h2 className="text-sm sm:text-base md:text-sm lg:text-base font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Actions</h2>
            <div className="flex flex-col gap-3 mt-3">
              <button
                onClick={() => setSurveyOpen(true)}
                className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 cursor-pointer font-bold"
              >
                Survey
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 cursor- font-bold"
              >
                Inflation Calculator
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal placed outside footer layout */}
      {isModalOpen && (
        <InflationCalculatorModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      )}

      {/* Google Form Modal */}
      {isSurveyOpen && (
        <GoogleFormModal isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)} />
      )}
    </>
  );
};

export default Footer;
