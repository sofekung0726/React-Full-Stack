import React, { useState } from 'react'
import {Link} from "react-router-dom"
import AuthService from '../services/auth.service'

const Navbar = () => {
  const [user,setUser] = useState(AuthService.getCurrentUser()
    )
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Graprestaurant</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Add">Add</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/search"  >Search</Link>
        </li>
        {!user && 
        (<li className="nav-item justify-content-end">
          <Link className="nav-link " to="/Signin"  >Sign In           /           </Link>
        </li>)}
        {!user && 
        (<li className="nav-item justify-content-end ">
          <Link className="nav-link " to="/Signup"  >Sign Up</Link>
        </li>)}
        {user && 
        (<li className="nav-item justify-content-end ">
          <Link className="nav-link " to="/Logout"  >Logout</Link>
        </li>)}
        
      </ul>
     
    </div>  
  
  </div>
</nav>
  )
}

export default Navbar