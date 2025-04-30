import React, { useState, useEffect } from 'react';
import Navbar from '@/about/navbar';
import Hero from '@/about/hero';
import Headshot from '@/about/headshot';
import Vandm from '@/about/vandm';
import Achievements from '@/about/achievements';
import Last from '@/about/last';
import Footer from '@/about/footer';
import Gab from '@/components/form'

const Me = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Headshot />
      <Vandm />
      <Achievements />
      <Last />
      <Footer />
      <Gab />

      {isScrolled && (
        <div
          className="fixed right-5 bottom-5 bg-black bg-opacity-50 text-white p-3 rounded-full cursor-pointer transition-opacity duration-300 opacity-100 hover:bg-opacity-70"
          onClick={scrollToTop}
        >
          UP
        </div>
      )}
    </div>
  );
};

export default Me;
