import * as React from 'react';
import { Link } from 'react-router-dom';
import megLogo from '../../images/meg-logo-1.png';
import '../../css/typography.css';

// markup
const Header = () => {
  return (
    <nav>
      <Link to='/' className='logo-container'>
        <img className='logo' src={megLogo} alt='Meredith Grubbs Logo' />
      </Link>

      <Link className='button hero-button' to='/contact'>
        Let's Work Together
      </Link>
    </nav>
  );
};

export default Header;
