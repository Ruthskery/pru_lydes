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
import Faqs from '@/components/faqs';
import TestimonialsCarousel from '@/components/testimonies';


// import Test from '@/components/test';


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
  

  return <div>

    {/* Recently Added */}
    <Navbar />

    <section id='main'>
    <Hero />
    </section>

    <Video />
    <Carousel />
    {/* for testing the backgroundColor
    <Test/> */}

    <section id='service'>
      <Credentials />
    </section>

    {/* ------------------------------ */}
    {/* <Careerpath /> */}
  
    {/* <Appointment /> */}
    <TestimonialsCarousel />
    <Faqs />
    <section id='contact'> 
    <Contact />
    </section>

        <h1>Check My Availability</h1>
        {/* Embed Calendly iframe */}
        <div>
          <iframe 
            src="https://calendly.com/mikotothemax/30min" 
            width="100%" 
            height="800" 
            frameBorder="0"
          ></iframe>
        </div>
    <Footer />   

    {isScrolled && (
        <div
          className="fixed right-5 bottom-5 bg-black bg-opacity-50 text-white p-3 rounded-full cursor-pointer transition-opacity duration-300 opacity-100 hover:bg-opacity-70"
          onClick={scrollToTop}
        >
          UP
        </div>
      )}
  </div>;
};

export default Home;
