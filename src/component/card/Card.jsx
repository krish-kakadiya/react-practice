import React from 'react'
import './Card.css'

const Card = ({title,image,description }) => {
  return (
    <div className="card">
        <img src={image} alt="card-img" className='card-img' />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    </div>
  )
}

export default Card