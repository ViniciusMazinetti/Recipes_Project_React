import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/LoginContext';
import LoginPage from '../pages/LoginPage/LoginPage';
import Home from '../pages/Home';

function AppRoutes() {

  const {user} = useAuth()

  return(
    <Routes>
        <Route path="/" exact element={ !user ? <Navigate to="/login" replace /> : <Home/> } /> 
        <Route path="/login" exact element={ user ? <Navigate to="/" replace /> : <LoginPage />}  />
    </Routes>
  )
}

export default AppRoutes