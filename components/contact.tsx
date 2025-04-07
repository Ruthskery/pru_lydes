import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import InflationCalculator from "./inflationcalcu"; // Import the InflationCalculator component
import { motion } from "framer-motion";

const MapComponent = dynamic(() => import("../public/MapComponents"), {
  ssr: false,
});

const Contact = () => {
  const [isInView, setIsInView] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section to observe

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef} // Attach the Intersection Observer to the section
      className="flex flex-col gap-8 p-6 font-[Poppins] bg-gradient-to-b from-white to-gray-900 xl:h-auto"
    >
      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {/* Contact Methods */}
        {[ 
          {
            href: "https://www.facebook.com/prulifeukofficial",
            Icon: Facebook,
            title: "Facebook",
            text: "Pru Life UK Official",
          },
          {
            href: "https://www.linkedin.com/company/prulifeuk",
            Icon: Linkedin,
            title: "LinkedIn",
            text: "Pru Life UK LinkedIn",
          },
          {
            href: "mailto:info@prulife.com",
            Icon: Mail,
            title: "Email",
            text: "info@prulife.com",
          },
          {
            href: "tel:+639123456789",
            Icon: Phone,
            title: "Contact",
            text: "(+63) 912-345-6789",
          },
        ].map(({ href, Icon, title, text }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 hover:bg-opacity-100 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Icon className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-500">
                {title}
              </h3>
            </div>
            <p className="text-white text-sm transition-colors duration-500 group-hover:text-yellow-500">
              {text}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Map and Calculator Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Map Component */}
        <div className="w-full flex-grow z-1 h-[320px] md:h-auto">
          <MapComponent />
        </div>

        {/* Inflation Calculator */}
        <div className="w-full flex justify-center items-center h-auto">
          <InflationCalculator />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
