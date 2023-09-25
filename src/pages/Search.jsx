import React from 'react'


const Search = ({search, setSearch}) => {
  return (
  <input className='search'placeholder='Search' type='text'
    value={search} onChange={(event)=>{setSearch(event.target.value)}}
    />  

  )
}

export default Search