import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
        <div className="card-icon">
            <img src={props.icon} alt={props.alt} />
        </div>
        <div className="card-img">
            <img src={props.img} alt={props.alt} />
        </div>
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Card;