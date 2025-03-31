import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter'>

      <h1> Get Exclusive Offers On Your Email</h1>
      <hr />
      <p>Subscribe to our newsletter and stay updated</p>

      <div>
        <input type="email" placeholder='Your Email Id...' />
        <button>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Newsletter
