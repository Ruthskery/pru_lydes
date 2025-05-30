import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ms. Susana",
    role: "Nurse, 32 years old",
    monthlyPayment: "₱1,500",
    quote: "PRU Life UK has given me peace of mind knowing my family's future is secured. The service is outstanding!",
  },
  {
    name: "Ms. Bonna",
    role: "Accounting Assistant, 37 years old",
    monthlyPayment: "₱3,500",
    quote: "I was impressed by the professionalism and transparency. PRU Life UK truly cares about its clients.",
  },
  {
    name: "Mr. Rogelio",
    role: "Assistant, 59 years old",
    monthlyPayment: "₱3,333",
    quote: "Investing with PRU Life UK was one of the best decisions I've made. Their financial planning is top-notch.",
  },
  {
    name: "Ms. Sam",
    role: "Architect, 28 years old",
    monthlyPayment: "₱7,500",
    quote: "Ate Lydes thank you sa pag assist, ang bilis dumating ng pera ko",
  },
  {
    name: "Mr. Miles",
    role: "Call Center Manager, 37 years old",
    monthlyPayment: "₱5,000",
    quote: "Ms Lydes, dumating na yung 15,000 hospitalization funds ko, thank you so much!",
  },
  {
    name: "Mrs. Rev",
    role: "Call Center Manager, 40 years old",
    monthlyPayment: "₱7,500",
    quote: "Ms Lydes, ang bilis ma update ng beneficiary ko, nag reflect na sa system! Salamat sa pag asikaso!",
  },
];

const Testimonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    // Set cards per slide based on screen size
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1536) {
        setCardsPerSlide(3); // 2xl
      } else if (window.innerWidth >= 1280) {
        setCardsPerSlide(3); // xl
      } else if (window.innerWidth >= 1024) {
        setCardsPerSlide(3); // lg
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // md
      } else {
        setCardsPerSlide(1); // sm and below
      }
    };
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

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
  }, [currentSlide, autoPlay, cardsPerSlide]);

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return testimonials.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <div className="relative bg-[#14110F] dark:bg-[#FCF8EE] text-white dark:text-[#14110F] py-16 px-6 md:px-20 font-sans overflow-hidden">
      {/* Background Shape */}
      <div className="absolute w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl -top-20 -left-20 rotate-45 z-0 animate-pulse" />

      {/* Header */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-yellow-600">
          Client <span className="text-yellow-400">Stories</span>
        </h2>
        <p className="text-gray-300 dark:text-[#69584F] font-[Roboto] mt-4 text-lg max-w-2xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-7xl mx-auto"
          >
            {getCurrentCards().map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#1f1d1b] dark:bg-[#F3E3BA] rounded-xl p-6 shadow-lg hover:shadow-xl transition flex flex-col h-full w-full max-w-md"
              >
                <p className="text-lg font-light italic text-gray-200 dark:text-[#0C0A09] mb-2 font-[Roboto] flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="font-semibold text-white dark:text-black text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400 dark:text-[#69584F]">
                    {testimonial.role}
                  </p>
                  <p className="text-yellow-500 dark:text-yellow-700 font-semibold">
                    Monthly Payment: {testimonial.monthlyPayment}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="hidden lg:flex justify-center gap-6 mt-10">
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