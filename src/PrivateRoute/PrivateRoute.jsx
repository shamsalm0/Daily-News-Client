import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const  {user,loading}=useContext(AuthContext)
  const location=useLocation();
  if(loading){
return <p>loading....</p>
  }
                if(!user){
                  return  <Navigate to='/signin' state={{from:location}}replace></Navigate>
                }
            
        return children;
    
};

export default PrivateRoute;