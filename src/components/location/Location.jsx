import React from 'react';
import './location.css';

import map from '../../assets/map.svg';

const Location = () => {
  return (
    <div className='location section__padding'>
      <div className="location-container">
        <div className="location-container_title">
          <h2>Our Location</h2>
          <div className="underline"></div>
        </div>
        <div className="location-container_box">
          <div className="location-container_box-content">
              <div className="location_address">
                <h3>Address</h3>
                <p>RUDE Barbers Bournemouth, <br/> 8 Calvin Rd, <br/> Winton, <br/>Bournemouth <br/>BH9 1LN</p>
              </div>
              <div className="location_underline"></div>
              <div className="location_openhours">
                <h3>Opening Hours</h3>
                <p>Monday - Friday</p>
                <p>9am - 8pm</p>
                <div className="location_text_openhours">
                  <p>Saturday <br/>9am - 4pm</p>
                  <p>Sunday <br/> 10am - 2pm</p>
                </div>
              </div>
              <a className='navbar-appointment' href="https://app.squarespacescheduling.com/schedule.php?owner=28691044" target='_blank'>Appointment</a>
          </div>
          <div className="location-container_box-map">
              <img src={map} alt="location" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location