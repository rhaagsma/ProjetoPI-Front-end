import React from 'react'
import { Navigate  } from 'react-router-dom'
import { useAuth } from './context.tsx'


const PrivateRoute = ({children}) => {

  const { authenticated } = useAuth();

  return authenticated ? children  : <Navigate replace to="/login" />
};

export default PrivateRoute;

