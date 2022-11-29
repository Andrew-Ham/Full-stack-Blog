import React from 'react'
import {useState, useContext} from 'react'
import "../styles/LoginStyles.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthenticationContext } from '../context/authenticationContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"", password:"",
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate();

  //We getting the login function we created from authenticationContext.js
  const { login } = useContext(AuthenticationContext);
  

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  //e.preventDefault prevents from the page refreshing when the Register button is clicked which is not what we want.
  //async function because we are making an API request.
  const handleSubmit =async e => {
    e.preventDefault()
    try { 
      await login(inputs)
      navigate("/");
    } catch(err) {
      setErr(err.response.data);
    }
  }
  return (
    <div className = "authentication">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='Username' name = "username" onChange={handleChange}/>
            <input required type="password" placeholder='Password' name = "password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button> 
            {err && <p>{err}</p>}
            <span>Don't have account?<Link to="/register"> Register Account </Link></span>
        </form>
    </div>
  )
}

export default Login