import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { montserrat } from '@/styles/font';

const Footer = () => {
  return (
    <footer className={`${montserrat.className} bg-gradient-to-t from-[#E1B951] to-[#14110F] text-white py-10`}>
      <div className="container mx-auto px-6 flex flex-wrap gap-6 justify-between">
        
        <div className="w-full md:w-2/6">
          {/* Column 1: About Section */}
          <h2 className="text-lg font-semibold mb-3 border-b-2 border-yellow-500 inline-block">About</h2>
          <p className="white mb-2">
            We provide reliable and comprehensive insurance solutions tailored to your needs. Our goal is to protect what matters most to you.
          </p>
          <p className="white">
            © 2025 Blue Chalcedony Diamond Quartz. All rights reserved.
          </p>
        </div>

        <div className="w-full md:w-1/4">
          {/* Column 2: Insurance & Legal */}
          <h2 className="text-lg font-semibold mb-3 border-b-2  border-yellow-500 inline-block">Insurance & Legal</h2>
          <p className="white mb-2">
            We maintain professional liability insurance to ensure quality service and protect both our clients and ourselves.
          </p>
          <ul className="white space-y-2">
            <li><a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-yellow-500">Terms of Service</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/6">
          {/* Column 3: Insurance Services Section */}
          <h2 className="text-lg font-semibold mb-3 border-b-2  border-yellow-500 inline-block">Insurance Services</h2>
          <ul className="white space-y-2">
            <li><a href="/savings" className="hover:text-yellow-500">Protection & Savings</a></li>
            <li><a href="/health" className="hover:text-yellow-500">Health Insurance</a></li>
            <li><a href="/investment" className="hover:text-yellow-500">Investment</a></li>
            <li><a href="/accident" className="hover:text-yellow-500">Accident</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/6">
          {/* Column 4: Social Media Links */}
          <h2 className="text-lg font-semibold mb-3 border-b-2 border-yellow-500 inline-block">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a  
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
