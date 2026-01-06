import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Dashboard from "../../Components/Dashboard"; 

export default function ProtectedRoute() {
  const navigate = useNavigate(); 
  const email = window.localStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email, navigate]); 

  if (!email) {
    return null; 
  }

  return <Dashboard />; 
}