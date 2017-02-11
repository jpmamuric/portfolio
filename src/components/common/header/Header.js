import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const Header = ({title, src, alt}) => {
  return (
    <div className='Header'>
      <div className='header-logo-container'>
        <Link to='/'>
          <img className='header-logo' src={src} alt={alt} />
        </Link>
      </div>
      <nav className='header-nav'>
        <Link to='/resume' className='nav-link'>Resume</Link>
        <Link to='/' className='nav-link'>Skills</Link>
        <Link to='/' className='nav-link'>Portfolio</Link>
        <Link to='/' className='nav-link'>Contact</Link>
      </nav>
    </div>
  )
}
export default Header ;
