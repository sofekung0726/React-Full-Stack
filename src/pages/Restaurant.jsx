import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card';
import Search from './Search';
import api from '../services/api'
import Loading from '../components/Loading';
import * as loadingData from "../loading/loading-res.json"
import Swal from 'sweetalert2'



const Restaurant = () => {
    const [restaurants , setRestaurants] = useState([]); // 
    const [search , setSearch] = useState('')
    useEffect(()=>{
        const fethAllRes = async() => {
            try {
                const res = await api.get(`/restaurant`)   //tihs is component
                setRestaurants(res.data)
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        setLoading(true)
        fethAllRes();
    },[]) // in [] will be render component first time   

    const handleDelete = async (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`/restaurant/${id}`)
                    
                    await Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    window.location.reload()
                } catch (error) {
                    console.log(error);
                }
              
            }
          })
        
    }
    const [loading, setLoading] = useState(false);


  return (
    <div>
        <h1>Restaurant</h1>
       
        <div className='row'>
        <Search search={search} setSearch={setSearch}/>
        {
             !loading ?(
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
             ):(
                <Loading animation={loadingData}/>
             )
                
            
        }
            
        </div>

    </div>
  )
}

export default Restaurant