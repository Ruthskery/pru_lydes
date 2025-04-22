'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { montserrat } from '../styles/font';
import { motion, AnimatePresence } from 'framer-motion';
import bcdq from '../public/src/bcdq.png';
import Link from 'next/link';

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  // Swipe to close (mobile)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current !== null) {
        const touchCurrentX = e.touches[0].clientX;
        const deltaX = touchStartX.current - touchCurrentX;
        if (deltaX > 100) {
          setMenuOpen(false);
          touchStartX.current = null;
        }
      }
    };

    if (menuOpen) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {scrollDirection === 'up' && (
          <motion.nav
          key="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 px-6 lg:px-[12.5rem] py-4 flex items-center justify-between shadow-md transition-all duration-300 ease-in-out
            ${scrolled ? 'lg:rounded-bl-[2.5rem] lg:rounded-br-[2.5rem] w-[95%]' : 'w-full'}`}
          style={{
            backgroundColor: scrolled ? '#E1B951' : 'transparent',
            boxShadow: scrolled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'background-color 0.3s ease-in-out, width 0.3s ease-in-out',
          }}
        >
            {/* Burger Menu */}
            <div className="lg:hidden mr-4">
              <button onClick={() => setMenuOpen(true)} aria-label="Toggle Menu">
                <Menu size={32} />
              </button>
            </div>

            {/* Logo (Left for Desktop, Centered for Mobile) */}
            <div className="flex justify-between items-center w-full">
              <Link href="/" className="flex items-center">
                <Image src={bcdq} alt="Blue Chalcedony" width={70} height={70} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-15">
              <ul className={`${montserrat.className} flex space-x-15 text-base font-extrabold`}>
                {['Service', 'Products', 'Contact', 'About'].map((item, index) => {
                  const linkHref = item === 'About' ? '/me' : '/';
                  return (
                    <li
                      key={index}
                      className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      <Link href={linkHref}>{item}</Link>
                    </li>
                  );
                })}
              </ul>

              <button
                className={`${montserrat.className} bg-[#14110F] text-white font-semibold rounded-full px-6 py-2 shadow hover:scale-110 transition-transform text-center whitespace-nowrap`}
              >
                Schedule an Appointment
              </button>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Blurred Overlay + Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-[#E1B951] z-50 flex flex-col pt-12 px-6"
            >
              {/* Logo in Mobile Menu */}
              <div className="flex justify-center mb-8">
                <Link href="/" className="flex justify-center items-center">
                  <Image src={bcdq} alt="Blue Chalcedony" width={70} height={70} />
                </Link>
              </div>

              <button
                className="absolute top-4 right-4"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>

              <ul className={`${montserrat.className} flex flex-col space-y-6 text-xl font-bold`}>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <li className="hover:underline underline-offset-4">Service</li>
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <li className="hover:underline underline-offset-4">Products</li>
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <li className="hover:underline underline-offset-4">Contact</li>
                </Link>
                <Link href="/me" onClick={() => setMenuOpen(false)}>
                  <li className="hover:underline underline-offset-4">About</li>
                </Link>
              </ul>

              <button
                className={`${montserrat.className} mt-8 bg-[#14110F] text-white text-base font-semibold rounded-full px-6 py-2 shadow hover:scale-110 transition-transform`}
              >
                Schedule an Appointment
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
