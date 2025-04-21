import React, { useState } from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'



const SignUp = () => {

  const [signup, setsignup] = useState({
    name:'',
    email:'',
    password:''

  })

  const handlechange=(e)=>{
    setsignup({
      ...signup,
      [e.target.name]:e.target.value
    })

  }

  const submit=async(e)=>{

    e.preventDefault();


    await fetch('http://localhost:4010/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
      
          name:signup.name,
          email:signup.email,
          password:signup.password
       
      }
        
      )


    }).then((response)=>{
      if (!response.ok){
        alert('The email already exists');
      }
      alert('Registered Successfully !')
      return response.json()
      
    })
    .then((data)=>{
      console.log("here is the data: ",data);
      
    })
    .catch((error)=>console.error("an error occured ",error.message))
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>

        <div className="loginsignup-fields">
          <input type="text" name='name' onChange={handlechange}  placeholder='Your Name...' />
          <p> <input type="email" name='email' onChange={handlechange} placeholder='Your Email...' /></p>
          <p> <input type="password" name='password'  onChange={handlechange} placeholder='Your Password...' /></p>
        </div>

        <button onClick={submit}> Sign Up</button>
        <div >  
           
               <p className='have-an-account'> Already have an Account? </p> <Link to='/login' style={{textDecoration:'none'}}>  <p className='login-here2'>Login Here</p></Link>

        </div>

       <div className="login-signupagree">
             
             <input type="checkbox" name='' id=''/> 
             <p>By continuing, I agree to the terms and use & privacy </p>
             <p>{signup.name}</p>
             <p>{signup.email}</p>
             <p>{signup.password}</p>
            
           </div> 

        

        

      </div>
      
    </div>
  )
}

export default SignUp
