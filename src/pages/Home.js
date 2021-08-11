import * as React from 'react';
import Hero from './home_components/Hero';
import Portfolio from './home_components/Portfolio';
import ClientTestimonials from './home_components/ClientTestimonials';
import Footer from './header_footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <ClientTestimonials />
      <Footer />
    </>
  );
};

export default Home;
