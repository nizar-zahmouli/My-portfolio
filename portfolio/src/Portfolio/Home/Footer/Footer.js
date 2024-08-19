import React from 'react'
import shapeImg from '../../../assets/image/shape-bg.png'
import './Footer.css'
export const Footer = () => {
  return (
      <div className='footer-container'>
          <div className='footer-parent'>
              <img src={shapeImg} 
              alt='no internet connexion' />              
          </div>
    </div>
  )
}
