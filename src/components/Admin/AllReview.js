import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


const AllReview = () => {

   const [reviews, setReviews] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      fetch('https://whispering-sierra-36604.herokuapp.com/review')
      .then(res => res.json())
      .then(data => {
         setReviews(data.slice(0, 25))
         setLoading(true)
      })
   },[])

   const handleDeleteReview = (id) => {
      var proceed = window.confirm("Are you sure you want to delete?");
      if (proceed){
         fetch(`https://whispering-sierra-36604.herokuapp.com/review/${id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount>0){
               const filterData = reviews.filter(review => review._id !== id)
               setReviews(filterData)
               alert('Deleted')
            }
         })
      }
   }

   return (
      <div>
         <div className="adminHeading">
            <h3>All reviews</h3>
         </div>
         {
            !loading ? 
            <div className="d-flex justify-content-center mt-5">
               <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
            :
            
            <Table striped bordered hover>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Delete</th>
               </tr>
            </thead>
            {
            reviews.map(review => 
            <tbody key={review._id}>
               <tr>
                  <td>{review.clientName}</td>
                  <td>{review.description.slice(0, 60)}</td>
                  <td> <button onClick={() => handleDeleteReview(review._id)}>Delete</button></td>
               </tr>
            </tbody>)
            }
         </Table>}
      </div>
   );
};

export default AllReview;