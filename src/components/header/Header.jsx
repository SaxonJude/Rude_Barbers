import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header section__padding'>
      <div className="header-container">
        <h1>Be Bold, Be <span>Rude</span>. Get the Best Haircut in Bournemouth</h1>
        <p>From Trims to Mustaches: Rude Barbers Meets All Your Haircut Needs in One Convenient Location.</p>
        <a className='navbar-appointment' href="https://app.squarespacescheduling.com/schedule.php?owner=28691044" target='_blank'>Appointment</a>
      </div>
    </div>
  )
}

export default Header