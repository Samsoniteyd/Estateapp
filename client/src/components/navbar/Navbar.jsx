
import React, { useState, useContext } from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext (AuthContext)


 
  return (
    
    <nav>
        <div className='left'>
          <a href=  "/" className='logo'>
            <img src="/logo.png" alt="" />
            <span>lamestate</span>
          </a>
          <a href="/">Home</a>
          <a href="/list">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
        </div>
        <div className='right'>
        {currentUser? ( 
        <div className='user'>
            <img
              src={currentUser.avatar || "/size.png"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>

        </div>
         ): (
           <div><a href="/login">sign in</a></div> )  }
        <a href="/register" className='register'>signup</a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={()=>setOpen((prev) => !prev)} />
        </div>
        <div className= {open ? "menu active" : "menu"}>
        <a href="/">Home</a>
          <a href="/list">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">sign in</a>
          <a href="/">sign up</a>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar