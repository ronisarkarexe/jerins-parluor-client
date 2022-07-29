import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const BookingList = () => {

   const navigate = useNavigate();
   const [ booking, setBooking ] = useState([])
   const [loading, setLoading] = useState(false)

   const { user } = useAuth()

   useEffect(() => {
      fetch(`https://whispering-sierra-36604.herokuapp.com/bookedServices?email=${user.email}`,{
         headers: {
            'authorization': `Bearer ${localStorage.getItem('idToken')}`
         }
      })
      .then(res => res.json())
      .then(data => {
         setBooking(data)
         setLoading(true)
      })
   },[])

   const handleBookingCard = (e) =>{
      navigate(`/dashboard/book/${e}`)
   }

   return (
      <div className="overflow-hidden">
         <div className="adminHeading">
            <h3>Booking List</h3>
         </div>

         {
            !loading ? 
            <div class="d-flex justify-content-center mt-5">
               <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
               </div>
            </div>
          :
            
         <div className="p-4 row">
            {
               booking.map(book => 
               <div className="col-sm-5 p-3" key={book._id}>
                  <div className="rounded-3 bg-color p-4">
                     <div className="bookImage d-flex justify-content-between align-items-center">
                        <img src={book.image} alt="img" />
                        <div>
                           <button className={book.paymentStatus? "book-button-d" : "book-button-p"}>{book.paymentStatus? book.paymentStatus: book.status}</button>
                        </div>
                     </div>
                     <h5 className="mt-4">{book.servicesName}</h5>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <small className="text-secondary">Date: {book.date}</small>
                        </div>
                        <div>
                           {!book.paymentStatus && <button onClick={() => handleBookingCard(book._id)} className="book-button">Book Now</button>}
                        </div>
                     </div>
                  </div>
               </div>
               )
            }
         </div>}
      </div>
   );
};

export default BookingList;