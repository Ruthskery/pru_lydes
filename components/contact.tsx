import React from 'react';
import dynamic from "next/dynamic";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import InflationCalculator from './inflationcalcu'; // Import the InflationCalculator component

const MapComponent = dynamic(() => import("../public/MapComponents"), {
  ssr: false,
});

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 font-[Poppins] bg-gradient-to-b from-gray-100 to-gray-500 xl:h-[670px]">
      
      {/* Contact Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 col-span-2">
        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/prulifeukofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 hover:bg-opacity-100 group"
        >
          <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
            <Facebook className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
              Facebook
            </h3>
          </div>
          <p className="text-white text-sm transition-colors duration-500 group-hover:text-yellow-500">
            Pru Life UK Official
          </p>
        </a>
        
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/company/prulifeuk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 hover:bg-opacity-100 group"
        >
          <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
            <Linkedin className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
              LinkedIn
            </h3>
          </div>
          <p className="text-white text-sm transition-colors duration-500 group-hover:text-yellow-500">
            Pru Life UK LinkedIn
          </p>
        </a>
        
        {/* Email Link */}
        <a
          href="mailto:info@prulife.com"
          className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 hover:bg-opacity-100 group"
        >
          <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
            <Mail className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
              Email
            </h3>
          </div>
          <p className="text-white text-sm transition-colors duration-500 group-hover:text-yellow-500">
            info@prulife.com
          </p>
        </a>
        
        {/* Phone Link */}
        <a
          href="tel:+639123456789"
          className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 hover:bg-opacity-100 group"
        >
          <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
            <Phone className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
              Contact
            </h3>
          </div>
          <p className="text-white text-sm transition-colors duration-500 group-hover:text-yellow-500">
            (+63) 912-345-6789
          </p>
        </a>
      </div>

      {/* Map Component */}
      <div className="w-full flex-grow z-1">
        <MapComponent />
      </div>

      {/* Inflation Calculator */}
      <div className="w-full rounded-lg flex justify-center items-center overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          <InflationCalculator />
        </div>
      </div>
    </div>
  );
};

export default Contact;