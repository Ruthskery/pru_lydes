"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle } from "lucide-react"; // Default Profile Icon
import { poppins } from "@/public/fonts/fonts"; // ✅ Import Poppins Font

// Client Testimonials Data (6 total, 3 per slide)
const testimonials = [
  {
    name: "John Doe",
    role: "Business Owner",
    quote: "PRU Life UK has given me peace of mind knowing my family's future is secured. The service is outstanding!",
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    quote: "I was impressed by the professionalism and transparency. PRU Life UK truly cares about its clients.",
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    quote: "Investing with PRU Life UK was one of the best decisions I've made. Their financial planning is top-notch.",
  },
  {
    name: "Emily Davis",
    role: "Entrepreneur",
    quote: "Their customer service is beyond expectations. I feel confident about my financial future with PRU Life UK.",
  },
  {
    name: "James Wilson",
    role: "Investor",
    quote: "I love the flexibility in their investment options. I feel my money is working for me efficiently.",
  },
  {
    name: "Olivia Martinez",
    role: "Freelancer",
    quote: "I never thought insurance could be this easy. PRU Life UK made the process simple and stress-free!",
  },
];

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section to observe

  useEffect(() => {
    // Intersection Observer to check when the section is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0)); // Toggle between slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef} // Attach the Intersection Observer to the section
      className={`${poppins.className} py-16 bg-gray-100`} // ✅ Applied Font
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say <span className="text-black">About Us</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          Hear from our satisfied clients who have secured their future with PRU Life UK.
        </motion.p>

        {/* Sliding Testimonials */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.slice(currentSlide * 3, currentSlide * 3 + 3).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Default Profile Icon */}
                  <UserCircle className="w-20 h-20 text-gray-400 mb-4" />

                  {/* Quote (Fixed Unescaped Entities) */}
                  <motion.p
                    className="text-gray-700 italic mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </motion.p>

                  {/* Client Name & Role */}
                  <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
                  <span className="text-gray-500 text-sm">{testimonial.role}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Us Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#FFD700] text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
