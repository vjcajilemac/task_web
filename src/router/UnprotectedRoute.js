import {  Navigate } from "react-router-dom";

const UnprotectedRoute = ({ children }) => {
    if(localStorage.getItem('token')&&localStorage.getItem('token').trim()) {
      return <Navigate to="/" replace />;
    }
  
    return children;
};
export default UnprotectedRoute;