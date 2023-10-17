import {Link} from "react-router-dom"
import React from 'react'
import { useAuthContext } from '../context/auth.context'



const Card = ({restaurant ,handleDelete }) => {
    const {user} = useAuthContext
  return (
    <div className='card' style={{width:"18rem"}} key={restaurant.id}>
                            <img src={restaurant.imageurl} alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='name'>{restaurant.name}</h5>
                                <p className='card-text'>{restaurant.type}</p>
                               {user && user.roles.includes("ROLES_ADMIN")
                               &&(
                                <>
                                <Link  to="" className='btn btn-danger px-2 mx-1' onClick={()=> handleDelete(restaurant.id)} > 
                                    Delete    
                                </Link>
                                <Link  to={`/Edit/${restaurant.id}`} className='btn btn-warning px-2 mx-1' > 
                                    Edit   
                                </Link>
                                </>
                                )}
                                
                                
                            </div>
                        </div>
  )
}

export default Card