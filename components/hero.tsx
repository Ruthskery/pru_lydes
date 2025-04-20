import React from 'react';

const Hero = () => {
  return (
    <div
      className="h-[150vh] w-full"
      style={{
        background: 'linear-gradient(to bottom, #E1B951, #7E682E)', // Gradient from #E1B951 to #14110F
        backgroundSize: '100% 100%',
      }}
    >
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white font-bold text-4xl">Hero Here</h1>
      </div>
    </div>
  );
};

export default Hero;


// import React, { useRef, useEffect } from "react";
// import { poppins } from "@/public/fonts/fonts";
// import maambg from "../public/maambg.jpg";
// import Button from "./button"; // Import your Button component here
// import { motion, useAnimation } from "framer-motion";

// const Hero = () => {
//   const controls = useAnimation();
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           controls.start({ opacity: 1, x: 0 });
//         } else {
//           controls.start({ opacity: 0, x: -100 }); // Small movement left while fading out
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (contentRef.current) {
//       observer.observe(contentRef.current);
//     }

//     return () => {
//       if (contentRef.current) {
//         observer.unobserve(contentRef.current);
//       }
//     };
//   }, [controls]);

//   return (
//     <div className="relative w-full min-h-screen flex flex-col md:grid md:grid-cols-2 items-center">
//       {/* Background Image with Overlay (No Animation) */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${maambg.src})` }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Animated Content */}
//       <motion.div
//         ref={contentRef}
//         className={`${poppins.className} relative z-10 flex flex-col justify-center md:text-left px-6 md:px-12 lg:px-20 xl:px-32 h-screen md:h-full w-full`}
//         initial={{ opacity: 0, x: -50 }} // Starts slightly off-screen to the left
//         animate={controls} // Controlled animation
//         transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
//       >
//         {/* Title */}
//         <h1 className="text-gray-300 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center md:text-left">
//           PRU <span className="text-yellow-500">LYDES</span>
//         </h1>

//         {/* Content Box */}
//         <div className="mb-7 bg-white/20 p-6 md:p-10 rounded-lg mt-6 md:mt-10 shadow-lg">
//           <p className="text-gray-100 font-light text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="flex justify-center md:justify-start flex-col md:flex-row mt-6">
//             <Button />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;
