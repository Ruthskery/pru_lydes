import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
// import Carousel from '@/components/carousel';
import Credentials from '@/components/credentials';
import Careerpath from '@/components/careerpath';
import React from 'react';
// import InflationCalculator from '@/components/inflationcalcu';
import Video from '@/components/video';
import ParallaxSection from '@/components/parallax';
import Faqs from '@/components/faqs';
import TestimonialsCarousel from '@/components/testimonies';
import RainEffect from '@/components/raineffect';
import BlogPage from '@/components/blog';


const Home = () => {
  return <div>
    <Navbar />
    <Hero />
    <ParallaxSection />
    <Video />
    {/* <Carousel /> */}
    <About />
    <Credentials />
    {/* <Careerpath /> */}
    {/* <InflationCalculator /> */}
    <Contact />
    <TestimonialsCarousel />
    <Faqs />
    <BlogPage />
    <Footer />
    {/* <RainEffect /> */}
  </div>;
};

export default Home;