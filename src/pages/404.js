import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../templates/Seo';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import '../css/index.css';

const NotFoundPage = () => {
  return (
    <main>
      <Seo />
      <Header />
      <div className='not-found'>
        <h1 className='section-title'>Page Not Found</h1>
        <p>Sorry, I couldn't find the page you were looking for.</p>
        <Link to='/' className='link'>
          <p>Try going to the Home Page</p>
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default NotFoundPage;
