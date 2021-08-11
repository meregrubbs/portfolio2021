import * as React from 'react';
import Hero from './home_components/Hero';
import Portfolio from './home_components/Portfolio';
import Testimonials from './home_components/Testimonials';
import Footer from './header_footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
