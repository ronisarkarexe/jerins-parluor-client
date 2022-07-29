import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Sheare/Header/Header';

import AppointmentCalender from './AppointmentCalender';

const Appointment = () => {

   const { id } = useParams()

   const [singleData, setSingleData] = useState({})
   const [value, onChange] = useState(new Date());

   useEffect(()=> {
      fetch(`https://whispering-sierra-36604.herokuapp.com/appointment/${id}`)
      .then(res => res.json())
      .then(data => setSingleData(data))
   },[])


   return (
      <div>
         <Header/>
         <AppointmentCalender singleData={singleData} onChange={onChange} value={value}/>
      </div>
   );
};

export default Appointment;