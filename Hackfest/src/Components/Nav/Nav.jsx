import React from 'react'
import './nav.css'

import logo from '../Images/biustlogoBlack.svg'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-nav">
      <div className="top-sec">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo white" />
          </a>
          
        </div>
        <div className="login-sign">
            <Link to="/login">
                <p>log in or sign up</p>
                <h3></h3>  
            </Link>
               
            </div>
      </div>
      <div className="bottom-sec"></div>
        
        <div className="right">
            <div className="nav-links">
            {/* navigation links */}
          
            <Link to="/leaderboard">
                <p>Leaderboard</p>  
            </Link>
            <Link to="/newsupdates">
                <p>News & updates</p>  
            </Link>
             <Link to="/fixtures">
                <p>fixtures</p>  
            </Link>
            <Link to="/tournament">
                <p>tournaments</p>   
            </Link>
            <Link to="/newsupdates">
                <p>News & updates</p>  
            </Link>
            </div>

            
        </div>
        
    </div>
  )
}

export default Nav