import React from 'react';
import './navbar.css';

import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-links'>
          <div className="navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-links_container">
            <p><a href="#services">Services</a></p>
            <p><a href="#pricing">Pricing</a></p>
            <p><a href="#lookbook">Lookbook</a></p>
            <p><a href="#About">About</a></p>
          </div>
        </div>
        <a className='navbar-appointment' href="https://app.squarespacescheduling.com/schedule.php?owner=28691044" target='_blank'>Appointment</a>
    </div>
  )
}

export default Navbar