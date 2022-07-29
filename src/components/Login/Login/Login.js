import React, { useState } from 'react';
import logo from '../../../Group 33092.png';
import google from '../../../Image/googleLogo.png';
import './Login.css'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

const Login = () => {

   const location = useLocation()
   const navigate = useNavigate()
   const navigate_url = location?.state?.from || '/'

   const { handelLoginUser , handelGoogleSignIn, handleForgetPassword, setError, isLoading, error } = useAuth()

   const [loginUser, setLoginUser] = useState({})

   const handelOnBlur = (e) => {
      const fields = e.target.name;
      const value = e.target.value
      const newValue = {...loginUser}
      newValue[fields] = value;
      setLoginUser(newValue)
   }

   const forgetPassword = () => {
      if(loginUser.email === ""){
         alert("Please Provide Email Address")
         return
      }
      handleForgetPassword(loginUser.email)
      .then(() => {
         alert('Password reset email sent! Please check inbox or spam folder')
      })
      .catch((error) => {
         setError(error.message)
      })
   }

   const handelRegisterFrom = (e) => {
      e.preventDefault();
      handelLoginUser(loginUser.email, loginUser.password, navigate, navigate_url)
   }


   return (
      <>
      <div className="text-center loginLogo mt-5">
         <img src={logo} alt="logo" />
      </div>
      <div className="d-flex justify-content-center">
         <div className="w-25 mx-auto mt-4">

               { isLoading &&
               <div class="d-flex justify-content-center my-2">
                  <div class="spinner-border" role="status">
                     <span class="visually-hidden">Loading...</span>
                  </div>
               </div>
               }
               { error &&
                  <div className="alert alert-warning" role="alert">
                  A simple warning alert—check it out!
                </div>
               }

            <div className="border p-4">
               <h4 className="mt-1 mb-4">Login an account</h4>
               <form onSubmit={handelRegisterFrom}>

                  <input type="email" className="form-control" name="email" placeholder="Email" onBlur={handelOnBlur} required/>

                  <input type="password" className="form-control my-3" name="password" placeholder="Password" onBlur={handelOnBlur} required/>
                  
                  <input type="submit" className="form-control registerButton" value="Login"/>
               </form>

               
               <p onClick={forgetPassword} className="mt-3"><Link className="link-color" to="/login">Forget Password</Link></p>

               <p>Don't have an account? <Link className="link-color" to="/register">Create an account</Link> </p>
            </div>

            <div className="mt-2 loginGoogle text-center">
            <p>-------------Or-------------</p>
               <h3>Login With</h3>
               <button onClick={() =>handelGoogleSignIn(navigate, navigate_url)} className="mt-2">Connect with <img src={google} alt="google" /></button>
            </div>
         </div>
      </div>
      </>
   );
};

export default Login;