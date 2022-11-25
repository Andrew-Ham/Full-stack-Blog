import React from 'react'
import "../styles/LoginStyles.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className = "authentication">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='Username' />
            <input required type="password" placeholder='Password' />
            <button>Login</button> 
            <p>Error placeholder</p>
            <span>Don't have account?<Link to="/register"> Register Account </Link></span>
        </form>
    </div>
  )
}

export default Login