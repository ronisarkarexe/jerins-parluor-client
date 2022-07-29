import React from 'react';
import logo from '../../Group 33092.png';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminDashboard = () => {

   const { handelSignOut } = useAuth()

   return (
      <div className="AdminDashboardPanel">
         <div className="adminSidebar pt-3 px-5">
            <img className="mb-4" src={logo} alt="logo"/>
            <div>
               <Link className="text-decoration-none link-color-routing" to="">Order List</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="addService">Add Service</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="allReview">All Review</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="allUser">All User</Link>
            </div>
            <div>
               <Link className="text-decoration-none link-color-routing" to="makeAdmin">Make Admin</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="manageServices">Manage Services</Link>
            </div>
            <div className="my-2">
               <Link className="text-decoration-none link-color-routing" to="/dashboard">Dashboard</Link>
            </div>
            <div>
               <Link className="text-decoration-none link-color-routing" to="/">Home</Link>
            </div>
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

export default AdminDashboard;