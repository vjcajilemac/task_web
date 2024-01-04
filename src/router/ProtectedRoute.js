import {  Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    if(!localStorage.getItem('token')||!localStorage.getItem('token').trim()) {
      return <Navigate to="/auth/login" replace />;
    }
  
    return children;
};
export default ProtectedRoute;