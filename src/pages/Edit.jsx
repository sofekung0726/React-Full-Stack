import React, {useState,useEffect} from 'react'
import {Link, useNavigate ,useParams} from 'react-router-dom'
import axios from "axios";
import authHeader from '../services/auth-header';

const URL = import.meta.env.VITE_BASE_URL
const USERNAME = import.meta.env.VITE_BASE_USERNAME
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD
const config = {    
    auth:{
        username:USERNAME,
        password:PASSWORD
    },
    headers:authHeader(),
} 
const Edit = () => {

    const [restaurant,setRestaurant] = useState({
        name:"",
        type:"",
        imageurl:""
      })
      const navigate = useNavigate();
      const [error , setError] = useState(false);
      const {restaurantId} = useParams();
      const handleChange = (e) =>{
        setRestaurant((prev)=>({...prev,[e.target.name]:e.target.value}))
      }
      useEffect(()=>{
        const fethAllRes = async() => {
            try {
                const res = await axios.get(`${URL}/restaurant/${restaurantId}`,config) 
                
                setRestaurant(res.data.Restaurants)
            } catch (err) {
                console.log(err);
            }
        }
        fethAllRes();
    },[restaurantId])
    const handleClick = async (e)=>{
        e.preventDefault();
        try {
          await axios.put(`${URL}/restaurant/${restaurantId}`,restaurant,config)
          navigate("/")
        } catch (error) {
          console.log(error);
          setError(true);
        }
      }
      const handleClear = () =>{
        setRestaurant({
          name:"",
          type:"",
          imageurl:""
        })
        setError(false)
    
      }
  return (
    <div className="contaier">
      <h1>Grap Restaurant</h1>
      <div className="row form">
            <div className="col-6 card justify-content-center">
            <h5 className="card-header">Update restaurant</h5>
            <div  className='error'>{error&& "Something went wrong"}</div>
            <div className="card-body">
              <form action="">  
                <div className="form-group">
                  <label htmlFor="name"> Restaurant name</label>
                  <input type="text" className='form-control' name='name' placeholder='Restaurant name' onChange={handleChange} value={restaurant.name} />
                </div>
                <div className="form-group">
                  <label htmlFor="name"> Restaurant type</label>
                  <input type="text" className='form-control' name='type' placeholder='Restaurant type' onChange={handleChange} value={restaurant.type} />
                </div>
                <div className="form-group">
                  <label htmlFor="name"> Restaurant imageurl</label>
                  <input type="text" className='form-control' name='imageurl' placeholder='Restaurant imageurl'onChange={handleChange} value={restaurant.imageurl}/>
                </div>

                <Link to="" className='btn btn-success px-1 mx-1' onClick={handleClick}>
                  Update
                </Link>
                <Link to="" className='btn btn-danger px-1 mx-1' onClick={handleClear}>
                  Cancle
                </Link>
              </form>
            </div>
            </div>

      </div>
    </div>
  )
}

export default Edit