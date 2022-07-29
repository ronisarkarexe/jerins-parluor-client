import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Book = () => {

   const navigate = useNavigate()
   const { bookId } = useParams()


   const [paymentSystem, setPaymentSystem] = useState({})

   useEffect(()=> {
      fetch(`https://whispering-sierra-36604.herokuapp.com/booked/${bookId}`)
      .then(res => res.json())
      .then(data => setPaymentSystem(data))
   },[])


   const handelPaymentSystem = (e) => {
      e.preventDefault();

      const newData = {
         ...paymentSystem
      }

      fetch(`https://whispering-sierra-36604.herokuapp.com/booked/${bookId}`,{
         method: 'PUT',
         headers: {
            'content-Type': 'application/json'
         },
         body: JSON.stringify(newData)
      })
      .then(res => res.json())
      .then(data => {
         if(data.matchedCount>0){
            MySwal.fire({
               icon: 'success',
               title: 'Good job!',
               text: 'Payment Done Successfully!',
             }).then(() => {
               navigate('/')
             })
         }
      })
   }

   return (
      <div>
         <div className="adminHeading">
            <h3>Book</h3>
         </div>
         
         <div className="p-4 w-50">
            <form onSubmit={handelPaymentSystem}>
               <input disabled type="text" className="form-control" name="servicesName" placeholder="Name" defaultValue={paymentSystem.patentName}  required/>

               <input disabled type="email" className="form-control my-3" name="email" placeholder="Email" defaultValue={paymentSystem.email} required/>

               <input disabled type="text" className="form-control mb-3" name="phone" placeholder="Phone Number" defaultValue={paymentSystem.servicesName} required/>

               <input type="submit" className="form-control registerButton" value="Pay"/>
            </form>
         </div>
      </div>
   );
};

export default Book;