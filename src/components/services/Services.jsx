import React from 'react';
import './services.css';

// import card component
import { default as Card } from '../card/Card.jsx';

// import images
import beardtrim from '../../assets/beardtrim.jpg';
import haircut from '../../assets/haircut.jpg';
import clippercut from '../../assets/clippercut.jpg';

// import icons
import haircuticon from '../../assets/icons/haircuticon.svg';
import clippercuticon from '../../assets/icons/clippercuticon.svg';
import beardtrimicon from '../../assets/icons/beardtrimicon.svg';

const Services = () => {
  return (
    <div className='services section__padding' id='services'>
      <div className="services-container">
        <div className="services-container_title">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-container_cards">
          <Card img={haircut} icon={haircuticon} alt={'haircut'} title={'hair cut'} text={"Experience exceptional haircuts for men and boys with our modern and traditional barbering services."} />
          <Card img={clippercut} icon={clippercuticon} alt={'clippercut'} title={'clipper cut'} text={"Precision beard trimming for a sharp, polished look. Book your appointment now."} />
          <Card img={beardtrim} icon={beardtrimicon} alt={'beardtrim'} title={'beard trim'} text={"Refine your look with our expert beard trimming services. Achieve a groomed and polished appearance in no time."} />
        </div>
      </div>
    </div>
  )
}

export default Services