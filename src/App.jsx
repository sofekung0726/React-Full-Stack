import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import Edit from "./pages/Edit"
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Logout from './pages/Logout';
import Layout from './components/layout'
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import AdminRoute from './pages/AdminRoute';
import Notallow from './pages/Notallow';
function App() {
  return (
    
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Layout/>}>
        <Route index element={<Restaurant/>}/>
        <Route path='/Add' element={
        <AdminRoute>
        <Add />
        </AdminRoute>
        }/>
        <Route path='/search' element={
        <ProtectedRoute>
        <Search />
        </ProtectedRoute>
        }/>
        <Route path='/Edit/:restaurantId' element={<Edit />}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='logout' element={<Logout/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/notallow' element={<Notallow/>}/>
        </Route>
        </Routes> 
      </BrowserRouter>
    
  )
}

export default App
