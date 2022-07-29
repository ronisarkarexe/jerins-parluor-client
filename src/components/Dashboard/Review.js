import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
const MySwal = withReactContent(Swal)

const Review = () => {
   
   const navigate = useNavigate()
   const [review, setReview] = useState({})

   const { user } = useAuth()

   const handleOnBlur = (e) => {
      const fields = e.target.name;
      const value = e.target.value;
      const newData = {...review}
      newData[fields] = value;
      setReview(newData)
   }

   console.log(review)
   const handleReviewForm = (e) => {
      e.preventDefault();

      const newReview = {
         ...review,
         photo: user.photoURL
      }
      fetch('https://whispering-sierra-36604.herokuapp.com/review', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newReview)
      })
      .then(res => res.json())
      .then(data => {
         if(data.insertedId){
            MySwal.fire({
               icon: 'success',
               title: 'Good job!',
               text: 'Your Review has been successfully submit!',
             }).then(() => {
               navigate('/')
             })
         }
      })
   }

   return (
      <div>
         <div className="adminHeading">
            <h3>Review</h3>
         </div>

         <div className="p-4 w-50">
            <form onSubmit={handleReviewForm}>
               <input type="text" className="form-control" name="clientName" placeholder="Your Name" onBlur={handleOnBlur}/>
               <textarea type="text" className="form-control my-3" name="description"  placeholder="Description" onBlur={handleOnBlur}/>
               <label htmlFor="customRange2" className="form-label">Star Rate 1 to 5</label>
               <input type="range" className="form-range" name="star" min="0" max="5" onBlur={handleOnBlur}></input>
               <input type="submit" className="form-control registerButton" value="Submit"/>
            </form>
         </div>
      </div>
   );
};

export default Review;