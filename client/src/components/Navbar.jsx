import React from 'react'
import {useContext} from 'react'
import "../styles/NavbarStyles.css"
import Logo from "../assets/logo.PNG"
import {Link} from "react-router-dom"
import { AuthenticationContext } from '../context/authenticationContext'


const Navbar = () => {

  const { currentUser, logout } = useContext(AuthenticationContext);

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
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login">Login</Link>}
          <span className = "write">
            <Link to="/write" className = "link">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar