import React from 'react';
import './card.css'

const Card = ({img, title, year}) => {
  return (
    <div className="card-container">
      <img src={img} alt="" />
      <p className='title'>{title}</p>
      <p className='year'>{year}</p>
    </div>
  )
}

export default Card
