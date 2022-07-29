import { useState, useEffect } from 'react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, getIdToken } from "firebase/auth";


import initializeAuthentication from '../components/Firebase/firebase.init';
initializeAuthentication()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

   const auth = getAuth();

   const [ user, setUser ] = useState({})
   const [ error, setError ] = useState('')
   const [ isLoading, setIsLoading ] = useState(false)
   const [ admin, setAdmin ] = useState(false)
   const [token, setToken] = useState('')

   
   const handelRegisterUser = (email, password, name, navigate) => {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
         const newUser = {email, displayName: name}
         setUser(newUser)
         handelUpdateProfile(name)
         saveUser(email, name, 'POST')
         setError('')
         navigate('/')
      })
      .catch((error) => {
         setError(error.message)
      })
      .finally(() => setIsLoading(false))
   }

   const handelLoginUser = (email, password, navigate, navigate_url) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
         setError('')
         navigate(navigate_url)
         handleForgetPassword(email)
      })
      .catch((error) => {
         setError(error.message)
      })
      .finally(() => setIsLoading(false))
   }

   const handelGoogleSignIn = (navigate, navigate_url) => {
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
         const user = result.user;
         saveUser(user.email, user.displayName, 'PUT')
         setError('')
         navigate(navigate_url)
      })
      .catch((error) => {
         setError(error.message)
      })
      .finally(() => setIsLoading(false))
   }


   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if(user){
            setUser(user)
            getIdToken(user)
            .then(idToken => localStorage.setItem('idToken', idToken))
         }
         else{
            setUser({})
         }
         setIsLoading(false)
      })
      return () => unsubscribe;
   },[setUser, auth])

   // after get user/admin
   useEffect(()=> {
      fetch(`https://whispering-sierra-36604.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
   },[user.email])


   const handelUpdateProfile = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name,
       }).then(() => {
         
       })
   }

   const handelSignOut = () => {
      signOut(auth)
      .then((result) => {
         setUser({})
      })
      .finally(() => setIsLoading(false))
   }

   const handleForgetPassword = (email) => {
      return sendPasswordResetEmail(auth, email)
   }

   const saveUser = (email, displayName, method) => {
      const user = { email, displayName }
      fetch('https://whispering-sierra-36604.herokuapp.com/users',{
         method: method,
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
   }

   return {
      user,
      setUser,
      error,
      admin,
      setError,
      isLoading,
      setIsLoading,
      handelRegisterUser,
      handelLoginUser,
      handelSignOut,
      handelGoogleSignIn,
      handleForgetPassword
   }
};

export default useFirebase;