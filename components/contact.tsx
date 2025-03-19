import React from 'react';
import dynamic from "next/dynamic";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import Image from 'next/image';
import contactImage from '@/public/cntct_bg.jpg'; // Replace with your actual image path

const MapComponent = dynamic(() => import("../public/MapComponents"), {
  ssr: false,
});

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch max-h-screen w-full p-6 font-[Poppins] bg-gradient-to-b from-white to-black gap-8">
      
      {/* First Column */}
      <div className="flex flex-col w-full md:w-1/1 space-y-6 py-10 mx-10">
        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/prulifeukofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 ease-in-out hover:bg-opacity-100 group"
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Facebook className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
                Facebook
              </h3>
            </div>
            <p className="text-white font-medium text-base transition-colors duration-500 group-hover:text-yellow-500">
              Pru Life UK Official
            </p>
          </a>
          
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/company/prulifeuk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 ease-in-out hover:bg-opacity-100 group"
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Linkedin className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
                LinkedIn
              </h3>
            </div>
            <p className="text-white font-medium text-base transition-colors duration-500 group-hover:text-yellow-500">
              Pru Life UK LinkedIn
            </p>
          </a>
          
          {/* Email Link */}
          <a
            href="mailto:info@prulife.com"
            className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 ease-in-out hover:bg-opacity-100 group"
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Mail className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
                Email
              </h3>
            </div>
            <p className="text-white font-medium text-base transition-colors duration-500 group-hover:text-yellow-500">
              info@prulife.com
            </p>
          </a>
          
          {/* Phone Link */}
          <a
            href="tel:+639123456789"
            className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 ease-in-out hover:bg-opacity-100 group"
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Phone className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
                Contact
              </h3>
            </div>
            <p className="text-white font-medium text-base transition-colors duration-500 group-hover:text-yellow-500">
              (+63) 912-345-6789
            </p>
          </a>
        </div>

        {/* Map Component */}
        <div className="w-full flex-grow">
          <MapComponent />
        </div>
      </div>

      {/* Second Column - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-stretch mr-10 my-10">
        <div className="w-full h-full">
          <Image 
            src={contactImage} 
            alt="Contact Us" 
            className="rounded-lg shadow-lg w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
