import React, { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const OrderList = () => {
   const [order, setOrder] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(()=> {
      fetch('https://whispering-sierra-36604.herokuapp.com/booked')
      .then(res => res.json())
      .then(data => {
         setOrder(data)
         setLoading(true)
      })
   },[])

   return (
      <div className="order-list">
         <div className="adminHeading">
            <h3>Order List</h3>
         </div>

         {
           !loading? <div className="d-flex justify-content-center mt-5">
           <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
           </div>
            </div>
            : 
         
         <div>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email ID</th>
                     <th>Services</th>
                     <th>Payment Status</th>
                     <th>Payment Method</th>
                  </tr>
               </thead>
               {
                  order.map(or => 
                  <tbody key={or._id}>
                     <tr>
                        <td>{or.patentName}</td>
                        <td>{or.email}</td>
                        <td>{or.servicesName}</td>
                        <td>{or.paymentStatus}</td>
                        <td></td>
                     </tr>
                  </tbody>)
               }
               
            </Table>
         </div>
         }


      </div>
   );
};

export default OrderList;