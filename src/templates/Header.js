import * as React from 'react';
import { Link } from 'gatsby';
import megLogo from '../images/meg-logo.svg';
import '../css/typography.css';

// markup
const Header = () => {
  return (
    <nav>
      <Link to='/' className='logo-container'>
        <img className='logo' src={megLogo} alt='Meredith Grubbs Logo' />
      </Link>

      <Link className='button' to='/contact'>
        Let's Work Together
      </Link>
    </nav>
  );
};

export default Header;
