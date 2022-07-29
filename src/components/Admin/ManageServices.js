import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ManageServices = () => {

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

   const handleDeleteServices = (id) => {
      var proceed = window.confirm("Are you sure you want to delete?");
      if (proceed){
         fetch(`https://whispering-sierra-36604.herokuapp.com/appointment/${id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filterData = services.filter(service => service._id !== id)
               setServices(filterData)
               alert('Deleted')
            }
         })
      }
   }

   const handleUpdateServices = (id) => {
      navigate(`/admin/update/${id}`)
   }

   return (
      <div>
         <div className="adminHeading">
            <h3>Manage Services</h3>
         </div>

         {!loading ?
            
            <div className="d-flex justify-content-center mt-5">
               <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>:<div>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Description</th>
                     <th>Update</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               {
               services.map(service => 
               <tbody key={service._id}>
                  <tr>
                     <td>{service.name}</td>
                     <td>{service.price}</td>
                     <td> <button onClick={() => handleUpdateServices(service._id)}>Update</button></td>
                     <td> <button onClick={() => handleDeleteServices(service._id)}>Delete</button></td>
                  </tr>
               </tbody>)
               }
            </Table>
         </div>}
      </div>
   );
};

export default ManageServices;