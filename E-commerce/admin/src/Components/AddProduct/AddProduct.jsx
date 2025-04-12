import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_cloud_icon.svg'
// import { response } from 'express';
// import {Link} from 'react-router-dom'

const AddProduct = () => {

  const [image, setimage] = useState(false);

  const [productDetails, setProductDetails]=useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })

  const imageHandler=(e)=>{
    setimage(e.target.files[0]);
  }


  const changeHandler=(e)=>{

    setProductDetails({
      ...productDetails,
      [e.target.name]:e.target.value
      
    })

  }



  const addProduct = async () => {
    try {
      let formData = new FormData();
      formData.append('product', image);
  
      // Upload image
      const uploadResponse = await fetch('http://localhost:4010/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
  
      const uploadData = await uploadResponse.json();
  
      if (!uploadData.success) {
        console.error('Image upload failed:', uploadData.message);
        alert('Image upload failed!');
        return;
      }
  
      const product = {
        ...productDetails,
        image: uploadData.image_url,

      };
      // console.log(uploadData.image_url);
  
      // Add product
      const productResponse = await fetch('http://localhost:4010/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
        
      });
      console.log(product);
      
  
      const productData = await productResponse.json();
      console.log(productData);
      
      if (productData.success) {
        alert('Product added to mongodb successfully!');
      } else {
        alert('Failed to add product');
        console.error('Error adding product:', productData.message);
      }
    } catch (error) {
      console.error('Error in addProduct function:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <div className='add-product'>

      <div className="addproduct-itemfields">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Product Name...' />        
         </div>

        <div className="addproduct-price">
          <div className="addproduct-itemfields">
            <p>Price</p>
            <input value={productDetails.old_price} type="text" onChange={changeHandler} placeholder='Enter price..' name='old_price' />
          </div>

          <div className="addproduct-itemfields">
            <p>Offer Price</p>
            <input type="text" onChange={changeHandler}  placeholder='Type Here.. ' name='new_price' />
          </div>
        </div>


        <div className="addproduct-itemfields">
          <p > Product Category</p>

          <select name="category" onChange={changeHandler} className='add-product-selector'>
            <option value="men">Men</option>
            <option value="women">Women</option>

            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="addproduct-itemfields">

          <label htmlFor="messi"> <img src={image?URL.createObjectURL(image):upload_area} className='upload_area' alt="" /></label>


          <input type="file" onChange={imageHandler} name="image" id="messi" hidden />



        </div>

        <button className='addproduct-btn' onClick={addProduct}> Add</button>

        {/* <p>{productDetails.category}</p>
        <p>{productDetails.name}</p>
        <p>{productDetails.new_price}</p>
        <p>{productDetails.old_price}</p> */}

        {/* <Link to='/newcollection'><button className='addproduct-btn-new'>NEWCOLLECTION</button></Link> */}






      
      
    </div>


  )
}

export default AddProduct
