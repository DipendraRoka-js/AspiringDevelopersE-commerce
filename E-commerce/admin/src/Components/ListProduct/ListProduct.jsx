import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'







const ListProduct = () => {

  const [chill, setchill] = useState(false)
  const [allproduct, setAllproduct] = useState([])


  const bumrah=()=>{
    setchill(true);
  }


useEffect(()=>{
  fetchInfo();

},[chill])


  const fetchInfo=async()=>{

    await fetch('http://localhost:4010/allproducts')
     .then((response)=> response.json())
     .then((data)=>{setAllproduct(data) })
     .catch((error)=>console.log("Error mate",error.message))
  }



  



const removeproduct=async(id)=>{

  await fetch('http://localhost:4010/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
  },
  body:JSON.stringify({id:id})
})
await fetchInfo();

}



  return (<>



  <div className="listproduct">
  <h1>List of Product:</h1><br />

  <div className="listproduct-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Old Price</p>
    <p>New Price</p>
    <p>Category</p>
    <p>Remove</p>
  </div>

  <div>
    <hr />

    {allproduct.map((product) => {
  return (
    <>
      <div key={product.id} className="listproduct-format-main-boom">
        <img src={product.image} className="imagesMate" alt="" />
        <p>{product.name}</p>
        <p>{product.old_price}</p>
        <p>{product.new_price}</p>
        <img src={cross_icon} className="cross_icon" alt="" onClick={() => removeproduct(product.id)} />
      </div>
      <hr></hr>
    </>
  );
})}


  </div>

<button onClick={bumrah}>View Product</button>



  </div>
 
    </>


  )
}


export default ListProduct