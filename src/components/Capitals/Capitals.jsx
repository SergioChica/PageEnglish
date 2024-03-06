import React from 'react'
import './capitals.css'

import { GiColombia } from "react-icons/gi";


export const Capitals = ({id,img1,img2,img3,title,link}) => {
  return (
    <>
    <div id={id} className="containerSliderAndText">
    <div className="slider-wrap">
        <div className="slider">
            <img id='slide-1' src={img1} alt="" />
            <img id='slide-2' src={img2} alt="" />
            <img id='slide-3' src={img3} alt="" />
        </div>
        <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
        </div>
    </div>
    <div className="textAndLink">
        <h2 className='titleCapitals'>{title}</h2>
        <a href={link} className='linkCapitals' target='_blank'>Visita Su Historia <GiColombia /> </a>
    </div>
    </div>
   </>
  )
}
