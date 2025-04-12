import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import NewCollection from '../../Components/NewCollection/NewCollection'
 


const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar></Sidebar>


      <Routes>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/listproduct' element={<ListProduct></ListProduct>}></Route>
        <Route path='/newcollection' element={<NewCollection></NewCollection>}></Route>



      </Routes>

      
      
    </div>
  )
}

export default Admin
