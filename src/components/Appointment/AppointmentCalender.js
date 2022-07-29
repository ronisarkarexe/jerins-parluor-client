import React, { useState } from 'react';
import Calendar from 'react-calendar';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const AppointmentCalender = ({onChange, value, singleData}) => {

   const navigate = useNavigate()

   const status = 'Pending'

   const { name , image, price} = singleData;
   const { user } = useAuth()

   const initialInfo = {
      patentName: user.displayName,
      email: user.email,
      phone: '',
   }

   const [bookingInfo, setBookingInfo] = useState(initialInfo)


   const handelOnBlur = (e) => {
      const fields = e.target.name;
      const value = e.target.value;

      const newData = {...bookingInfo}
      newData[fields] = value;
      setBookingInfo(newData)
   }

   const handleAppointmentPage = (e) => {
      e.preventDefault();

      const appointment ={
         ...bookingInfo,
         servicesName: name,
         image,
         price,
         status: status,
         date: value.toLocaleDateString()
      }

      fetch('https://whispering-sierra-36604.herokuapp.com/booked',{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data => {
         if(data.insertedId){
            MySwal.fire({
               icon: 'success',
               title: 'Good job!',
               text: 'Your Appointment has been booked!',
             }).then(() => {
               navigate('/dashboard/bookingList')
             })
         }
      })
   }
   
   return (
      <div className="container">
         <div className="row my-5">
            <div className="col-sm-6 md-6">
               <Calendar onChange={onChange} value={value} />
            </div>
            <div className="col-sm-6 md-6">
               <form onSubmit={handleAppointmentPage}>
                  <input type="text" className="form-control" name="servicesName" placeholder="Name" defaultValue={name} disabled onBlur={handelOnBlur} required/>

                  <input type="text" className="form-control my-3" name="patentName" placeholder="Name" defaultValue={user.displayName} onBlur={handelOnBlur} required/>

                  <input type="email" className="form-control my-3" name="email" placeholder="Email" defaultValue={user.email} onBlur={handelOnBlur} required/>

                  <input type="number" className="form-control" name="phone" placeholder="Phone Number" onBlur={handelOnBlur} required/>
                  
                  <input type="text" className="form-control my-3" value={value.toLocaleDateString()} name="date" placeholder="Confirm Password" onChange={handelOnBlur} required/>

                  <input type="submit" className="form-control registerButton" value="Get an appointment"/>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AppointmentCalender;