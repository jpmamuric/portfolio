import React from 'react'
import jump  from 'jump.js';

import './Footer.css';

const Footer = () => {
  const getYear = () => {
    let date = new Date();
    let year = date.getFullYear();
    return ` ${year} `;
  }
  return (
    <div>

      <p
        className='footer'
        onTouchTap={()=>jump('#header', {duration: 500})}>
        Back to Top
      </p>
      <p>
        jpmamuric.com &copy; 2015 - {getYear()}
      </p>
    </div>
  );
}

export default Footer;
