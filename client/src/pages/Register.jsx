import React from 'react'
import "../styles/LoginStyles.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className = "authentication">
        <h1>Register</h1>
        <form>
            <input required type="email" placeholder='Email' />
            <input required type="text" placeholder='Username' />
            <input required type="password" placeholder='Password' />
            <button>Register</button> 
            <p>Error placeholder</p>
            <span>Do you have an account?<Link to="/login"> Login</Link></span>
        </form>
    </div>
  )
}

export default Register