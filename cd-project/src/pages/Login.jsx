import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


const Login = () => {

  const [logindetails, setlogindetails] = useState({
    email:'',
    password:''
  })

  const changehandler=(e)=>{
    setlogindetails({
      ...logindetails,
      [e.target.name]:e.target.value
    })
  }

  const submit=async (e)=>{

    e.preventDefault();

    await fetch('http://localhost:4010/login',{
      method:'POST',
      headers:{


        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:logindetails.email,
        password:logindetails.password
      })

    })
    .then((response)=>{
      if (!response.ok){
        alert('Incorrect email or password')
      }
      else{

        alert('Logged in !');

      }
    })
    .then((data)=>{console.log(data);
    })
    .catch((error)=>console.log('An error occured',error.message))
  
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>

        <div className="loginsignup-fields">
          <p> <input type="email"  onChange={changehandler} name='email' placeholder='Your Email...' /></p>
          <p> <input type="text"   onChange={changehandler} name='password' placeholder='Your Password...' /></p>
        </div>

        <button onClick={submit}> Login</button>
        <div >  
              <p className='have-an-account'> Create an Account? </p> <Link to='/signup' style={{textDecoration:'none'}}> <p className='login-here' >Register Here</p></Link>
                      
        </div>

       <div className="login-signupagree">
             
             <input type="checkbox" name='' id=''/> 
             <p>By continuing, I agree to the terms and use & privacy </p>
             <p>{logindetails.email}</p>
             <p>{logindetails.password}</p>
            
           </div> 
           
      </div>
      
    </div>
  )
}

export default Login
