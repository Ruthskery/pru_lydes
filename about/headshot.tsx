'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import H1 from '../public/src/hs1.jpg';
import H2 from '../public/src/hs2.jpg';
import H3 from '../public/src/hs3.jpg';
import H4 from '../public/src/hs4.jpg';
import H5 from '../public/src/hs5.jpg';
import image1 from '../public/src/add1.jpg'
import image2 from '../public/src/add2.jpg'
import image3 from '../public/src/add3.jpg'
import image4 from '../public/src/add4.jpg'
import image5 from '../public/src/add5.jpg'

const headshotImages = [image5, H2, H3, H4, H5];

const headshotDetails = [
  {
    title: 'Mom on a Mission: My Pru Life UK Story',
    description: (
      <div className='flex flex-col space-y-4'>
        <h1>
          Pru Life UK has transformed my life, offering the fulfillment of earning an income while being present for my kids. I now have financial independence and a strong sense of purpose, recognized with achievements I never imagined.
        </h1>
        <p>
          After 18 years in other industries, Pru Life UK is now my sole focus. This isn&apos;t just a job; it&apos;s a business of trust, relationships, and legacy. You control your earnings, work flexibly, and can build your own team.
        </p>
        <p>This career changed my life. Ready for yours to change too? Message me to explore a part-time opportunity!</p>
      </div>
    ),
    gallery: [image1, image3, image4, image2],
  },
  {
    title: 'Client Success',
    description: 'Success stories of real clients who achieved their dreams with our guidance.',
    gallery: [H2, H3, H4],
  },
  {
    title: 'Industry Recognition',
    description: 'Award-winning expertise in action, recognized by peers and industry leaders.',
    gallery: [H3, H4, H5],
  },
  {
    title: 'Educational Outreach',
    description: 'Sharing knowledge with communities through seminars, workshops, and training.',
    gallery: [H1, H4, H5],
  },
  {
    title: 'Future Vision',
    description: 'Planning for tomorrow, today. Creating long-term strategies for lasting impact.',
    gallery: [H1, H2, H5],
  },
];

const Headshot = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalThumbIndex, setModalThumbIndex] = useState(0);

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
      if (delta > 50) handleNext();
      if (delta < -50) handlePrev();
    }
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setModalThumbIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="w-full h-auto flex justify-center bg-[#14110F] dark:bg-[#FCF8EE] pt-4 px-4 md:px-8 xl:px-16 relative">
      {/* --- MOBILE VIEW --- */}
      <div className="flex justify-center sm:hidden w-full relative h-[300px] items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute w-[260px] h-[260px] rounded-xl overflow-hidden border-4 border-[#E1B951] dark:border-[#14110F] bg-black"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => openModal(currentImageIndex)}
          >
            <Image
              src={headshotImages[currentImageIndex]}
              alt={`Headshot ${currentImageIndex + 1}`}
              width={260}
              height={260}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- TABLET & DESKTOP VIEW --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-full max-w-7xl"
      >
        {headshotImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="cursor-pointer rounded-xl overflow-hidden border-4 border-[#E1B951] dark:border-[#14110F] w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[220px] xl:h-[250px]"
            onClick={() => openModal(index)}
          >
            <Image
              src={img}
              alt={`Headshot ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              priority
            />
          </motion.div>
        ))}
      </motion.div>

      {/* --- MODAL --- */}
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
              className="bg-[#14110F] p-6 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto relative border-2 border-[#E1B951] dark:border-[#FCF8EE]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-1 right-2 sm:top-3 sm:right-2 md:top-2 md:right-4 text-red-700 text-xl sm:text-2xl md:text-4xl hover:text-[#E1B951] focus:outline-none"
                  aria-label="Close modal"
                >
                  ×
                </button>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Main Image and Thumbnails */}
                <div className="flex-1">
                  <Image
                    src={headshotDetails[modalImageIndex].gallery[modalThumbIndex]}
                    alt={`Modal Image ${modalImageIndex + 1}`}
                    width={600}
                    height={600}
                    className="object-contain w-full h-auto max-h-[60vh] rounded-lg"
                  />
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {headshotDetails[modalImageIndex].gallery.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        onClick={() => setModalThumbIndex(idx)}
                        width={80}
                        height={80}
                        className={`cursor-pointer rounded-md object-cover transition-transform duration-200 ${
                          modalThumbIndex === idx
                            ? 'ring-4 ring-[#E1B951]'
                            : 'opacity-80 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Title and Description */}
                <div className="flex-1 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#E1B951]">
                    {headshotDetails[modalImageIndex].title}
                  </h2>
                  <div className="text-lg">
                    {headshotDetails[modalImageIndex].description}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Headshot;