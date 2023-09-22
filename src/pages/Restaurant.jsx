import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
import Card from '../components/Card';

const URL = import.meta.env.VITE_BASE_URL
const USERNAME = import.meta.env.VITE_BASE_USERNAME
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD
const config = {
    auth:{
        username:USERNAME,
        password:PASSWORD
    }
}



const Restaurant = () => {
    const [restaurants , setRestaurants] = useState([]);
    const [Search , setSearch] = useState('')
    useEffect(()=>{
        const fethAllRes = async() => {
            try {
                const res = await axios.get(`${URL}/restaurant`,config) 
                setRestaurants(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fethAllRes();
    },[])

    const handleDelete = async (id) =>{
        try {
            await axios.delete(`${URL}/restaurant/${id}`,config)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
   

  return (
    <div>
        <h1>Restaurant</h1>

        <div className='row'>
            <input className='search'placeholder='Search' type='text'
                value={Search} onChange={(event)=>{setSearch(event.target.value)}}
            />
            <div className='restaurants'>
                {
                  restaurants.filter((restaurant)=>{
                    return restaurant.name.includes(Search)
                  }).map(restaurant =>{
                    return(
                        <Card restaurant={restaurant} handleDelete={handleDelete} key={restaurant.id}/>
                    )
                  })      
                }
            </div>
        </div>

    </div>
  )
}

export default Restaurant