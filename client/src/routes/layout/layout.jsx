import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom';
import "./layout.scss";
import { AuthContext } from '../../context/AuthContext';

const layout = () => {
  return (
    <div className="layout">
      <div className="navbar">

      <Navbar/>
      </div>
      <div className="content">
      <Outlet/>
      </div>
    </div>
  )
}
const RequireAuth = () => {
  const {currentUser} = useContext(AuthContext);
 
  return  !currentUser ? (<Navigate to="/login"/>) : (
    <div className="layout">
      <div className="navbar">

      <Navbar/>
      </div>
      <div className="content">
      <Outlet/>
      </div>
    </div>
    )

}

export {layout, RequireAuth}; 