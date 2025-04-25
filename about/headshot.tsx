'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import H1 from '../public/src/hs1.jpg';
import H2 from '../public/src/hs2.jpg';
import H3 from '../public/src/hs3.jpg';
import H4 from '../public/src/hs4.jpg';
import H5 from '../public/src/hs5.jpg';

const headshotImages = [H1, H2, H3, H4, H5];
const headshotDetails = [
  { title: 'Professional Journey', description: 'Capturing milestones in financial consulting' },
  { title: 'Client Success', description: 'Moments of empowering financial freedom' },
  { title: 'Industry Recognition', description: 'Award-winning expertise in action' },
  { title: 'Educational Outreach', description: 'Sharing knowledge with communities' },
  { title: 'Future Vision', description: 'Planning for tomorrow, today' },
];

const Headshot = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % headshotImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + headshotImages.length) % headshotImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX) {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (delta > 50) handleNext(); // swipe left
      if (delta < -50) handlePrev(); // swipe right
    }
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  return (
    <div className="w-full h-[50vh] flex justify-center bg-[#14110F] relative pt-2 md:pt-5 px-4">
      {/* Animated Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-15 text-white font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl"
      >
        Stories in Frames
      </motion.div>

      {/* --- MOBILE VERSION --- */}
      <div className="flex justify-center w-full sm:hidden relative h-full items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-[300px] h-[300px] rounded-xl overflow-hidden border-4 border-[#E1B951]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => openModal(currentImageIndex)}
          >
            <Image
              src={headshotImages[currentImageIndex]}
              alt={`Headshot ${currentImageIndex + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- DESKTOP VERSION --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hidden sm:flex gap-6 md:gap-10 relative w-full justify-center items-center"
      >
        {headshotImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="w-[160px] sm:w-[200px] md:w-[240px] h-[160px] sm:h-[200px] md:h-[240px] rounded-xl overflow-hidden border-4 border-[#E1B951] cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={img}
              alt={`Headshot ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#14110F] p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative border-2 border-[#E1B951]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-3xl text-[#E1B951] hover:text-white transition"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src={headshotImages[modalImageIndex]}
                    alt={`Modal Image ${modalImageIndex + 1}`}
                    width={600}
                    height={600}
                    className="object-contain w-full h-auto max-h-[60vh] rounded-lg"
                  />
                </motion.div>

                <motion.div 
                  className="flex-1 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold mb-4 text-[#E1B951]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {headshotDetails[modalImageIndex].title}
                  </motion.h2>
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {headshotDetails[modalImageIndex].description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Headshot;