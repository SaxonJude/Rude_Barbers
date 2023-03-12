import React from 'react';
import './about.css';

import judeandrufus2 from '../../assets/judeandrufus2.svg';

const About = () => {
  return (
    <div className='about section__padding' id='about'>
      <div className="about-container">
        <div className="about-container_img">
          <img src={judeandrufus2} alt="Jude and Rufus" />
        </div>
        <div className="about-container_content">
          <h2>About us</h2>
          <p>Rude Barbers is a family-owned barbershop in 
            Bournemouth that offers a blend of modern and 
            traditional barbering services. Our experienced and 
            skilled team is dedicated to providing high-quality 
            haircuts, beard trimming, and grooming services to 
            men of all ages. We're committed to transparency 
            and customer satisfaction, and we guarantee that
            our clients will leave feeling confident and looking 
            great.
          </p>
          <a className='navbar-appointment' href="https://app.squarespacescheduling.com/schedule.php?owner=28691044" target='_blank'>Appointment</a>
        </div>
      </div>
    </div>
  )
}

export default About