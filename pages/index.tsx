import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
// import Carousel from '@/components/carousel';
import Credentials from '@/components/credentials';
// import Careerpath from '@/components/careerpath';
import React from 'react';
import InflationCalculator from '@/components/inflationcalcu';
import Video from '@/components/video';
import Appointment from '@/components/appointment';
import Faqs from '@/components/faqs';
import TestimonialsCarousel from '@/components/testimonies';


const Home = () => {
  return <div>
    <section id='/'> 
    <Hero />
    </section>
    <section>
    <Video />
    {/* <Carousel /> */}
    </section>
    <section id='about'> 
    <About />
    <Credentials />
    {/* <Careerpath /> */}
    </section>
    <section id='contact'> 
    <Contact />
    </section>
    <section id='products'> 
    
    </section>
    <Navbar />



    <Appointment />
    <TestimonialsCarousel />
    <Faqs />
    <Footer />   
    <InflationCalculator />
  </div>;
};

export default Home;
