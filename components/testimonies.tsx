import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Business Owner",
    quote: "PRU Life UK has given me peace of mind knowing my family's future is secured. The service is outstanding!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    quote: "I was impressed by the professionalism and transparency. PRU Life UK truly cares about its clients.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    quote: "Investing with PRU Life UK was one of the best decisions I've made. Their financial planning is top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Emily Davis",
    role: "Entrepreneur",
    quote: "Their customer service is beyond expectations. I feel confident about my financial future with PRU Life UK.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "James Wilson",
    role: "Investor",
    quote: "I love the flexibility in their investment options. I feel my money is working for me efficiently.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Olivia Martinez",
    role: "Freelancer",
    quote: "I never thought insurance could be this easy. PRU Life UK made the process simple and stress-free!",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

const CARDS_PER_SLIDE = 3;

const Testimonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const totalSlides = Math.ceil(testimonials.length / CARDS_PER_SLIDE);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetAutoPlay();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [currentSlide, autoPlay]);

  const getCurrentCards = () => {
    const startIndex = currentSlide * CARDS_PER_SLIDE;
    return testimonials.slice(startIndex, startIndex + CARDS_PER_SLIDE);
  };

  return (
    <div className="relative bg-[#14110F] text-white py-16 px-6 md:px-20 font-sans overflow-hidden">
      {/* Background Shape */}
      <div className="absolute w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl -top-20 -left-20 rotate-45 z-0 animate-pulse" />

      {/* Header */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-yellow-500">
          Client <span className="text-yellow-300">Stories</span>
        </h2>
        <p className="text-gray-300 font-[Roboto] mt-4 text-lg max-w-2xl mx-auto">
          Discover how PRU Life UK has positively impacted the lives of our valued subscribers.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-14 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getCurrentCards().map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#1f1d1b] rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <p className="text-lg font-light italic text-gray-200 mb-4 font-[Roboto]">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;