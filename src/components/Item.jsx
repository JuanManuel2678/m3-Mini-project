import React from 'react'

export default function Item({}) {
    return (
        <li>
             <figure className='img_container'>
            <img src={img} alt="Character img" height="200"/>
            <span>{status}</span>
        </figure>
        <div className="title">
          <h2>{name}</h2>
          <h5>{origin}</h5>
            <div className="subtitle">
              <h5> Specie: {species}</h5>
              <h5> gender: {gender}</h5>
            </div>
        </div>
            
        </li>
    )
}