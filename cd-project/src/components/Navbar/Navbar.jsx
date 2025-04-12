import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
// import e from 'cors'

const Navbar = () => {

  const {cartItems}=useContext(ShopContext)
  const [menu, setmenu] = useState('SHOP')
  
  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" className='shopper-img'/>
        <p> SHOPPER</p>
      </div>
        <ul className="nav-menu">
          <li onClick={()=>{setmenu('SHOP')}}><Link to ='/' style={{textDecoration:'none'}}>SHOP</Link>{menu==='SHOP'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('MEN')}}><Link to ='/mens' style={{textDecoration:'none'}}>MEN</Link>{menu==='MEN'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('WOMEN')}}><Link to='/womens' style={{textDecoration:'none'}}>WOMEN</Link> {menu==='WOMEN'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('KID')}}><Link to ='/kids' style={{textDecoration:'none'}}>KIDS</Link>{menu==='KID'?<hr/> :<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
         
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">
          {Object.values(cartItems).reduce((acc, item) => acc + item, 0)}

        </div>
          
         
        </div>

        

      </div>
      
      
  )
}

export default Navbar
