import * as React from 'react';
import { Link } from 'gatsby';
import megLogo from '../images/meg-logo-1.png';
import '../css/typography.css';

// markup
const ContactHeader = () => {
  return (
    <nav>
      <Link to='/' className='logo-container'>
        <img className='logo' src={megLogo} alt='Meredith Grubbs Logo' />
      </Link>

      <a href='mailto:meregrubbs@gmail.com' className='header-email'>
        meregrubbs@gmail.com
      </a>
    </nav>
  );
};

export default ContactHeader;
