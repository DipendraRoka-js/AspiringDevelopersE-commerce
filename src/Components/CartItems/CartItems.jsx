import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'
import cross_icon from '../../Components/Assets/cross_icon.png'
const CartItems = () => {

  const {all_product,cartItems,removeFromCart,addToCart}=useContext(ShopContext)


  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        {/* <p>Add</p>
        <p>Remove</p> */}

      </div>
      <hr />



      {all_product.map((e) => {
  if (cartItems[e.id] > 0) {
    return (
      <div className="cartitems-format-main" key={e.id}>
        <img src={e.image} className="product-image" alt={e.name} />
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        
        {/* Actions: Quantity, Add, Remove */}
        <div className="cartitems-actions">
          <p>{cartItems[e.id]}</p>
          <button onClick={() => addToCart(e.id)}>+</button>
          <img
            src={cross_icon}
            onClick={() => removeFromCart(e.id)}
            alt="Remove"
            className="cross-icon"
          />
        </div>
        
        <p>${cartItems[e.id] * e.new_price}</p>
      </div>
    );
  }
})}


      {/* <div>
        <div className="cartitems-format">
          <img src="" alt="" className='carticon-product-icon' />
          <p></p>
          <p></p>
          <button className='cart-item-quantity'>
            <p></p>
            <img src={cross_icon} onClick={()=>removeFromCart()} alt="" />
          </button>
        </div>

        <hr />
      </div> */}
    </div>
  )
}

export default CartItems

































































// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from '../Assets/cross_icon.png'

// const CartItems = () => {

//   const {all_product, cartItems,removeFromCart}=useContext(ShopContext)
//   return (
//     <div className='cartitems'>

//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p> 
//       </div>

//       <hr />
//      {all_product.map((e)=>{
//       if (cartItems[e.id]>0){
//         return  <div>
//         <div className="cartitems-format cartitems-format-main">
//           <img className='carticon-product-icon'src={e.image} alt="" />
//           <p>{e.name}</p>
//           <p>${e.new_price}</p>
//           <button className='cart-items-quantity'>
//             {cartItems[e.id]}

//           </button>

//           <p>${e.new_price*cartItems[e.id]}</p>
//           <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} className='cartitems-remove-icon' alt="" />
//         </div>
//         <hr />
//       </div>

//       }
//       return null;

//      })}

//      <div className='cartitems-down'>

//       <div className="cartitems-total">
//         <h1>Cart Totals</h1>
//         <div>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${0}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping fee</p>

//               <p>Free</p>
//             </div>

//             <hr />

//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>{0}</h3>

//             </div>

//             <button >Proceed to Checkout</button>



//           </div>
//           <div className="cartitems-promocode">
//             <p>If you have a promo code, Enter it here</p>
//             <div className='cartitem-promobox'>
//               <input type="Promo code" />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>

//      </div>
      
      
//     </div>
//   )
// }

// export default CartItems
