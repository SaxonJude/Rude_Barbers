import React from 'react';
import './cta.css';

import judeandrufus from '../../assets/judeandrufus.jpg';

const CTA = () => {
  return (
    <div className='cta section__padding'>
      <div className="cta-container">
        <div className="cta-container_img">
          {/* <img src={judeandrufus} alt="Jude and Rufus" /> */}
        </div>
        <div className="cta-container_content">
          <h2>We Help You Look Great</h2>
          <p>At Rude Barbers, we're committed to providing you with the best haircut experience in Bournemouth and Winton. Our team of skilled barbers offers a range of modern and traditional haircut services, so you can look and feel your best. Book your appointment today and experience the difference at Rude Barbers.</p>
          <a className='navbar-appointment' href="https://app.squarespacescheduling.com/schedule.php?owner=28691044" target='_blank'>Appointment</a>
        </div>
      </div>
    </div>
  )
}

export default CTA