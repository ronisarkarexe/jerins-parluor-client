import React from 'react';
import logo from '../../Group 33092.png';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {

   const { handelSignOut, admin } = useAuth()

   return (
      <div className="AdminDashboardPanel">
         <div className="adminSidebar pt-3 px-5">
            <img className="mb-4" src={logo} alt="logo"/>
            
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="">Dashboard</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="bookingList">Booking List</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="review">Review</Link>
            </div>
            <div>
               <Link className="text-decoration-none link-color-routing" to="/">Home</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="/services">Services</Link>
            </div>
            {admin && <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="/admin">Admin</Link>
            </div>}
            <div className="mt-2">
               <Link onClick={handelSignOut} className="text-decoration-none link-color-routing" to="/login">LogOut</Link>
            </div>
         </div>
         <div className="adminOutlet">
            <Outlet/>
         </div>
      </div>
   );
};

export default Dashboard;