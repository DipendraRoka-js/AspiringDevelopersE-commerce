import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png';
import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'


const Hero = () => {
  
  return (
  <div className='big-hero'>
    <div className='medium-hero'>

      <div className="hero-left">
        <div>
          <p className='new'>new</p>
          <img className='hand-icon' src={hand_icon} alt="" />
        </div> 
          <p className='collections'>collections </p>
          <p className='for-everyone'>for everyone</p>
            <button className='arrow-btn' >Latest Collection →</button>
      </div>
      <div className="hero-right">
       <img  className='hero-img' src={hero_image} alt="" />

      </div>
      
    </div>
  </div>

  )
}

export default Hero
