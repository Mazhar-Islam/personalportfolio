
import React, { useState } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <nav className='navbar fixed-top'>
        <Link to='/' className='navbar-logo' > Mazharul Islam
         </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
  
        <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links'> Home </Link>
          </li>

          <li className='nav-item' >
            <Link to='/services' className='nav-links' > Services </Link>
          </li>

          {/* <li className='nav-item'>
            <Link to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li> */}

          <li className='nav-item'>
            <Link to='/Contact'className='nav-links'>Contact Us</Link>
          </li>

          <li>
            <Link to='/sign-up'
              className='nav-links-mobile'> Sign Up
            </Link>
          </li>
        </ul>
      
      </nav>
    </>
  );
}

export default Navbar;
