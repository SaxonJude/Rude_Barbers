import React from 'react';
import './pricing.css';

import pricing from '../../assets/pricing.svg';

const Pricing = () => {
  return (
    <div className='pricing section__padding' id='pricing'>
      <div className="pricing-container">

        <div className="pricing-container_title">
          <h2>Our Pricing</h2>
          <div className="underline"></div>
        </div>

        <div className="pricing-container_img">
          <img src={pricing} alt="pricing table" />
        </div>

      </div>
    </div>
  )
}

export default Pricing