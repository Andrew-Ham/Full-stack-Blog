import React from 'react'
import "../styles/NavbarStyles.css"
import Logo from "../assets/logo.PNG"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className = "navbar">
      <div className="navbar-container">
        <div className = "logo">
          <img src = {Logo} alt ="logo" />
        </div>
        <div className = "links">
          <Link to ="/?cat=art" className="link">
            <h6>Art</h6>
          </Link> 
          <Link to ="/?cat=science" className="link">
            <h6>Science</h6>
          </Link> 
          <Link to ="/?cat=tech" className="link">
            <h6>Tech</h6>
          </Link> 
          <Link to ="/?cat=food" className="link">
            <h6>Food</h6>
          </Link> 
          <span>Account</span>
          <span>Logout</span>
          <span className = "write">
            <Link to="/write" className = "link">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar