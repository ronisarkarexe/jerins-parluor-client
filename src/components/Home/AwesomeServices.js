import React, { useEffect, useState } from 'react';
import AwesomeService from './AwesomeService'
import { Link, useNavigate } from 'react-router-dom';


const AwesomeServices = () => {

   const [services, setServices] = useState([])
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()

   useEffect(()=> {
      fetch('https://whispering-sierra-36604.herokuapp.com/appointment')
      .then(res => res.json())
      .then(data => {
         setServices(data.slice(0, 3))
         setLoading(true)
      })
   },[])


   const handleServicesCard = (id) => {
      navigate(`/appointment/${id}`)
   }

   return (
      <div className="container py-5">
         <h2 className="text-center">Our Awesome <span className="n-color1">Services</span></h2>

         { !loading ?
            
         <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
         :
         <div className="allCards mt-5">
            {
               services.map((service) => <AwesomeService key={service._id} service={service} handleServicesCard={handleServicesCard}/>)
            }
         </div>}

         <div className="text-center mt-5 mb-2">
            <Link to="/services">
               <button className="btn-button">Explore More</button>
            </Link>
         </div>
      </div>
   );
};

export default AwesomeServices;