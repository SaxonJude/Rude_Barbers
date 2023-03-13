import React from 'react';
import './footer.css';

import logo2 from '../../assets/logo2.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-container_logo">
            <img src={logo2} alt="logo" />
        </div>
        <div className="footer-container_list">
          <div className="footer-container_list_content">
            <h4>Information</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#location">Location</a>
          </div>
          <div className="footer-container_list_content">
            <h4>Services</h4>
            <a href="#services">Hair Cut</a>
            <a href="#services">Clipper Cut</a>
            <a href="#services">Beard Trim</a>
          </div>
          <div className="footer-container_list_content">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/rude.barbersbournemouth/?hl=en" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/RUDEBarbersBournemouth/" target="_blank">Facebook</a>
            <a href="https://twitter.com/RudeBarbers" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer