import React from 'react'
import {useState} from 'react'
import "../styles/LoginStyles.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"", email:"", password:"",
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  //e.preventDefault prevents from the page refreshing when the Register button is clicked which is not what we want.
  //async function because we are making an API request.
  const handleSubmit =async e => {
    e.preventDefault()
    try { 
      await axios.post("/authentication/register", inputs);
      navigate("/login");
    } catch(err) {
      setErr(err.response.data);
    }
  }


  return (
    <div className = "authentication">
        <h1>Register</h1>
        <form>
            <input required type="email" placeholder='Email' name="email" onChange = {handleChange}/>
            <input required type="text" placeholder='Username' name="username" onChange = {handleChange}/>
            <input required type="password" placeholder='Password' name="password" onChange = {handleChange}/>
            <button onClick={handleSubmit}>Register</button> 
            {err && <p>{err}</p>}
            <span>Do you have an account?<Link to="/login"> Login</Link></span>
        </form>
    </div>
  )
}

export default Register