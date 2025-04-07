import ReactPlayer from "react-player";
import React, { useEffect, useState, useRef } from "react";
import { poppins } from "@/public/fonts/fonts";
import { motion } from "framer-motion";

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false); // Track if element is in view
  const sectionRef = useRef(null); // Reference to the section element

  useEffect(() => {
    // Simulate loading delay (optional)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer to check when the section is in the viewport
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
    <section
      ref={sectionRef}
      className={`${poppins.className} flex justify-center items-center h-auto bg-transparent grid md:grid-cols-2`}
    >
      {/* Video Container with Animation */}
      <motion.div
        className="relative w-[100%] max-w-4xl aspect-video overflow-hidden p-10"
        initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and move from down
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 0 }} // Fade in down, fade out up
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      >
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-black border-opacity-75"></div>
          </div>
        ) : (
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=2ZcQLw1Q2ZU"}
            width="100%"
            height="100%"
            controls={true}
          />
        )}
      </motion.div>

      {/* Text Content with Animation */}
      <motion.div
        className="space-y-6 text-black text-center md:text-left px-10 pb-10 md:pt-10 justify-self-auto"
        initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and move from down
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 0 }} // Fade in down, fade out up
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      >
        <h1 className="text-4xl font-bold xl:text-7xl">Our Reason is You</h1>
        <p className="text:base xl:text-2xl max-w-200 text-justify">
          Pru Life UK is an insurance provider that prioritizes customer trust
          and support. The company offers financial assistance and peace of
          mind, especially during challenging times, such as a cancer diagnosis.
          Customers share positive experiences with their advisers, who provide
          personalized guidance without pressure, helping them choose the right
          insurance plans for their needs. PR Life UK emphasizes that their
          customers are at the heart of their mission, aiming to make a
          meaningful difference in their lives.
        </p>
      </motion.div>
    </section>
  );
};

export default Video;
