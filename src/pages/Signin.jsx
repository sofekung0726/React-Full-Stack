import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
const Signin = () => {
    const [username , setUsername] = useState({
        username:"",
        password:"",
      })
  return (
    
    <div className='cardin'>
    <div className="card text-center" style={{width:"50rem"}}>
    <form action="">  
                <div className="form-group">
                  <label htmlFor="name"> Username</label>
                  <input type="text" className='form-control' name='username' placeholder='Username' />
                </div>
                <div className="form-group">
                  <label htmlFor="name"> Password</label>
                  <input type="password" className='form-control' name='password' placeholder='Password'/>
                </div>
                <Link to="" className='btn btn-success px-1 mx-1' >
                  SingIn
                </Link>
               
              </form>
  </div>
  </div>
  )
}

export default Signin