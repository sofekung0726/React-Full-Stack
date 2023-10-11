import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import AuthService from '../services/auth.service'
import { useAuthContext } from '../context/auth.context'
const Signin = () => {
    const [user , setUser] = useState({
        username:"",
        password:"",
      })
      const navigate = useNavigate();
  const [error , setError] = useState(false);
  const {login} = useAuthContext()
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // alert("Sign Up")
      //  await axios.post(`${URL}/restaurant`,restaurant,config)
      const currentUser = await AuthService.login(user.username,user.password)
      login(currentUser);
      navigate("/")
    } catch (error) { 
      console.error(error);
      setError(true);
    }
  }
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClear = () => {
    setUser({
      username: "",
      email: "",
      password: "",
      cmpassword: ""

    })
    setError(false)
  }
  return (
    
    <div className='cardin'>
    <div className="card text-center" style={{width:"50rem"}}>
    <form action="">  
                <div className="form-group">
                  <label htmlFor="name"> Username</label>
                  <input type="text" className='form-control' name='username' placeholder='Username'onChange={handleChange} value={user.username} />
                </div>
                <div className="form-group">
                  <label htmlFor="name"> Password</label>
                  <input type="password" className='form-control' name='password' placeholder='Password'onChange={handleChange} value={user.password}/>
                </div>
                <Link to="" className='btn btn-success px-1 mx-1' onClick={handleClick}>
                  SingIn
                </Link>
                <Link to="" className='btn btn-danger px-1 mx-1' onClick={handleClear}>
            Cancle
          </Link>
              </form>
  </div>
  </div>
  )
}

export default Signin