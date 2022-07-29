import React, {useState, useEffect} from 'react';
import Header from '../Sheare/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Sheare/Footer/Footer'
const Services = () => {

   const [services, setServices] = useState([])
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()

   useEffect(()=> {
      fetch('https://whispering-sierra-36604.herokuapp.com/appointment')
      .then(res => res.json())
      .then(data => {
         setServices(data)
         setLoading(true)
      })
   },[])

   const handleServicesCard = (id) => {
      navigate(`/appointment/${id}`)
   }

   return (
      <div>
         <Header/>
         <div className="container">
            <h3 className="my-5">All Service</h3>
            { !loading ?
            
            <div className="d-flex justify-content-center my-5">
               <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div> 
            
            : 
            
            <div className="allCards my-5">
               {
                  services.map(service => <div key={service._id}>
                     <div onClick={() => handleServicesCard(service._id)} className="AwesomeService text-center">
                        <div className="px-1">
                           <img src={service.image} alt="img" />
                           <h6>{service.name}</h6>
                           <h6 className="n-color1">${service.price}</h6>
                           <p>{service.description.slice(0, 80)}</p>
                        </div>
                     </div>
                  </div>)
               }
            </div>}
         </div>
         <Footer/>
      </div>
   );
};

export default Services;