import { Navigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import { useAuth } from "./AuthProvider";
// import  useAuth  from "./useAuth";

export const ProtectedRoutes = ({children }) => {
 
  const location = useLocation()
  const {user} = useAuth();

  
  if (!user) {

    // user is not authenticated
     return <Navigate to='/login' replace state={{ from: location }}  />
  }
  return children;
};



// state={{path:location.pathname}}

