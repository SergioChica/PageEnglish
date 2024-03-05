import React from 'react'

export const Cards = ({img,title,text,location}) => {
  return (
    <>
        <div className="card">
            <img src={img} alt="" className='imgCard' />
            <div className="containerTextCard">
            <h2 className='titleCard'>{title}</h2>
            <p className='textCard'>{text}</p>
            <p className="location">{location}</p>
            </div>
        </div>
    </>
  )
}
