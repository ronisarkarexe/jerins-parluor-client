import React from 'react';
import face from '../../Image/faceWash.png'

const ScreenHandle = () => {
   return (
      <div className="bg-color">
         <div className="container py-5">
            <div className="row">
               <div className="col-sm-6 md-6 d-flex justify-content-center align-items-center">
                  <img className="img-fluid" src={face} alt="img" />
               </div>
               <div className="col-sm-6 md-6 d-flex justify-content-center align-items-center marginTopMV px-4">
                  <div>
                     <h3>Let us handle your <br /> screen <span className="n-color1">Professionally</span>.</h3>

                     <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia illo asperiores unde laboriosam alias praesentium ea, dignissimos fugiat</p>

                     <div className="row">
                        <div className="col-sm-6 col-md-6">
                           <h2 className="n-color1">500+</h2>
                           <p>Happy Customer</p>
                        </div>
                        <div className="col-sm-6 col-md-6">
                           <h2 className="n-color1">16+</h2>
                           <p>Total Services</p>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ScreenHandle;