import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {

    //disallows you to access dashboard when you haven logged in
    const { currentUser } =useAuth()
    return (
        currentUser ? <Outlet /> : <Navigate to="/login" />
    ) 
}

export default PrivateRoute