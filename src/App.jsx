import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/search';
import Edit from "./pages/Edit"
function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <div className='App'>
        <Routes>
        <Route path='/' element={<Restaurant/>}/>
        <Route path='/Add' element={<Add />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/Edit/:restaurantId' element={<Edit />}/>
        </Routes>
      </div>
      </BrowserRouter>
    
  )
}

export default App