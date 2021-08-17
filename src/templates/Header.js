import * as React from 'react';
import { Link } from 'gatsby';
import megLogo from '../images/meg-logo-1.png';
import '../css/typography.css';

// markup
const Header = () => {
  return (
    <nav>
      <Link to='/' className='logo-container'>
        <img className='logo' src={megLogo} alt='Meredith Grubbs Logo' />
      </Link>

      <Link className='button hero-button' to='/worktogether'>
        Let's Work Together
      </Link>
    </nav>
  );
};

export default Header;
