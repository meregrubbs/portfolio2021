import * as React from 'react';
import SearchEngineOps from '../templates/SearchEngineOps';
import Hero from '../templates/Hero';
import Portfolio from '../templates/Portfolio';
import Testimonials from '../templates/ClientTestimonials';
import Footer from '../templates/Footer';
import '../css/index.css';

const IndexPage = () => {
  return (
    <main>
      <SearchEngineOps />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default IndexPage;
