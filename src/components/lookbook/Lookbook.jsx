import React from 'react';
import './lookbook.css';

import lookbook from '../../assets/lookbook.svg';

const Lookbook = () => {
  return (
    <div className='lookbook section__padding' id='lookbook'>
      <div className="lookbook-container">

        <div className="lookbook-container_title">
          <h2>Our Lookbook</h2>
          <div className="underline"></div>
        </div>

        <div className="lookbook-container_img">
          <img src={lookbook} alt="lookbook table" />
        </div>

      </div>
    </div>
  )
}

export default Lookbook