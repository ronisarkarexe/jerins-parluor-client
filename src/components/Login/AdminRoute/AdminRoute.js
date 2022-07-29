import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRouter = ({children}) => {
   const { user, admin } = useAuth()
   const location = useLocation();
   return user.email && admin ? children : <Navigate to="/" state={{ from: location }}/>
};

export default AdminRouter;