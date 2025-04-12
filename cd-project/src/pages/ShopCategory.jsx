import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
// import { Link } from 'react-router-dom'
// import all_product from '../Components/Assets/all_product'





const ShopCategory = (props) => {



  const {all_product}=useContext(ShopContext)
  // console.log(all_product);;

  // console.log(all_product);
  // console.log(props.category);
  
  return (
    <div className='shop-category'>

      <img className='banner-css' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1-12</span>out of 36 products</p>

    
      <div className="shopcategory-sort">
        Sort By <img src={dropdown_icon} alt="" />
      </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        

        })}
      </div>

      <div className="load-more">
        <button> Explore More...</button>
      </div>






      
    </div>
  )
}

export default ShopCategory


/*   <Link to={`/product/${item.id}`}>*/






/*
App.js

<ShopCategory banner={men_banner} category='men'> 
</ShopCategory>


//
Shopcategory







*/