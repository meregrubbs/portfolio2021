import * as React from 'react';
import Header from './Header';
import downArrow from '../images/icon-downarrow.svg';

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
          <p>View My Work</p>
          <img src={downArrow} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
