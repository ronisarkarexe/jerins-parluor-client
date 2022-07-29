import React from 'react';
import young from '../../Image/beautiful-young-woman.png'
import { Link } from 'react-router-dom';

const HomeSlider = () => {
   return (
      <div className="bg-color pb-3">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                  <div>
                     <h1 className="text-uppercase">beauty salon <br /> for every women</h1>

                     <p className="my-4 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae <br /> quia inventore doloribus exercitationem natus, totam odio dolor <br /> saepe assumenda illum!</p>
                     <Link to="/services">
                        <button className="btn-button">Get an Appointment</button>
                     </Link>
                  </div>
               </div>
               <div className="col-sm-6 col-md-6 marginTopMV">
                  <img className="img-fluid" src={young} alt="pic" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeSlider;