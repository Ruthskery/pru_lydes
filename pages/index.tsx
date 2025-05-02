import { useEffect, useState } from 'react';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';
import Credentials from '@/components/credentials';
// import Careerpath from '@/components/careerpath';
import React from 'react';
import Video from '@/components/video';
// import Appointment from '@/components/appointment';
// import Faqs from '@/components/faqs';
import TestimonialsCarousel from '@/components/testimonies';
import { ArrowUp } from 'lucide-react'; // Import the ArrowUp icon
import { ThemeProvider } from "@/context/themeContext";
import GlowingCursor from '@/components/GlowingCursor';


const Home = () => {
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
    <ThemeProvider>
      <div>
        <GlowingCursor />
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section id="main">
          <Hero />
        </section>

        {/* Video Section */}
        <Video />

        {/* Products Section */}
        <section id="products">
          <Carousel />
        </section>

        {/* Services Section */}
        <section id="service">
          <Credentials />
        </section>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        {/* FAQs Section
        <Faqs /> */}

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        {isScrolled && (
          <div
            className="fixed right-5 animate-bounce bottom-5 bg-white bg-opacity-50 text-white p-3 rounded-full cursor-pointer transition-opacity duration-300 opacity-100 hover:bg-opacity-70"
            onClick={scrollToTop}
          >
            <ArrowUp size={24} 
            className='text-black'/> {/* Replace "UP" with the ArrowUp icon */}
          </div>
        )}
        </div>
    </ThemeProvider>
    );
  };

export default Home;