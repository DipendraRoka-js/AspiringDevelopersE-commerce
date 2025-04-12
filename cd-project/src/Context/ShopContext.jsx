import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product.js'

export const ShopContext=createContext(null)
const getDefaultCart=()=>{

  let cart={}

  for (let index = 0; index < all_product.length+1; index++) {
    cart[index]=0;
    
  }


  return cart;

  // console.log(getDefaultCart());
  

}

// console.log(cart);

// console.log(getDefaultCart());
// console.log(all_product);
/*
[itemId]

*/
const ShopContextProvider=(props)=>{
  const [cartItems, setcartitems] = useState(getDefaultCart())

  const addToCart=(itemId)=>{
    setcartitems((dog)=>({
      ...dog,
      [itemId]:dog[itemId]+1
    }))


    

    // console.log(cartItems);
    


    // console.log(prev);


    

  }
  // console.log(cartItems)


  

  // console.log(cartitems);


  const removeFromCart=(itemId)=>{
    setcartitems((prev)=>({
       ...prev,
      [itemId]:prev[itemId]-1
    }))

  }

  const contextValue={all_product,cartItems,addToCart,removeFromCart}



  return (<ShopContext.Provider value={contextValue}>

    {props.children}

  </ShopContext.Provider>)

}

export default ShopContextProvider

/**
 * 
 * 
 * 
 * 
 */