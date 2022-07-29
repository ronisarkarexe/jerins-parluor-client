import React from 'react';

const AwesomeService = ({service, handleServicesCard}) => {
   const { name, image, price, description, _id} = service;

   return (
      <div onClick={() => handleServicesCard(_id)} className="AwesomeService text-center">
         <div className="px-1">
            <img src={image} alt="img" />
            <h6>{name}</h6>
            <h6 className="n-color1">${price}</h6>
            <p>{description.slice(0, 80)}</p>
         </div>
      </div>
   );
};

export default AwesomeService;