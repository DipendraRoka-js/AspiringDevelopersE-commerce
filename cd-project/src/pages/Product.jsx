import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
// import { useParams } from 'react-router-dom'


const Product = () => {

  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();

  // console.log(productId);
  // console.log(productId);
  
  

  const product= all_product.find((e)=>e.id===Number(productId))




  /*
  product=all_product.find((e)=>e.id===Number(productId))
  
  */

  console.log(product);
  
  return (
    <div>

      <Breadcrum chillpill={product}></Breadcrum>
      <ProductDisplay chillpill={product}></ProductDisplay>
      <Description></Description>
      <RelatedProducts></RelatedProducts>

      
    </div>
  )
}

export default Product
