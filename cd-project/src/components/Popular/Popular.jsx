import React, { useEffect, useState } from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/'


const Popular = () => {

  const [data_product, setdata_product] = useState([])

  // const trigger= async()=>{
  //     await fetch('http://localhost:4010/popular')
  // .then((response)=>response.json())
  // .then((data)=>{console.log(data);setdata_product(data)})
  // }


  // useEffect(()=>{

  //   trigger()

  // },[])
  return  <>
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>(
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />))
        }
      </div>
      
    </div>
  </>
}

export default Popular
