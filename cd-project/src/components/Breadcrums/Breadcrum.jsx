import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png' 

const Breadcrum = (props) => {

  const {chillpill}=props;

  // const {product}=props;
  // console.log(product);
  
  return (
    <div className='breadcrum'>
      HOME 
      <img src={arrow_icon} alt="" /> 
      SHOP <img src={arrow_icon} alt="" />
      {chillpill.category} 
      <img src={arrow_icon} alt="" /> 
      {chillpill.name}
    </div>
  )
}

export default Breadcrum
