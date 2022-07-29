import React from 'react';

const ContactUs = () => {
   return (
      <div className="bg-color">
         <div className="container py-5">
            <div className="text-center">
               <h3>Let us handle your <br /> project, professionally.</h3>
            </div>

            <div className="mt-5 w-50 mx-auto">
               <div className="row">
                  <div className="col-sm-6">
                     <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                  </div>
                  <div className="col-sm-6">
                     <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                  </div>
               </div>
               <div className="row py-3">
                  <div className="col-sm-6">
                     <input type="text" className="form-control" placeholder="Email Address" aria-label="First name"/>
                  </div>
                  <div className="col-sm-6">
                     <input type="text" className="form-control" placeholder="Phone Number" aria-label="Last name"/>
                  </div>
               </div>

               <div className="mb-3">
                  <textarea type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Message"/>
               </div>

               <div className="text-center mt-5 mb-2">
                  <button className="btn-button">Send Message</button>
               </div>

            </div>
         </div>
      </div>
   );
};

export default ContactUs;