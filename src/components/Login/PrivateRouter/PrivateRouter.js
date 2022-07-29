import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
   const { user } = useAuth()
   const location = useLocation();
   return user.email ? children : <Navigate to="/login" state={{ from: location }}/>
};

export default PrivateRouter;