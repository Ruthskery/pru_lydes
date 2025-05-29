import { useEffect, useState } from 'react';
import Contact from '@/components/contact';
import Footer from '@/about/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';
// import Credentials from '@/components/credentials';
// import Careerpath from '@/components/careerpath';
import React from 'react';
import Video from '@/components/video';
// import Appointment from '@/components/appointment';
// import Faqs from '@/components/faqs';
import TestimonialsCarousel from '@/components/testimonies';
import { ArrowUp } from 'lucide-react'; // Import the ArrowUp icon
import { ThemeProvider } from "@/context/themeContext";
import GlowingCursor from '@/components/GlowingCursor';
import Services from '@/components/services';
import Survey from '@/components/survey';

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

        {/* Survey Section */}
        <section id="survey">
          <Survey />
        </section>
        
        {/* Products Section */}
        <section id="products">
          <Carousel />
        </section>

        {/* Services Section */}
        <section id="service">
          {/* <Credentials /> */}
          <Services />
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
            className="fixed right-5 animate-bounce bottom-5 bg-white dark:bg-black bg-opacity-50 p-3 rounded-full cursor-pointer transition-opacity duration-300 opacity-100 hover:bg-opacity-70"
            onClick={scrollToTop}
          >
            <ArrowUp size={24} 
            className='text-black dark:text-white'/> {/* Replace "UP" with the ArrowUp icon */}
          </div>
        )}
        </div>
    </ThemeProvider>
    );
  };

export default Home;