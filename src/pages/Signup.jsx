import React, { useState  } from 'react'
import { Link ,useNavigate} from "react-router-dom"
import AuthService from '../services/auth.service'

const Signup = () => {
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cmpassword: ""
  })
  const navigate = useNavigate();
  const [error , setError] = useState(false);
  const [errorMessage , setErrorMessage] = useState({message: ""})
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if(user.cmpassword === user.password){
        const register = await AuthService.register(user.username,user.email,user.password)
        navigate("/")
      }
      else{
        setError(true),
        setErrorMessage({message:"Failed! Message is not same"})
      }
    } catch (error) { 
      console.log(error);
      setError(true);
      setErrorMessage(error.response.data)
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
      <div className="card text-center" style={{ width: "38rem" }}>
        <div className='error'>{error && errorMessage.message}</div>
        <form action="">
          <div className="form-group">
            <label htmlFor="name"> Username</label>
            <input type="text" className='form-control' name='username' placeholder='Username' onChange={handleChange} value={user.username} />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Email</label>
            <input type="text" className='form-control' name='email' placeholder='Email' onChange={handleChange} value={user.email} />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Password</label>
            <input type="password" className='form-control' name='password' placeholder='Password' onChange={handleChange} value={user.password} />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Confirm Password</label>
            <input type="password" className='form-control' name='cmpassword' placeholder='Confirm Password' onChange={handleChange} value={user.cmpassword} />
          </div>

          <Link to="" className='btn btn-success px-1 mx-1' onClick={handleClick}>
            SingUp
          </Link>
          <Link to="" className='btn btn-danger px-1 mx-1' onClick={handleClear}>
            Cancle
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup