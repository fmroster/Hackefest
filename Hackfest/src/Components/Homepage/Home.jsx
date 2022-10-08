import React from 'react'
import './home.css'
import Nav from '../Nav/Nav'
import {useNavigate } from 'react-router-dom';
// onClick = {() => { navigate('/dashboard/admin'); } }
const Home = () => {
    let navigate = useNavigate(); 
  return (
    <div className="home">
        <Nav/>
        <div className="home-banner">
            <div className="banner-content">
                <div className="link-btn-class">
                    <p></p>
                </div>
            </div>
        </div>
        hello tghis ho epage
    </div>
  )
}

export default Home
