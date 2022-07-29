import React from 'react';

const Footer = () => {
   return (
      <div className="bg-color1">
         <div className="container text-white py-5">
            <div className="row">
               <div className="col-sm-4">
                  <h4>Location</h4>
                  <p>H#000(0th Floor). Road #000 Rajkot, <br /> Gujarat India.</p>
               </div>
               <div className="col-sm-2">
                  <h4>Company</h4>
                  <p>About</p>
                  <p>Project</p>
                  <p>Our Team</p>
                  <p>Terms Conditions</p>
               </div>
               <div className="col-sm-2">
                  <h4>Quick Links</h4>
                  <p>Rentals</p>
                  <p>Sales</p>
                  <p>Contact</p>
                  <p>Our blogs</p>
               </div>
               <div className="col-sm-4">
                  <h4>About us</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit autem, maxime error accusamus quidem ducimus vel nobis eligendi corrupti quis laboriosam, voluptates sunt repellat omnis.</p>

                  <div>
                     <i className="fa-brands fa-facebook fs-2"></i>
                     <i className="fa-brands fa-instagram mx-4 fs-2"></i>
                     <i className="fa-brands fa-youtube fs-2"></i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;