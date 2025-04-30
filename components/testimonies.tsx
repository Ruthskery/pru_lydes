import React, { useState, useEffect } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const testimonials = [
  {
    name: "John Doe",
    role: "Business Owner",
    quote:
      "PRU Life UK has given me peace of mind knowing my family's future is secured. The service is outstanding!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    quote:
      "I was impressed by the professionalism and transparency. PRU Life UK truly cares about its clients.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    quote:
      "Investing with PRU Life UK was one of the best decisions I've made. Their financial planning is top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Emily Davis",
    role: "Entrepreneur",
    quote:
      "Their customer service is beyond expectations. I feel confident about my financial future with PRU Life UK.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "James Wilson",
    role: "Investor",
    quote:
      "I love the flexibility in their investment options. I feel my money is working for me efficiently.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Olivia Martinez",
    role: "Freelancer",
    quote:
      "I never thought insurance could be this easy. PRU Life UK made the process simple and stress-free!",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetAutoPlay();
  };

  const goToIndex = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <div className="bg-[#14110F] text-white py-16 px-10 md:px-20 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h2 className="text-6xl font-bold font-[Montserrat] text-yellow-500">
            Client <span className="text-yellow-300">Stories</span>
          </h2>
          <p className="text-gray-300 font-[Roboto]">
            Discover how PRU Life UK has positively impacted the lives of our valued subscribers.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 transition text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 transition text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-6"
            >
              <p className="text-2xl md:text-3xl font-light italic font-[Roboto] leading-relaxed text-gray-200">
                “{testimonials[currentIndex].quote}”
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots with animated tooltips */}
          <div className="flex justify-center gap-4 mt-8 relative">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() => goToIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                    idx === currentIndex
                      ? "bg-white scale-110 animate-pulse"
                      : "bg-gray-500 hover:scale-125"
                  }`}
                ></button>

                {/* Animated Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-20 left-1/2 -translate-x-1/2 w-52 text-xs text-black bg-white p-3 rounded shadow-lg z-10 after:absolute after:content-[''] after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-black"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="font-semibold">
                          {testimonial.name}
                        </span>
                      </div>
                      <p className="text-black text-[11px] leading-tight">
                        {testimonial.quote.length > 60
                          ? testimonial.quote.substring(0, 57) + "..."
                          : testimonial.quote}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
