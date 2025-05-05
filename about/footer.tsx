import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { montserrat } from '@/styles/font';

const Footer = () => {
  return (
    <footer className={`${montserrat.className} bg-gradient-to-t from-[#E1B951] to-[#14110F] dark:to-[#FCF8EE] text-white dark:text-[#14110F] py-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 border-b-2 border-yellow-500 inline-block">About</h2>
          <p className="text-sm text-gray-400 dark:text-[#14110F] mb-2">
            We provide reliable and comprehensive insurance solutions tailored to your needs. Our goal is to protect what matters most to you.
          </p>
          <p className="text-sm text-gray-400 dark:text-[#14110F]">
            © 2025 Blue Chalcedony Diamond Quartz. All rights reserved.
          </p>
        </div>
    
        {/* Column 2: Insurance & Legal */}
        <div>
          <h2 className="text-lg font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Insurance & Legal</h2>
          <p className="text-sm text-gray-400 dark:text-[#14110F] mb-2">
            We maintain professional liability insurance to ensure quality service and protect both our clients and ourselves.
          </p>
          <ul className="text-sm text-gray-400 dark:text-[#14110F] space-y-2">
            <li><a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-yellow-500">Terms of Service</a></li>
          </ul>
        </div>
    
        {/* Column 3: Insurance Services Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Insurance Services</h2>
          <ul className="text-sm text-gray-400 dark:text-[#14110F] space-y-2">
            <li><a href="/savings" className="hover:text-yellow-500">Protection & Savings</a></li>
            <li><a href="/health" className="hover:text-yellow-500">Health Insurance</a></li>
            <li><a href="/investment" className="hover:text-yellow-500">Investment</a></li>
            <li><a href="/accident" className="hover:text-yellow-500">Accident</a></li>
          </ul>
        </div>
    
        {/* Column 4: Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Follow Us</h2>
          <div className="flex flex-wrap gap-3 mt-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-blue-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-blue-700 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
    
      </div>
  </footer>
  
  );
};

export default Footer;
