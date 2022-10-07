import React from 'react'
import './nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-nav">
        <div className="logo"></div>
        <div className="right">
            <div className="nav-links">
            {/* navigation links */}
            <Link to="/">
                <p>News & updates</p>  
            </Link>
            </div>
            <div className="login-sign">
                <div>login</div>
                <p>or</p>
                <div>sign up</div>
            </div>
        </div>
        
    </div>
  )
}

export default Nav