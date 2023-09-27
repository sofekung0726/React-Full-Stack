import React, { useState  } from 'react'
import { Link ,useNavigate} from "react-router-dom"

const Signup = () => {
  
  const [username, setUsername] = useState({
    username: "",
    email: "",
    password: "",
    cmpassword: ""
  })
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      alert("Sign Up")
      // await axios.post(`${URL}/restaurant`,restaurant,config)
      navigate("/")
    } catch (error) { 
      console.log(error);
      setError(true);
    }
  }
  const handleChange = (e) => {
    setUsername((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClear = () => {
    setUsername({
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
        <form action="">
          <div className="form-group">
            <label htmlFor="name"> Username</label>
            <input type="text" className='form-control' name='username' placeholder='Username' onChange={handleChange} value={username.username} />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Email</label>
            <input type="text" className='form-control' name='email' placeholder='Email' onChange={handleChange} value={username.email} />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Password</label>
            <input type="password" className='form-control' name='password' placeholder='Password' onChange={handleChange} value={username.password} />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Confirm Password</label>
            <input type="password" className='form-control' name='cmpassword' placeholder='Confirm Password' onChange={handleChange} value={username.cmpassword} />
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