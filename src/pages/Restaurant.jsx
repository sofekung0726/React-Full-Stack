import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card';
import Search from './Search';
import api from '../services/api'




const Restaurant = () => {
    const [restaurants , setRestaurants] = useState([]);
    const [search , setSearch] = useState('')
    useEffect(()=>{
        const fethAllRes = async() => {
            try {
                const res = await api.get(`/restaurant`) 
                setRestaurants(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fethAllRes();
    },[])

    const handleDelete = async (id) =>{
        try {
            await api.delete(`/restaurant/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
   

  return (
    <div>
        <h1>Restaurant</h1>
       
        <div className='row'>
        <Search search={search} setSearch={setSearch}/>
            <div className='restaurants'>
                {
                  restaurants.filter((restaurant)=>{
                    return restaurant.name.includes(search)
                       
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