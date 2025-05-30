import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Form from "@/components/form";

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
      { threshold: 0.2 } // Trigger when 50% of the element is in view
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
      ref={sectionRef}
      className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 font-[Montserrat] bg-[#14110F] dark:bg-[#FCF8EE] xl:h-auto"
    >
      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
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
            className="bg-gradient-to-b from-[#E1B951] to-[#947833] dark:to-[#F3E3BA] bg-opacity-75 
              p-4 sm:p-5 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center 
              transition duration-500 hover:bg-opacity-100 group hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black group-hover:text-white dark:group-hover:text-[#69584F] transition-colors duration-500" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black group-hover:text-white dark:group-hover:text-[#69584F] transition-colors duration-500">
                {title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-black font-semibold transition-colors duration-500 group-hover:text-white dark:group-hover:text-[#69584F] mt-1 sm:mt-2">
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
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 
          mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
      >
        {/* Map Component */}
        <div className="w-full col-span-1 md:col-span-1 xl:col-span-2 flex flex-col z-1 
          h-[280px] sm:h-[320px] md:h-[360px] lg:h-[750px] italic">
          <div className="text-white dark:text-[#0C0A09] flex-none mb-3 sm:mb-4 md:mb-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Montserrat]">Our Location</h1>
            <p className="font-[Roboto] font-light text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4">
              We welcome you to visit our office for a personalized consultation.
              Let&apos;s discuss how we can help secure your financial future.
            </p>
          </div>
          <div className="flex-grow">
            <MapComponent />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full flex justify-center mt-4 sm:mt-5 md:mt-0 items-start h-auto">
          <Form />
        </div>
      </motion.div>
      <hr className="border-white/50 mt-6 sm:mt-8 md:mt-10 lg:mt-12" />
    </div>
  );
};

export default Contact;