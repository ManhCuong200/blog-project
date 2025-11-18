import React from "react";
import { useContext } from "react";
import  AuthContext  from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role: requiredRole }) => {
  const { userInfo, role } = useContext(AuthContext);
  if (!userInfo) {
    return <Navigate to="/login" />;
  }
  if (role !== requiredRole) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;