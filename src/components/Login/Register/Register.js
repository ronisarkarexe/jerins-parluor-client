import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../../Image/googleLogo.png';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
   
   
   const { handelRegisterUser, isLoading, error} = useAuth()
   
   const navigate = useNavigate()

   const [loginUser, setLoginUser] = useState({})

   const handelOnBlur = (e) => {
      const fields = e.target.name;
      const value = e.target.value
      const newValue = {...loginUser}
      newValue[fields] = value;
      setLoginUser(newValue)
   }

   const handelRegisterFrom = (e) => {
      e.preventDefault();
      if(loginUser.password !== loginUser.password1){
         alert('Password not match')
         return
      }
      handelRegisterUser(loginUser.email, loginUser.password, loginUser.name, navigate)
   }

   return (
      <div className="d-flex justify-content-center">
         <div className="w-25 mx-auto mt-5">

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
               <h4 className="mt-1 mb-4">Register an account</h4>
               <form onSubmit={handelRegisterFrom}>
                  <input type="text" className="form-control" name="name" placeholder="Name" onBlur={handelOnBlur} required/>

                  <input type="email" className="form-control my-3" name="email" placeholder="Email" onBlur={handelOnBlur} required/>

                  <input type="password" className="form-control" name="password" placeholder="Password" onBlur={handelOnBlur} required/>
                  
                  <input type="password" className="form-control my-3" name="password1" placeholder="Confirm Password" onBlur={handelOnBlur} required/>

                  <input type="submit" className="form-control registerButton" value="Register an account"/>
               </form>

               <p className="mt-3">Already have an account? <Link className="link-color" to="/login">Login</Link> </p>
            </div>

            <div className="mt-2 loginGoogle text-center">
            <p>-------------Or-------------</p>
               <h3>Login With</h3>
               <button className="mt-2">Connect with <img src={google} alt="google" /></button>
            </div>
         </div>
      </div>
   );
};

export default Register;