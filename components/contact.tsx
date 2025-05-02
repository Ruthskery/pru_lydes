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
      ref={sectionRef} // Attach the Intersection Observer to the section
      className="flex flex-col gap-8 p-6 font-[Montserrat] bg-[#14110F] xl:h-auto"
    >
      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 mt-10 mx-10 sm:grid-cols-2 md:grid-cols-4 gap-6"
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
            className="bg-gradient-to-b from-[#E1B951] to-[#947833] bg-opacity-75 p-6 rounded-lg shadow-md text-center flex flex-col items-center transition duration-500 hover:bg-opacity-100 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
              <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" />
              <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors duration-500">
                {title}
              </h3>
            </div>
            <p className="text-black font-semibold text-sm transition-colors duration-500 group-hover:text-white">
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
        className="grid grid-cols-1 mx-10 md:grid-cols-3 gap-15"
      >
        {/* Map Component */}
        <div className="w-full col-span-2 flex flex-col z-1 h-[320px] md:h-auto italic">
          <div className="text-white flex-none">
            <h1 className=" text-4xl font-[Montserrat]">Our Location</h1>
            <p className="font-[Roboto] font-light py-2">We welcome you to visit our office for a personalized consultation.
                Lets discuss how we can help secure your financial future.
            </p>
          </div>
          <div className="flex-grow">
            <MapComponent />
          </div>
        </div>

        {/* Inflation Calculator */}
        <div className="w-full flex justify-center items-center h-auto">
          <Form />
        </div>
      </motion.div>
      <hr style={{ color: "white", opacity: 0.5, marginTop: 14 }} />
    </div>
  );
};

export default Contact;