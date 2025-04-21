import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
// import Chatbot from "./Components/Chatbot.js";



function App() {
const num = 0;
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        {/* <Chatbot /> */}

        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
        <Route path='/product/:productId' element={<Product></Product>}>
           <Route path=':productId' element={<Product></Product>}/>


        </Route>
        <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>

      </BrowserRouter>

      <Footer/>

     
    </div>
  );
}

export default App;
