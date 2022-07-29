import React from 'react';
import useAuth from '../../hooks/useAuth';
import img from '../../Image/img_avatar.png'

const UserDashboard = () => {

   const { user } = useAuth()

   return (
      <div>
         <div className="adminHeading">
            <h3>Dashboard</h3>
         </div>

         <div className="p-4 user-dashboard">
            <h3 className="mb-4">User Profile:</h3>
            <h6>Name: {user.displayName}.</h6>
            <h6 className="my-3">Email: {user.email}.</h6>
            <h6>Image:</h6>
            <img src={user.photoURL? user.photoURL : img} alt="img" />
         </div>
      </div>
   );
};

export default UserDashboard;