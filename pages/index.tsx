import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';
import Credentials from '@/components/credentials';
// import Careerpath from '@/components/careerpath';
import React from 'react';
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
    <Carousel />
    </section>
    <section id='about'> 
      <About />
    {/* <Careerpath /> */}
    </section>

    <section id='credentials'>
      <Credentials />
    </section>

    <section id=''> 

    </section>
    <Navbar />



    <Appointment />
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
  </div>;
};

export default Home;
