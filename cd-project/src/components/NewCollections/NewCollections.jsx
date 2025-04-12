import React, { useEffect, useState } from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import './NewCollections.css'



export default function NewCollections() {


  const [new_collections, set_newcollections] = useState([])

  // const chill=async()=>{
  //   await fetch('http://localhost:4010/newcollection')
  //   .then((response)=>response.json())
  //   .then((data)=>{set_newcollections(data)})


  // }

  // useEffect(()=>{
  //   chill();
  // },[])

  return <>
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="new-collection-item">
      {new_collections.map((item,i)=>(
         <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />))
         }
      </div>
    </div>
  </>
}
