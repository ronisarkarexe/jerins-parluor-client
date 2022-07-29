import React, { useState } from 'react';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import reviewImg from '../../Image/img_avatar.png'
import Rating from 'react-rating';


const Testimonials = () => {

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

   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

   return (
      <div className="container">
         <div className="py-5 text-center">
            <h2>Testimonials</h2>
         </div>

         { !loading ?
            
         <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>

            :
            
         <div className="mb-5">
            <Slider {...settings}>
               {
                  reviews.map(review => 
                  <div key={review._id}>
                     <div className="testimonials m-2 p-4 rounded-3">
                        <div className="d-flex align-items-center">
                           <div>
                              <img  src={review.photo ? review.photo : reviewImg} alt="img" />
                           </div>
                           <div className="ms-3">
                              <h4>{review.clientName}</h4>
                           </div>
                        </div>

                        <div className="pt-3">
                           <p className="text-secondary">{review.description.slice(0, 100)}</p>
                           <div>
                           <Rating 
                           initialRating={review.star}
                           emptySymbol="far fa-star fa-1x ms-1 star-color"
                           fullSymbol="fas fa-star fa-1x star-color"
                           readonly
                           />
                           </div>
                        </div>
                     </div>
                  </div>)
                  }
            </Slider>
         </div>}
           
      </div>
   );
};

export default Testimonials;