import * as React from 'react';
import Header from './Header';
import downArrow from '../images/icon-downarrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <Header />

      <div className='hero-text'>
        <h1>
          <span>I love to design websites for small businesses.</span>
        </h1>
        <p>
          <span>
            Hi, my name is Meredith. I'm an independent web developer & designer
            based in Durango, CO.
          </span>
        </p>
        <div className='hero-scroll'>
          <h3>View My Work</h3>
          <img src={downArrow} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
