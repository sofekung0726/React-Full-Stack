import React, { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import AuthService from '../services/auth.service'
import { useAuthContext } from '../context/auth.context'

const Navbar = () => {
  const {user , logout} = useAuthContext();
  const navigate = useNavigate();
  const handleLogout =() =>{
    logout();
    navigate("/signin");
  }
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
        {/* {!user &&( */}
        <li className="nav-item">
          <Link className="nav-link " to="/Add">Add</Link>
        </li>
        {/* )} */}
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
        
        
      </ul>
     {user && 
        (<li className="form inline my-2 my-lg-0 ">
          <Link className='nav-link' to="/Profile"><span className="badge">
            welcome , <span className='mr-sm2 h4' > {user.username}</span>
          </span> </Link>
          <button className='btn btn-danger' onClick={handleLogout}>  Logout </button>
        </li>)}
    </div>  
      
  </div>
</nav>
  )
}

export default Navbar